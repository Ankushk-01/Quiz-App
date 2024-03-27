/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"
const BASE_URL = "http://localhost:4000/"
const token=sessionStorage.getItem("token")
console.log(token)

// const header1={
//    Accept:"application/json",
//    Authorization:token
// }

// export const BASE_URL_IMG="http://localhost:3000/"
class apiServices {
   // ----------------------------------------Authentication Apis Start-----------------------------------
   register(data) {
      return axios.post(BASE_URL + "signup", data)
   }
   login(data) {
      return axios.post(BASE_URL + "login", data)
   }
   update(data){
      return axios.post(BASE_URL+"update",data);
   }
   contact(){
      return axios.get(BASE_URL+"contact")
   }
   feedback(data){
      return axios.post(BASE_URL+"feedback",data)
   }
   user(data){
      return axios.post(BASE_URL+"user",data)
   }
   users(){
      return axios.get(BASE_URL+"users")
   }
   customers(){
      return axios.get(BASE_URL+"customers")
   }
   // -------------------------------------Authentication Apis End-----------------------------------

   // ------------------------------------------Admin Add apis start-----------------------------------------

   // addcategory(data) {
   //    const token = sessionStorage.getItem("token")
   //    console.log(token)
   //    const header = {
   //       Accept: "application/json",
   //       Authorization: token
   //    }
   //    return axios.post(BASE_URL +"addcategory",  data, { headers: header })
   // }
   // addsubcategory(data) {
   //    const token = sessionStorage.getItem("token")
   //    console.log(token)
   //    const header = {
   //       Accept: "application/json",
   //       Authorization: token
   //    }
   //    return axios.post(BASE_URL +"addsubcategory",  data, { headers: header })
   // }
   // addproduct(data) {
   //    const token = sessionStorage.getItem("token")
   //    console.log(token)
   //    const header3 = {
   //       Accept: "application/json",
   //       Authorization: token
   //    }
   //    return axios.post(BASE_URL +"addproduct",  data, { headers: header3 })
   // }

   // ------------------------------------------Admin Add Apis End-----------------------------------------

   // ------------------------------------------Get Apis Start-----------------------------------------

   // getcategory(){
   //    return axios.post(BASE_URL+"getallcategory")
   // }
   // getsubcategory(){
   //    return axios.post(BASE_URL+"allsubcategory")
   // }
   // getproduct(){
   //    return axios.post(BASE_URL+"allproduct")
   // }
  
   // ------------------------------------------Get Apis End-----------------------------------------
   // getsinglecategory(_id){
   //    let data={
   //       _id:_id
   //    }
   //    return axios.post(BASE_URL+"getsinglecategory",data,{headers:header1})
   // }
   // updatecategory(data){
   //    return axios.post(BASE_URL+"updatecategory",data,{headers:header1})
   // }
}

export default new apiServices()