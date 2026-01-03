"use client";

import { useMemo, useState, useRef } from "react";
import { calculatePricing, PRICING_TIERS, PricingTier } from "@/lib/pricing";
import gsap from "gsap";
import { FiCheck } from "react-icons/fi";

// Not passing tiers as props anymore to rely on the single source of truth constant for the cards
export default function PricingSimulator() {
    const [seatCount, setSeatCount] = useState(1);
    const [companyName, setCompanyName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<string | null>(null);

    // Refs for animation targets only
    const thumbRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const minSeats = 1;
    const maxSeats = 151; // 151 triggers Enterprise

    // Quote Calculation
    const quote = useMemo(() => {
        return calculatePricing(seatCount);
    }, [seatCount]);

    // Current Active Tier Object
    const currentTier = useMemo(() => {
        return PRICING_TIERS.find(t => seatCount >= t.minSeats && (t.maxSeats === null || seatCount <= t.maxSeats));
    }, [seatCount]);
    // -------- PURE REACT POSITIONING --------
    // Clamp progress to 100% for the slider visual, even if > 150
    const sliderPercent = Math.min(100, ((seatCount - minSeats) / (150 - minSeats)) * 100);

    // Dynamic Scale Calculation (1.0 at min -> 1.8 at max)
    const dynamicScale = 1 + (Math.min(seatCount, 150) / 150) * 0.8;

    const lastSeatCount = useRef(seatCount);

    // Inertia/Tilt Effect
    useMemo(() => {
        const delta = seatCount - lastSeatCount.current;
        const marker = thumbRef.current?.querySelector('.ui-range__marker-container');

        if (marker && delta !== 0) {
            const rotation = Math.max(-45, Math.min(45, delta * -5));

            gsap.to(marker, {
                rotation: rotation,
                scale: dynamicScale, // Apply dynamic size during drag
                opacity: 1, // Ensure visibility
                y: -5,
                duration: 0.1,
                overwrite: true
            });

            // Return to 0 rotation but keep scale
            gsap.to(marker, {
                rotation: 0,
                scale: dynamicScale,
                duration: 0.4,
                ease: "elastic.out(1, 0.5)",
                delay: 0.1
            });
        }

        lastSeatCount.current = seatCount;
    }, [seatCount, dynamicScale]);

    // Animations for Press/Release (Visual Flair only)
    const handleInputDown = () => {
        const marker = thumbRef.current?.querySelector('.ui-range__marker-container');
        if (marker) gsap.to(marker, { scale: dynamicScale, opacity: 1, y: -5, duration: 0.2, overwrite: true });
        if (thumbRef.current) gsap.to(thumbRef.current, { scale: 1.1, duration: 0.1 });
    };

    const handleInputUp = () => {
        const marker = thumbRef.current?.querySelector('.ui-range__marker-container');
        if (marker) gsap.to(marker, { scale: 0, opacity: 0, y: 10, duration: 0.2 });
        if (thumbRef.current) gsap.to(thumbRef.current, { scale: 1, duration: 0.1 });
    };


    const [emailError, setEmailError] = useState("");

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) {
            setEmailError("");
            return false;
        }
        if (!re.test(email)) {
            setEmailError("Inserisci un indirizzo email valido (es. nome@azienda.com)");
            return false;
        }
        // Basic check for common placeholder domains or typos
        if (email.endsWith("@example.com") || email.endsWith("@test.com")) {
            setEmailError("Inserisci un'email aziendale reale.");
            return false;
        }
        setEmailError("");
        return true;
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setContactEmail(val);
        if (emailError) validateEmail(val); // Clear error as they type
    };

    const handleEmailBlur = () => {
        validateEmail(contactEmail);
    };

    const handleCheckout = async () => {
        if (!validateEmail(contactEmail)) return;
        if (!quote) return;

        setLoading(true);
        setStatus(null);
        try {
            // Check for Enterprise
            if (quote?.isCustom) {
                // Submit as contact/lead instead of stripe checkout
                const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: companyName,
                        email: contactEmail,
                        message: `Richiesta Enterprise per ${seatCount} dipendenti.`
                    })
                });
                if (!res.ok) throw new Error("Errore invio richiesta");
                setStatus("Richiesta inviata con successo! Ti contatteremo presto.");
                return;
            }

            const items = [
                {
                    name: "GeoTapp Timetracker License",
                    price: quote.unitAnnual,
                    period: "year",
                    quantity: seatCount,
                    metadata: {
                        details: `${seatCount} utenti (annuale)`
                    }
                }
            ];

            const res = await fetch("https://crm.geotapp.com/api/v1/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    items: [
                        {
                            name: "GeoTapp Timetracker License",
                            price: quote.unitAnnual,
                            period: "year",
                            quantity: seatCount,
                            stripePriceId: "prod_FlutterAppSeats", // Map to product ID or price ID
                            productKey: "GEOTAPP_APP",
                            licenseType: "BUSINESS",
                            metadata: {
                                details: `${seatCount} utenti (annuale)`,
                                product_key: "GEOTAPP_APP" // Redundant but consistent
                            }
                        }
                    ],
                    email: contactEmail
                })
            });
            const data = await res.json();
            if (data.checkout_url || data.url) {
                window.location.href = data.checkout_url || data.url;
            } else {
                throw new Error(data.message || data.error || "Errore sconosciuto dal server");
            }
        } catch (e: any) {
            setStatus(e.message);
        } finally {
            setLoading(false);
        }
    };

    const currency = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 2,
    });

    return (
        <div ref={containerRef} className="max-w-7xl mx-auto px-4 select-none">

            {/* PRICING CARDS */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {PRICING_TIERS.map((tier) => {
                    const isActive = currentTier?.code === tier.code;
                    return (
                        <div
                            key={tier.code}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 ${isActive
                                ? 'border-geotapp-primary bg-geotapp-50 shadow-xl scale-105'
                                : 'border-gray-200 bg-white hover:border-geotapp-primary/50'
                                }`}
                        >
                            {isActive && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-geotapp-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Selezionato
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">{tier.name}</h3>
                            <p className="text-gray-500 mb-6 text-sm h-10">{tier.description}</p>

                            <div className="mb-6">
                                {tier.maxSeats === null ? (
                                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                                ) : (
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-gray-900">€{tier.priceAnnualPerSeat / 12}</span>
                                        <span className="text-gray-500">/mese</span>
                                    </div>
                                )}
                                {tier.maxSeats !== null && <p className="text-xs text-gray-400 mt-1">per utente, fatturazione annuale</p>}
                            </div>

                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                        <FiCheck className="text-geotapp-primary flex-shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>


            {/* SIMULATOR SECTION */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center font-display">Calcola il tuo preventivo</h2>

                <div className="grid md:grid-cols-2 gap-12 mb-8">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-6 font-display">
                            Numero Dipendenti: <span className="text-geotapp-primary font-bold text-lg ml-2">{seatCount > 150 ? "150+" : seatCount}</span>
                        </label>

                        {/* SLIDER AREA */}
                        <div className="mb-8 mt-4 relative" style={{ height: '60px' }}>

                            {/* Custom Visual Layer */}
                            <div className="absolute top-4 left-0 right-0 pointer-events-none" style={{ zIndex: 1 }}>
                                <div className="h-6 w-full bg-gray-200 rounded-full relative overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-full rounded-full"
                                        style={{
                                            width: `${sliderPercent}%`,
                                            background: 'linear-gradient(90deg, #005cbb 0%, #8FC436 100%)'
                                        }}
                                    />
                                </div>
                                {/* Visual Thumb */}
                                <div
                                    ref={thumbRef}
                                    className="absolute top-0 w-6 h-6 flex items-center justify-center"
                                    style={{
                                        left: `calc(${sliderPercent}% - 12px)`,
                                    }}
                                >
                                    <div className="w-6 h-6 bg-white border-2 border-geotapp-primary rounded-full shadow-md" />
                                    <div
                                        className="ui-range__marker-container absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 pointer-events-none"
                                        style={{ opacity: 0, transform: 'translate(-50%, 10px) scale(0)' }}
                                    >
                                        <div className="ui-range__marker">
                                            <span className="ui-range__marker-text text-sm font-bold text-white">{seatCount > 150 ? "150+" : seatCount}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* NATIVE RANGE INPUT */}
                            <input
                                type="range"
                                min={minSeats}
                                max={maxSeats}
                                step={1}
                                value={seatCount}
                                onChange={(e) => setSeatCount(Number(e.target.value))}
                                onMouseDown={handleInputDown}
                                onMouseUp={handleInputUp}
                                onTouchStart={handleInputDown}
                                onTouchEnd={handleInputUp}
                                className="absolute top-3 left-0 w-full cursor-pointer"
                                style={{
                                    zIndex: 10,
                                    height: '30px',
                                    opacity: 0,
                                }}
                            />
                        </div>

                        <div className="flex justify-between items-center mt-6">
                            <span className="text-xs text-gray-400">1 Dipendente</span>
                            <span className="text-xs text-gray-400">150+ Dipendenti</span>
                        </div>
                    </div>

                    <div className="bg-geotapp-50 rounded-xl p-6 border border-geotapp-100 flex flex-col justify-center">
                        {quote && !quote.isCustom ? (
                            <>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">Prezzo per utente</span>
                                    <span className="text-lg font-bold text-gray-900">{currency.format(quote.unitAnnual / 12)}<span className="text-xs font-normal text-gray-500">/mo</span></span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-geotapp-200 mt-4">
                                    <span className="text-gray-800 font-medium">Totale Annuale</span>
                                    <span className="text-4xl font-bold text-geotapp-primary font-display">{currency.format(quote.totalAnnual)}</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-2 text-right">+ IVA</p>
                            </>
                        ) : (
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Piano Enterprise</h3>
                                <p className="text-gray-600 mb-4">Per grandi organizzazioni offriamo soluzioni personalizzate.</p>
                                <p className="text-geotapp-primary font-bold">Contattaci per un preventivo</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Nome Azienda"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-geotapp-primary outline-none transition"
                        />
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Amministratore"
                                value={contactEmail}
                                onChange={handleEmailChange}
                                onBlur={handleEmailBlur}
                                className={`w-full p-3 border rounded-lg focus:ring-2 outline-none transition ${emailError
                                    ? "border-red-500 focus:ring-red-200"
                                    : "border-gray-300 focus:ring-geotapp-primary"
                                    }`}
                            />
                            {emailError && (
                                <p className="absolute -bottom-5 left-0 text-xs text-red-500 font-medium">
                                    {emailError}
                                </p>
                            )}
                        </div>
                    </div>

                    {status && (
                        <div className={`p-3 rounded-lg text-center ${status.includes("successo") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {status}
                        </div>
                    )}

                    <button
                        onClick={handleCheckout}
                        disabled={loading || !companyName || !contactEmail || !!emailError}
                        className="w-full py-4 bg-geotapp-primary text-white font-bold rounded-lg shadow-lg hover:bg-geotapp-600 transition disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                    >
                        {loading
                            ? "Elaborazione..."
                            : quote?.isCustom
                                ? "Richiedi Informazioni"
                                : "Acquista Ora"
                        }
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-4">
                        Pagamento sicuro via Stripe. Disdetta quando vuoi.
                    </p>
                </div>
            </div>
        </div>
    );
}
