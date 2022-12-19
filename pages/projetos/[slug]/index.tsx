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
    <ProjetoContainer data-aos="fade-up">
      <Head>
      <title>{document?.data.title} | Meu portfólio</title>
        <meta
          name="description"
          content={document?.data.description}
        />
        <meta property="og:image" content={document?.data.thumbnail.url} />
        <meta property="og:image:secure_url" content={document?.data.thumbnail.url} />
        <meta name="twitter:image" content={document?.data.thumbnail.url} />
        <meta name="twitter:image:src" content={document?.data.thumbnail.url} />
        <meta
          property="og:description"
          content={document?.data.description}
        />
      </Head>
      <Header />
       <BannerProjeto
        title={document?.data.title}
        type={document?.data.type}
        imgUrl={document?.data.thumbnail.url}
      /> 
      <main>
        <p>{document?.data.description}</p>
        <Link target="_blank" href={`${document?.data.link.url}`}>
          <button type="button">Ver projeto online </button>
        </Link>
        <Link target="_blank" href={`${document?.data.github.url}`}>
          <button type="button">Acessar Repositorio</button>
        </Link>        
      </main>
    </ProjetoContainer>
  );
}
