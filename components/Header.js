import Image from "next/image";
import Logo from '../assets/img/JXOS.jpg'
import { Link } from "react-scroll";
import {  MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";

const  Header = ({toggle}) => {
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

     
      <div className="flex items-center  py-2 justify-center">
          <div className = "hidden md:flex space-x-8">
            <Link to="large" className="cursor-pointer text-xl font-medium"  smooth={true} duration={500} spy={true} exact='true'>About</Link>
            <Link to="large" className="cursor-pointer text-xl font-medium"  smooth={true} duration={500} spy={true} exact='true'>Services</Link>
            <Link to="large" className="cursor-pointer text-xl font-medium"  smooth={true} duration={500} spy={true} exact='true'>Clients</Link>
            <Link to="large" className="cursor-pointer text-xl font-medium"  smooth={true} duration={500} spy={true} exact='true'>Contact</Link>
          </div>
          <div className="-my-5 md:hidden ml-[80px] ">
                <MenuIcon className="h-8 text-black" onClick={toggle} />
          </div>
      </div>

    </header>
  );
}

export default Header;