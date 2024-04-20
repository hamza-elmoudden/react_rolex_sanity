import { useEffect, useState } from "react"
import { Footer } from "../Component/Footer"
import { Navebar } from "../Component/Navebar"
import { useParams } from "react-router-dom"
import { client, urlFor } from "../Sanity/Client"
import Swal from "sweetalert2"



export const Proudacte = () => {
  const {idprod} = useParams()
  const [prod,setprod] = useState(null)
  const [data,setdata] = useState({
    first_name:"",
    Last_name:"",
    email:"",
    phone:"",
    contry:"",
    city:"",
    postcode:"",
    address:""
  })

  function handelform(e){
    setdata({...data,[e.target.name]:e.target.value})
  }

  const handelsubmit = async (e)=>{
    e.preventDefault()
    try {

      if(data.first_name === "" || data.Last_name === "" || data.email === "" || data.phone === "" || data.contry === "" || data.city === "" || data.postcode === "" || data.address === ""){
          return null
      }
      
      client.create({
        _type:"order",
        first_name:data.first_name,
        Last_name:data.Last_name,
        email:data.email,
        phone:data.phone,
        contry:data.contry,
        city:data.city,
        postcode:data.postcode,
        address:data.address,
        title_prodacte:data.title,
        price:data.price,
        producte:{
          _ref:prod._id
        }
        
      })

      Swal.fire({
        title: 'Order',
        text: `Price : ${prod.price}`,
        icon: 'success',
        confirmButtonText: 'OK'
      })

      setdata({
        first_name:"",
        Last_name:"",
        email:"",
        phone:"",
        contry:"",
        city:"",
        postcode:"",
        address:""
      })

    } catch (error) {
      console.log(`Error : \n ${error}`)
    }
  }

  const image_one = ()=>{
    const img = document.querySelector(".img_hom")
    img.src = prod ? urlFor(prod.image_one.asset._ref) : urlFor(prod.image_one.asset._ref)
  }

  const image_two = ()=>{
    const img = document.querySelector(".img_hom")
    img.src = prod ? urlFor(prod.image_two.asset._ref) : urlFor(prod.image_one.asset._ref)
  }

  const image_three = ()=>{
    const img = document.querySelector(".img_hom")
    img.src = prod ? urlFor(prod.image_three.asset._ref) : urlFor(prod.image_one.asset._ref)
  }


  useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await client.fetch(`
                *[_type == 'products' && _id == '${idprod}']{
                    _id,
                    title,
                    price,
                    description,
                    image_one{asset{_ref,_type}},
                    image_two{asset{_ref,_type}},
                    image_three{asset{_ref,_type}},
                }
            `);
            console.log("result : ",result)
            setprod(result[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
      }, [idprod]);


  return (
    <>
        <div className="overflow-hidden">
            <Navebar/>
            <div className="banner_prod h-64">
            </div>
            <div className="py-10 container mx-auto flex gap-10 items-center justify-center flex-col md:flex-row" id={prod ? prod._id : 0}>
                <div className="w-full md:w-1/3">
                  <div className="space-y-4">
                    <div className="border border-spacing-4 border-b-2 border-t-0 border-l-0 border-r-0">
                      <img className="img_hom" src={prod ? urlFor(prod.image_one.asset._ref) : "" } alt="producate null" />
                    </div>
                    <div className=" flex gap-10 justify-center items-center p-3">
                      <div className="rounded-lg overflow-hidden w-28 cursor-pointer">
                          <img src={prod ? urlFor(prod.image_one.asset._ref) : "" } alt="producate null" onClick={image_one} />
                      </div>
                      <div className="rounded-lg overflow-hidden w-28 cursor-pointer">
                          <img src={prod ? urlFor(prod.image_two.asset._ref) : "" } alt="producate null" onClick={image_two} />
                      </div>
                      <div className="rounded-lg overflow-hidden w-28 cursor-pointer"  onClick={image_three}>
                          <img src={prod ? urlFor(prod.image_three.asset._ref) : "" } alt="producate null" />
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="w-full md:w-1/3 space-y-10 flex flex-col justify-center">
                  <div className="space-y-6">
                  <h1 className="font-bold text-4xl uppercase">{prod ? prod.title : "Title Prodatce"}</h1>
                  <p className="uppercase opacity-85">{prod ? prod.description : "Decription on Ptodatce"}</p>
                  </div>
                  <div className="space-y-6">
                      <div className="flex gap-4 text-xl">
                        <p className="font-bold capitalize">Price :</p>
                        <p className="">{prod ? prod.price : "100"} $</p>
                      </div>
                      <div className="flex gap-4 text-xl">
                        <p className="font-bold capitalize">Size :</p>
                        <div className="flex gap-4">
                          <p>33.0</p>
                          <p>88.9</p>
                          <p>32.8</p>
                        </div>
                      </div>
                      <div className="flex gap-4 text-xl">
                        <p className="font-bold capitalize">Type:</p>
                        <p className="font-bold capitalize">Watch </p>
                      </div>
                  </div>
                </div>
            </div>
            <section className="container mx-auto py-20">
            <div className="py-16 flex justify-center w-full" id="order">
                    <form onSubmit={handelsubmit}  className="w-full md:w-1/2 text-center space-y-12 border border-spacing-4 p-8 rounded-lg shadow-lg">
                        <div className="grid md:grid-cols-2 gap-3">
                            <input type="text" onChange={handelform} name="first_name" value={data.first_name} placeholder="First Name"  className="outline-none border border-gray-200 py-4 px-2 rounded-lg"/>
                            <input type="text" onChange={handelform} name="Last_name" value={data.Last_name} placeholder="Last Name" className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                            <input type="text" placeholder="Email" onChange={handelform} name="email" value={data.email} className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                            <input type="text"  placeholder="Phone"  onChange={handelform} name="phone" value={data.phone} className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                        </div>
                           <div className="grid md:grid-cols-2 gap-3">
                            <input type="text" placeholder="Post Code" onChange={handelform} name="postcode" value={data.postcode} className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                            <input type="text" placeholder="Country" onChange={handelform} name="contry" value={data.contry} className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                          </div>
                          <div className="grid md:grid-cols-2 gap-3">
                            <input type="text" placeholder="City" onChange={handelform} name="city" value={data.city} className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                          </div>
                          <div className="grid md:grid-cols-1 gap-3">
                            <input type="text" onChange={handelform} name="address" value={data.address} placeholder="Address" className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                          </div>
                        <div className="grid md:px-32">
                            <button type="submit" className="py-5 px-3 border border-gray-600 rounded-full text-white bg-rose-500 text-xl font-bold uppercase hover:bg-gray-800">Order Now</button>
                        </div>
                    </form>
              </div>
            </section>
            <Footer/>
        </div>
    </>
  )
}
