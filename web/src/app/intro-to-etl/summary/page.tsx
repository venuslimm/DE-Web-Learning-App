import React from 'react'
import { Button, Link } from '@mui/material';
import DocPage from '@/components/page-template/DocPage';
import { introToEtlDocs } from '@/constants';

const SummaryPage = () => {
  return (
    <div>
      <DocPage url={introToEtlDocs['Summary']} />
      <div className="flex justify-end">
        <Button>
          <Link href='/'>
            Exit
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default SummaryPage;
