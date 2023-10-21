import React, {useRef, useEffect}  from "react";
import './Headerss.css';
import logo from '../../assets/image/cac-logo.png'
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { BsList } from "react-icons/bs";



import { Link } from "react-router-dom"; 




const nav__links = [
    {
        path:'home',
        display:'Home'
    },
    {
        path:'aboutUs',
        display:'About Us'
    },
    {
        path:'currentLeader',
        display:'Current Leaders'
    },
    {
        path:'department',
        display:'Departments'


    },
    {
        path:'gallery',
        display:'Gallery'
    }
];

const Header = () => {

    const headerRef = useRef(null)
    
    const profileActionsRef = useRef(null);

    const menuRef = useRef(null);
    
    const navigate = useNavigate();
   

    const stickyHeaderFunc = () =>{
        window.addEventListener('scroll', ()=> {
           if(document.body.scrollTop > 80 || 
                document.documentElement.scrollTop
            > 80) {
                headerRef.current.classList.add('sticky__header')
            }
            else {
                headerRef.current.classList.remove('sticky__header')
            }
        });
    };

  

    useEffect(() => {
        stickyHeaderFunc()

        return ()=> window.removeEventListener('scroll', stickyHeaderFunc)
    });

    const menuToggle = () =>menuRef.current.classList.toggle('active__menu');

   

    const logoLinkHome = () => {
        navigate('/home')
    };


    const toggleProfileActions = () => 
    profileActionsRef.current.classList.toggle('show__profileActions')
    
    const toggleProfileActionsLeave = () => 
    profileActionsRef.current.classList.toggle()
     


    return (
        <header className="header" ref={headerRef}>
            <section>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <p onClick={logoLinkHome}>CHRIST APOSTOLIC CHURCH</p>
                               
                            </div>
                        </div>
                        
                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu">
                               {/* {
                                    nav__links.map((item, index) => (
                                        <li className="nav__item" key={index}>
                                            <NavLink style={{textDecoration: 'none'}} to={item.path} className= { (navClass) =>
                                            navClass.isActive ? "nav__active" : ''}>{item.display}</NavLink>
                                        </li>

                                           
                                    )
                                    )
                               } */}

                                        <li className="nav__item" >
                                            <NavLink style={{textDecoration: 'none'}} to= "home" >Home</NavLink>
                                        </li>

                                        <li className="nav__item" >
                                            <NavLink style={{textDecoration: 'none'}} to= "aboutUs" >About Us</NavLink>
                                        </li>

                                        <li className="nav__item" >
                                            <NavLink style={{textDecoration: 'none'}} to= "currentLeader" >Our Leaders</NavLink>
                                        </li>

                                        <li className="nav__item" >
                                            <NavLink style={{textDecoration: 'none'}} onClick={toggleProfileActions} >Departments</NavLink>

                                            <div className="profile">
                                               
                                                <div 
                                                    className="profile__actions" 
                                                    ref={profileActionsRef}
                                                    onClick={toggleProfileActions}>
                                                    {
                                                        
                                                        <div>
                                                            <ul className="inner">
                                                            <li> <Link to="sundaySchool" style={{textDecoration: 'none'}}>Sunday School</Link></li>
                                                                <li><Link to="choir" style={{textDecoration: 'none'}}>Choir</Link></li>
                                                                <li><Link to="usher" style={{textDecoration: 'none'}}>Usher</Link></li>
                                                                <li><Link to="media" style={{textDecoration: 'none'}}>Media</Link></li>
                                                                <li><Link to="children" style={{textDecoration: 'none'}}>Children</Link></li>
                                                                <li><Link to="youth" style={{textDecoration: 'none'}}>Youth</Link></li>
                                                                <li><Link to="royalShepard" style={{textDecoration: 'none'}}>Royal Shepard</Link></li>
                                                                
                                                            </ul>
                                                        </div>
                                                    }
                                                </div>  
                                            </div>
                                        </li>

                                        <li className="nav__item" >
                                            <NavLink style={{textDecoration: 'none'}} to= "gallery" >Gallery</NavLink>
                                        </li>

                                    
                            </ul>
                        </div>

                        <div className="nav__icons">
                            

                            <div className="mobile__menu">
                            <span onClick={menuToggle}><BsList/></span>

                        </div>

                        </div>

                        
                    </div>
                </Row>
            </Container>
            </section>
        </header>
    )
}

export default Header;