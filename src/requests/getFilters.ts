import {createClient} from "../../supabase/server";


export const getFilters = async (table:string) => {

    const supabase = createClient()

    const { data, error } = await supabase.rpc('get_filters', {table_name:table})

    if (error) {
        console.log(error)
    }

    return (data[0] as any) || []

}



