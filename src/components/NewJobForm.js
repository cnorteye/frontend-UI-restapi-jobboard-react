import React, { useState } from 'react';

var divStyle = {
  padding: "20px",
  margin: "20px"
}

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
          <div className="container-fluid mt-5"> 
           <b> <label className="m-2">  Company</label></b>
            <input className="mr-3" type="text" name="company" value={job.company} onChange={handleInputChange} ></input>

            <b> <label className="m-2" >Position</label></b>
            <input className="mr-3" type="text" name="position" value={job.position} onChange={handleInputChange} ></input>

            <b><label className="m-2" >Description</label></b>
            <input className="mr-3" type="text" name="description" value={job.description} onChange={handleInputChange} ></input>
            <button className="m-4" type="button" className="btn btn-info">Create Job</button>
        </div>
      </form>
  )
};

export default NewJobForm;