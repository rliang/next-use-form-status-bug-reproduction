"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function RootLayout({ children }) {
  const formStatus = useFormStatus();

  return (
    <html>
      <head />
      <body>
        {children}
        {JSON.stringify(formStatus)}
      </body>
    </html>
  );
}
