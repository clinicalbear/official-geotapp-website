import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { session_id } = body;

        if (!session_id) {
            return NextResponse.json(
                { error: 'Missing session_id' },
                { status: 400 }
            );
        }

        // Call geotapp-saas backend to get invitation
        const saasUrl = process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com';
        const response = await fetch(`${saasUrl}/api/v1/invite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ session_id }),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { error: data.error || 'Errore dal server SaaS' },
                { status: response.status }
            );
        }

        return NextResponse.json(data);

    } catch (error: any) {
        console.error('Error calling SaaS invite API:', error);
        return NextResponse.json(
            { error: 'Errore di connessione al server' },
            { status: 500 }
        );
    }
}
