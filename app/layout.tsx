import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Navbar from "@/app/ui/navbar"; // Adjust the import path as necessary

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="w-full flex-none md:w-full">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
