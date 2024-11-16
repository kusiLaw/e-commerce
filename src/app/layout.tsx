import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import ToastSetup from "@/components/toast/toast";
import CartProvider from "./provider";



export const revalidate = 1

const inter = Inter({ subsets: ["latin"] });
const open_Sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LakyShop",
  description: "Open source e-commerce project by Lawrence kusi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_Sans.className} antialiased`}>
 
          <ToastSetup/>
        <CartProvider>
            <div className="flex flex-col items-center text-blue-950 text-base">
            <div className="max-w-[1920px] w-full mx-auto ">
                {children}
              </div>
            </div>
         </CartProvider>

      </body>
    </html>
  );
}
