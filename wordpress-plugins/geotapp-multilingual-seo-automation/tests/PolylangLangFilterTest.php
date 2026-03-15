<?php

use PHPUnit\Framework\TestCase;

class PolylangLangFilterTest extends TestCase
{
    public function test_filter_keeps_registered_langs(): void
    {
        $registered = ['it', 'en', 'de'];
        $targets    = ['en', 'de', 'fr', 'es'];
        $result = gtmsa_filter_target_languages($targets, $registered);
        $this->assertSame(['en', 'de'], $result);
    }

    public function test_filter_returns_empty_when_no_overlap(): void
    {
        $registered = ['it'];
        $targets    = ['en', 'fr'];
        $result = gtmsa_filter_target_languages($targets, $registered);
        $this->assertSame([], $result);
    }

    public function test_filter_returns_all_when_all_registered(): void
    {
        $registered = ['it', 'en', 'de', 'fr', 'es', 'pt', 'nb', 'da', 'sv', 'ru'];
        $targets    = ['en', 'de', 'fr', 'es', 'pt', 'nb', 'da', 'sv', 'ru'];
        $result = gtmsa_filter_target_languages($targets, $registered);
        $this->assertSame($targets, $result);
    }

    public function test_filter_preserves_order(): void
    {
        $registered = ['fr', 'en', 'de'];
        $targets    = ['de', 'en'];
        $result = gtmsa_filter_target_languages($targets, $registered);
        $this->assertSame(['de', 'en'], $result);
    }
}
