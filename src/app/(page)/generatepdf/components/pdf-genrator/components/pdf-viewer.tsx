import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFGenerator from './pdf';

const PdfViewer = () => {
  console.log('PdfViewer test 123');
  return (
    <PDFViewer
      showToolbar={false}
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <PDFGenerator />
    </PDFViewer>
  );
};

export default PdfViewer;
