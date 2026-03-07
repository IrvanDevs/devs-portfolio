// library
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

// data
import { header } from '../data/HeaderData';

export default function MobileHeader(){
    // isOpen state
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className='lg:hidden relative'>
            <div className='fixed w-full h-[6rem] bg-tertiary z-10 px-10 py-6 drop-shadow-sm flex justify-between items-center'>
                {/* headline */}
                <p className='font-bold text-xl text-primary'>{header.title}</p>

                {/* link items */}
                <button onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faBars} className='mt-1 size-8 text-primary hover:size-9 transition-all duration-200'/>
                </button>
            </div>

            <div className={`fixed h-screen w-[25rem] bg-primary top-0 right-0 z-20 text-tertiary px-10 py-8 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button className='absolute right-10' onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faX} className='text-3xl hover:rotate-90 hover:scale-110 transition-all duration-500'/>
                </button>
                {/* link items */}
                <nav>
                    <ul className='h-screen flex flex-col items-center justify-center space-y-10'>
                        {header.navList.map((list)=>(
                            <li className='text-tertiary text-xl hover:text-2xl transition-all duration-200'>
                                <a href={list.linkTo} onClick={() => setIsOpen(!isOpen)}>{list.navTitle}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}