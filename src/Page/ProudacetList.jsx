import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { Footer } from "../Component/Footer"
import { Navebar } from "../Component/Navebar"
import { useSelector } from 'react-redux';
import { Card } from '../Component/Card';
import { useState } from 'react';




export const ProudacetList = () => {

    const [searchText, setSearchText] = useState("")
    const data = useSelector((state)=> state.prodatcetsList[0])
    const filteredData = data.filter(prod => prod.title.toLowerCase().includes(searchText.toLowerCase()));
  return (
    <>
    <div className="overflow-hidden">
            <Navebar/>
            <section className="py-10">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center gap-4 py-32 md:py-10">
                        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" className='outline-none border border-spacing-2 text-3xl py-2 px-5 rounded-2xl' />
                        <div>
                        <FontAwesomeIcon className="text-3xl font-bold p-3 border border-spacing-3 rounded-2xl shadow-lg cursor-pointer hover:shadow-none" icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    <div className="flex row justify-center items-center flex-wrap gap-5">

                        {
                                filteredData.map((prod) => {
                                    return <Card prod={prod} key={prod._id} /> 
                                })
                        }
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    </>
  )
}
