
import { React,useState , useEffect} from 'react';
import { getAllDepartments , deleteDepartment} from '../services/DepartmentService';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const ListDepartmentComponent = () => {
   useEffect(
    ()=>{
        listOfDepartments();
    }
    ,[])
    function listOfDepartments(){
        getAllDepartments().then((response)=>{
            console.log(response.data);
            setDepartments(response.data);
        }).catch(error=>{
            console.error(error);
        })

    }
    const [departments,setDepartments]=useState([]);
    const navigator= useNavigate();
    function updateDepartment(id){
        navigator(`/edit-department/${id}`)

    }

    function removeDepartment(id){
        deleteDepartment(id).then((response)=>{
            console.log(response.data)
            listOfDepartments();

        }).catch(error=>{
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Departments</h2>
        <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
        <table className='table table-striped table-bordered'>

            <thead>
                <tr>
                    <th>Department Id</th>
                    <th>Department Name</th>
                    <th>DepartmentDescription</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    departments.map(department=>
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.departmentName}</td>
                            <td>{department.departmentDescription}</td>
                            <td>
                                <button onClick={()=>updateDepartment(department.id)} className='btn btn-info'>Update</button>
                                
                                
                                <button onClick={()=>removeDepartment(department.id)} className='btn btn-danger' style={{marginLeft: "10px"}}>Delete</button>
                            </td>

                        </tr>
                    )
                }
            </tbody>
        </table>
        

    </div>
  )
}

export default ListDepartmentComponent