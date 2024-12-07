import Image from "next/image";

export default function SpecialProductBanner() {
    return (
        <div className="relative h-[70vh] mx-20">
            <Image src="/images/bg3.png" className="object-cover" alt="bg" fill />
        </div>
    )
}
