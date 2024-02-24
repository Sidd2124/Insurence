
const RemoveItemOnes = ({ Info }) => {
  const {
    Name,
    Number,
    
    
    InsurenceDate,
    
    
  } = Info;




 


 

  return (
    <div className="responsive-container">
    
        <img src="https://i.ibb.co/d6PKpyJ/Screenshot-2024-02-24-142545-removebg-preview.png" alt="Former Pic" className="former-pic" />
     

      <div className="details">
        <h1 className="former-name">{Name}</h1>
        <p className="former-number">Mobile Number: {Number}</p>
        <p className="insurance-status">Insurance Status: Expired</p>
        <p>Insurance Date: {String(InsurenceDate).split("-").reverse().join("-")}</p>

       
      </div>
    </div>
  );
};

export default RemoveItemOnes;
