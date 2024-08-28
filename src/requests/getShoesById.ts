
import {createClient} from "../../supabase/server";



export const getShoesById = async (id?:number) => {
    const supabase = createClient()
    const {data,error} = await supabase
        .from('shoes')
        .select('*')
        .eq('id',id)
    if (error) {
        console.log(error)
    }
    return (data as any) || []
}