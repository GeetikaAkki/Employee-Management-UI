import axios from 'axios';
const DEPARTMENT_REST_API_BASE_URL='http://localhost:8080/api/departments'
export const getAllDepartments=()=>axios.get(DEPARTMENT_REST_API_BASE_URL);
