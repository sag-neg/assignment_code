import React, { useEffect, useState } from 'react';
//import ReactDOM from 'react-dom';
import '../UserTable.css';

export default function UserTable() {
    const [list, setlist] = useState([]);
    useEffect(() => {
        fetch("https://run.mocky.io/v3/919ba60b-b5bb-49fa-83d9-103228dbc9e1")
            .then(res => res.json())
            .then(res => setlist(res))
    }, []);

    return (
        <>
            <h3 className="caption">User Data Summary</h3>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(user =>
                        <tr key={user.phone}>
                            <td data-label="Account">{user.name}</td>
                            <td data-label="Due Date">{user.email}</td>
                            <td data-label="Amount">{user.phone}</td>
                            <td data-label="Period">{user.address}</td>
                        </tr>

                    )};
                 </tbody>
            </table>
        </>
    )


}

