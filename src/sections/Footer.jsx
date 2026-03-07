export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <div className='bg-primary text-tertiary py-4 text-sm md:text-md text-center'>
            © {year} IrvanDevs
        </div>
    )
}