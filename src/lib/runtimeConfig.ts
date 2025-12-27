function stripTrailingSlash(url: string): string {
    return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function getSiteBaseUrl(): string {
    const fallback = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? "http://localhost:3000";
    return stripTrailingSlash(fallback);
}

export function getDjangoApiBaseUrl(): string | null {
    const base =
        process.env.NEXT_PUBLIC_DJANGO_API_BASE_URL ??
        process.env.DJANGO_API_BASE_URL ??
        null;
    if (!base) return null;
    return stripTrailingSlash(base);
}
