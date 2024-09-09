import GuideBox from '@/components/GuideBox'
import NextButton from '@/components/NextButton';
import React from 'react'

// TODO: extract out
interface DocPageProps {
  params: {
    id: string;
  };
}

const DocPage = ({ params: { id } }: DocPageProps) => {
  const nextClickFn = () => {
    // TODO: Redirect to next page. Maybe we can store an array of pages in order
    console.log('redirect to next page');
  };

  return (
    <div>
      <div className='h-[580px]'>
        <GuideBox url={"/resources/tl_guide.pdf"} />
      </div>
      <NextButton onClickFn={nextClickFn} />
    </div>
  )
}

export default DocPage;
