const Footer = () => {
    return (
        <div className=" flex px-2 py-8 bg-gray-100 text-gray-600 justify-center">
            <div className="flex flex-col text-xs text-gray-800 justify-centers ">
                <h2 className="font-bold text-xl">JXOS {new Date().getFullYear()} All rights reserved.</h2>
                <p className="flex justify-center mt-2 text-lg">Made with Love</p>
            </div>
        </div>
    )
}

export default Footer