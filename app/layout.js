import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Baker In Wonderland",
  description: "A static blog website containing recipes",
};

export default function RootLayout({ children }) {
  let header= (
    <header>
      <Link href={'/'}>
        <h1>
          Baker In Wonderland
        </h1>
      </Link>
    </header>
  )

  let footer=(
    <footer>
      
    </footer>
  )
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
