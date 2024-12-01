import {SidebarProvider, SidebarTrigger} from "@/lib/components/ui/sidebar";
import {AppSidebar} from "@/lib/components/gestion/app-sidebar";
import {cookies} from "next/headers";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className="p-4">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>

    );
}
