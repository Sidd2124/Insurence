import PhoneInput from "react-phone-input-2";
import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Forms.css'

import Naresh from '../Logo.png';

import Context from '../Context/Context'

import Header from '../Header/Header'

const FormerEntry = (props) => {
    const [Number, setNumber] = useState("");
    const [Name, setName] = useState("");
    const [InsurenceStatus, setInsurenceStatus] = useState("Active");
    const [InsurenceDocument, setInsurenceDocument] = useState(null); 
    const [ImageFile, setImageFile] = useState(null);
    const [Dates, SetDate] = useState("S");
    
    const { NewArray } = useContext(Context);
    
    const updatePhoneNumber = (value) => {
        setNumber(value);
    };

    const UpdateDate = (e) => {
        SetDate(e.target.value);
    }

    const UpdateName = (e) => {
        setName(e.target.value);
    };

    const UpdateStatus = (e) => {
        setInsurenceStatus(e.target.value);
    };

    const UpdateDocument = (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        setInsurenceDocument(file);
    };

    const UpdatePic = (e) => {
        const file =URL.createObjectURL( e.target.files[0]);
        setImageFile(file);
    };

    const Submit = (event) => {
        event.preventDefault();
        if (Name === "" || Number === "") {
            alert("Please Fill all the Details");
            return;
        }
    
        const id = uuidv4();
        
        

        
    
        NewArray({
            id: id,
            Name: Name,
            Number: Number,
            ImageURL: ImageFile,
            InsurenceDocument: InsurenceDocument,
            InsurenceStatus: InsurenceStatus,
            InsurenceDate: Dates,
        });
    
        const { history } = props;
        history.push("/");
    };
    

    return (
        <div className="FormsTop"> 
            <img src={Naresh} alt="Company Logo" className="Ok"/>
            <Header/>
            <form onSubmit={Submit} className="form">
                <h3>Enter Former Name</h3>
                <input type='text' value={Name} onChange={UpdateName} placeholder="Former's Name" />
                <h3>Upload Former Photo</h3>
                <input type="file" onChange={UpdatePic} />

                <h3>Upload Insurance Document</h3>
                <input type='file' onChange={UpdateDocument} />
                <h3>Insurance Status</h3>
                <select value={InsurenceStatus} onChange={UpdateStatus}>
                    <option value={"Active"}>Active</option>
                    <option value={"NotActive"}>NotActive</option>
                </select>
                <h3 >Insurance Date</h3>
                <input onChange={UpdateDate} type="date"/>
                <h3>Former Contact </h3>
                <PhoneInput country={"in"} value={Number} placeholder='Enter Former Contact Number' onChange={updatePhoneNumber} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default FormerEntry;
