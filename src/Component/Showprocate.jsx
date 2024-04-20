
import { useSelector } from 'react-redux';
import { Card } from './Card';


export const Showprocate = () => {
  const result = useSelector((state)=> state.products[0])
  return (
    <>
    <section className="py-20">
        <div className="container mx-auto text-center space-y-12">
            <div className="flex flex-col items-center gap-4">
                <p className="text-xl opacity-75 ">360° COLLECTION</p>
                <div className="h-1 bg-black w-1/12 rounded-xl"></div>
            </div>
            <div>
                <h1 className="font-bold opacity-85 text-2xl md:text-6xl"> FEATURED PRODUCTS  </h1>
            </div>
        </div>
        <div className="py-10 container mx-auto row gap-8 flex flex-wrap  items-center justify-center">
          {
            result.map((prod)=>{
              return <Card prod={prod} key={prod._id}/>
            })
          }
        </div>
        <div className="container mx-auto py-20">
            <div className='w-full flex justify-center items-center  '>
              <img src={require("../image/logo_1.png")} className="w-96" alt="" />
            </div>
        </div>
    </section>
    </>
  )
}
