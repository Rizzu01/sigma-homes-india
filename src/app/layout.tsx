import type { Metadata } from 'next';
import Navbar from '@/components/Navbar'; import Footer from '@/components/Footer'; import AOSProvider from '@/components/AOSProvider'; import './globals.css';
export const metadata: Metadata={title:'Sigma Homes India | Building Dreams. Creating Wealth. Delivering Trust.',description:'Sigma Homes India — trusted real estate builders, developers, consultants and investment advisors across Jaipur, Noida and Gurgaon since 2001.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body><AOSProvider/><Navbar/>{children}<Footer/></body></html>}
