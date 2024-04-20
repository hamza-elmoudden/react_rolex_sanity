import { createSlice } from "@reduxjs/toolkit"
import { client } from "../Sanity/Client"

const initialState = []

async function getprodatcet(){
    const data = await client.fetch(`
        *[_type == 'products'][0...7]{
            _id,
            title,
            price,
            image_one{
                asset{
                _ref
                }
            },
        }
    `)

    initialState.push(data)
    
}

await getprodatcet()

const producteslice = createSlice({
    name:"products",
    initialState ,
})



export default producteslice.reducer