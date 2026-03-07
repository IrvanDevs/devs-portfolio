// library
import { BlurFade } from '@/components/ui/blur-fade';

import { hireMe } from '../data/HireMeData'

export default function HireMe(){
    return(
        <section id='hireMe' className='max-w-6xl h-[50rem] mx-auto flex items-center justify-center flex-col py-10'>
            {/* information */}
            <div className='text-primary text-center'>
                <BlurFade duration={0.7} delay={0.2} direction='down' inView>
                    <p className='font-bold text-4xl'>{hireMe.title}</p>
                </BlurFade>

                <BlurFade duration={0.7} delay={0.4} direction='down' inView>
                    <p className='w-[70%] mx-auto'>{hireMe.desc}</p>
                </BlurFade>
            </div>

            {/* btn */}
            <div>
                {/* contact btn */}
                <BlurFade duration={0.7} delay={0.4} direction='right' inView className='mt-8 text-xl flex gap-4 items-center justify-center'>
                    <a href={hireMe.whatsApp} target='_blank' className='bg-primary border border-primary text-tertiary font-bold px-5 py-3 rounded-xl hover:scale-105 transition-all duration-300'>Contact Me</a>
                    {/* download cv btn */}
                    <a href={hireMe.cvLink} download="IRVAN-Frontend_Developer-CV.pdf" target='_blank' className='border border-primary text-primary font-bold px-5 py-3 rounded-xl hover:scale-105 transition-all duration-300'>Download CV</a>
                </BlurFade>
            </div>
        </section>
    )
}