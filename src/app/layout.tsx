'use client'
import "./globals.css";
import {TelegramProvider} from "@/providers/TelegramProviders";



export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
