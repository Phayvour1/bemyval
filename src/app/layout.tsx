import type { Metadata } from "next";


import "./globals.css";
import { SelectionProvider } from "./context/SelectionContext";


export const metadata: Metadata = {
  title: "love",
  description: " i love you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
       
      >
        <SelectionProvider>{children}</SelectionProvider>
      </body>
    </html>
  );
}
