import "./globals.css";
import {TelegramProvider} from "@/providers/TelegramProviders";
import Script from "next/script";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['cyrillic'],
})

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.className}>
    <head>
        <Script src = "https://telegram.org/js/telegram-web-app.js" strategy="afterInteractive"/>
    </head>
      <body>
        <TelegramProvider>
          {children}
        </TelegramProvider>
      </body>
    </html>
  );
}
