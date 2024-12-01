import { headers } from 'next/headers';

export default async function Page() {
    const hdrs = await headers();
    const host = hdrs.get('host') as string;
    const prefix = process.env.NODE_ENV === 'development' ? 'http://' : 'https://';
    return <div>admin page {prefix + host}</div>;
}
