import SocialBar from "@/lib/components/layout/SocialBar";
import Navbar from "@/lib/components/layout/Navbar";
import Footer from "@/lib/components/layout/Footer";
import {Fragment} from "react";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
       <Fragment>
           <SocialBar />
           <Navbar />
           <div className="pt-[6.5rem]">
               {children}
           </div>
           <Footer />
       </Fragment>
    );
}
