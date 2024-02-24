import React, { useContext } from 'react';

import "react-phone-input-2/lib/style.css";
import Naresh from '../Logo.png';

import { Redirect } from 'react-router-dom'

import Cookies from 'js-cookie';
import Header from '../Header/Header'
import RemoveItemOnes from './RemoveItemsOnes'
import Context from '../Context/Context'


const Removes = () => {
   const{RemovedFarmers}=useContext(Context)
  

   const Valide=Cookies.get("Token")
   if(Valide===undefined){
       return <Redirect to="Login"/>
   }
   
  
    return (
        <div className="container">
                <Header/>
            <img src={Naresh} alt="Company logo" className="logo" />
            
      
<h1>Removed Farmer's</h1>
         
         
       {RemovedFarmers.length===0&&<p>No Farmers Removed Yet😉</p>}
            <div className="docs-list">
            {RemovedFarmers.map((each, index) => <RemoveItemOnes key={index} Info={each}  />)}
            </div>
          
            
        </div>
    );
};

export default Removes;
