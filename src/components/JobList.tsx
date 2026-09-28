import { Container, Box } from '@mui/material';

export const JobList = (props) => {
  const { jobs } = props;

  return (
    <Container>
      {jobs.map((job) => {
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              textAlign: 'left',
              fontSize: '16px',
              padding: '20px',
              margin: '20px',
              borderRadius: ' 8px',
              boxShadow: '4px 4px 4px 1px rgb(0 0 0 / 20%)',
            }}
          >
            <Box>{`Company: ${job.companyName}`}</Box>
            <Box>{`Location: ${job.location}`}</Box>
            <Box>{`Posted: ${job.postedTime}`}</Box>
            <Box
              style={{
                overflowWrap: 'anywhere',
                // wordBreak: 'break-word',
              }}
            >{`LinkedIn Post: ${job.jobUrl}`}</Box>
            <Box
              style={{
                overflowWrap: 'anywhere',
                // wordBreak: 'break-word',
              }}
            >
              Apply:{' '}
              <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                {job.applyUrl}
              </a>
            </Box>
          </Box>
        );
      })}
    </Container>
  );
};
