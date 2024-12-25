import React from 'react';
import '../../styles/Backuprestore.css';

const Backuprestore = () => {
  return (
    <div className='backup-restore-container'>
      <h1>Backup / Restore</h1>
      
      {/* Upload Table */}
      <div className='upload-section'>
        <h3>Upload From Local Directory</h3>
        <div className='upload-box'>
          <input type='file' id='fileUpload' className='file-input' />
          <label htmlFor='fileUpload' className='upload-label'>
            📂 Drop a file here or click
          </label>
          <button className='upload-button'>📤 Upload</button>
        </div>
      </div>
    </div>
  );
};

export default Backuprestore;
