import InnerPage from '@/components/InnerPage';
import { expertise, mission } from '@/data/site-data';
export default function Page(){return <InnerPage kicker="ABOUT SIGMA HOMES INDIA" title={<>About <i>Sigma Homes India</i></>} intro="Sigma Homes India, a flagship company of Sigma Group, is one of North India’s leading Real Estate Builders, Developers, Consultants and Investment Advisors." sections={[
 {title:'About Sigma Homes India',body:'With more than twenty-five years of market expertise, Sigma Homes has developed an integrated real estate ecosystem covering every stage of property ownership.'},
 {title:'Our expertise',items:expertise},
 {title:'Our Vision',body:'To become India’s most trusted, technology-driven and customer-centric real estate company by creating sustainable developments, intelligent investment opportunities and lifelong customer relationships.'},
 {title:'Our Mission',items:mission},
 {title:'Brand Philosophy',body:'“Sigma Hai Toh Sambhav Hai” is more than our tagline. It represents our commitment that every customer’s dream can become reality through trust, expertise and dedication.'}
]}/>} 
