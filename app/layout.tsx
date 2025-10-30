'use client'
import "./globals.css";
import React, {useEffect} from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    useEffect(() => {
        if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
            navigator.serviceWorker.register('/sw.js')
                .then(() => console.log('Service Worker registered'))
                .catch(console.error)
        }
    }, [])
  return (
    <html lang="fa"  >
      <body>
        {children}
      </body>
    </html>
  );
}
