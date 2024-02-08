import React, { useContext } from 'react';
import DocsItem from "../DocsItems/Docsitems";

import "react-phone-input-2/lib/style.css";
import Naresh from '../Logo.png';


import Header from '../Header/Header'
import RemoveItemOnes from './RemoveItemsOnes'
import Context from '../Context/Context'


const Removes = () => {
   const{RemovedFarmers}=useContext(Context)
  

    
  
    return (
        <div className="container">
                <Header/>
            <img src={Naresh} alt="Company logo" className="logo" />
            
      

         
         
       
            <div className="docs-list">
            {RemovedFarmers.map((each, index) => <RemoveItemOnes key={index} Info={each}  />)}
            </div>
          
            
        </div>
    );
};

export default Removes;
