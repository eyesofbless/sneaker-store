import {User} from "@supabase/auth-helpers-nextjs"
import {createContext, useState} from "react";
import {useSessionContext, useUser as useSupaUser} from "@supabase/auth-helpers-react";

type UserContextType = {
    accessToken: string | null
    user: User | null
    isLoading: boolean
}

export const UserContext = createContext<UserContextType | undefined>(
    undefined
)

export interface Props {
    [propname: string]: any
}

export const MyUserContextProvider = (props: Props) => {
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase
    } = useSessionContext()

    const user = useSupaUser()
    const accessToken = session?.access_token ?? null
    const [isLoadingData,setIsLoadingData] = useState(false)
}