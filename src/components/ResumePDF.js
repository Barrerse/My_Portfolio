import React from 'react';
import './ResumePDF.css';
import ResumePDF from '../assets/Sebastian Barrera_Resume_.pdf';

const Resume = () => {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <a href={ResumePDF} download="Sebastian Barrera_Resume_.pdf">
        <button className="download-btn">Download</button>
      </a>
      <object data={ResumePDF} type="application/pdf" width="100%" height="800px">
        <p>Sorry, your browser does not support embedded PDFs.</p>
        <p><a href={ResumePDF}>Click here to download the PDF.</a></p>
      </object>
    </div>
  );
};

export default Resume;
