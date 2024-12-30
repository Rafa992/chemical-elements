import { axiosWithAuth } from "@/api/interceptors"
import { User } from "@/types/auth"

export const getProfile = async ():Promise<User | null> => {
    try {
        const res = await axiosWithAuth.get('/user/profile')
        const user = await res.data.user
        return user
    } catch (error) {
        console.log(error);
        return null
    }
}