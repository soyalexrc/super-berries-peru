import {ProductInCardType} from "@/lib/types/product";
import ProductCard from "@/lib/components/products/ProductCard";

const data: ProductInCardType[] =  [
    {
        id: '1',
        title: 'Tomate Organico',
        discount: 27,
        image: '/images/product1.png',
        oldPrice: 65,
        price: 50,
        tag: 'Vegetales',
        rating: 4
    },
    {
        id: '2',
        title: 'Papa Organica',
        discount: 20,
        image: '/images/product2.png',
        oldPrice: 40,
        price: 32,
        tag: 'Vegetales',
        rating: 3
    },
    {
        id: '3',
        title: 'Manzana Organica',
        discount: 15,
        image: '/images/product4.png',
        oldPrice: 30,
        price: 25,
        tag: 'Frutas',
        rating: 5
    },
    {
        id: '4',
        title: 'Naranja Organica',
        discount: 10,
        image: '/images/product4.png',
        oldPrice: 20,
        price: 18,
        tag: 'Frutas',
        rating: 4
    },
]

export default function ProductsInDiscountBanner() {
    return (
        <div className="p-10 md:p-20">
            <div className="flex items-center justify-between flex-col md:flex-row">
                <h3 className="text-4xl">Productos en oferta</h3>
                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 rounded-full p-4">
                            <p className="font-bold">00</p>
                        </div>
                        <p>Dias</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 rounded-full p-4">
                            <p className="font-bold">00</p>
                        </div>
                        <p>Horas</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 rounded-full p-4">
                            <p className="font-bold">00</p>
                        </div>
                        <p>Minutos</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 rounded-full p-4">
                            <p className="font-bold">00</p>
                        </div>
                        <p>Segundos</p>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4">
                {
                    data.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                }
            </div>
        </div>
    )
}
