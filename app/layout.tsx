import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Yuvashree Murali | Network Infrastructure Engineer',description:'Network Development Engineer building reliable, scalable infrastructure across Linux, enterprise, cloud and service provider networks.',openGraph:{title:'Yuvashree Murali | Network Infrastructure Engineer',description:'Engineering the networks behind what comes next.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
