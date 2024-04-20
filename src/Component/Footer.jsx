import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faHouse,faEnvelope,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF,faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons"
import { useSelector } from 'react-redux';

export const Footer = () => {
    const  maida = useSelector((state)=> state.maida[0][0])
  return (
    <>
    <footer className='py-20'>
        <div className="container mx-auto flex justify-around md:flex-row flex-col gap-10 md:gap-0">
            <div className='flex space-x-10'>
                <div className="space-y-10">
                <h1 className="text-3xl font-bold text-rose-500">CONTACT US</h1>
                <div className='flex gap-6'>
                    <div>
                        <FontAwesomeIcon className="text-2xl text-rose-400" icon={faHouse} />
                    </div>
                    <p className="text-xl opacity-70">{maida ? maida.address : "520,West valey, Anim ad minim."}</p>
                </div>
                <div className="flex gap-6">
                    <div>
                    <FontAwesomeIcon className="text-2xl text-rose-400" icon={faPhone} />
                    </div>
                    <p className='text-xl opacity-70'>+ {maida ? maida.phone: "0000 123 - 456789"}</p>
                </div>
                <div className='flex gap-6'>
                    <div>
                    <FontAwesomeIcon className="text-2xl text-rose-400 " icon={faEnvelope} />
                    </div>
                    <p className='text-xl  opacity-70'>{maida ? maida.email : "info@example.com"}</p>
                </div>
                </div>
                <div className="h-full w-1 bg-rose-200 hidden md:block"></div>
            </div>
            <div className='flex space-x-10'>
                <div className="space-y-10 text-left">
                <h1 className="text-3xl font-bold text-rose-500">SHARE WITH US</h1>
                <p className="text-xl font-bold capitalize opacity-65">Special offers on social networks</p>
                <div className="flex gap-6">
                    <div className="p-4 border border-spacing-1 hover:text-white hover:bg-black rounded-xl">
                    <FontAwesomeIcon className='text-2xl' icon={faFacebookF} />
                    </div>
                    <div className="p-4 border border-spacing-1 hover:text-white hover:bg-black rounded-xl">
                    <FontAwesomeIcon className='text-2xl' icon={faInstagram} />
                    </div>
                    <div className="p-4 border border-spacing-1 hover:text-white hover:bg-black rounded-xl">
                    <FontAwesomeIcon className='text-2xl' icon={faTwitter} />
                    </div>
                </div>
                </div>
                <div className="h-full w-1 bg-rose-200 hidden md:block"></div>
            </div>
            <div className='space-y-10'>
                <div className="space-y-10">
                <h1 className="text-3xl font-bold text-rose-500">NEWSLETTER</h1>
                <p className="text-xl font-bold capitalize opacity-65">Subscribe our newsletter</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <input type="text" className="outline-none border border-b-2 py-3 px-7 rounded-xl text-xl" />
                    <div>
                    <FontAwesomeIcon className="text-3xl cursor-pointer" icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
