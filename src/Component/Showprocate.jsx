
import { useSelector } from 'react-redux';
import { Card } from './Card';
import { motion,useInView,useAnimation } from 'framer-motion';
import { useRef,useEffect } from 'react';


export const Showprocate = () => {
  const ref = useRef(null)
  const isVeiw = useInView(ref,{once:true})
  const controlAnimte = useAnimation()
  const result = useSelector((state)=> state.products[0])

  useEffect(()=>{
    if(isVeiw){
      controlAnimte.start("end")
    }
  },[isVeiw,controlAnimte])
  
  return (
    <>
    <section className="py-20">
        <div className="container mx-auto text-center space-y-12">
            <div className="flex flex-col items-center gap-4">
                <p className="text-xl opacity-75 ">360° COLLECTION</p>
                <div className="h-1 bg-black w-1/12 rounded-xl"></div>
            </div>
            <div className="" ref={ref}>
                <motion.h1
                variants={{
                  start:{
                    fontsize:0,
                    lineheight:0,
                    opacity:0
                  },
                  end:{
                    fontsize:60,
                    lineheight:32,
                    opacity:1
                  }
                }}
                initial="start"
                animate={controlAnimte}
                transition={{duration:1,delay:0.5}}
                className="font-bold opacity-85 text-2xl md:text-6xl"> FEATURED PRODUCTS  </motion.h1>
            </div>
        </div>
        <div className="py-10 container mx-auto row gap-8 flex flex-wrap  items-center justify-center">
        {result && result.map((prod) => {
            return <Card prod={prod} />;
          })}
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
