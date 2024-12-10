import Nav from "@/components/nav";
import Footer from "@/components/footer/footer";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
       <div>
          <Nav/>
          <div className="mt-[4rem] w-full">
              {children}
          </div>
          
       </div>
    );
  }
  