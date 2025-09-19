import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase'
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      const { data, error } = await supabase.from('jobs').select('*');
      if (error) {
        console.error('Error loading jobs:', error.message);
      } else {
        setJobs(data);
      }
    }
    loadJobs();
  }, []);

  return (
    <>
    <Header />
    <Footer />
    </>
  );
}

export default App;
