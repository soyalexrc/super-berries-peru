import Image from "next/image";

export default function QualityBanner() {
    return (
        <div className="relative h-[90vh]">
            <Image src="/images/wall-2.png" alt="quality banner bg" fill/>
            <div className="absolute inset-0 flex items-center flex-col justify-center z-20">
                <h3 className="text-4xl text-center mb-10">Top Organic Quality</h3>
                <div className="w-full flex justify-evenly">
                    <div className="max-w-[400px] flex flex-col gap-10">
                        <div className="flex items-center gap-6">
                            <div>
                                <h6 className="text-2xl text-right">Top Premium Quality</h6>
                                <p className="text-right">Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed
                                    diam nonummy.</p>
                            </div>
                            <div
                                className="bg-white min-w-[60px] min-h-[60px] rounded-full flex justify-center items-center">
                                <Image src="/images/qlty5.png" alt="sample" width={25} height={25}/>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 mr-[-3rem]">
                            <div>
                                <h6 className="text-2xl text-right">Top Premium Quality</h6>
                                <p className="text-right">Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed
                                    diam nonummy.</p>
                            </div>
                            <div
                                className="bg-white min-w-[60px] min-h-[60px] rounded-full flex justify-center items-center">
                                <Image src="/images/qlty5.png" alt="sample" width={25} height={25}/>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div>
                                <h6 className="text-2xl text-right">Top Premium Quality</h6>
                                <p className="text-right">Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed
                                    diam nonummy.</p>
                            </div>
                            <div
                                className="bg-white min-w-[60px] min-h-[60px] rounded-full flex justify-center items-center">
                                <Image src="/images/qlty5.png" alt="sample" width={25} height={25}/>
                            </div>
                        </div>
                    </div>
                    <Image src="/images/qlty2.png" alt="Pineapple" width={240} height={240}/>
                    <div className="max-w-[400px] flex flex-col gap-10">
                        <div className="flex items-center gap-6">
                            <div
                                className="bg-white min-w-[60px] min-h-[60px] rounded-full flex justify-center items-center">
                                <Image src="/images/qlty5.png" alt="sample" width={25} height={25}/>
                            </div>
                            <div>
                                <h6 className="text-2xl ">Top Premium Quality</h6>
                                <p className="">Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed
                                    diam nonummy.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 ml-[-3rem]">
                            <div
                                className="bg-white min-w-[60px] min-h-[60px] rounded-full flex justify-center items-center">
                            <Image src="/images/qlty5.png" alt="sample" width={25} height={25}/>
                            </div>
                            <div>
                                <h6 className="text-2xl ">Top Premium Quality</h6>
                                <p className="">Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed
                                    diam nonummy.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div
                                className="bg-white min-w-[60px] min-h-[60px] rounded-full flex justify-center items-center">
                                <Image src="/images/qlty5.png" alt="sample" width={25} height={25}/>
                            </div>
                            <div>
                                <h6 className="text-2xl ">Top Premium Quality</h6>
                                <p className="">Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed
                                    diam nonummy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
