import GeneratePdfClient from './components/pdf-genrator/generatepdfclient';

export const dynamic = 'force-dynamic'; // Ensure server doesn't try to prerender

const GeneratePDF = () => {
  return <GeneratePdfClient />;
};

export default GeneratePDF;
