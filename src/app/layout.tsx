import type {Metadata} from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";
import SupabaseProvider from "../../providers/SupabaseProvider";

const inter = Open_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Sneaker store",
    description: "",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <SupabaseProvider>
            {children}
        </SupabaseProvider>
        </body>
        </html>
    );
}
