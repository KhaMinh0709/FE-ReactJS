import { useEffect, useState } from 'react';
import { deletedEmployee, ListEmployee } from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListComponent = () => {

    const [employee, setEmployee] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
         ListEmployee().then((response) => {
                setEmployee(response.data);
                console.log(response.data);
            }).catch((error) => console.error(error)); 
    }, []); 

    function AddnewEmployee() {
        navigator('/add-employee');
    }

    function update(id) { 
        navigator(`/edit-employee/${id}`);
    }
    function deleted(id){
        deletedEmployee(id).then((response)=>{
            console.log(response.data)
        }).catch((error) =>{
            console.log(error)
        })
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Employees</h2>
            <button type="button" className="btn btn-primary" onClick={AddnewEmployee}>Create</button>
            <table className="table table-success table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className= "btn btn-success"
                                    type="button" onClick={() => update(employee.id)}>Update</button>

                                    <button type='button' 
                                    className='btn btn-danger'
                                    onClick={() => deleted(employee.id)}>Deleted</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListComponent;
