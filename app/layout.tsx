import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    console.log('first');
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
