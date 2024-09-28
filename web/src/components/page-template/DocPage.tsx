import Guide from '@/components/Guide'
import NextButton from '@/components/NextButton';

const DocPage = () => {
  const nextClickFn = () => {
    // TODO: Redirect to next page. Maybe we can store an array of pages in order
    console.log('redirect to next page');
  };

  return (
    <div>
      <div className='h-[580px]'>
        <Guide url={"/resources/tl_guide.pdf"} />
      </div>
      <NextButton onClickFn={nextClickFn} />
    </div>
  )
}

export default DocPage;
