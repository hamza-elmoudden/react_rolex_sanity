import { configureStore } from '@reduxjs/toolkit'
import producteslice  from "./ProducteSlice"
import maida from "./MaidaSlice"
import prodatcetsList from "./ProducteListSilce"

export const store = configureStore({
    reducer: {
      products:producteslice,
      maida:maida,
      prodatcetsList:prodatcetsList
    },
})