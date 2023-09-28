import { useEffect, useState } from 'react';
import './NavbarLoginLayer.css'

// import { FaLocationDot } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'


const NavbarLoginLayer = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth > 680);

    useEffect(()=> {
        const handlerScreenSize = () => {
            setScreenSize(window.innerWidth > 680);
        }
        window.addEventListener('resize', handlerScreenSize);

        return () => {
            window.removeEventListener('resize', handlerScreenSize);
        }        
    }, [])

    return (
        <>
            <div className='navbar-top-layer'>
                <div className='navbar-top-layer-1'>
                    {!screenSize && 
                        <section className='content'>
                            Free Shopping on All Orders | Shop now
                        </section>
                    }
                    {screenSize && 
                        <section className='content'>
                            Free Shopping on All Orders | Get Extra ₹100 OFF on Spent of ₹999 Use Code: BEYOUNG100
                        </section>
                    }
                </div>
                <div className='navbar-second-layer'>
                    <div>
                        < HiLocationMarker className='icon'/>                        
                        Track order                        
                    </div>
                    <div className='user-button'>
                        <button className="login-signup-button">
                            Login
                        </button>
                        |
                        <button className="login-signup-button">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarLoginLayer;