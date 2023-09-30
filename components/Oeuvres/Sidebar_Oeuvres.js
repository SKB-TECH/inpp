import React from 'react';
// import logo from '../../../public/logosrb.png'
import Image from "next/image";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { AiOutlineLogout } from 'react-icons/ai'
import { BsFillGrid3X3GapFill,BsFillSignpostSplitFill} from 'react-icons/bs'
import { FaUsersCog } from 'react-icons/fa';
import { SlSettings } from 'react-icons/sl'

const SidebarOeuvre = () => {
    return (
        <section
            className='hidden lg:block lg:fixed    min-h-screen  bg-blue_ciel max-w-[6%] min-w-[15%] shadow-md  '>
            <div className='flex flex-col justify-center h-16 min-w-full items-center mb-2'>
                {/* <Image src={logo} alt={'picture'}/> */}
            </div>
            <div className='-ml-5 -mt-5 mb-2 w-[100%] cursor-pointer'>
                <ul className='mt-5 ml-5 gap-2'>
                    <li className='flex m-2 cursor-pointer border-transparent hover:bg-orange hover:text-white border-2 p-2 rounded-xl'>
                        <span className='mt-1'><BsFillGrid3X3GapFill size={20} /></span>
                        <Link href='/' className='ml-2 mt-1  hover:text-white'>Demandes</Link>
                    </li>
                    <li className='flex m-1 cursor-pointer border-transparent hover:bg-orange hover:text-white border-2 p-2 rounded-xl'>
                        <span className='mt-1'><FaUsersCog className='text-orange-600' size={20} /></span>
                        <Link href="/users" className='ml-2 mt-1 hover:text-white'>Utilisateurs</Link>
                    </li>
                </ul>
            </div>
            <hr></hr>
        </section>
    );
};

export default SidebarOeuvre;