import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Work } from './components/Work';
import { Contact } from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </Layout>
  );
}

export default App;
