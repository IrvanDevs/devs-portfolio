// library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { BlurFade } from '@/components/ui/blur-fade';
import { TextAnimate } from '@/components/ui/text-animate';

// data
import { aboutMe } from '../data/AboutMeData';

export default function AboutMe(){
    return(
        <div className='bg-tertiary h-screen px-10'>
            <div className='max-w-6xl h-screen mx-auto flex items-center justify-between gap-10'>
                {/* information */}
                <div className='w-[55%]'>
                    {/* headline */}
                    <div className='font-bold leading-[3.8rem]'>
                         <BlurFade duration={0.7} inView>
                            <p className='text-[3.9rem] text-secondary'>Hello there, I'm {aboutMe.name}</p>
                        </BlurFade>

                        <BlurFade duration={0.7} delay={0.2} inView>
                            <div className='text-[2.7rem] font-bold'> I'm a{' '}
                                <span className='italic text-primary'>
                                    <TypingAnimation
                                        words={[aboutMe.role]}
                                        typeSpeed={50}
                                        deleteSpeed={100}
                                        pauseDelay={1000}
                                        loop
                                    />
                                </span>
                            </div>
                        </BlurFade>
                    </div>

                    {/* horizontal line */}
                    <BlurFade duration={0.7} delay={0.4} direction='right' inView>
                        <div className='w-[11rem] h-[2px] bg-primary mt-3 rounded-full'></div>
                    </BlurFade>

                    {/* description */}
                    <div className='mt-4 max-fit text-secondary'>
                        <TextAnimate animation='slideUp' by='word' duration={0.7} delay={0.6}>
                            {aboutMe.description}
                        </TextAnimate>
                    </div>

                    {/* socials */}
                    <div className='flex gap-1 -ml-2 mt-3'>
                        {aboutMe.socials.map((social, index)=>(
                        <BlurFade key={social.link} duration={0.7} delay={0.4 + index * 0.4} direction='up' inView>
                            <a href={social.link} target='_blank'
                            className='text-4xl text-secondary'>
                                <FontAwesomeIcon icon={social.icon} />
                            </a>
                        </BlurFade>
                        ))}
                    </div>
                    
                </div>

                {/* image */}
                <BlurFade duration={1} delay={0.4} direction='left' inView>
                    <div className='rounded-full overflow-hidden w-[30rem] aspect-square pointer-events-none drop-shadow-md'>
                        <img 
                            src={aboutMe.profilePicture} 
                            alt='profile' 
                            className='w-full h-full object-cover'
                        />
                    </div>
                </BlurFade>
            </div>
        </div>
    )
}