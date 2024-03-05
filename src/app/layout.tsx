import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";


import StyledJsxRegistry from "@/lib/registry";


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
        {/* <StyledJsxRegistry> */}
           <div className="flex flex-col items-center text-blue-950 ">
             <div className="max-w-[1660px] w-full">
                    {children}
             </div>
          </div>
       {/* </StyledJsxRegistry> */}
        
      </body>
    </html>
  );
}
