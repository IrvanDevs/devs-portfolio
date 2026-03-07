// library
import { TextAnimate } from '@/components/ui/text-animate';
import { BlurFade } from '@/components/ui/blur-fade';

// data
import { header } from '../data/HeaderData';

export default function DesktopHeader(){

    return(
        <div className='max-lg:hidden fixed w-full bg-tertiary z-10 px-10 py-8 drop-shadow-sm '>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                {/* headline */}
                <TextAnimate animation='fadeIn' by='character' duration={0.5} once
                className='font-bold text-2xl text-primary'>{header.title}</TextAnimate>

                {/* link items */}
                <nav>
                    <ul className='flex space-x-20 text-md'>
                        {header.navList.map((list, index)=>(
                            <BlurFade key={list} duration={0.7} delay={0.2 + index * 0.2} direction='right' inView>
                                <li className='text-secondary hover:text-primary transition-all duration-500'>
                                    <a href={list.linkTo}>{list.navTitle}</a>
                                </li>
                            </BlurFade>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}