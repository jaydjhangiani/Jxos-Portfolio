import {FaLinkedin, FaMailBulk } from "react-icons/fa"
import {AiFillInstagram}from 'react-icons/ai'

const Footer = () => {
    return (
        <div className=" flex px-2 py-8 bg-gray-100 text-gray-600 justify-center">
            <div className="flex flex-col text-xs text-gray-800 justify-centers ">
                <h2 className="font-bold text-xl">JXOS {new Date().getFullYear()} All rights reserved.</h2>
                <p className="flex justify-center mt-2 text-lg">Made with Love</p>
                <div className="flex space-x-5 mt-3 justify-center">
                    <a href="https://www.instagram.com/jxostech/" target="#">
                    <AiFillInstagram className="text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/company/jxos" target="#">
                    <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="mailto:jxostech@gmail.com" target="#">
                    <FaMailBulk className="text-2xl" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer