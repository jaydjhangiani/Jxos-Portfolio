import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import MobileDrawer from "../components/MobileDrawer";

const contact = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    


    return (
        <div>
            <Head>
                <title>Contact Us</title>
                <link rel="icon" href="/jxos.jpg" />
            </Head>
            <Header toggle={toggle} isOpen={isOpen} />
            <MobileDrawer toggle={toggle} isOpen={isOpen} />
        </div>
    )
}

export default contact
