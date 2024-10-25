
import {createClient} from "../../supabase/server";



export const getProductsById = async (id?:number,table?:any) => {
    const supabase = createClient()
    const {data,error} = await supabase
        .from(table)
        .select('*')
        .eq('id',id)
    if (error) {
        console.log(error)
    }
    return (data as any) || []
}