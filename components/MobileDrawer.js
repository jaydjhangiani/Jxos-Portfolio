import styled from 'styled-components'
import { useRouter } from 'next/dist/client/router';
import { Link } from 'react-scroll';
import {FaLinkedin, FaMailBulk} from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai';


const MobileDrawer = ({toggle, isOpen}) => {
    const router = useRouter()
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} className="md:hidden">
        <div>
            <SidebarMenu>
                <Link to="home" className="cursor-pointer text-2xl font-medium" smooth={true} duration={500} spy={true} exact='true' offset={-80}  onClick={toggle}>Home</Link>
                <Link className="cursor-pointer text-2xl font-medium"   to="about" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</Link>
                <Link className="cursor-pointer text-2xl font-medium"   to="services" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</Link>
                <Link className="cursor-pointer text-2xl font-medium"   to="clients" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Clients</Link>
                <a className="cursor-pointer text-2xl font-medium"  onClick={() => router.push('/contact')}>Contact</a>
            </SidebarMenu>

            <SocialMenu>
                <h5 className="text-xl font-medium
                " >Reach out to us on social media</h5>
                <div className="flex space-x-5 mt-3">
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
            </SocialMenu>
    </div>
    </SidebarContainer>
    )
}


export default MobileDrawer



const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 70%;
    height: 100%;
    background: #fff;
    display: grid;
    top: 0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%': '0')};
    left:  ${({ isOpen}) => (isOpen ? '0' : '-100%')}; 
    
`

const SidebarMenu = styled.ul`
display: grid;
padding: 50px;
grid-template-columns : 1fr;
grid-template-rows: repeat(5,80px);
@media screen and (max-width:480px){
    grid-template-rows: repeat(5,60px)
}
`

const SocialMenu = styled.ul`
display: grid;
margin-top: 70px;
padding: 50px;
grid-template-columns : 1fr;
grid-template-rows: repeat(1,80px);
@media screen and (max-width:480px){
    grid-template-rows: repeat(1,60px)
}
`;


