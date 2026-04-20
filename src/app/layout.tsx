import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { Quote } from '@/components/common/Quote';
import { generateMetadata as getMetadata } from '@/config/Meta';
import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-hanken-grotesk antialiased`}>
        <Navbar />
        {children}
        <Quote />
        <Footer />
      </body>
    </html>
  );
}
