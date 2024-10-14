import React from 'react'
import { Box, Button, Link } from '@mui/material';
import DocPage from '@/components/page-template/DocPage';
import { introToEtlDocs } from '@/constants';

const SummaryPage = () => {
  return (
    <Box>
      <DocPage url={introToEtlDocs['Summary']} />
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button component={Link} href='/' variant="contained">
          Exit
        </Button>
      </Box>
    </Box>
  )
}

export default SummaryPage;
