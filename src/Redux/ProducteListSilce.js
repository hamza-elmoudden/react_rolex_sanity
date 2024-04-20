import { createSlice } from "@reduxjs/toolkit"
import { client } from "../Sanity/Client"

const initialState = []

async function getprodatcetsList(){
    const data = await client.fetch(`
        *[_type == 'products']{
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

await getprodatcetsList()

const prodatcetsList = createSlice({
    name:"prodatcetsList",
    initialState ,
})



export default prodatcetsList.reducer