"use client";

import "../app/globals.css";

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body id="mainBody">{children}</body>
    </html>
  );
}
