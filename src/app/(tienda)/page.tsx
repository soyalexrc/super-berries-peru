import Hero from "@/lib/components/home/Hero";
import CategoriesBanner from "@/lib/components/home/CategoriesBanner";
import ServicesBanner from "@/lib/components/home/ServicesBanner";
import ProductsPreview from "@/lib/components/home/ProductsPreview";
import PacksBanner from "@/lib/components/home/PacksBanner";
import QualityBanner from "@/lib/components/home/QualityBanner";
import ProductsInDiscountBanner from "@/lib/components/home/ProductsInDiscountBanner";
import SpecialProductBanner from "@/lib/components/home/SpecialProductBanner";
import MostSoldProductsBanner from "@/lib/components/home/MostSoldProductsBanner";
import DeliveryInfoBand from "@/lib/components/home/DeliveryInfoBand";
import TestimonialsCarousel from "@/lib/components/home/TestimonialsCarousel";
import BlogPreviewBanner from "@/lib/components/home/BlogPreviewBanner";
import BenefitsBanner from "@/lib/components/home/BenefitsBanner";

export default function Home() {
    return (
        <main className="">
            <Hero/>
            <CategoriesBanner/>
            <ServicesBanner/>
            <ProductsPreview/>
            <PacksBanner/>
            <QualityBanner/>
            <ProductsInDiscountBanner/>
            <SpecialProductBanner/>
            <MostSoldProductsBanner/>
            <DeliveryInfoBand/>
            <TestimonialsCarousel/>
            <BlogPreviewBanner/>
            <BenefitsBanner/>
        </main>
    );
}
