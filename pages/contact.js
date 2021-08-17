import Head from "next/head";
import Image from "next/image";
import Logo from '../assets/img/JXOS.jpg'
import { useRouter } from "next/dist/client/router";

const contact = () => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Contact Us</title>
                <link rel="icon" href="/jxos.jpg" />
            </Head>

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
            </header>

            <main main className="max-w-7xl mx-auto px-8 sm:px-16" >
                <section className="pt-10">
                    <h1 className="text-center text-3xl mt-[150px]">Coming Soon....</h1>
                </section>
            </main>
        </div>
    )
}

export default contact
