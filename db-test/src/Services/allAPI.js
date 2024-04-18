import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

//register api - called by component register
export const registerAPI = async (reqBody)=>{
    return  await commonAPI ("POST",`${SERVER_URL}/register`,reqBody)
 }

//  get and display
export const getStudentsDetailAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/registeredUsers`,reqHeader)
 }