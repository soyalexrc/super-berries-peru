import Image from "next/image";

export default function DeliveryInfoBand() {
    return (
        <div className="relative h-[130px] m-20 cursor-pointer">
            <Image src="/images/delivery-band.png" alt="delivery band" fill className=" rounded-2xl " />
        </div>
    )
}
