'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero(){
 const {scrollY}=useScroll();
 const y=useTransform(scrollY,[0,700],[0,180]);
 const opacity=useTransform(scrollY,[0,500],[1,0]);
 return <section className="hero">
   <motion.div className="hero-bg" style={{y}}/><div className="hero-overlay"/>
   <motion.div className="hero-content" style={{opacity}} data-aos="fade-up">
     <p className="eyebrow">SIGMA HOMES INDIA</p>
     <p className="hero-venture">(A Venture of Sigma Group)</p>
     <h1>Sigma Builders<br/><em>&amp; Developers</em></h1>
     <p className="hero-tagline">SIGMA HAI TOH SAMBHAV HAI.</p>
     <p className="hero-copy">Building Dreams. Creating Wealth. Delivering Trust.</p>
     <div className="hero-actions"><Link href="/projects" className="btn btn-primary">Projects <ArrowUpRight size={18}/></Link><Link href="/contact" className="btn btn-ghost">Contact</Link></div>
   </motion.div>
   <div className="hero-bottom"><span>Jaipur | Noida | Gurgaon</span><span className="scroll"><ArrowDown size={15}/> Scroll</span></div>
 </section>
}
