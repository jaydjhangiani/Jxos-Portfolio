import styled from 'styled-components'
import { Link } from 'react-scroll';
import {FaTimes, FaInstagram, FaLinkedin, FaMailBulk} from 'react-icons/fa'


const MobileDrawer = ({toggle, isOpen}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <div>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="webdev" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Clients</SidebarLink>
                <SidebarLink to="fotf" onClick={toggle}>Contact Us</SidebarLink>
            </SidebarMenu>

            <SocialMenu>
                <h5 className="text-xl font-medium
                " >Reach out to us on social media</h5>
                <div className="flex space-x-5 mt-3">
                    <a href="https://www.instagram.com/jxostech/" target="#">
                    <FaInstagram className="text-2xl" />
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

export const CloseIcon = styled(FaTimes)`
    color: #000;
`

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

const SidebarLink = styled(Link)`
display:flex;
align-items: center;
font-weight: 600;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: black;
cursor: pointer;
&:hover{
    color: #01bf71;
    transition: 0.2s ease-in-out;
}
`
