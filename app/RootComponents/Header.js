


import React from "react";
import Link from "next/link";   

export default function Header() {
    
    return(
        <nav className="flex justify-around item-center bg-black h-14 text-white">
            <Link href='/'>Home</Link>
            <Link href='/request'>Mobile Home Finder</Link>
            <Link href='/contact'>Data</Link>
            </nav>
    ) 
}
