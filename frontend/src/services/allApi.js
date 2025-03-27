import { commonApi } from "./commonApi"
import { serverurl } from "./serverurl"

//video api
export const videoAddApi = async(reqBody)=>{
    return await commonApi('POST',`${serverurl}/videos`,reqBody)
} 

//api to get all videos
export const allVideosApi = async()=>{
    return await commonApi('GET',`${serverurl}/videos`)
}