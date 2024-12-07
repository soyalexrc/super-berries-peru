import Image from "next/image";

export default function PacksBanner() {
    return (
        <div className="grid md:grid-cols-3 gap-4 px-5 mt-10 mb-20">
            <Image src="/images/deals1.png" className="w-full rounded-2xl" alt="deals 1" width={200} height={200} />
            <Image src="/images/deals2.png" className="w-full rounded-2xl" alt="deals 1" width={200} height={200} />
            <Image src="/images/deals3.png" className="w-full rounded-2xl" alt="deals 1" width={200} height={200} />
        </div>
    )
}
