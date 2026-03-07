// library
import { BlurFade } from '@/components/ui/blur-fade';

// data
import Skill from '../components/skill-component';
import { skills } from '../data/SkillsData';

export default function Skills(){
    return(
        <section id='skills' className='bg-white px-10'>
            <div className='max-w-6xl mx-auto flex items-center justify-center flex-col py-10'>
                {/* headlines */}
            <BlurFade direction='down' duration={0.8} delay={0.2} inView>
                <p animation='fadeIn' by='character' duration={0.5}
                className='text-4xl font-bold text-primary'>{skills.title}</p>
            </BlurFade>

                <div className='mt-8 flex flex-col gap-5'>
                    {skills.categories.map((category) => (
                        <Skill
                            key={category.skillCategory}
                            skillCategory={category.skillCategory}
                            skillBox={category.skillBox}
                        />
                    ))}
                </div>                
            </div>
        </section>
    )
}