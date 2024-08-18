import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";




export const getShoesById = async (id?:number) => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })
    const {data,error} = await supabase
        .from('shoes')
        .select('*')
        .eq('id',id)
    if (error) {
        console.log(error)
    }
    return (data as any) || []
}