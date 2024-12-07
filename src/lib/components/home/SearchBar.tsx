import {Input} from "@/lib/components/ui/input";
import {Button} from "@/lib/components/ui/button";

export default function SearchBar() {
    return (
        <div className="absolute inset-0 flex items-center flex-col justify-center z-20">
            <h1 className="text-6xl text-center mb-10">
                <span className="font-bold">Organic</span> Veggied & Foods <br/> <span className="font-bold"> You Cook</span> <span className="text-green-700 font-bold">Healthy</span>
            </h1>
            <div className="bg-white rounded-full flex relative drop-shadow-2xl">
                <div className="py-2 px-8">
                    <Input placeholder="Buscar producto" className="border-0 rounded-full shadow-none w-[300px] mr-[150px]" />
                </div>
                <Button className="absolute right-0 top-0 bottom-0 h-full rounded-full">Selecciona categoria</Button>
            </div>
        </div>
    )
}
