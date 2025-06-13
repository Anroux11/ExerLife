"use client";

import "../app/globals.css";
import { ProductProvider } from "./providers/productProvider";

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <ProductProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ProductProvider>
  );
}
