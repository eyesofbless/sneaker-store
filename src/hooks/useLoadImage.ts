import {createClient} from "../../supabase/client";

const useLoadImage = (imagePath:string,bucket:string,smallSize:boolean) => {

    const supabaseClient = createClient()
    const {data: imageData} = supabaseClient
        .storage
        .from(bucket)
        .getPublicUrl(imagePath+'/'+(smallSize?imagePath:imagePath+'_big')+'.jpg')
    return imageData.publicUrl
}

export default useLoadImage