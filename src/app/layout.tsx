"use cleint"
import "./globals.css";
import { TelegramProvider } from "@/providers/TelegramProviders";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['cyrillic'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className={montserrat.className}>
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js" />
      </head>
      <body>
        <TelegramProvider>
          {children}
        </TelegramProvider>
      </body>
      </html>
  );
}
