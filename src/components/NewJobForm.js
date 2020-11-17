import React, { useState } from 'react';

const NewJobForm = props => {
  const [job, setJob] = useState(props.initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target
    setJob({ ...job, [name]: value })
  };

  return (
      <form onSubmit={event => {
        event.preventDefault()
        if (!job.company || !job.position || !job.description) return;
        props.addJob(job)
        setJob(props.initialFormState)
      }}>
        <label className="m-2"><b>Company</b></label>
        <input className="mr-3" type="text" name="company" value={job.company} onChange={handleInputChange} ></input>
        <label className="m-2"><b>Position</b></label>
        <input className="mr-3" type="text" name="position" value={job.position} onChange={handleInputChange} ></input>
        <label className="m-2"><b>Description</b></label>
        <input className="mr-3" type="text" name="description" value={job.description} onChange={handleInputChange} ></input>
        <button className="m-4 btn btn-info">Create Job</button>
      </form>
  )
};

export default NewJobForm;