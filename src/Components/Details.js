import React, { useState,useContext } from 'react';
import DocsItem from "./DocsItems/Docsitems";
import {Link} from 'react-router-dom'
import "react-phone-input-2/lib/style.css";
import Naresh from './Logo.png';
import Wall from './Logo2.png'
import './styles.css';


import Context from './Context/Context'

const Details = () => {
   const{FinelArray,}=useContext(Context)
   const [PhoneNumber,SetPhoneNumber]=useState("")

    
   const Phone=(e)=>{
    SetPhoneNumber(e.target.value)
   }

    const UpdatedDetails = FinelArray.filter((each) => String(each.Number).includes(PhoneNumber));

    return (
        <div className="container">
            <img src={Naresh} alt="Company logo" className="logo" />

           <Link to="/Entries">
          
           <button>
           Add Former Details
            </button></Link>

          {FinelArray.length===0?<div><h1>Plaese Add Formers Details</h1>
            <img src={Wall} alt="Farmer Logo" className='FarmerLogo'/>
            </div>:  <div className="docs-list">
                <input type='search' placeholder='Search Former By Phone Number' onChange={Phone} />
                {UpdatedDetails.map((each, index) => <DocsItem key={index} Info={each}  />)}
            </div>}
        </div>
    );
};

export default Details;
