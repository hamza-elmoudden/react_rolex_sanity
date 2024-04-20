import { createSlice } from "@reduxjs/toolkit"
import { client } from "../Sanity/Client"


const initialState = []

async function getMaida(){
    const data = await client.fetch(`
        *[_type == 'media']
    `)

    initialState.push(data)
    
}



await getMaida()

const maidaslice = createSlice({
    name:"maida",
    initialState ,
})



export default maidaslice.reducer