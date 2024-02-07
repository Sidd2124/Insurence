import React, { useContext } from 'react';
import './Docs.css';


import Context from '../Context/Context'

const DocsItem = ({ Info }) => {
    const { Name, Number, InsurenceStatus, InsurenceDocument, Image, id } = Info;
    const {FinelRemove}=useContext(Context)

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
            if (InsurenceDocument.type === 'application/pdf') {
                // Handle downloading a pdf file
                const url = window.URL.createObjectURL(InsurenceDocument);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${Name}_Insurence_Copy.pdf`; 
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            } else if (InsurenceDocument.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                // Handle downloading a docx file
                const url = window.URL.createObjectURL(InsurenceDocument);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${Name}_Insurence_Copy.docx`; 
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
    

    const handleRemove = () => {
        FinelRemove(id);
    };

    return (
        <div className="responsive-container">
            <img src={Image} alt="Former Pic" className="former-pic" />
            <div className="details">
                <h1 className="former-name">{Name}</h1>
                <p className="former-number">Mobile Number: {Number}</p>
                <p className="insurance-status">Insurance Status: {InsurenceStatus}</p>
                <div className='Button'>
                <button onClick={handleDownload} className="download-btn">Download Document</button>
                <button onClick={handleRemove} className="download-btn">Remove Former</button>
                </div>
            </div>
        </div>
    );
};

export default DocsItem;
