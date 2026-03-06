import { hireMe } from '../data/HireMeData'

export default function HireMe(){
    return(
        <div className='max-w-6xl h-[50rem] mx-auto flex items-center justify-center flex-col py-10'>
            {/* information */}
            <div className='text-primary text-center'>
                <p className='font-bold text-4xl'>{hireMe.title}</p>
                <p className='w-[70%] mx-auto'>{hireMe.desc}</p>
            </div>

            {/* btn */}
            <div className='mt-8 text-xl flex gap-4 items-center justify-center'>
                {/* contact btn */}
                <a href='#' target='_blank' className='bg-primary border border-primary text-tertiary font-bold px-5 py-3 rounded-xl hover:scale-105 transition-all duration-300'>Contact Me</a>
                {/* download cv btn */}
                <a href='#' target='_blank' className='border border-primary text-primary font-bold px-5 py-3 rounded-xl hover:scale-105 transition-all duration-300'>Download CV</a>
            </div>
        </div>
    )
}