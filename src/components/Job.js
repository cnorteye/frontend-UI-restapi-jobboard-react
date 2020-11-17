import React from 'react';


var jobButton ={
  background: '#a2b8a6',
  border: 'none',
  color: 'white',
  padding: '15px',
  fontSize: '10px',
  margin: '5px'
}

const Job = ({ job, removeJob, editJob, editing }) => (
    <div className='container'>
    <div className='row justify-content-center'>
    <div className="col-lg-4">
    <div className="job mb-4" key={job.id}>
      <h4>{job.company}</h4>
      <p>{job.position}</p>
      <p>{job.description}</p>

      {editing ? (null
      ) : (
          <button
            style={jobButton}
              onClick={() => {editJob(job)}}
          >Edit</button>
      )}

      <button style={jobButton} onClick={() => removeJob(job.id)}>Remove</button>
    </div>
    </div>
    </div>
    </div>
);

export default Job;