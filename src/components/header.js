import React from 'react';

const Navbar = (props) => {
   const {handle}=props;
   let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
  return (
    <div className="nav">
        <div className="searchbar">
            <input onChange={handle} type="date" min="2020-03-14" max={yyyy + '-' + mm + '-' + dd} id="search" placeholder="search a date"></input>
            
        </div>
    </div>
  );
}

export default Navbar;