import type { Metadata } from "next";
import "./globals.css";

import ReactQueryProvider from "@/provider/ReactQueryProvider";

export const metadata: Metadata = {
  title: "CRM Dashboard",
  description: "Machine Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}