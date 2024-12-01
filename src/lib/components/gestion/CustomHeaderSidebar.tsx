'use client'
import Link from "next/link";
import Image from "next/image";
import {SidebarHeader, SidebarMenu, SidebarMenuItem, useSidebar} from "@/lib/components/ui/sidebar";

export default function CustomHeaderSidebar() {
    const { state } = useSidebar();
    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem className="flex gap-2 items-center">
                    <Link href='/gestion'>
                        <Image src="/logo.png" width={30} height={30} alt="Super Berries Peru Logo" className="rounded-2xl" />
                    </Link>
                    {
                        state === "collapsed" ? null : <span>Super Berries Peru</span>
                    }
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

    )
}
