import { useEffect, useState } from "react";
import { createEmployee, getEmployeebyID, upDateEmployee } from "../service/EmployeeService";
import { useNavigate, useParams} from "react-router-dom";
const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigator = useNavigate();
    const {id}= useParams();
    
    useEffect(() => {
        if (id) {
            getEmployeebyID(id).then((response) => {
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setEmail(response.data.email);
                })
                .catch((error) => console.error(error));
        }
    }, [id]);

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }

    function handleLastName(e) {
        setLastName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function saveOrUpdate(e) {
        e.preventDefault();
        const employee = { firstName, lastName, email };
        console.log(employee);  // Corrected line

        if(id){
            upDateEmployee(id,employee).then((response) =>{
                console.log(response.data)
            }).catch(error =>{
                console.log(error);
            })
            navigator('/employees')
        }else{
                createEmployee(employee).then((response) =>{
                console.log(response.data)
            }).catch(error =>{
            console.log(error)  
            })
        navigator('/employees')
        }

         
    }
    function pageTitle(){
        if(id){
            return <h2 className="text-center">update Employee</h2>
        }else{
            return <h2 className="text-center">Add Employee</h2>
        }
    }

  return (
    <div className="container">
    <div className="row">
        <div className="card">
            {
                pageTitle()
            }
            <div className="card-body">
                <form>
                    <div className="form-group mb-2">
                        <label className="form-label">First Name</label>
                        <input
                            onChange={handleFirstName}
                            className="form-control"
                            type="text"
                            value={firstName}
                        />
                        <label className="form-label">Last Name</label>
                        <input
                            onChange={handleLastName}
                            className="form-control"
                            type="text"
                            value={lastName}
                        />

                        <label className="form-label">Email</label>
                        <input
                            onChange={handleEmail}
                            className="form-control"
                            type="text"
                            value={email}
                        />
                    </div>
                    <button type="button" onClick={saveOrUpdate}>submit</button>
                </form>
            </div>  
        </div>
    </div>
</div>
);
};

export default EmployeeComponent;