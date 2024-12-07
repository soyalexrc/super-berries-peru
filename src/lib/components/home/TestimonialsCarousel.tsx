'use client';
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem} from "@/lib/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialsCarousel() {
    return (
        <div className="relative h-[60vh]">
            <Image src="/images/bg-testimonial.png" alt="quality banner bg" fill/>
            <div className="absolute inset-0 flex items-center flex-col justify-center z-20">
                <div className="max-w-[800px]">
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            })
                        ]}
                        opts={{
                            align: 'start',
                            loop: true,
                            duration: 30,
                        }}
                        className="w-full h-full ">
                        <CarouselContent>
                            {Array.from({length: 5}).map((_, index) => (
                                <CarouselItem key={index}>
                                    <Image src="/images/sale1.png" alt="Sale 1 image" className="w-full h-[400px] object-cover rounded-2xl" width={200} height={200} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
