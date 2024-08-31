'use client'
import GuideBox from '@/components/GuideBox';
import React, { useEffect } from 'react';

const ETLPage = () => {
   return (
    <div className="flex flex-row">
      <div className='w-3/4'>
        <iframe
          src='http://localhost:6789'
          title='ETL'
          width='100%'
          height='600px'
          style={{ border: 'none' }}
        />
      </div>
      <div className='w-1/4 ml-4 border'>
        <GuideBox text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in vulputate elit. Donec lobortis eu lorem non accumsan. Phasellus varius arcu at velit pellentesque, bibendum ullamcorper diam elementum. Aenean imperdiet leo tellus, eget laoreet ante ultrices eu. Etiam finibus, quam sit amet placerat vulputate, augue nisi suscipit dolor, suscipit convallis magna tellus a lectus. Aliquam erat volutpat. Maecenas rutrum euismod quam, a finibus erat condimentum a. Curabitur arcu orci, vehicula vel turpis non, iaculis maximus massa. Fusce nulla lectus, varius ac quam nec, aliquet sollicitudin arcu. Donec mattis mollis ante, varius sollicitudin libero semper eu. Integer pellentesque nunc et ex imperdiet posuere. Aenean et tellus ut augue semper eleifend at pellentesque turpis.

Etiam finibus ligula ac mollis sagittis. Phasellus vitae mauris blandit, malesuada leo quis, finibus ligula. Sed iaculis justo eu auctor tristique. Mauris ut mi risus. Sed tincidunt ac ante vel malesuada. Nullam sed viverra risus. Proin vel nisi orci. Aenean faucibus purus vitae elementum malesuada. Nullam vehicula, massa id sollicitudin vulputate, felis tortor blandit libero, nec venenatis erat nibh in ex. Mauris egestas lacus venenatis nibh ultrices fringilla. Nulla diam leo, interdum id dolor at, consequat mattis ante.

Curabitur elementum quam id nisi consectetur ultrices. Phasellus nunc massa, varius nec tellus nec, convallis interdum arcu. Donec consequat leo sit amet nunc rutrum volutpat. Cras ac scelerisque purus, nec ornare ex. Phasellus molestie eros eu sem maximus, sed placerat nibh ultrices. Curabitur eu vestibulum tortor. Donec varius placerat neque quis hendrerit. Suspendisse non sapien id leo vehicula congue. Mauris venenatis orci non elit posuere commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Donec orci dui, finibus eget consequat id, finibus at magna. Donec fringilla in eros eget interdum. Vestibulum vitae orci quis urna sollicitudin luctus sed ut lectus. Suspendisse potenti. Nulla bibendum rutrum tincidunt. Etiam pulvinar et ligula nec imperdiet. Nam accumsan posuere augue sed egestas. Ut mi libero, euismod a erat nec, pellentesque pellentesque felis. Fusce nisi tortor, luctus sed ex at, euismod sollicitudin tortor. Sed eu dolor vel dolor feugiat tempus sed sit amet purus. In velit leo, aliquam vel suscipit commodo, interdum quis quam. Morbi mattis tellus non placerat aliquam.

Pellentesque urna diam, egestas id lobortis tincidunt, laoreet quis leo. Fusce ut mauris vel ante rutrum consectetur sit amet a sem. Donec maximus quam arcu, a imperdiet diam eleifend sed. Aenean dignissim mauris ac est tincidunt, at rhoncus ligula tincidunt. Vivamus tempus neque nulla, vitae imperdiet nisi pellentesque eu. Etiam ultricies gravida nisl eget eleifend. Curabitur ipsum leo, fringilla et tortor ac, dictum consequat lorem. Maecenas semper tincidunt bibendum. Vestibulum mattis ipsum mauris, id consectetur mauris scelerisque ac. Fusce cursus posuere ligula semper tincidunt." />
      </div>
    </div>
  );
}

export default ETLPage;
