// library
import { BlurFade } from '@/components/ui/blur-fade';


// data
import Skill from '../components/skill-component';
import { skills } from '../data/SkillsData';

export default function Skills(){
    return(
        <div className='bg-white my-8 px-10'>
            <div className='max-w-6xl mx-auto flex items-center justify-center flex-col'>
                {/* headlines */}
            <BlurFade direction='down' duration={0.8} delay={0.2} inView>
                <p animation='fadeIn' by='character' duration={0.5} once
                className='text-4xl font-bold text-primary'>{skills.title}</p>
            </BlurFade>

                <div className='mt-5 flex flex-col gap-5'>
                    {skills.categories.map((category) => (
                        <Skill
                            key={category.skillCategory}
                            skillCategory={category.skillCategory}
                            skillBox={category.skillBox}
                        />
                    ))}
                </div>                
            </div>
        </div>
    )
}