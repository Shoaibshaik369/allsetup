import React from 'react';
import "../../styles/System_notifi_settings.css";

const System_notifi_settings = () => {
  const handleSave = () => {
    alert('Settings have been saved!');
  };

  return (
    <div style={{ padding: '20px' }} className='sns'>
      <h2>System Notification Setting</h2>
      <table 
        border="1" 
        cellPadding="10" 
        cellSpacing="0" 
        style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}
      >
        <thead>
          <tr>
            <th>Event</th>
            <th>Subject</th>
            <th>Option</th>
            <th>Staff Message</th>
            <th>Patient Message</th>
          </tr>
        </thead>
        <tbody>
          {/* Appointment Created */}
          <tr>
            <td>Appointment Created</td>
            <td>New Appointment Created</td>
            <td>
              <input type="checkbox"  /> Enabled<br />
              <input type="checkbox"  /> Staff<br />
              <input type="checkbox"  /> Patient
            </td>
            <td>
              Appointment has been created for Patient: {'{{patient_name}}'} ({'{patient_id}'}). Appointment Date: {'{{appointment_date}}'} With Doctor Name: {'{{doctor_name}}'}.
            </td>
            <td>
              Dear {'{{patient_name}}'} ({'{patient_id}'}) your appointment has been created with Doctor: {'{{doctor_name}}'}.
            </td>
          </tr>

          {/* Appointment Approved */}
          <tr>
            <td>Appointment Approved</td>
            <td>Appointment Status</td>
            <td>
              <input type="checkbox"  /> Enabled<br />
              <input type="checkbox" checked /> Staff<br />
              <input type="checkbox"  /> Patient
            </td>
            <td>
              Patient: {'{{patient_name}}'} ({'{patient_id}'}) appointment status is {'{{appointment_status}}'} with Doctor: {'{{doctor_name}}'} Date: {'{{appointment_date}}'}.
            </td>
            <td>
              Dear {'{{patient_name}}'} ({'{patient_id}'}) your appointment status is {'{{appointment_status}}'} Date: {'{{appointment_date}}'} with Doctor {'{{doctor_name}}'}.
            </td>
          </tr>

          {/* OPD Visit Created */}
          <tr>
            <td>OPD Visit Created</td>
            <td>New OPD Visit Created</td>
            <td>
              <input type="checkbox"  /> Enabled<br />
              <input type="checkbox" checked /> Staff<br />
              <input type="checkbox"  /> Patient
            </td>
            <td>
              OPD Visit has been created for patient: {'{{patient_name}}'} ({'{patient_id}'}) with doctor: {'{{doctor_name}}'}. Patient Symptoms Details are {'{{symptoms_description}}'} and any known allergies: {'{{any_known_allergies}}'}.
            </td>
            <td>
              Dear: {'{{patient_name}}'} ({'{patient_id}'}) your OPD visit has been created. Your Symptoms Details are {'{{symptoms_description}}'} and any known allergies: {'{{any_known_allergies}}'}.
            </td>
          </tr>
           {/* Appointment Created */}
           <tr>
            <td>Appointment Created</td>
            <td>New Appointment Created</td>
            <td>
              <input type="checkbox"  /> Enabled<br />
              <input type="checkbox"  /> Staff<br />
              <input type="checkbox"  /> Patient
            </td>
            <td>
              Appointment has been created for Patient: {'{{patient_name}}'} ({'{patient_id}'}). Appointment Date: {'{{appointment_date}}'} With Doctor Name: {'{{doctor_name}}'}.
            </td>
            <td>
              Dear {'{{patient_name}}'} ({'{patient_id}'}) your appointment has been created with Doctor: {'{{doctor_name}}'}.
            </td>
          </tr>
           {/* Appointment Created */}
           <tr>
            <td>Appointment Created</td>
            <td>New Appointment Created</td>
            <td>
              <input type="checkbox"  /> Enabled<br />
              <input type="checkbox"  /> Staff<br />
              <input type="checkbox"  /> Patient
            </td>
            <td>
              Appointment has been created for Patient: {'{{patient_name}}'} ({'{patient_id}'}). Appointment Date: {'{{appointment_date}}'} With Doctor Name: {'{{doctor_name}}'}.
            </td>
            <td>
              Dear {'{{patient_name}}'} ({'{patient_id}'}) your appointment has been created with Doctor: {'{{doctor_name}}'}.
            </td>
          </tr>
           {/* Appointment Created */}
           <tr>
            <td>Appointment Created</td>
            <td>New Appointment Created</td>
            <td>
              <input type="checkbox"  /> Enabled<br />
              <input type="checkbox"  /> Staff<br />
              <input type="checkbox"  /> Patient
            </td>
            <td>
              Appointment has been created for Patient: {'{{patient_name}}'} ({'{patient_id}'}). Appointment Date: {'{{appointment_date}}'} With Doctor Name: {'{{doctor_name}}'}.
            </td>
            <td>
              Dear {'{{patient_name}}'} ({'{patient_id}'}) your appointment has been created with Doctor: {'{{doctor_name}}'}.
            </td>
          </tr>
           {/* Appointment Created */}
           <tr>
            <td>Appointment Created</td>
            <td>New Appointment Created</td>
            <td>
              <input type="checkbox"  /> Enabled<br />
              <input type="checkbox"  /> Staff<br />
              <input type="checkbox"  /> Patient
            </td>
            <td>
              Appointment has been created for Patient: {'{{patient_name}}'} ({'{patient_id}'}). Appointment Date: {'{{appointment_date}}'} With Doctor Name: {'{{doctor_name}}'}.
            </td>
            <td>
              Dear {'{{patient_name}}'} ({'{patient_id}'}) your appointment has been created with Doctor: {'{{doctor_name}}'}.
            </td>
          </tr>
           {/* Appointment Created */}
           <tr>
            <td>Appointment Created</td>
            <td>New Appointment Created</td>
            <td>
              <input type="checkbox"  /> Enabled<br />
              <input type="checkbox"  /> Staff<br />
              <input type="checkbox"  /> Patient
            </td>
            <td>
              Appointment has been created for Patient: {'{{patient_name}}'} ({'{patient_id}'}). Appointment Date: {'{{appointment_date}}'} With Doctor Name: {'{{doctor_name}}'}.
            </td>
            <td>
              Dear {'{{patient_name}}'} ({'{patient_id}'}) your appointment has been created with Doctor: {'{{doctor_name}}'}.
            </td>
          </tr>
           {/* Appointment Created */}
           <tr>
            <td>Appointment Created</td>
            <td>New Appointment Created</td>
            <td>
              <input type="checkbox"  /> Enabled<br />
              <input type="checkbox"  /> Staff<br />
              <input type="checkbox"  /> Patient
            </td>
            <td>
              Appointment has been created for Patient: {'{{patient_name}}'} ({'{patient_id}'}). Appointment Date: {'{{appointment_date}}'} With Doctor Name: {'{{doctor_name}}'}.
            </td>
            <td>
              Dear {'{{patient_name}}'} ({'{patient_id}'}) your appointment has been created with Doctor: {'{{doctor_name}}'}.
            </td>
          </tr>
           {/* Appointment Created */}
           <tr>
            <td>Appointment Created</td>
            <td>New Appointment Created</td>
            <td>
              <input type="checkbox"  /> Enabled<br />
              <input type="checkbox"  /> Staff<br />
              <input type="checkbox"  /> Patient
            </td>
            <td>
              Appointment has been created for Patient: {'{{patient_name}}'} ({'{patient_id}'}). Appointment Date: {'{{appointment_date}}'} With Doctor Name: {'{{doctor_name}}'}.
            </td>
            <td>
              Dear {'{{patient_name}}'} ({'{patient_id}'}) your appointment has been created with Doctor: {'{{doctor_name}}'}.
            </td>
          </tr>
        </tbody>
      </table>

      {/* Save Button */}
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <button 
          onClick={handleSave} 
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default System_notifi_settings;
