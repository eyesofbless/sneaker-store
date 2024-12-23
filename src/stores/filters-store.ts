import {create} from "zustand";

export const useFiltersStore = create((set) => ({
    filters: {},
    setFilters: (products:any) => set(() => ({ filters: {
            types: Array.from(new Set(products.map((item: any) => item.type))),
            brands: Array.from(new Set(products.map((item: any) => item.brand))),
            seasons: Array.from(new Set(products.map((item: any) => item.season))),
            genders: Array.from(new Set(products.map((item: any) => item.gender))),
            colors: Array.from(new Set(products.map((item: any) => item.color)))
            // можно добавить другие фильтры
        } }))
}));
