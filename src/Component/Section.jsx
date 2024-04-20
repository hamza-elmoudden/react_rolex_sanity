import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem,faStar,faCircleDollarToSlot,faClock,faPersonDotsFromLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




export const Section = () => {
  return (
    <>
        <section className="home text-white flex justify-end items-center px-20 overflow-hidden">
            <div className="w-full md:w-1/2 space-y-5">
                <h1 className="opacity-80 text-xl md:text-6xl uppercase">AN EXTRAORDINARY CLASSIC</h1>

                <p className="capitalize text-xl opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cumque quo atque.</p>
                <div className="flex gap-6 items-center w-fit border border-spacing-3 py-4 px-3 rounded-xl cursor-pointer hover:bg-white hover:text-black">
                    <div>
                        <FontAwesomeIcon  className="text-2xl" icon={faGem} />
                    </div>
                    <Link className="text-2xl uppercase font-serif" to="/Products">
                        shop now
                    </Link>
                </div>
            </div>
        </section>
        <section className="flex">
            <div className="w-1/2 banner h-100 flex items-end  text-white justify-center md:justify-end py-10">
                    <div className="w-1/2 space-y-5">
                        <h1 className="opacity-80 text-3xl  uppercase">Unique Watches from Classic Collections</h1>
                        <div className=" hidden md:flex md:gap-6 items-center w-fit border border-spacing-3 py-4 px-3 rounded-xl cursor-pointer hover:bg-white hover:text-black  ">
                            <div>
                            <FontAwesomeIcon icon={faStar} />
                             </div>
                            <Link className="text-xl md:text-2xl uppercase font-serif" to="/Products">
                                shop now
                            </Link>
                        </div>
                    </div>
            </div>
            <div className="w-1/2 h-100">
                    <div className="h-1/2 w-full flex text-white ">
                        <div className="banner_tow w-1/2 h-full flex items-center justify-center text-center">
                            <div className="space-y-5">
                                    <h1 className="opacity-80 text-3xl  uppercase font-bold"> DITRACK </h1>
                                    <p className="opacity-80 text-2xl  uppercase">Handsome Watches</p>
                                    <div className=" hidden md:flex gap-6 items-center w-fit border border-spacing-3 py-4 px-3 rounded-xl cursor-pointer hover:bg-white hover:text-black">
                                    <div>
                                    <FontAwesomeIcon icon={faClock} />
                                    </div>
                                    <Link className="text-2xl uppercase font-serif" to="/Products">
                                        shop now
                                    </Link>
                                    </div>
                            </div>
                        </div>
                        <div className="banner_three w-1/2 h-full flex items-center justify-center text-center">
                                    <div className="space-y-5">
                                    <h1 className="opacity-80 text-3xl  uppercase font-bold"> SANTEX </h1>
                                    <p className="opacity-80 text-2xl  uppercase">International Brand</p>
                                    <div className=" hidden md:flex gap-6 items-center w-fit border border-spacing-3 py-4 px-3 rounded-xl cursor-pointer hover:bg-white hover:text-black">
                                    <div>
                                   <FontAwesomeIcon icon={faPersonDotsFromLine} />
                                    </div>
                                    <Link className="text-2xl uppercase font-serif" to="/Products">
                                        VIEW ALL
                                    </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner_three h-1/2 text-white flex items-end justify-end py-10 px-8">
                            <div className="space-y-5">
                                <h1 className="opacity-80 text-3xl  uppercase font-blod"> GIZMO </h1>
                                <p className="opacity-80 text-xl  uppercase">Classic Watch Collections</p>
                                <div className=" hidden md:flex gap-6 items-center w-fit border border-spacing-3 py-4 px-3 rounded-xl cursor-pointer hover:bg-white hover:text-black">
                                <div>
                                <FontAwesomeIcon icon={faCircleDollarToSlot}/>
                                </div>
                                <Link className="text-2xl uppercase font-serif" to="/Products">
                                    shop now
                                </Link>
                                </div>
                            </div>
                    </div>
            </div>
        </section>
    </>
  )
}
