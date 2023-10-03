import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineSearch, AiFillHeart } from 'react-icons/ai'

import './Navbar.css'

const Navbar = () => {


    return (
        <>
            <div className='navbar'>
                <div className='navbar-menu'>
                    <div className='navbar-menu-left'>
                        <GiHamburgerMenu />
                        <div className='title'>
                            BEYOUNG
                        </div>
                    </div>
                    
                    <div className='navbar-icons'>
                        <AiOutlineSearch />
                        <AiFillHeart />
                        <BsFillCartFill />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;