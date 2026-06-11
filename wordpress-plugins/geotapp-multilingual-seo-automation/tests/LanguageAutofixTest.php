<?php

use PHPUnit\Framework\TestCase;

/**
 * Un post creato via REST senza lingua Polylang resta sulla lingua di default
 * (it) e il permalink esce senza prefisso lingua, anche se il contenuto è
 * tedesco/olandese. La lingua va dedotta dalla categoria con suffisso
 * (es. "field-service-de") e assegnata automaticamente.
 */
class LanguageAutofixTest extends TestCase
{
    private const REGISTERED = ['it', 'en', 'de', 'fr', 'es', 'pt', 'nl', 'sv', 'da', 'nb', 'ru'];

    public function test_single_suffixed_category_wins(): void
    {
        $this->assertSame('de', gtmsa_lang_from_category_slugs(['field-service-de'], self::REGISTERED));
        $this->assertSame('nl', gtmsa_lang_from_category_slugs(['geotapp-nl'], self::REGISTERED));
    }

    public function test_multiple_categories_same_language(): void
    {
        $this->assertSame('de', gtmsa_lang_from_category_slugs(['news-de', 'reinigungsunternehmen-de'], self::REGISTERED));
    }

    public function test_unsuffixed_categories_mean_default_language(): void
    {
        $this->assertNull(gtmsa_lang_from_category_slugs(['imprese-di-pulizie', 'normativa-gdpr'], self::REGISTERED));
    }

    public function test_ambiguous_suffixes_do_not_guess(): void
    {
        $this->assertNull(gtmsa_lang_from_category_slugs(['news-de', 'geotapp-nl'], self::REGISTERED));
    }

    public function test_unregistered_suffix_is_ignored(): void
    {
        $this->assertNull(gtmsa_lang_from_category_slugs(['lavori-xx'], self::REGISTERED));
    }

    public function test_default_language_suffix_is_ignored(): void
    {
        // una categoria che finisse in "-it" non deve forzare nulla
        $this->assertNull(gtmsa_lang_from_category_slugs(['classifica-it'], self::REGISTERED));
    }

    public function test_mixed_suffixed_and_unsuffixed(): void
    {
        // categorie IT + una suffissata: vince la suffissata (caso reale dei
        // post della campagna con categoria lingua corretta ma lang=it)
        $this->assertSame('nl', gtmsa_lang_from_category_slugs(['geotapp-nl', 'novita'], self::REGISTERED));
    }

    public function test_empty_input(): void
    {
        $this->assertNull(gtmsa_lang_from_category_slugs([], self::REGISTERED));
        $this->assertNull(gtmsa_lang_from_category_slugs(['news-de'], []));
    }
}
