import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  return <div>
    <ul className="pagination dark" >
        {pageNumber.map(number => (
            <li key={number} className='page-item dark'>
                <div onClick={()=> paginate(number)} style={{cursor:'pointer'}} className="page-link dark">
                    {number}
                </div>
            </li>
        ))}
    </ul>
  </div>;
};

export default Pagination;
