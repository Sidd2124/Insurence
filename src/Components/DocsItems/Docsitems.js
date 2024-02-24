import React, { useContext } from "react";
import "./Docs.css";
import Context from "../Context/Context";

const DocsItem = ({ Info }) => {
  const {
    Name,
    Number,
    InsurenceDocument,
    InsurenceDate,
    ImageURL,
    id,
    AdharDocumentFront,
    AdharDocumentBack,
    InsurenceNo,
    AavuFront,
    AavuBack,
    AavuRight,
    AavuLeft
  } = Info;
  const { FinelRemove, RemoveingKarshak } = useContext(Context);


  const handleRemove = () => {
    FinelRemove(id);
    RemoveingKarshak({
      Name,
      Number,
      ImageURL,
      InsurenceDocument,
      InsurenceDate,
      AdharDocumentFront,
      AdharDocumentBack,
      InsurenceNo,
      AavuFront,
      AavuBack,
      AavuRight,
      AavuLeft
    });
  };

  const oneYearFromInsurenceDate = new Date(InsurenceDate);
  oneYearFromInsurenceDate.setFullYear(oneYearFromInsurenceDate.getFullYear() + 1);

  const currentDate = new Date();

  if (currentDate > oneYearFromInsurenceDate) {
    FinelRemove(id); 
  }


  
  
  
  

  return (
    <div className="responsive-container">
      <img src={ImageURL} alt="Former Pic" className="former-pic" />
      <div className="details">
        <h1 className="former-name">{Name}</h1>
        <p className="former-number">Mobile Number: {Number}</p>
        <p className="insurance-status">Insurance Number: {InsurenceNo}</p>
        <p>Insurance Date: {String(InsurenceDate).split("-").reverse().join("-")}</p>
        <div className="ButtonContainer">
        <div className="Button">
          <button className="download-btn"><a href={InsurenceDocument} download={`${Name}_Insurence_Copey`}>DownLoadInsurenceDocument</a></button>
          <button onClick={handleRemove} className="download-btn">
            Remove Former
          </button>
        </div>
        <div className="Button">
          <button className="download-btn"><a href={AdharDocumentFront} download={`${Name}_Adhar_Front_Pic`}>AdharFront Download</a></button>
          <button  className="download-btn">
          <a href={AdharDocumentBack} download={`${Name}_Adhar_Back_Pic`}>AdharBack Download</a>
          </button>
        </div>
        <div className="Button">
          <button className="download-btn"><a href={AavuFront} download={`${Name}_Cow_Front_Pic`}>Cow Front Pic</a></button>
          <button  className="download-btn">
          <a href={AavuBack} download={`${Name}_Cow_Back_Pic`}>Cow Back</a>
          </button>
        </div>
        <div className="Button">
          <button className="download-btn"><a href={AavuRight} download={`${Name}_Cow_Right_Pic`}>Cow Right Pic</a></button>
          <button  className="download-btn">
          <a href={AavuLeft} download={`${Name}_Cow_Left_Pic`}>Cow Left Pic</a>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DocsItem;
