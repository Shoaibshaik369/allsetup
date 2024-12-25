import React from 'react';
import '../../styles/Rolesandpermissions.css';

const Rolesandpermissions = () => {
  return (
    <div className='roles-permissions-container'>
      <h1>Roles and Permissions</h1>
      
      <div className='role-form'>
        <h3>Role</h3>
        <label htmlFor='roleName'>Name <span>*</span></label>
        <input type='text' id='roleName' placeholder='Enter role name' />
        <button className='save-btn'>Save</button>
      </div>

      <div className='role-list'>
        <h3>Role List</h3>
        <input type='text' placeholder='Search...' className='search-input' />
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              'Admin',
              'Accountant',
              'Doctor',
              'Pharmacist',
              'Pathologist',
              'Radiologist',
              'Super Admin',
              'Receptionist',
              'Nurse'
            ].map((role, index) => (
              <tr key={index}>
                <td>{role}</td>
                <td>System</td>
                <td>
                  <button className='edit-btn'>✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Records: 1 to 9 of 9</p>
      </div>
    </div>
  );
}

export default Rolesandpermissions;
