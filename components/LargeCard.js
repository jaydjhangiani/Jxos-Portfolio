import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'

const LargeCard = ({img, title, description, buttonText}) => {
    const router = useRouter();
    return (
        <section className=" noSelect relative mt-20 py-10 cursor-pointer border border-grey bg-color-whitsemoke rounded-xl shadow-xl mb-10">
            <div className="relative h-[400px]  min-w-[300px]">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
            </div>
            <div className="absolute top-[280px]  left-2 w-[290px]  bg-black p-5 rounded-xl">
                <h3 className="text-4xl mb-3 w-58 text-white">{title}</h3>
                <p className="text-white">{description}</p>
                <button onClick={() => router.push('/contact')} className="text-sm hover:text-white hover:bg-gray-900 px-4 py-1 rounded-lg mt-5 bg-white text-black active:scale-90 transition duration-150">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard