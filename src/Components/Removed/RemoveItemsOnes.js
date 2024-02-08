


const RemoveItemOnes = ({ Info }) => {
    const { Name, Number, InsurenceStatus, InsurenceDocument,InsurenceDate, ImageURL, } = Info;
    

    const handleDownload = () => {
        if (typeof InsurenceDocument === 'string') {
            // Handle downloading a docx file
            if (InsurenceDocument.toLowerCase().endsWith('.docx')) {
                const a = document.createElement('a');
                a.href = InsurenceDocument;
                a.download = `${Name}_Insurence_Copy.docx`; 
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                alert('Invalid document format.');
            }
        } else if (InsurenceDocument instanceof Blob) {
            // Handle downloading a pdf or docx file
            if (InsurenceDocument.type === 'application/pdf' || InsurenceDocument.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                const url = window.URL.createObjectURL(InsurenceDocument);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${Name}_Insurence_Copy.${InsurenceDocument.type === 'application/pdf' ? 'pdf' : 'docx'}`; 
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            } else {
                alert('Invalid document format.');
            }
        } else {
            alert('Invalid document format.');
        }
    };

   

    return (
        <div className="responsive-container">
            <img src={ImageURL} alt="Former Pic" className="former-pic" />
            <div className="details">
                <h1 className="former-name">{Name}</h1>
                <p className="former-number">Mobile Number:+ {Number}</p>
                <p className="insurance-status">Insurance Status: {InsurenceStatus}</p>
                <p>InsuranceDate:{String(InsurenceDate).split("-").reverse().join("-")}</p>
                <div className='Button'>
                    <button onClick={handleDownload} className="download-btn">Download Document</button>
                    
                </div>
            </div>
        </div>
    );
};

export default RemoveItemOnes;
