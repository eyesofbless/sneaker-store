

import {createClient} from "../../supabase/server";




export const getShoes = async () => {
    const supabase = createClient()
    const {data,error} = await supabase
        .from('shoes')
        .select('*')
        .order('price', {ascending: true})
    if (error) {
        console.log(error)
    }
    return (data as any) || []
}

