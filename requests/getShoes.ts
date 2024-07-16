import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";


export const getShoesImagePath = async () => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })
    const {data,error} = await supabase
        .from('shoes')
        .select('image_path')
    if (error) {
        console.log(error)
    }
    return (data as any) || []
}

export const getShoes = async () => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })
    const {data,error} = await supabase
        .from('shoes')
        .select('*')
    if (error) {
        console.log(error)
    }
    return (data as any) || []
}