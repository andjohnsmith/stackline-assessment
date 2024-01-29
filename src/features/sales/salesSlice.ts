import { createSlice } from "@reduxjs/toolkit"
import output from './sales-data.json';

export interface Sale {
    weekEnding: string
    retailSales: number
    wholesaleSales: number
    unitsSold: number
    retailerMargin: number
}

interface Review {
    customer: string
    review: string
    score: number
}

export interface Product {
    id: string
    title: string
    image: string
    subtitle: string
    brand: string
    reviews: Review[]
    retailer: string
    details: string[]
    tags: string[]
    sales: Sale[]
}

export interface SalesSliceState {
  currentProduct: string
  sales: {[key: string]: Product}
}

const initialState: SalesSliceState = {
  currentProduct: '',
  sales: {}
}

export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: create => ({
    fetchSales: create.reducer(state => {
      for (const sale of output) {
        state.sales[sale.id] = sale;
      }
      state.currentProduct = output[0].id;
    }),
  }),
  selectors: {
    selectCurrentProduct: sales => sales.sales[sales.currentProduct]
  },
})

export const { fetchSales } = salesSlice.actions

export const { selectCurrentProduct } = salesSlice.selectors
