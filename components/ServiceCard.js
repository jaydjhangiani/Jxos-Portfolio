import Image from 'next/image'

const ServiceCard = ({img,title, desc}) => {
    return (
        <div className="flex items-center m-2 mt-5 space-x-6 rounded-xl cursor-pointer
            hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
            {/* left */}
            <div className="relative h-16 w-16">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>

            {/* right */}
            <div>
                <h2>{title}</h2>
                <p className="text-gray-500 text-[13px]">{desc}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard