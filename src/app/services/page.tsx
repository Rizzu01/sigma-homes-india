import InnerPage from '@/components/InnerPage';
import { expertise, whyChoose } from '@/data/site-data';
export default function Page(){return <InnerPage kicker="SERVICES" title={<>Our <i>Services</i></>} intro="Whether you are purchasing your first home or building a diversified investment portfolio, Sigma Homes delivers end-to-end solutions with complete transparency." sections={[{title:'Our expertise',items:expertise},{title:'Why Choose Sigma Homes',items:whyChoose}]}/>} 
