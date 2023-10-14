import { BiSolidLocationPlus } from 'react-icons/bi';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Job = ({job}) => {
    const{id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description}=job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py-2 font-semibold border rounded border-[#7E90FE] mr-2">{remote_or_onsite}</button>
        <button className="px-5 py-2 font-semibold border rounded border-[#7E90FE]">{job_type}</button>
    </div>
    <div className='flex gap-9'>
      <div className='flex items-center gap-2'>
        <BiSolidLocationPlus></BiSolidLocationPlus>
        <p>{location}</p>
    </div>
    <div className='flex items-center'>
      <AiOutlineDollarCircle></AiOutlineDollarCircle>
      <p>Salary:{salary}</p>
    </div>
    </div>
    <div className="card-actions">
     
        <Link to={`/job/${id}`}>
        <button className="btn btn-primary">View Details</button>
        </Link>
     
    </div>
  </div>
</div>
    );
};

export default Job;