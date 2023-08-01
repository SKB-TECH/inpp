import React, {useEffect, useState} from 'react';
import {MdMessage} from 'react-icons/md'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiLogOutCircle} from "react-icons/bi";

const NavbarOeuvre= () => {
    const [isScroll, setIsScroll] = useState(false);
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <section
            className={`lg:mb-30 lg:ml-40 col-start-4 mb-20 lg:w-[90%] w-screen col-span-12 lg:col-span-12 h-16 justify-around fixed flex flex-row ${
                isScroll && "z-40 shadow-lg shadow-gray-300 bg-white"
            }`}>
            <div className={'hidden lg:w-[80%] lg:flex fle-row ml-12 justify-around text-blue_ciel items-center'}>
                <h2 className={'text-blue_ciel font-bold text-2xl'}>{
                    // entrepriseProfile?.denomination
                }</h2>
                <span className={'text-lg'}>
                    {
                        (new Date().toDateString().toString())
                    }
                </span>
            </div>
            <div className='hidden lg:flex w-[20%] flex-row justify-center  gap-10 items-center cursor-pointer mr-20 '>
                <MdMessage size={20} className='text-blue_ciel mt-1'/>
                <IoMdNotificationsOutline size={20} className='text-blue_ciel'/>
                {/*<IoSettingsOutline size={20} className={'text-blue_ciel mt-1'}/>*/}
                <BiLogOutCircle className='text-blue_ciel mt-1' size={20}/>
            </div>
            <div className='lg:hidden flex flex-row gap-5 justify-between items-center cursor-pointer '>
                <MdMessage size={20} className='text-blue_ciel mt-1'/>
                <IoMdNotificationsOutline size={20} className='text-blue_ciel'/>
                <BiLogOutCircle className='text-blue_ciel mt-1' size={20}/>
            </div>
        </section>
    );
};

export default NavbarOeuvre;