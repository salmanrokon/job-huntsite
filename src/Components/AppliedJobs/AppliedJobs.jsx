import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../Utility/LocalSrorage";



const AppliedJobs = () => {
    const jobs=useLoaderData();
    useEffect(()=>{
        const storedJobIds=getStoredApplication();
        if(jobs.length > 0) {
            const jobsApplied=jobs.filter(job=>storedJobIds.includes(job.id));
            console.log(jobsApplied);
        }
    },[])
    return (
        <div>
            <h2>Jobs I have applied</h2>
        </div>
    );
};

export default AppliedJobs;