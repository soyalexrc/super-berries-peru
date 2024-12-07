'use client';

import {Card} from "@/lib/components/ui/card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/lib/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function ServicesBanner() {
    return (
        <div className="grid md:grid-cols-4 gap-5 p-20 ">
            <Card className="md:col-span-2">
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
                    <div className="absolute right-20 bottom-8">
                        <CarouselPrevious/>
                    </div>
                    <div className="absolute right-20 bottom-8">
                        <CarouselNext/>
                    </div>
                </Carousel>
            </Card>
            <Card>
                <Image src="/images/sale2.png" alt="Sale 1 image" className="w-full h-full object-cover rounded-2xl" width={200} height={200} />
            </Card>
            <Card>
                <Image src="/images/sale3.png" alt="Sale 1 image" className="w-full h-full object-cover rounded-2xl" width={200} height={200} />
            </Card>
        </div>
    )
}
