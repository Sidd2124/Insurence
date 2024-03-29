import PhoneInput from "react-phone-input-2";
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Forms.css'

import Naresh from '../Logo.png';

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

import Header from '../Header/Header'
import axios from 'axios';

const FormerEntry = (props) => {
  const date=new Date()
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  
    const [Number, setNumber] = useState("");
    const [Name, setName] = useState("");
    const [InsurenceDocument, setInsurenceDocument] = useState(null); 
    const [ImageFile, setImageFile] = useState("");
    const [Dates, SetDate] = useState(formattedDate);
    const[AdharOne,SetAdharOne]=useState("")
    const[AdharTwo,SetAdharTwo]=useState("")
    const[FarmwrInsurenceNumber,SetFarmwrInsurenceNumber]=useState("")
    const[GoMathaFront,SetGoMathaFront]=useState("")
    const[GomathBack,SetGoMathaBack]=useState("")
    const[GomathaRight,SetGomathaRight]=useState("")
    const[GoMathaLeft,SetGoMathaLeft]=useState("")
    const[IsPosting,SetIsPosting]=useState(true)
    
   
 
    
    

    const InsurenceNumber=(e)=>{
SetFarmwrInsurenceNumber(e.target.value)
    }

   
    
    
  
    
const CowFront=(e)=>{

    const file = e.target.files[0];

    if (file) {
   
      const reader = new FileReader();
      reader.onload = function(event) {
      
        SetGoMathaFront(event.target.result);
      };
      reader.readAsDataURL(file);
    }

}
const CowBack=(e)=>{
    
    const file = e.target.files[0];

    if (file) {
   
      const reader = new FileReader();
      reader.onload = function(event) {
      
        SetGoMathaBack(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  

    
}
const CowRight=(e)=>{
    const file = e.target.files[0];

    if (file) {
   
      const reader = new FileReader();
      reader.onload = function(event) {
      
        SetGomathaRight(event.target.result);
      };
      reader.readAsDataURL(file);
    }


    
}
const CowLeft=(e)=>{
    
    const file = e.target.files[0];

    if (file) {
   
      const reader = new FileReader();
      reader.onload = function(event) {
      
        SetGoMathaLeft(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  

    
}
   const AdharFront=(e)=>{
    const file = e.target.files[0];

    if (file) {
   
      const reader = new FileReader();
      reader.onload = function(event) {
      
        SetAdharOne(event.target.result);
      };
      reader.readAsDataURL(file);
    }



   }

   const AdharBack=(e)=>{
    const file = e.target.files[0];

    if (file) {
   
      const reader = new FileReader();
      reader.onload = function(event) {
      
        SetAdharTwo(event.target.result);
      };
      reader.readAsDataURL(file);
    }
   }
        

          
    
      
    
    const updatePhoneNumber = (value) => {
        setNumber(value);
    };

    const UpdateDate = (e) => {
        SetDate(e.target.value);
    }

    const UpdateName = (e) => {
        setName(e.target.value);
    };

    const UpdateDocument = (e) => {
      const file = e.target.files[0];
      if (file) {
   
        const reader = new FileReader();
        reader.onload = function(event) {
        
          setInsurenceDocument(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
        

    const UpdatePic = (e) => {
        const file = e.target.files[0];
        
        if (file) {
   
          const reader = new FileReader();
          reader.onload = function(event) {
          
            setImageFile(event.target.result);
          };
          reader.readAsDataURL(file);
        }
       
    };

    

const Submit = async (event) => {
  event.preventDefault();

  if (Name === "" || Number === "") {
    alert("Enter Valid Name/Number")
    return;
  }
  SetIsPosting(false);

  const id = uuidv4();

  try {
    const response = await axios.post('https://dataapi-36b92-default-rtdb.firebaseio.com/data.json', {
      id: id,
      Name: Name,
      Number: Number,
      ImageURL: ImageFile,
      InsuranceDate: Dates,
      InsuranceDocument: InsurenceDocument,
      AdharDocumentFront: AdharOne,
      AdharDocumentBack: AdharTwo,
      InsurenceNo: FarmwrInsurenceNumber,
      AavuFront: GoMathaFront,
      AavuBack: GomathBack,
      AavuRight: GomathaRight,
      AavuLeft: GoMathaLeft
    });

    if (response.status === 200) {
      console.log('Data Posted Successfully');
      const { history } = props;
      history.push("/");
    } else {
      throw new Error('Failed to add product');
    }
  } catch (error) {
    console.error('Error adding product:', error);
    SetIsPosting(true); // Set IsPosting back to true in case of an error
  }
};

    return (
        <div className="FormsTop"> 
            <img src={Naresh} alt="Company Logo" className="Ok"/>
            <Header/>
{IsPosting===false?<div className="Adding">
<ClimbingBoxLoader color="#36d7b7" />
<h3 className="Typing">New Farmer Adding......</h3>

</div>:
            <form onSubmit={Submit} className="form">
                <h3>Enter Farmer Name</h3>
                  
                <input type='text' value={Name} onChange={UpdateName} placeholder="Former's Name" />
                <h3>Upload Farmer Photo</h3>
                <input type="file"  onChange={UpdatePic} />
                <h3>Upload Insurance Document</h3>
                <input type='file' onChange={UpdateDocument} />
                <h3>Upload Adhar Front Side</h3>
                <input type='file' onChange={AdharFront} />
                <h3>Upload Adhar Back  Side</h3>
                <input type='file' onChange={AdharBack} />
                <h3>Cow front Side Photo</h3>
                <input type='file' onChange={CowFront} />
                <h3>Cow Back Side Photo</h3>
                <input type='file' onChange={CowBack} />
                <h3>Cow Left Side Photo</h3>
                <input type='file' onChange={CowLeft} />
                <h3>Cow Right Side Photo</h3>
                <input type='file' onChange={CowRight} />
                <h3>Insurence Tag Number</h3>
                <input type='text' onChange={InsurenceNumber} placeholder="Enter Tag No" />
                <h3>Insurence Date</h3>

                <input  onChange={UpdateDate} type="date"/>
             
                <h3>Former Contact </h3>
                <PhoneInput country={"in"} value={Number} placeholder='Enter Former Contact Number' onChange={updatePhoneNumber} />
                <button type='submit'>Submit</button>
            </form>}
          


        </div>
    );
};

export default FormerEntry;
