import {create} from "zustand";

export const useSearchStore = create((set) => ({
    searchProducts: [],
    query:'',
    setSearchProducts: (products:any) => set(() => ({ searchProducts: products })),
    setQuery: (q:string) => set(() => ({ query: q })),
}));
