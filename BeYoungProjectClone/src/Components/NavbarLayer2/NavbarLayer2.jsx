import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineSearch, AiFillHeart } from 'react-icons/ai'
import { useEffect, useState } from 'react'

const NavbarLayer2 = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth > 960);

    useEffect(()=> {
        const handlerScreenSize = () => {
            setScreenSize(window.innerWidth > 960);
          };
          window.addEventListener("resize", handlerScreenSize);
      
          return () => {
            window.removeEventListener("resize", handlerScreenSize);
          };
    }, [])

    return (
        <>  
        {screenSize && 
            <div className='flex justify-around items-center'>
                <div className='flex gap-[40px] py-3 items-center'>
                    <div className='font-black tracking-widest text-[1.5rem]'> BEYOUNG </div>
                    <div className='text-[0.85rem] font-bold'> MEN </div>
                    <div className='text-[0.85rem] font-bold'> WOMEN </div>
                    <div className='text-[0.85rem] font-bold'> COMBOS </div>
                    <div className='text-[0.85rem] font-bold'> JOGGERS </div>
                    <div className='text-[0.85rem] font-bold'> SHOP THE LOOK </div>
                    <div className='text-[0.85rem] font-bold'> SHOP BY COLLECTION </div>
                </div>
                <div className='flex items-center gap-2.5 text-[1.2rem]'>
                    <AiOutlineSearch />
                    <AiFillHeart />
                    <BsFillCartFill />
                </div>
            </div>        
        }
        {!screenSize && 
            <div className='flex items-center w-full '>
                <div className='flex justify-between items-center gap-2.5 w-full px-2.5 py-2'>
                    <div className='flex items-center gap-2.5'>
                        <GiHamburgerMenu />
                        <div className='font-extrabold tracking-widest'>
                            BEYOUNG
                        </div>
                    </div>
                    
                    <div className='flex items-center gap-2.5 text-[1.2rem]'>
                        <AiOutlineSearch />
                        <AiFillHeart />
                        <BsFillCartFill />
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default NavbarLayer2;