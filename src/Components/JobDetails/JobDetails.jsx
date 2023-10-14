import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../Utility/LocalSrorage";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs=useLoaderData();
    const{id}=useParams();
    const idInt=parseInt(id);
    const job=jobs.find(job => job.id === idInt);
    console.log(id,jobs);

    const handleApplyJob=()=>{
        saveJobApplication(idInt);
        toast('Job application saved');
    }

    return (
        <div>
            <h2>Job Details:{id}</h2>
            <div className="grid gap-4 md:grid-cols-4 mb-2">
                <div className="border md:col-span-3">
                   
                   <p><span className="font-semibold">Job description:</span> {job.job_description}</p> 
                   <br />
                   <p> <span className="font-semibold">Job responsibility:</span> {job.job_responsibility}</p> 
                   <br />
                   <p> <span className="font-semibold">Educational requirements: </span> {job.educational_requirements}</p> 
                   <br />
                  <p className="font-semibold mb-4">Experiences:{job.experiences} </p>

                </div>
                <div className="border ">
                    <h2 className="font-bold">Job Details</h2>
                    <hr />
                    <p>Salary:{job.salary}</p>
                    <p className="mb-2">Job Title:{job.job_title}</p>
                    <p className="font-semibold">Contact Information</p>
                    <hr />
                    
                    <button onClick={handleApplyJob} className="btn btn-accent w-full">Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;