'use client';
import Link from 'next/link';
import { Menu, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const links=[['About','/about'],['Projects','/projects'],['Services','/services'],['Investments','/investments'],['NRI Services','/nri-services'],['Contact','/contact']];

export default function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="nav">
   <div className="nav-inner">
     <Link href="/" className="brand">
       <span className="brand-mark">Σ</span>
       <span><b>SIGMA</b><small>HOMES INDIA</small></span>
     </Link>
     <nav className={open?'nav-links open':'nav-links'}>
       {links.map(([l,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{l}</Link>)}
     </nav>
     <Link className="nav-cta" href="/contact">Contact <ArrowUpRight size={16}/></Link>
     <button className="menu" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'}><Menu/></button>
   </div>
 </header>
}
