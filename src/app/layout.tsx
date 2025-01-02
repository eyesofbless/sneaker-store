import type {Metadata} from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/header/Navigation";


const inter = Open_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "sneaker store",
    description: "",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {


    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="flex flex-col h-[100vh]">
            <Navigation/>
            {children}
        </div>
        </body>
        </html>
    );
}
