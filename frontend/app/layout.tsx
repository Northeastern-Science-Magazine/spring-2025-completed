import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar.jsx";


export const metadata: Metadata = {
  title: "My Blog",
  description: "Full tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
