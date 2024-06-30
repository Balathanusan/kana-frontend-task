import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black font-manrope text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
