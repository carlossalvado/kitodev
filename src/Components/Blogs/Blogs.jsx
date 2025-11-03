import React from "react";
import Blog from "./Blog";
import { blogsList } from "../../Utlits/blogList";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blogs = () => {
 
  return (
    <section className="blog__section overhid pt-120 pb-120" id="blog">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4 col-lg-3">
            <div className="project__head">
              <span
                className="common__sub"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                My Blogs
              </span>
              <h2
                className="fw-500 mt-3"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                Recent Posts
              </h2>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Blogs;
