import Head from 'next/head';
import Header from '../../../src/components/Header';
import BannerProjeto from '../../../src/components/BannerProjeto';
import { ProjetoContainer } from '../../../src/styles/ProjetoStyles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePrismicDocumentByUID } from '@prismicio/react';


export default function Projeto() {
  const { query} = useRouter()
  const slug = String(query.slug);
  const [document] = usePrismicDocumentByUID('projects', slug)

  return (
    <ProjetoContainer>
      <Header />
       <BannerProjeto
        title={document?.data.title}
        type={document?.data.type}
        imgUrl={document?.data.thumbnail.url}
      /> 
      <main>
        <p>{document?.data.description}</p>
        <button type="button">
          <Link target="_blank" href={`${document?.data.link.url}`}
          >Ver projeto online</Link>
        </button>
      </main>
    </ProjetoContainer>
  );
}
