import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFGenerator from './pdf';
import { Button } from '@/components/ui/button';

const PdfDownloadButton = () => {
  return (
    <PDFDownloadLink document={<PDFGenerator />} fileName={`AvensiaCV_.pdf`} style={{ textDecoration: 'none' }}>
      {({ loading }) => {
        return (
          <Button className="max-w-50 mb-5 font-bold shadow-lg/40 cursor-pointer">
            {loading ? 'loading...' : 'Download PDF'}
          </Button>
        );
      }}
    </PDFDownloadLink>
  );
};

export default PdfDownloadButton;
