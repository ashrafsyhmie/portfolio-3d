import { renderToString } from 'react-dom/server';
import { App } from './App';
import { projects } from './data/projects';

const origin = 'https://ashrafsyhmie.my';
const person = {
  '@type': 'Person', '@id': `${origin}/#person`, name: 'Ashraf Syahmie',
  alternateName: 'Ashraf Syahmie Bin Ahmad Shahir', url: `${origin}/`,
  jobTitle: 'Software Engineering Student / Developer',
  sameAs: ['https://github.com/ashrafsyhmie', 'https://www.linkedin.com/in/ashraf-syahmie-1969a8269/'],
};

export const pages = [
  { path: '/', title: 'Ashraf Syahmie | Software Developer Portfolio', description: 'Explore Ashraf Syahmie’s software projects, creative work, and journey as a Software Engineering student at UNITEN, Malaysia.', name: 'Ashraf Syahmie', type: 'ProfilePage' },
  ...projects.map((project) => ({ path: `/projects/${project.slug}`, title: `${project.name} | Ashraf Syahmie`, description: project.description, name: project.name, type: 'WebPage' })),
];

export function render(path: string) {
  const page = pages.find((item) => item.path === path);
  const graph: object[] = [person, { '@type': 'WebSite', '@id': `${origin}/#website`, url: `${origin}/`, name: 'Ashraf Syahmie — Portfolio', publisher: { '@id': person['@id'] } }];
  if (page) {
    graph.push({ '@type': page.type, '@id': `${origin}${path}#page`, url: `${origin}${path}`, name: page.title, description: page.description, isPartOf: { '@id': `${origin}/#website` }, ...(path === '/' ? { mainEntity: { '@id': person['@id'] } } : { author: { '@id': person['@id'] } }) });
    if (path !== '/') graph.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
      { '@type': 'ListItem', position: 2, name: page.name, item: `${origin}${path}` },
    ] });
  }
  return { html: renderToString(<App path={path} />), structuredData: { '@context': 'https://schema.org', '@graph': graph } };
}
