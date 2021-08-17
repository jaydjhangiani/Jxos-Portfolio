import Image from 'next/image'
import { Link } from 'react-scroll'
import Hero from '../assets/img/hero.webp'
const Banner = () => {
    return (
        <div id="home" className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:[700px]">
              
            <Image src= {Hero} objectFit="cover" layout="fill" className="opacity-95" />
    
            <div className="absolute top-[150px] md:top-[2200px] lg:top-[340px] w-full text-center">
                <p className="text-md font-bold md:text-2xl lg:text-4xl  text-white">Not sure how to take your buisness online?</p>
                <Link to="about" smooth={true} offset={-80}>
                    <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 md:my-5 hover:shadow-xl active:scale-90 transition duration-150" >Let's Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Banner

