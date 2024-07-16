import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";


export const getBrands = async (items:string) => {
    const supabase = createServerComponentClient({
        cookies:cookies
    })
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

