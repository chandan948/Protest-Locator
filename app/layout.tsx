import type { Metadata } from "next";
import "./globals.css";

import { MapProvider } from "@/context/MapContext";

export const metadata: Metadata = {
  title: "Protest Locator",
  description: "Real-time protest tracking across India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MapProvider>
          {children}
        </MapProvider>
      </body>
    </html>
  );
}