// library
import { BlurFade } from '@/components/ui/blur-fade';

import SkillBox from './skill-box';

export default function Skill({skillCategory, skillBox}){
    return(
        <div>
            {/* skill section */}
            <BlurFade direction='down' duration={0.8} delay={0.2} inView>
                <div className='bg-primary py-2 px-7 rounded-xl w-fit mx-auto'>
                    <p className='text-tertiary text-md lg:text-lg font-bold mt-0.5'>{skillCategory}</p>
                </div>
            </BlurFade>

            {/* skill box */}
            <div className='mt-5 flex flex-wrap gap-3 lg:gap-5 justify-center items-center'>
                {skillBox.map((skill, index)=>(
                    <BlurFade key={skill.skillTitle} duration={0.7} delay={0.2 + index * 0.2} direction='up' inView>
                        <SkillBox
                            key={skill.skillTitle}
                            logo = {skill.logo}
                            skillTitle = {skill.skillTitle}
                        />
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}