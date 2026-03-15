<?php

use PHPUnit\Framework\TestCase;

class DeeplLanguageMapTest extends TestCase
{
    // --- gtmsa_map_deepl_source ---

    public function test_source_en_returns_EN(): void
    {
        $this->assertSame('EN', gtmsa_map_deepl_source('en'));
    }

    public function test_source_it_returns_IT(): void
    {
        $this->assertSame('IT', gtmsa_map_deepl_source('it'));
    }

    public function test_source_unknown_returns_null(): void
    {
        $this->assertNull(gtmsa_map_deepl_source('xx'));
    }

    // --- gtmsa_map_deepl_target ---

    public function test_target_en_returns_EN_GB(): void
    {
        $this->assertSame('EN-GB', gtmsa_map_deepl_target('en'));
    }

    public function test_target_pt_returns_PT_PT(): void
    {
        $this->assertSame('PT-PT', gtmsa_map_deepl_target('pt'));
    }

    public function test_target_nb_returns_NB(): void
    {
        $this->assertSame('NB', gtmsa_map_deepl_target('nb'));
    }

    public function test_target_de_returns_DE(): void
    {
        $this->assertSame('DE', gtmsa_map_deepl_target('de'));
    }

    public function test_target_fr_returns_FR(): void
    {
        $this->assertSame('FR', gtmsa_map_deepl_target('fr'));
    }

    public function test_target_es_returns_ES(): void
    {
        $this->assertSame('ES', gtmsa_map_deepl_target('es'));
    }

    public function test_target_da_returns_DA(): void
    {
        $this->assertSame('DA', gtmsa_map_deepl_target('da'));
    }

    public function test_target_sv_returns_SV(): void
    {
        $this->assertSame('SV', gtmsa_map_deepl_target('sv'));
    }

    public function test_target_ru_returns_RU(): void
    {
        $this->assertSame('RU', gtmsa_map_deepl_target('ru'));
    }

    public function test_target_nl_returns_NL(): void
    {
        $this->assertSame('NL', gtmsa_map_deepl_target('nl'));
    }

    public function test_target_it_returns_IT(): void
    {
        $this->assertSame('IT', gtmsa_map_deepl_target('it'));
    }

    public function test_target_unknown_returns_null(): void
    {
        $this->assertNull(gtmsa_map_deepl_target('xx'));
    }
}
