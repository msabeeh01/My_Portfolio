
import Head from "next/head";
import "./globals.css";
import { Analytics } from "@vercel/analytics"


export const metadata = {
  title: "Muhammad Sabeeh",
  description: "Comprehensive Digital Portfolio for Muhammad Sabeeh, Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
