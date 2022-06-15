import React from "react";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { Link } from "react-router-dom";
import "./category.scss";

function Category() {
  return (
    <div className="categoryListContainer">
      <span className="categoryContainerTitle">Blogs Categories</span>
      <hr className="clcHr" />
      <div className="categoryList">
        <CategoryOutlinedIcon className="clcKey" />
        <Link to={`/category/programming`} className="link">
          <span className="clcValue">Programming</span>
        </Link>
      </div>

      <div className="categoryList">
        <CategoryOutlinedIcon className="clcKey" />
        <Link to={`/category/dataScience`} className="link">
          <span className="clcValue">Data Science</span>
        </Link>
      </div>

      <div className="categoryList">
        <CategoryOutlinedIcon className="clcKey" />
        <Link to={`/category/cloudComputing`} className="link">
          <span className="clcValue">Cloud Computing</span>
        </Link>
      </div>

      <div className="categoryList">
        <CategoryOutlinedIcon className="clcKey" />
        <Link to={`/category/machineLearning`} className="link">
          <span className="clcValue">AI & Machine Learning</span>
        </Link>
      </div>

      <div className="categoryList">
        <CategoryOutlinedIcon className="clcKey" />
        <Link to={`/category/webDevelopment`} className="link">
          <span className="clcValue">Web Development</span>
        </Link>
      </div>

      <div className="categoryList">
        <CategoryOutlinedIcon className="clcKey" />
        <Link to={`/category/techNews`} className="link">
          <span className="clcValue">Tech News</span>
        </Link>
      </div>
    </div>
  );
}

export default Category;
