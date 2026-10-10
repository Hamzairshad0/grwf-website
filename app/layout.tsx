import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://grwf-reimagined.creamyscout32.chatgpt.site'),
 robots: {index:false,follow:false},
 title: {default:'GRWF — A kinder tomorrow, together.',template:'%s | GRWF'},
 description:'Discover Gulshan-e-Ravi Welfare Foundation: healthcare, education, skills and community support in Lahore. Serving with compassion since 2008.',
 icons:{icon:'/favicon.svg'},
 openGraph:{title:'GRWF — A kinder tomorrow, together.',description:'Care. Opportunity. Dignity. Explore the Gulshan-e-Ravi Welfare Foundation redesign.',images:['/images/community.webp']}
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
