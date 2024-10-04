import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import CustomProvider from "@/lib/redux/provider";
import ToastSetup from "@/components/toast/toast";
import StyledJsxRegistry from "@/lib/registry";
import { Suspense } from "react";
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
        <CustomProvider>
          <ToastSetup/>
          {/* <StyledJsxRegistry> */}
            <div className="flex flex-col items-center text-blue-950 ">
            <div className="max-w-[1660px] w-full mx-auto ">
                {/* <Suspense fallback={<>loading</>} */}
                {children}
                {/* </Suspense>  */}
              </div>
            </div>
        {/* </StyledJsxRegistry> */}
      </CustomProvider>

      </body>
    </html>
  );
}
