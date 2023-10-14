import React from "react";
import { Data } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Dummy = () => {
    const data = Data.getAllData();

    return (
        <div className="container-fluid bg-dark text-light mt-3">
            <div className="row">
                <div className="col">
                    <p className="h3 text-center">Dummy Data</p>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className="table table-dark m-5 table-custom-outline m-5">
                                    <thead>
                                        <tr>
                                            <th>Sno</th>
                                            <th>Profile pic</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Gender</th>
                                            <th>E-mail</th>
                                            <th>Username</th>
                                            <th>Domain</th>
                                            <th>IP</th>
                                            <th>University</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>
                                                    <img src={item.image} alt="" height={20} width={20} />
                                                </td>
                                                <td>{item.firstName}</td>
                                                <td>{item.lastName}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.email}</td>
                                                <td>{item.username}</td>
                                                <td>{item.domain}</td>
                                                <td>{item.ip}</td>
                                                <td>{item.university}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dummy;
