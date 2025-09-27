import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PreMedica",
    template: "%s — PreMedica",
  },
  description:
    "PreMedica — smart, adaptive patient intake & triage with concise clinician summaries.",
  icons: {
    icon: "/icon.png", // place a 512x512 PNG at app/icon.png
    apple: "/apple-touch-icon.png", // optional: add this file too for iOS
  },
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
