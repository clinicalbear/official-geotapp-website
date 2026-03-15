<?php

use PHPUnit\Framework\TestCase;

class QueueRetryTest extends TestCase
{
    // --- gtmsa_normalize_queue_entry ---

    public function test_normalise_int_entry_returns_array_with_zero_retries(): void
    {
        $result = gtmsa_normalize_queue_entry(42);
        $this->assertSame(['id' => 42, 'retries' => 0], $result);
    }

    public function test_normalise_array_entry_is_preserved(): void
    {
        $entry  = ['id' => 7, 'retries' => 3];
        $result = gtmsa_normalize_queue_entry($entry);
        $this->assertSame($entry, $result);
    }

    public function test_normalise_array_entry_missing_retries_defaults_to_zero(): void
    {
        $result = gtmsa_normalize_queue_entry(['id' => 5]);
        $this->assertSame(['id' => 5, 'retries' => 0], $result);
    }

    // --- gtmsa_should_drop_entry ---

    public function test_entry_with_retries_below_max_is_not_dropped(): void
    {
        $this->assertFalse(gtmsa_should_drop_entry(['id' => 1, 'retries' => 4]));
    }

    public function test_entry_with_retries_at_max_is_dropped(): void
    {
        $this->assertTrue(gtmsa_should_drop_entry(['id' => 1, 'retries' => 5]));
    }

    public function test_entry_with_retries_above_max_is_dropped(): void
    {
        $this->assertTrue(gtmsa_should_drop_entry(['id' => 1, 'retries' => 99]));
    }

    // --- gtmsa_increment_retries ---

    public function test_increment_retries_increments_by_one(): void
    {
        $entry  = ['id' => 3, 'retries' => 2];
        $result = gtmsa_increment_retries($entry);
        $this->assertSame(['id' => 3, 'retries' => 3], $result);
    }
}
