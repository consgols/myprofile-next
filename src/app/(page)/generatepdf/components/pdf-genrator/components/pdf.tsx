import { Page, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import Header from './header';
import Name from './name';
import Section from './section';
import About from './about';
import JobExperience from './jobexperience';
import Skills from './skills';

Font.register({
  family: 'Poppins',
  fonts: [{ src: '/assets/fonts/regular.ttf' }, { src: '/assets/fonts/bold.ttf', fontWeight: 'bold' }],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Poppins',
    display: 'flex',
    fontSize: 12,
  },
  layout: {
    marginLeft: 36,
    marginRight: 36,
  },
  container: {
    display: 'flex',
  },
  name: {
    fontSize: 24,
    paddingLeft: 32,
    paddingRight: 32,
  },
  role: {
    fontSize: 12,
    paddingLeft: 32,
    paddingRight: 32,
  },
  h4: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 0,
  },
});

const PDFGenerator = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Header />
          <View style={styles.layout}>
            <Name />
            <Section title="About" hr={true}>
              <About aboutMe="With over 13 years of professional experience in web development, Cons has developed deep expertise in front-end technologies. This includes proficiency in modern web development tools and frameworks such as HTML5, CSS, Bootstrap, and React TypeScript. Cons is skilled at implementing dynamic, responsive, and user-friendly interfaces, utilizing AJAX, JSON, and various JavaScript libraries like jQuery, KnockoutJS, and jQuery Mobile." />
            </Section>
            <Section title="Avensia Projects" hr={true}>
              <JobExperience />
            </Section>
            <Section title="Skills" hr={true}>
              <Skills />
            </Section>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFGenerator;
