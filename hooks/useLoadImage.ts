import {useSupabaseClient} from "@supabase/auth-helpers-react";

const useLoadImage = (imagePath:any) => {

    const supabaseClient = useSupabaseClient()
    const {data: imageData} = supabaseClient
        .storage
        .from('shoes_images')
        .getPublicUrl(imagePath+'.jpg')
    return imageData.publicUrl
}

export default useLoadImage