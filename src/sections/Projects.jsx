import Project from '../components/project-component';
import { projects } from '../data/ProjectsData';


export default function Projects(){
    return(
        <div className='bg-tertiary px-10'>
            <div className='max-w-6xl mx-auto flex items-center justify-center flex-col py-10'>
                {/* headlines */}
                <p className='text-4xl font-bold text-primary'>PROJECTS</p>     

                {/* projects */}
                <div className='flex flex-col gap-20 mt-10'>
                    {projects.projects.map((project, index)=>{
                        const isEven = index % 2 !== 0;

                        return(
                            <Project 
                                key={project.projectTitle}
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
                        )
                    })}
                </div>
            </div>
        </div>
    )
}