import React, { useEffect, useState } from "react";
import "./Product.scss";
import Pagination from "../../Components/Pagination";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link, useLocation } from "react-router-dom";
import ProductFilter from "../../Components/ProductFilter";
import Card from "../../Components/Card";

import Data from "../../Components/Card/data";
import axios from "axios";


const Products = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curretnPage, setCurretPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);
  const [cat, setCat] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const location = useLocation();
  const category = () => {
    return location.pathname.split("/")[3];
  };
  category()
  useEffect(()=>{
    setCat(category)
  },[category])
  console.log(cat)




  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      category();
      const res = await axios.get( cat ? `http://localhost:4000/api/products?category=${cat}`:"http://localhost:4000/api/products");
      // :
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, [cat]);

  //current post
  const indexOfLastPost = curretnPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => {
    setCurretPage(pageNumber);
  };

  //return loader
  if (loading) {
    return (
      <div className="text-center loader">
        <div className="spinner-border ">
          <span className="sr-only "></span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="container-fluid p-head py-4">
        <div className="container p-head-1">
          <h2 style={{ color: "#111111", fontWeight: "bold" }}>Products</h2>

          
          <p className="mb-0">
            <Link to="/productDetail">Home</Link> <KeyboardArrowRightIcon sx={{ fontSize: 16, color:"black", marginTop:-0.5,}}/> Products

          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row container fil">
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <div className="container">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="col-lg-4">
          Showing {indexOfFirstPost === 0 ? 1 : indexOfFirstPost}-
          {indexOfFirstPost + currentPosts.length} of{" "}
          <span>{posts.length}</span> results
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          Sort by Price:
          <select name="" id="">
            <option value="">all</option>
            <option value="">low to high</option>
            <option value="">high to low</option>
          </select>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-2 fil">
          <ProductFilter />
        </div>

        <div className="col-lg-8">
          <div className="contaiiner data">
            {currentPosts.map((post) => {
              return (
                <Card
                  key={post._id}
                  img={post.img}
                  title={post.title}
                  price={post.price}
                  col={post.color}

                  // col={post.color[2]}
                />
              );
            })}

            {posts.length === 0 ? (<p>No Products</p>) : null}
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-8">
          <br />
          <br />
          <div className="pagination d-flex justify-content-center">
            <Pagination
              postPerPage={postPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Products;
