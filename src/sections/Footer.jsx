export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <div className='bg-primary text-tertiary py-6 text-lg text-center'>
            © {year} IrvanDevs
        </div>
    )
}