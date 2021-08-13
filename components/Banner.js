import Image from 'next/image'
import Hero from '../assets/img/hero.jpg'
const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:[700px]">
              
            <Image src= {Hero} objectFit="cover" layout="fill"/>
    
  
            <div className="absolute top-[150px] md:top-[2200px] lg:top-[310px] w-full text-center">
                <p className="text-xl font-medium md:text-2xl lg:text-4xl md:font-bold text-white">Not sure how to take your buisness online?</p>
                <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 md:my-5 hover:shadow-xl active:scale-90 transition duration-150" >Let's Get Started</button>
            </div>
        </div>
    )
}

export default Banner

