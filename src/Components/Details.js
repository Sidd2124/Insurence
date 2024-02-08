import React, { useState,useContext } from 'react';
import DocsItem from "./DocsItems/Docsitems";
import {Link} from 'react-router-dom'
import "react-phone-input-2/lib/style.css";
import Naresh from './Logo.png';

import './styles.css';
import Header from '../Components/Header/Header'

import Context from './Context/Context'

const Details = () => {
   const{FinelArray,}=useContext(Context)
   const [PhoneNumber,SetPhoneNumber]=useState("")

    
   const Phone=(e)=>{
    SetPhoneNumber(e.target.value)
   }

    const UpdatedDetails = FinelArray.filter((each) => String(each.Number).includes(PhoneNumber));

    const Hide = FinelArray.length === 0 ? { display: "none" } : { display: "block" };

    return (
        <div className="container">
                <Header/>
            <img src={Naresh} alt="Company logo" className="logo" />
            
      

          <input type='search' style={Hide} placeholder='Search Former By Phone Number' onChange={Phone} />
          {FinelArray.length===0?<div>
            <h1 className='Warning FarmerLogo'>Please Add Formers Details <Link to="/Entries" className="Link">
<button className='Buttons'>New Farmer</button>
</Link></h1>
           
            </div>:  
       
            <div className="docs-list">
            {UpdatedDetails.map((each, index) => <DocsItem key={index} Info={each}  />)}
            </div>
          
            }
        </div>
    );
};

export default Details;
