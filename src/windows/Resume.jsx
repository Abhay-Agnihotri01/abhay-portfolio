// import { WindowControls } from "#components"
// import WindowWrapper from "#hoc/WindowWrapper"
// import { Download } from "lucide-react"
// import { Document, Page,pdfjs } from 'react-pdf';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

// const Resume = () => {
//   return (
//     <>
//     <div id="window-header">
//       <WindowControls target="resume"/>
//       <h2>Resume.pdf</h2>
//       <a href="files/AbhayResume.pdf" download className="cursor-pointer" title="Download Resume"><Download className="icon"/></a>
//     </div>

//     <Document file="files/AbhayResume.pdf">
//         <Page pageNumber={1}  renderTextLayer renderAnnotationLayer/>
//       </Document>

//     </>
//   )
// }

// const ResumeWindow = WindowWrapper(Resume, 'resume')

// export default ResumeWindow

import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import { Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <div className="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setScale(prev => Math.max(0.5, prev - 0.1))}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>
            <span className="text-xs w-12 text-center font-medium">{Math.round(scale * 100)}%</span>
            <button
              onClick={() => setScale(prev => Math.min(2.0, prev + 0.1))}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>
          </div>

          {numPages && (
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-1 hover:bg-gray-200 disabled:opacity-50 rounded"
              >
                <ChevronLeft size={16} />
              </button>
              <span>{currentPage} / {numPages}</span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(numPages, prev + 1))}
                disabled={currentPage === numPages}
                className="p-1 hover:bg-gray-200 disabled:opacity-50 rounded"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
          <a href="files/AbhayResume.pdf" download className="cursor-pointer" title="Download Resume">
            <Download className="icon" />
          </a>
        </div>
      </div>

      {/* <div className="flex-1 h-full w-full overflow-auto bg-gray-100 p-4 flex flex-col items-center custom-scrollbar"> */}
      <div className="flex-1 overflow-auto bg-gray-100 p-4 flex flex-col items-center custom-scrollbar" style={{ width: '800px', height: '540px' }}>
        <Document file="files/AbhayResume.pdf" onLoadSuccess={onDocumentLoadSuccess} className="flex flex-col items-center">
          <Page
            pageNumber={currentPage}
            renderTextLayer
            renderAnnotationLayer
            className="shadow-lg"
            width={750}
            scale={scale}
          />
        </Document>
      </div>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow

