import React, { useEffect } from 'react';
import './index.scss';

const DisplayBoard = ({ numberOfUsers, getAllUsers }) => {
  useEffect(() => {
    getAllUsers();
  }, [numberOfUsers]);

  return (
    <div className='display-board p-4'>
      <h4>No. of Users</h4>
      <div className='number'>{numberOfUsers}</div>
      <div className='btn'>
        {/* <button
          type='button'
          onClick={(e) => getAllUsers()}
          className='btn btn-primary'
        >
          Display all user info
        </button> */}
      </div>
    </div>
  );
};

export default DisplayBoard;
