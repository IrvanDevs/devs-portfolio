import {useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

export default function Project({imageSlide, projectTitle, builtWith, projectDesc, webLink, className, textClassName, btnClassName}){

    return(
        <div className={`max-w-6xl mx-auto flex justify-center items-center gap-10 ${className}`}>
            {/* img slide */}
            <div className='w-full max-w-lg aspect-video overflow-hidden flex-shrink-0'>
                <Swiper
                effect='fade'
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                >
                {imageSlide.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} className='w-full h-full object-cover rounded-xl pointer-events-none' />
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>

            {/* information */}
            <div className={`flex flex-col gap-4 ${textClassName}`}>
                {/* project title */}
                <div className='font-bold text-primary'>
                    <p className='text-4xl'>{projectTitle}</p>
                    <p className='text-sm mt-[-0.2rem]'>{builtWith}</p>
                </div>

                {/* description */}
                <p>{projectDesc}</p>

                {/* btn */}
                <a href={webLink} target='_blank' className={`bg-primary text-tertiary text-xl font-bold w-fit px-6 py-3 rounded-lg border-2 border-primary hover:bg-tertiary hover:text-primary transition-all duration-300 ${btnClassName}`}>View Website</a>
            </div>
        </div>
    )
}