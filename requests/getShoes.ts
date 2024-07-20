import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";




export const getShoes = async () => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })
    const {data,error} = await supabase
        .from('shoes')
        .select('*')
        .order('price', {ascending: true})
    if (error) {
        console.log(error)
    }
    return (data as any) || []
}

