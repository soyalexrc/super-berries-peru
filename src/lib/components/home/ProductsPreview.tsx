import {Button} from "@/lib/components/ui/button";
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
    {
        id: '5',
        title: 'Pechuga de Pollo',
        discount: 10,
        image: '/images/product5.png',
        oldPrice: 40,
        price: 36,
        tag: 'Carnes',
        rating: 4
    },
    {
        id: '6',
        title: 'Pescado Fresco',
        discount: 10,
        image: '/images/product6.png',
        oldPrice: 50,
        price: 45,
        tag: 'Carnes',
        rating: 4
    },
    {
        id: '7',
        title: 'Quinua',
        discount: 10,
        image: '/images/product7.png',
        oldPrice: 40,
        price: 36,
        tag: 'Cereales',
        rating: 4
    },
    {
        id: '8',
        title: 'Kiwicha',
        discount: 10,
        image: '/images/product10.png',
        oldPrice: 30,
        price: 27,
        tag: 'Cereales',
        rating: 4
    },
]

export default function ProductsPreview() {
    return (
        <div className="p-10 md:p-20">
            <div className="flex items-center justify-between flex-col md:flex-row">
                <h3 className="text-4xl">Nuestros productos organicos</h3>
                <div className="flex gap-4">
                    <Button size="sm" variant="default">Todos</Button>
                    <Button size="sm" variant="secondary">Vegetales</Button>
                    <Button size="sm" variant="secondary">frutas</Button>
                    <Button size="sm" variant="secondary">Cereales</Button>
                    <Button size="sm" variant="secondary">Carnes</Button>
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
