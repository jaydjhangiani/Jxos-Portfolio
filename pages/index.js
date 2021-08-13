import Head from 'next/head'
import { useState } from 'react';
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import ServiceCard from '../components/ServiceCard';
import firebase from 'firebase';
import large from '../assets/img/large1.webp'
import MobileDrawer from '../components/MobileDrawer';

export default function Home({exploreData, serviceData}) {
  
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <div className="">
      <Head>
        <title>JXOS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
    <Header toggle={toggle}/>
    <MobileDrawer toggle={toggle} isOpen={isOpen} />
    <Banner/>

    <main className="max-w-7xl mx-auto px-8 sm:px-16">

      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5">Services We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {/* pull data from a server  - API endpoints */}
        {serviceData?.map((item, index) => (
          <ServiceCard key={index} img={item.img} title={item.service} desc={item.desc} />
        ))}
        </div>
      </section>



      {/* <section>
      <h2 className = "text-4xl font-semibold py-8">About Us</h2>
      </section> */}

      {/* <section>
          <h2 className = "text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className= "flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 " >
            {cardData?.map((item,index) => (
              <MediumCard key={index} img={item.img} title={item.title} />
            ))}
          </div>
      </section> */}

      <LargeCard 
        img={large}
        title="Get Inspired"
        description="We would love to help you and your buisness grow"
        buttonText="Contact Us"
      />
    
    </main>
    <Footer/>
    </div>
  )
} 

export async function getStaticProps() {
 

  const exploreData = await fetch('https://links.papareact.com/pyp').
  then(
    (res) => res.json()
  );

  const serviceData = await fetch('https://jsonkeeper.com/b/4G7T').
  then(
    (res)=> res.json()
  )

  return{
    props: {
      exploreData,
      serviceData
    }
  }
}