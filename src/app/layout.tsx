import "./globals.css";
import { TelegramProvider } from "@/providers/TelegramProviders";
import { Montserrat } from "next/font/google";
import TelegramScriptLoader from "@/components/TelegramScriptLoader";

const montserrat = Montserrat({
    subsets: ["cyrillic"],
});

export default function RootLayout({children,}: { children: React.ReactNode; }) {
    return (
        <html lang="en" className={montserrat.className}>
        <body>
            <TelegramScriptLoader />

            <TelegramProvider>
                {children}
            </TelegramProvider>
        </body>
        </html>
    );
}
