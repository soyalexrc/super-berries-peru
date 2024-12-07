import {ProductInCardType} from "@/lib/types/product";
import Image from "next/image";
import {Badge} from "@/lib/components/ui/badge";
import {Card, CardContent} from "@/lib/components/ui/card";

export default function ProductCard(props: ProductInCardType) {
    return (
        <Card className="pt-4 border-green-700 rounded-3xl" >
            <CardContent>
                <div className="flex justify-between">
                    <Badge variant="secondary">{props.tag}</Badge>
                    <Badge variant="destructive">-{props.discount}%</Badge>
                </div>
                <div className="flex justify-center my-6 h-[240px]">
                    <Image src={props.image} alt="image product" width={200} height={200}/>
                </div>
                <h5 className="text-xl font-bold">{props.title}</h5>
                <div className="flex gap-2">
                    <p className="font-bold">S/ {props.price}.00</p>
                    <p className="text-gray-300 font-bold line-through">S/ {props.oldPrice}.00</p>
                </div>
            </CardContent>
        </Card>
    )
}
