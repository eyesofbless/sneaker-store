import {createClient} from "../../supabase/server";


export const getBrands = async (items:string) => {
    const supabase = createClient()
    const {data,error} = await supabase
        .from(items)
        .select('brand')
    if (error) {
        console.log(error)
    }


    return (data as any) || []
}

export const getAllBrands = async () => {
  return [...await getBrands('shoes')
      ,...await getBrands('clothes'),
      ...await getBrands('accessories')]
}

