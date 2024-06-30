import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-black font-manrope text-white antialiased">
        {children}
      </body>
    </html>
  );
}
