import Grid from '@mui/material/Grid2';
import React, { useState } from 'react';
import 'react-photo-album/masonry.css';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './ByteBeatJan2024.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();
const Pages = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {props.children}
      {/* <p>Page number: {props.number}</p> */}
    </div>
  );
});

Pages.displayName = 'Pages';

const GeneralGallery = () => {
  const [index, setIndex] = useState(-1);
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const url =
    'https://storage.googleapis.com/eltorobattalion-web-public/D__WebFiles_HomeportDownloads_Library_1274_USNSCC%20Parent%20Handbook%202023_15DEC23%20(1).pdf';

  return (
    <Grid
      container
      sx={{ background: 'green' }}
      // justifyContent="center"
      // alignItems="center"
    >
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} style={{height:"733px"}}>
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={550}
          // minHeight={400}
          maxHeight={733}
          maxShadowOpacity={0.5}
          // showCover={true}
          // mobileScrollSupport={true}
        >
          {[...Array(numPages).keys()].map((pNum) => (
            <Pages key={pNum} number={pNum + 1}>
              <Page
                pageNumber={pNum + 1}
                width={550}
                height={773}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Pages>
          ))}
        </HTMLFlipBook>
      </Document>
    </Grid>
  );
};

export default GeneralGallery;
