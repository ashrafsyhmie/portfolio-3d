import thayyibPoster from '../assets/portfolio/thayyib-poster.webp';
import gdgocPreview from '../assets/portfolio/gdgoc-preview.webp';
import sentinelPreview from '../assets/portfolio/sentinel-u-preview.webp';
import pdfkitPreview from '../assets/portfolio/pdfkit-preview.webp';
import hazewatchPreview from '../assets/portfolio/hazewatch-preview.webp';

export const projects = [
  {
    number: '01', slug: 'thayyib', name: 'Thayyib', category: 'Development Lead',
    status: 'Hackathon runner-up',
    description: 'A halal compliance management system. I served as Development Lead on the project, which earned runner-up in a hackathon.',
    scope: ['Halal compliance', 'Team leadership'], images: [thayyibPoster],
    video: '/media/thayyib-preview.mp4', href: 'https://thayyib.vercel.app/',
    purpose: 'Thayyib focuses on halal compliance management. The project brings this practical domain into a software system, with a live demonstration available to explore.',
    contribution: 'I served as Development Lead for the project team. Thayyib was awarded runner-up in a hackathon.',
    context: 'The event name, technical stack, individual implementation details, and measured outcomes will be added as the case study is documented.',
  },
  {
    number: '02', slug: 'sentinel-u', name: 'Sentinel-U', category: 'Developer',
    status: 'Status to be confirmed',
    description: 'A university disaster management and visual control project focused on campus safety. Implementation details and completed milestones are being documented.',
    scope: ['University disaster management', 'Visual control'], images: [sentinelPreview],
    purpose: 'Sentinel-U explores disaster management and visual control in a university setting. Its intended focus is helping people understand incidents in the context of a campus.',
    contribution: 'I contributed to Sentinel-U as a developer. The supplied interface preview shows a campus overview, incident feed, and a digital-twin view using illustrative data.',
    context: 'The preview represents a demonstration, not a claim of a live emergency-response service. The project stage, implemented features, technical stack, and individual contributions still need fuller documentation.',
  },
  {
    number: '03', slug: 'gdgoc-uniten', name: 'GDGoC UNITEN Website', category: 'Developer',
    status: 'Website',
    description: 'A website introducing the Google Developer Groups on Campus community at UNITEN and supporting its membership activities. I contributed as a developer.',
    scope: ['Developer community', 'Membership'], images: [gdgocPreview], href: 'https://www.gdgocuniten.my/',
    purpose: 'The GDGoC UNITEN website introduces the campus developer community and supports its membership activities. It gives visitors a place to learn about the community and find ways to get involved.',
    contribution: 'I contributed as a developer to the community website. The live site and its homepage preview provide a view of the work.',
    context: 'Specific implementation responsibilities, technologies, and community outcomes will be added when those details are documented.',
  },
  {
    number: '04', slug: 'pdfkit', name: 'PDFKit', category: 'Developer',
    status: 'Working prototype',
    description: 'A browser-based PDF toolkit for merging documents, extracting page ranges, and basic compression, with drag-and-drop uploads and downloadable results.',
    scope: ['React', 'Vite', 'pdf-lib'], images: [pdfkitPreview], href: 'https://pdf-kit-remastered.vercel.app/',
    purpose: 'PDFKit brings everyday document tasks into a single browser workspace. Users can combine PDFs, extract a contiguous range of pages, and re-save files using compressed object streams.',
    contribution: 'I developed the React and Vite application, with reusable upload components and browser-side PDF workflows built on pdf-lib and PDF.js. The interface includes dedicated tool pages, file metadata, and download actions.',
    context: 'Built with React, Vite, Tailwind CSS, and React Router. Compression re-saves PDF objects rather than downsampling images, so file-size reductions vary. The conversion screen is a mock flow that downloads JSON metadata; document conversion is not implemented.',
  },
  {
    number: '05', slug: 'hazewatch', name: 'HazeWatch', category: 'Developer',
    status: 'Live dashboard',
    description: 'A Malaysia air-quality dashboard that brings official APIMS station readings, an interactive map, recent trends, and practical health guidance into one place.',
    scope: ['Next.js', 'Supabase', 'MapLibre'], images: [hazewatchPreview], href: 'https://hazewatch-drab.vercel.app/',
    purpose: 'HazeWatch makes Malaysia’s air-quality readings easier to explore. Visitors can search monitoring stations, filter by state, check national conditions, and follow changes at individual locations.',
    contribution: 'I developed the dashboard with Next.js, TypeScript, and Tailwind CSS, using MapLibre for station mapping and Supabase for the optional observation archive. It includes station history charts, six-hour trend comparisons, nearby-station discovery, and API-band health guidance.',
    context: 'Observations come from DOE APIMS, with source attribution, timestamps, and freshness indicators. Trend insights describe observed changes rather than forecasts. Location lookup runs in the browser, and the dashboard supports live readings without a configured archive. The preview shows a snapshot, not current conditions.',
  },
];
