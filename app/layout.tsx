import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Navbar from "@/app/ui/navbar"; // Adjust the import path as necessary
import Footer from "@/app/ui/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <div className="w-full flex-none md:w-full">
          <Navbar />
        </div>
        <div className="flex-grow">
          {children}
        </div>
        <div className="w-full flex-none md:w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
