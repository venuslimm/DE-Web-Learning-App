import React from 'react'
import DocPage from '@/components/page-template/DocPage';
import { introToEtlDocs } from '@/constants';

const OverviewPage = () => {
  return (
    <DocPage url={introToEtlDocs["Introduction"]} />
  )
}

export default OverviewPage;
