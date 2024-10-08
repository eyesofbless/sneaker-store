import type {Metadata} from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/header/Navigation";

const inter = Open_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Sneaker store",
    description: "",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {



    return (
        <html lang="en">
        <body className={inter.className}>
        <Navigation />
            {children}
        </body>
        </html>
    );
}
