// library
import { TextAnimate } from '@/components/ui/text-animate';
import { BlurFade } from '@/components/ui/blur-fade';

export default function Header(){
    // navigation list
    const navList = ['About Me', 'Skills', 'Projects', 'Hire Me']

    return(
        <div className='fixed w-full bg-tertiary z-10 px-10 py-8 drop-shadow-sm'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                {/* headline */}
                <TextAnimate animation='scaleUp' by='character' duration={0.5} once
                className='font-bold text-2xl text-primary'>VAN.PORTFOLIO</TextAnimate>

                {/* link items */}
                <nav>
                    <ul className='flex space-x-20 text-lg'>
                        {navList.map((list, index)=>(
                            <BlurFade key={list} duration={0.7} delay={0.4 + index * 0.4} direction='right' inView>
                                <li className='text-secondary hover:text-primary transition-all duration-500'>
                                    <a href='#'>{list}</a>
                                </li>
                            </BlurFade>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}