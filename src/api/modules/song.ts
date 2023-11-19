import API from '@/config/methods'
import { AxiosResponse } from 'axios'

export const songsAPI = {
    getSong(params: Rc<string, any>):Promise<AxiosResponse<any>> {
        return API.get('/lyric', params)
    }
}
