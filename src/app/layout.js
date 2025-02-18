import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"], // Add other subsets like 'latin-ext' if needed
  variable: "--font-inter", // Optional: creates a CSS variable for custom usage
});

export const metadata = {
  title: "CAAB Admin",
  description: "CAAB Score admin",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
