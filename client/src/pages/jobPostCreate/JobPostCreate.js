import React, { useContext, useState } from "react";
import Category from "../../components/category/Category";
import LeftBar from "../../components/leftBar/LeftBar";
import Navbar from "../../components/navbar/Navbar";
import RecentPost from "../../components/recentPost/RecentPost";
import "./jobPostCreate.scss";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";

function JobPostCreate() {
  const { user } = useContext(AuthContext);

  //Create Job Post
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [noOfEmployee, setNoOfEmployee] = useState("");
  const [contractType, setContractType] = useState("");
  const [jobType, setJobType] = useState("");
  const [aboutJob, setAboutJob] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [aboutRole, setAboutRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob = {
      position,
      companyName,
      location,
      salaryRange,
      companyType,
      noOfEmployee,
      contractType,
      jobType,
      aboutJob,
      aboutCompany,
      aboutRole,
    };
    console.log(newJob);
    try {
      const res = await axios.post("jobPosts/create", newJob);
      console.log(res);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="jobPostCreate">
      <Navbar />
      <div className="jpcHeader">This is header</div>

      <div className="jpcWrapper">
        <div className="jpcLeftSide">
          <LeftBar />
          <RecentPost />
          <Category />
        </div>

        <div className="jpcRightSide">
          <div className="jpcWholeContainer">
            <span className="jpcTitle">Post job requirements here!</span>
            <hr className="jpcHr" />
            <img src="/assets/cover.jpeg" alt="" className="jpcImg" />

            <label className="jpcIconAndTxt" htmlFor="fileInput">
              <ImageSearchOutlinedIcon className="jpcImgIcon" />
              <span className="jpcSelectImgTxt">Select company logo Image</span>
            </label>
            <input type="file" id="fileInput" style={{ display: " none" }} />

            <form className="jpcColumnCon" onSubmit={handleSubmit}>
              <span className="jpcCompanyName jpc">Position</span>
              <input
                type="text"
                className="jpcCompanyNameInput jpcInput"
                onChange={(e) => setPosition(e.target.value)}
              />

              <span className="jpcCompanyName jpc">Company Name</span>
              <input
                type="text"
                className="jpcCompanyNameInput jpcInput"
                onChange={(e) => setCompanyName(e.target.value)}
              />

              <span className="jpcCompanyLocation jpc">Company Location</span>
              <input
                type="text"
                className="jpcCompanyLocationInput jpcInput"
                onChange={(e) => setLocation(e.target.value)}
              />

              <span className="jpcCompanyLocation jpc">Salary Range</span>
              <input
                type="text"
                className="jpcCompanyLocationInput jpcInput"
                onChange={(e) => setSalaryRange(e.target.value)}
              />

              <span className="jpcCompanyLocation jpc">Company Type</span>
              <input
                type="text"
                className="jpcCompanyLocationInput jpcInput"
                onChange={(e) => setCompanyType(e.target.value)}
              />

              <span className="jpcNoOfEmployee jpc">No of Employee</span>
              <input
                type="text"
                className="jpcNoOfEmployeeInput jpcInput"
                onChange={(e) => setNoOfEmployee(e.target.value)}
              />

              <span className="jpcNoOfEmployee jpc">Contract Type</span>
              <input
                type="number"
                className="jpcNoOfEmployeeInput jpcInput"
                onChange={(e) => setContractType(e.target.value)}
              />

              <span className="jpcNoOfEmployee jpc">Job Type</span>
              <input
                type="number"
                className="jpcNoOfEmployeeInput jpcInput"
                onChange={(e) => setJobType(e.target.value)}
              />

              <span className="jpcAboutTheJob jpc">About The Job</span>
              <input
                type="text"
                className="jpcAboutTheJobInput jpcInput"
                onChange={(e) => setAboutJob(e.target.value)}
              />

              <span className="jpcAboutTheCompany jpc">About The Company</span>
              <input
                type="text"
                className="jpcAboutTheCompanyInput jpcInput"
                onChange={(e) => setAboutCompany(e.target.value)}
              />

              <span className="jpcAboutTheRole jpc">About The Role</span>
              <input
                type="text"
                className="jpcAboutTheRoleInput jpcInput"
                onChange={(e) => setAboutRole(e.target.value)}
              />

              {/* <span className="jpcRequirements jpc">Requirements</span>
              <input
                type="text"
                className="jpcRequirementsInput jpcInput"
                onChange={(e) => setRequirements(e.target.value)}
              />  */}

              <button className="jpcPostBut" type="submit">
                Create Job
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPostCreate;
