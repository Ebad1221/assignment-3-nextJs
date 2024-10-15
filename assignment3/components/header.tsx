import Link from "next/link"

export default function Header(){
    return (
         <div className="main">
             <ul className="nav-list">
                 <li><Link href="/">Home</Link></li>
                 <li><Link href="/about-us">About</Link></li>
                 <li><Link href="/contact-us">Contact</Link></li>
             </ul>
         </div>
    )
};