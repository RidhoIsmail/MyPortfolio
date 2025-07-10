import { useState, useEffect } from 'react'
const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const HandleScroll = () => {
            if(window.scrollY > 150){
                setActive(true)
            } else {
                setActive(false)
            }
        }
        window.addEventListener('scroll', HandleScroll)
        return () => {
            window.removeEventListener('scroll', HandleScroll)
        }
    }, [])
  return (
    <div className='navbar py-7 flex items-center justify-between'>
        <div className="Logo">
            <h1 className="text-3xl font-bold text-white bg-transparent">MyPortfolio</h1>
        </div>
        <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop:blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
            <li>
                <a className ="sm:text-lg text-base font-medium" href="#Home">Home</a>
            </li>
            <li>
                <a className ="sm:text-lg text-base font-medium" href="#About">About</a>
            </li>
            <li>
                <a className ="sm:text-lg text-base font-medium" href="#Project">Project</a>
            </li>
            <li>
                <a className ="sm:text-lg text-base font-medium" href="#Contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar