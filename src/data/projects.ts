import thayyibPoster from '../assets/portfolio/thayyib-poster.webp';
import gdgocPreview from '../assets/portfolio/gdgoc-preview.webp';
import sentinelPreview from '../assets/portfolio/sentinel-u-preview.webp';

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
];
