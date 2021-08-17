import Image from "next/image";
import Logo from '../assets/img/JXOS.jpg'
import { Link } from "react-scroll";
import {  MenuIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";

const  Header = ({toggle, isOpen}) => {
  const router = useRouter()
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md p-5 md:px-10 ">

      <div className="relative flex items-center h-10 md:h-15 cursor-pointer my-auto">
        <Image
          onClick={() =>router.push('/') }
          src={Logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

     
      <div className="flex items-center  py-2 justify-center ">
          <div className = "hidden md:flex space-x-8 items-center">
            <Link to="about" className="cursor-pointer text-xl font-medium"  smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</Link>
            <Link to="services" className="cursor-pointer text-xl font-medium"  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</Link>
            <Link to="clients" className="cursor-pointer text-xl font-medium"  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Clients</Link>
            <a onClick={() =>router.push('/contact')}  className="bg-black text-white py-0.5 rounded-full hover:bg-white border border-black hover:text-black px-4 cursor-pointer text-xl font-medium  hover:transform transition duration-200 ease-in-out"  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</a>
          </div>
          <div className="-my-5 md:hidden ml-[80px] ">
              {isOpen ? <XIcon className="h-8 text-black" onClick={toggle} /> :
              <MenuIcon className="h-8 text-black" onClick={toggle} /> }
          </div>
      </div>

    </header>
  );
}

export default Header;