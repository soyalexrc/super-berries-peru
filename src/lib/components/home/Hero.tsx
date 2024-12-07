import Image from "next/image";
import SearchBar from "@/lib/components/home/SearchBar";

export default function Hero() {
    return (
        <div className="relative  h-[400px] lg:h-[90vh]">
            <Image src="/images/wall.png" className="object-cover" fill alt="Imagen de muro para fondo." />
            <Image src="/images/fruit-1.png" alt="Fruta de banner 1" className="absolute top-0 right-0 z-20" width={400} height={400} />
            <Image src="/images/fruit-2.png" alt="Fruta de banner 1" className="absolute bottom-0 left-0 z-20" width={400} height={400} />
            <SearchBar />
        </div>
    )
}


