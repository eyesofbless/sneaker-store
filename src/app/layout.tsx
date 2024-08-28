import type {Metadata} from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";
import SupabaseProvider from "../../providers/SupabaseProvider";
import {ReduxProvider} from "@/app/redux-provider";
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
                <ReduxProvider>
                    {children}
                </ReduxProvider>
            </SupabaseProvider>
        </body>
        </html>
    );
}
