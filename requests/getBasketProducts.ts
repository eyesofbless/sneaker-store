import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";




export const getBasketProducts = async (sessionId:any) => {


    const supabase = createServerComponentClient({
        cookies: cookies
    })
    const {data,error} = await supabase
        .from('baskets')
        .select('items')
        .eq('session_id',sessionId)
    if (error) {
        console.log(error)
    }
    return (data as any) || []
}