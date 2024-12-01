import SocialBar from "@/lib/components/layout/SocialBar";
import Navbar from "@/lib/components/layout/Navbar";
import Footer from "@/lib/components/layout/Footer";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
       <div>
           <SocialBar />
           <Navbar />
           {children}
           <Footer />
       </div>
    );
}
