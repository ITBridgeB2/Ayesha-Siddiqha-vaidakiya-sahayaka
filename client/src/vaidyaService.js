import axios from 'axios';
const REGISTER_URL = 'http://localhost:9099/register'
const ADMIN_REGISTER_URL = 'http://localhost:9099/admin'
const  HOSPITAL_URL='http://localhost:9099/hospitals'
const REVIEW_URL ='http://localhost:9099/reviews'
class VaidyaService
{
    getService(){
        return axios.get(`${REGISTER_URL}`)//http://localhost:9090/visitors
    }
    saveVisitorDetails(vaidyadetails){
            return axios.post(`${REGISTER_URL}`,vaidyadetails)
        }
    validateUser(name, password) {
            return axios.get(`${REGISTER_URL}/${name}/${password}`)
          }
    saveRegisterDetails(registerDetails){
        return axios.get(`${ADMIN_REGISTER_URL}`,registerDetails)
    }
    getAdminDetails(username, password) {
        return axios.get(`${ADMIN_REGISTER_URL}/${username}/${password}`)
}
getAllAdmins(){
    return axios.get(`${ADMIN_REGISTER_URL}`)
}
getAllHospitals(){
    return axios.get(`${HOSPITAL_URL}`)
}
saveHospitalDetails(hospitaldetails){
    return axios.post(`${HOSPITAL_URL}`,hospitaldetails)
}
getAllReview(){
    return axios.get(`${REVIEW_URL}`)
}
saveReviews(reviewDetails){
    return axios.post(`${REVIEW_URL}`,reviewDetails)
}
}
export default new VaidyaService()