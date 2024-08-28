import {createClient} from "../../supabase/client";

const useLoadImage = (imagePath:any) => {

    const supabaseClient = createClient()
    const {data: imageData} = supabaseClient
        .storage
        .from('shoes_images')
        .getPublicUrl(imagePath+'.jpg')
    return imageData.publicUrl
}

export default useLoadImage