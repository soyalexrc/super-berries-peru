'use client';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/lib/components/ui/carousel";
import {Card, CardContent} from "@/lib/components/ui/card";
import Autoplay from 'embla-carousel-autoplay';

export default function CategoriesBanner() {
    return (
        <div className="p-10 md:p-20">
            <h3 className="text-3xl mb-5">Categorias Populares</h3>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 5000,
                    })
                ]}
                opts={{
                    align: 'start',
                    loop: true,
                    duration: 30,
                }}
                className="w-full">
                <CarouselContent>
                    {Array.from({length: 10}).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                            <div className="p-1">
                                <Card className="rounded-full">
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute top-[-2rem] hidden md:block right-0">
                    <CarouselPrevious />
                </div>
                <div className="absolute top-[-2rem] hidden md:block right-5">
                    <CarouselNext/>
                </div>
            </Carousel>
        </div>
    )
}
