import { Box, Button, Container, Pagination } from '@mui/material';
import { useState } from 'react';
import { JobList } from '../components/JobList';
// import { testJobs } from './testJobs';

export const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allJobs, setAllJobs] = useState([]);
  console.log('allJobs', allJobs);
  const [pageNumber, setPageNumber] = useState(1);
  console.log('page', pageNumber);
  const jobsToDisplay = allJobs.slice((pageNumber - 1) * 10, pageNumber * 10);

  const getJobs = async () => {
    setIsLoading(true);

    // This is currently using mock data from a test endpoint while I build this out since Apify charges $
    const response = await fetch('http://localhost:3000/jobs/test');
    const mockJobs = await response.json();
    console.log('mockJobs', mockJobs);
    setAllJobs(mockJobs);
    setPageNumber(1);
    setIsLoading(false);
  };

  const handlePageChange = (event, page) => {
    console.log('event.target', event.target);
    console.log('value', page);
    setPageNumber(page);
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Welcome to your Job Scraper</h1>
      <Box sx={{ maxWidth: '700px', marginBottom: '20px' }}>
        Currently all you need to do is click this super awesome button and I'll find jobs based on
        your (currently hard-coded but soon to be dynamic) search criteria.
      </Box>
      <Box sx={{ margin: '12px' }}>
        <Button
          loading={isLoading}
          loadingIndicator="Getting Jobs…"
          variant="contained"
          onClick={getJobs}
        >
          Refresh Jobs
        </Button>
      </Box>
      <JobList jobs={jobsToDisplay} />
      {allJobs.length > 10 ? (
        <Pagination
          count={Math.ceil(allJobs.length / 10)}
          color="primary"
          page={pageNumber}
          onChange={handlePageChange}
        />
      ) : null}
    </Container>
  );
};
