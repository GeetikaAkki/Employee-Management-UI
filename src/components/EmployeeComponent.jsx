import React, { useState } from 'react';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    function saveEmployee(e) {
        e.preventDefault();
        const employee = { firstName, lastName, email };
        console.log(employee);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="card col-md-6">
                    <h2 className="text-center">Add Employee</h2>
                    <div className="card-body">
                        <form onSubmit={saveEmployee}>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Employee First Name"
                                    name="firstName"
                                    value={firstName}
                                    className="form-control"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Last Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Employee Last Name"
                                    name="lastName"
                                    value={lastName}
                                    className="form-control"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email:</label>
                                <input
                                    type="email"
                                    placeholder="Enter Employee Email Id"
                                    name="email"
                                    value={email}
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-success">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;
