import React from 'react'
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase'

function JobListings() {
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
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong> — ${job.salary} - {job.commitment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobListings