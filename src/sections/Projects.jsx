// library
import { BlurFade } from '@/components/ui/blur-fade';

import Project from '../components/project-component';
import { projects } from '../data/ProjectsData';


export default function Projects(){
    return(
        <section id='projects' className='bg-tertiary px-8 lg:px-10 pb-2'>
            <div className='max-w-6xl mx-auto flex items-center justify-center flex-col py-8 lg:py-10'>
                {/* headlines */}
                <BlurFade direction='down' duration={0.8} delay={0.2} inView>
                    <p className='text-4xl font-bold text-primary'>PROJECTS</p>     
                </BlurFade>

                {/* projects */}
                <div className='flex justify-center items-center flex-col gap-14 lg:gap-20 mt-8 lg:mt-10'>
                    {projects.projects.map((project, index)=>{
                        const isEven = index % 2 !== 0;
                        return(
                            <BlurFade key={project.projectTitle} direction='down' duration={0.5} delay={0.1 + index * 0.1} inView>
                                <Project 
                                    imageSlide={project.imageSlide}
                                    projectTitle={project.projectTitle}
                                    builtWith={project.builtWith}
                                    projectDesc={project.projectDesc}
                                    webLink={project.webLink}

                                    // even index styling
                                    className={isEven ? 'lg:flex-row-reverse' : ''}
                                    textClassName={isEven ? 'lg:text-right' : ''}
                                    btnClassName={isEven ? 'lg:ml-auto' : ''}
                                />
                            </BlurFade>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}