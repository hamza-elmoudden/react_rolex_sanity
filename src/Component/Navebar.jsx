import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20,faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



export const Navebar = () => {
    
    const showbar = ()=>{
        const bar = document.querySelector('.lefbard')
        bar.classList.toggle("sh")
    }


  return (
    <>
    <motion.header animate={{top:0,}} transition={{ duration: 0.5 }} className="md:py-10 py-5   bg-black text-white text-end px-8 md:px-20 md:relative fixed w-full z-30 top-[-10rem]">
        <nav className=" hidden md:flex items-center justify-evenly container mx-auto">
                <Link className="text-4xl font-bold cursor-pointer uppercase" to="/">
                    rolex
                </Link>
                <div className="flex gap-20">
                    <div className="flex gap-8">
                        <Link className="text-2xl capitalize cursor-pointer" to="/">Home</Link>
                        <div className="h-full w-1 bg-white"></div>
                    </div>
                    <div className="flex gap-8">
                        <Link className="text-2xl capitalize cursor-pointer" to="/Contacte">Contacte</Link>
                        <div className="h-full w-1 bg-white"></div>
                    </div>
                    <div className="flex gap-8">
                        <Link className="text-2xl capitalize cursor-pointer" to="/Products">Producte</Link>
                        <div className="h-full w-1 bg-white"></div>
                    </div>                </div>
                <Link className="text-4xl cursor-pointer" to="/">
                    <FontAwesomeIcon icon={faDiceD20} />
                </Link>
                
        </nav>
        <div className="text-4xl cursor-pointer block md:hidden" onClick={showbar}>
                    <FontAwesomeIcon icon={faBars} />
        </div>
        <div className=" bg-black lefbard   w-80 flex flex-col z-30 -right-96 top-[80px] py-8 px-4 md:hidden fixed h-[100vh]">
            <nav className="flex flex-col-reverse gap-10  text-center">
            <Link className="text-4xl font-bold cursor-pointer uppercase" to="/">
                    rolex
                </Link>
                <div className="flex gap-10 flex-col items-center">
                    <div className="flex gap-8">
                        <Link className="text-2xl capitalize cursor-pointer" to="/">Home</Link>
                    </div>
                    <div className="flex gap-8">
                        <Link className="text-2xl capitalize cursor-pointer" to="/Contacte">Contacte</Link>
                    </div>
                    <div className="flex gap-8">
                        <Link className="text-2xl capitalize cursor-pointer" to="/Products">Products</Link>
                    </div>                
                </div>
                <Link className="text-4xl cursor-pointer" to="/">
                    <FontAwesomeIcon icon={faDiceD20} />
                </Link>
            </nav>
        </div>
    </motion.header>
    </>
  )
}
