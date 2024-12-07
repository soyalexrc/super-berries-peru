'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
    NavigationMenuLink,
} from '@/lib/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import {Heart, Menu, Search, ShoppingBag} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@//lib/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/lib/components/ui/accordion';
import {Button} from "@/lib/components/ui/button";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <header className="w-full pt-[41px] fixed top-0 z-40 bg-white shadow-sm">
            <nav className="p-2 flex justify-between items-center">
                <div className="flex gap-5">
                    <Link href="/" className="md:hidden">
                        <Image className="rounded-2xl" title="Super Berries Peru logo" alt="Super Berries Peru logo" src="/logo.png" width={50} height={50} />
                    </Link>
                    <Link href="/" className="hidden md:block">
                        <Image className="rounded-2xl" title="Super Berries Peru logo" alt="Super Berries Peru logo" src="/logo.png" width={50} height={50} />
                    </Link>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger className="md:hidden">
                            <Menu />
                        </SheetTrigger>
                        <SheetContent side="left" className="overflow-y-auto">
                            <SheetHeader>
                                <SheetTitle className="flex flex-col items-center">
                                    <Link href="/">
                                        <Image title="Super Berries Peru logo" alt="Super Berries Peru logo" src="/logo.png" width={50} height={50} />
                                    </Link>
                                    Vision Inmobiliaria
                                </SheetTitle>
                                <SheetDescription>
                                    Tu aliado inmobiliario. Compra, venta, alquiler, administración y remodelación. Expertos y comprometidos con tu
                                    satisfacción.
                                </SheetDescription>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-xl">Inmuebles</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="px-2 text-left">
                                                <li className="p-2 mb-1">
                                                    <Link href="/inmuebles?tipo-de-operacion=venta&pagina=1&cantidad=10">En venta</Link>
                                                </li>
                                                <li className="p-2 mb-1">
                                                    <Link href="/inmuebles?tipo-de-operacion=alquiler&pagina=1&cantidad=10">En Alquiler</Link>
                                                </li>
                                                <li className="p-2 mb-1">
                                                    <Link href="/inmuebles?tipo-de-operacion=estadias-vacacionales&pagina=1&cantidad=10">Estadias vacaionales</Link>
                                                </li>
                                                <li className="p-2 mb-1">
                                                    <Link href="/inmuebles?tipo-de-operacion=estadias-residenciales&pagina=1&cantidad=10">Estadias residenciales</Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="text-xl">Servicios</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="px-2 text-left">
                                                <li className="p-2 mb-1">
                                                    <Link href="/servicios">Servicio inmobiliario</Link>
                                                </li>
                                                <li className="p-2 mb-1">
                                                    <Link href="/servicios">Tramites legales</Link>
                                                </li>
                                                <li className="p-2 mb-1">
                                                    <Link href="/servicios">Ama de llaves (limpieza)</Link>
                                                </li>
                                                <li className="p-2 mb-1">
                                                    <Link href="/servicios">Mantenimiento de inmuebles</Link>
                                                </li>
                                                <li className="p-2 mb-1">
                                                    <Link href="/servicios">Administracion de inmuebles alquilados</Link>
                                                </li>
                                                <li className="p-2 mb-1">
                                                    <Link href="/servicios">Gestion contable</Link>
                                                </li>
                                                <li className="p-2 mb-1">
                                                    <Link href="/servicios">Remodelacion</Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className="text-xl">Nosotros</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="px-2 text-left">
                                                <li className="p-2 mb-1">
                                                    <Link href="/acerca-de-nosotros">Acerca de nosotros</Link>
                                                </li>
                                                <li className="p-2 mb-1">
                                                    <Link href="/equipo-de-trabajo">Equipo de trabajo</Link>
                                                </li>
                                                <li className="p-2 mb-1">
                                                    <Link href="/comentarios">Comentarios</Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger className="text-xl">Contacto</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="px-2 text-left">
                                                <li className="p-2 mb-1">
                                                    <Link href="/contacto">Contactanos</Link>
                                                </li>
                                                <li className="p-2 mb-1">
                                                    <Link href="/Trabaja con nosotros">Trabaja con nosotros</Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="hidden md:flex gap-5">
                    <Link href='/productos'>Productos</Link>
                    <Link href='/acerca-de-nosotros'>Acerca de Nosotros</Link>
                    <Link href='/preguntas-frecuentes'>Preguntas Frecuentes</Link>
                    <Link href='/contacto'>Contacto</Link>
                </div>
                <div className="flex gap-2">
                    <Button size="icon" variant="outline" className="rounded-full">
                        <Search />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full">
                        <Heart />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full">
                        <ShoppingBag />
                    </Button>
                </div>
            </nav>
        </header>
    );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            className,
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    },
);
ListItem.displayName = 'ListItem';
