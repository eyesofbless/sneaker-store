import {createClient} from "../../supabase/client";



export const getBasketProducts = async () => {

    let sessionId = localStorage?.getItem('session_id');
    if (!sessionId) {
        sessionId = crypto.randomUUID();
        localStorage.setItem('session_id', sessionId);
    }

    const supabase = createClient()
    const {data,error} = await supabase
        .from('baskets')
        .select('id,item,size,count,session_id')
        .eq('session_id',sessionId)
    if (error) {
        console.log(error)
    }
    return (data as any) || []
}