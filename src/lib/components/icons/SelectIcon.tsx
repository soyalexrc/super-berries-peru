import { TiktokIcon, InstagramIcon, MailIcon, MapPointIcon, FacebookIcon, WhatsappIcon } from '@/lib/components/icons';

type Item = Record<string, JSX.Element>;

const items: Item = {
  tiktok: <TiktokIcon width={20} height={20} fill="white" />,
  instagram: <InstagramIcon width={20} height={20} fill="white" />,
  email: <MailIcon width={20} height={20} fill="white" />,
  mappoint: <MapPointIcon width={20} height={20} fill="white" />,
  facebook: <FacebookIcon width={20} height={20} fill="white" />,
  whatsapp: <WhatsappIcon width={20} height={20} fill="white" />,
};

export function SelectIcon({ icon }: { icon: string }) {
  return items[icon];
}
