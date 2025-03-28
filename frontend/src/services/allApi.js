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

//api to delete  video
export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverurl}/videos/${id}`,{})
}

//api to add video to watch history
export const addVideoHistoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverurl}/history`,reqBody)
}