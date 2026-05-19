import "./globals.css";

import { languages } from "@/i18n/settings";

export async function generateStaticParams() {
    return languages.map((lng) => ({
        lng,
    }));
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: {
        lng: string;
    };
}) {
    return (
        <html lang={params.lng}>
            <body>{children}</body>
        </html>
    );
}