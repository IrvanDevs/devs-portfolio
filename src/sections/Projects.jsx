// library
import { BlurFade } from '@/components/ui/blur-fade';

import Project from '../components/project-component';
import { projects } from '../data/ProjectsData';


export default function Projects(){
    return(
        <section id='projects' className='bg-tertiary px-10 pb-2'>
            <div className='max-w-6xl mx-auto flex items-center justify-center flex-col py-10'>
                {/* headlines */}
                <BlurFade direction='down' duration={0.8} delay={0.2} inView>
                    <p className='text-4xl font-bold text-primary'>PROJECTS</p>     
                </BlurFade>

                {/* projects */}
                <div className='flex flex-col gap-20 mt-10'>
                    {projects.projects.map((project, index)=>{
                        const isEven = index % 2 !== 0;

                        return(
                            <BlurFade key={project.projectTitle} direction='down' duration={0.5} delay={0.1 + index * 0.1} inView >
                                <Project 
                                    imageSlide={project.imageSlide}
                                    projectTitle={project.projectTitle}
                                    builtWith={project.builtWith}
                                    projectDesc={project.projectDesc}
                                    webLink={project.webLink}

                                    // even index styling
                                    className={isEven ? 'flex-row-reverse' : ''}
                                    textClassName={isEven ? 'text-right' : ''}
                                    btnClassName={isEven ? 'ml-auto' : ''}
                                />
                            </BlurFade>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}