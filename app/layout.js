
import Head from "next/head";
import "./globals.css";


export const metadata = {
  title: "Muhammad Sabeeh",
  description: "Comprehensive Digital Portfolio for Muhammad Sabeeh, Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
