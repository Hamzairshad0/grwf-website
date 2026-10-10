import Link from 'next/link';
import {Shell,Arrow} from '@/components/grwf';
export default function NotFound(){return <Shell><main id="main" className="wrap page-intro not-found"><p className="eyebrow">404 / A different path</p><h1>Let’s find your<br/><em>way back.</em></h1><p>This page isn’t here. Explore our programs or return to the homepage.</p><Link href="/" className="button green">Back to home <Arrow/></Link></main></Shell>}
