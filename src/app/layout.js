import { Manrope, Montserrat, Syne } from "next/font/google";
import "./globals.css";

// Initialize the fonts with custom variables




export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100 font-Manrope bg-[url('/hi.png')]">
        {children}
      </body>
    </html>
  );
}