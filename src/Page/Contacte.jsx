import { useState } from 'react'
import { Footer } from '../Component/Footer'
import { Navebar } from '../Component/Navebar'
import { client } from '../Sanity/Client'


export const Contacte = () => {
  const [data,setdata] = useState({
    name:"",
    title:"",
    email:"",
    contante:""
  })

  function handelform(e){
    setdata({...data,[e.target.name]:e.target.value})
  }
  
  const handelsubmit = async (e)=>{
    e.preventDefault()
    try {

      if(data.name === ""||data.email === "" || data.title === "" || data.contante === "" ){
          return null
      }
      
      client.create({
        _type:"contacte",
        name:data.name,
        email:data.email,
        title:data.title,
        contante:data.contante
        
      })

      setdata({
        name:"",
        title:"",
        email:"",
        contante:""
      })
    } catch (error) {
      console.log(`Error : \n ${error}`)
    }
  }
  
  return (
    <>
    <div className="overflow-hidden">
    <Navebar/>
    <section className=" h-96 md:h-52 flex justify-center items-center banner_tow p-8">
        <div className="w-1/2 text-center flex flex-col gap-8">
            <h1 className="text-4xl font-bold uppercase opacity-60 text-rose-200">Contatce</h1>
            <p className="text-xl opacity-65 line-clamp-2 capitalize text-rose-100">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </section>
    <section className="container mx-auto py-20">
            <div className="py-8 flex justify-center w-full" id="order">
                    <form onSubmit={handelsubmit} className="text-center space-y-12 border border-spacing-4 p-8 rounded-lg shadow-lg w-full">
                        <div className="grid md:grid-cols-1 gap-3">
                            <input type="text" onChange={handelform} placeholder="Name" name='name' value={data.name}  className="outline-none border border-gray-200 py-4 px-2 rounded-lg"/>
                        </div>
                        <div className="grid md:grid-cols-1 gap-3">
                            <input type="text" onChange={handelform} placeholder="Title" name='title' value={data.title} className="outline-none border border-gray-200 py-4 px-2 rounded-lg"/>
                        </div>
                        <div className="grid md:grid-cols-1 gap-3">
                            <input type="text" onChange={handelform} placeholder="Email" name='email' value={data.email} className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                        </div>
                          <div className="grid md:grid-cols-1 gap-3">
                            <input type="text" onChange={handelform} placeholder="Contante" name='contante' value={data.contante} className="outline-none border border-gray-200 py-4 px-2 rounded-lg h-48" />
                          </div>
                        <div className="md:px-32 justify-center">
                            <button type="submit" className="py-5 px-3 border border-gray-600 rounded-full text-white bg-rose-500 text-xl font-bold uppercase hover:bg-gray-800 w-1/3">submit</button>
                        </div>
                    </form>
              </div>
            </section>
    <Footer/>
    </div>
    </>
  )
}