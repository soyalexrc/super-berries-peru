import {SelectIcon} from "@/lib/components/icons";
import Link from "next/link";

type SocialMediaLink = {
    id: number;
    iconName: string;
    href: string;
    title: string;
}

const socialMedia: SocialMediaLink[] = [
    {
        id: 1,
        title: 'Facebook',
        href: 'https://www.facebook.com/',
        iconName: 'facebook'
    },
    {
        id: 2,
        title: 'Instagram',
        href: 'https://www.instagram.com/',
        iconName: 'instagram'
    },
    {
        id: 3,
        title: 'Whatsapp',
        href: 'https://web.whatsapp.com/',
        iconName: 'whatsapp'
    },
    {
        id: 4,
        title: 'Tiktok',
        href: 'https://www.tiktok.com/',
        iconName: 'tiktok'
    },
]

const leftSide: SocialMediaLink[] = [
    {
        id: 5,
        title: 'info@superberries.com',
        href: 'mailto:',
        iconName: 'email'
    },
    {
        id: 6,
        title: '15/a, New York, USA',
        href: 'https://www.google.com/maps/',
        iconName: 'mappoint'
    },
]


export default function SocialBar() {
    return (
        <div className="w-full fixed z-50 bg-[#1d1d1d] flex justify-between px-5">
            <div className="flex items-center gap-4 py-2">
                {leftSide.map((item: SocialMediaLink) => (
                    <Link key={item.id} href={item.href} target="_blank"
                          className=" flex gap-2 items-center cursor-pointer" color="foreground">
                        <SelectIcon icon={item.iconName}/>
                        <span className="text-white">{item.title}</span>
                    </Link>
                ))}
            </div>
            <div className="flex items-center gap-4 py-2">
                {socialMedia.map((item: SocialMediaLink) => (
                    <Link key={item.id} href={item.href} target="_blank"
                          className=" flex gap-2 items-center cursor-pointer" color="foreground">
                        <SelectIcon icon={item.iconName}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}
