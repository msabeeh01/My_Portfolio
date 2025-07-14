import Head from "next/head";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Muhammad Sabeeh",
  description:
    "Comprehensive Digital Portfolio for Muhammad Sabeeh, Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body style={{
        background: `radial-gradient(circle, #2D0D89, #03071e)`,
      }}>
        <NavBar />

        <Analytics />
        {children}
      </body>
    </html>
  );
}
