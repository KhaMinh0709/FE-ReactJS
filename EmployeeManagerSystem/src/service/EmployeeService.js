import axios from "axios"
const REST_API_BASE_ULR = "http://localhost:8080/api_4/employees"

export const ListEmployee = ()=>{
    return axios.get(REST_API_BASE_ULR)
}
export const createEmployee = (employee) =>{
    return axios.post(REST_API_BASE_ULR,employee)
}
export const getEmployeebyID = (id) =>{
    return axios.get(REST_API_BASE_ULR+ '/' +id)
}
export const upDateEmployee = (id, employeeUpdate) =>{
    return axios.put(REST_API_BASE_ULR+'/' + id,employeeUpdate)
}
export const deletedEmployee =(id)=>{
    return axios.delete(REST_API_BASE_ULR+ '/' +id)
}