export default function SkillBox( {logo, skillTitle} ){
    return(
        <div className='w-[8rem] h-[8rem] aspect-square border-2 border-primary rounded-xl flex flex-col gap-3 items-center justify-center hover:scale-110 transition-all duration-300 '>
            <img src={logo} alt={`${skillTitle}-logo`} className='w-[3.5rem] h-[3.5rem] object-contain mt-2 pointer-events-none' />
            <p className='text-primary text-sm font-bold'>{skillTitle}</p>
        </div>
    )
}