import { usePrismicDocumentsByType } from "@prismicio/react";

const HandleDocument = () => {
  const [document] = usePrismicDocumentsByType('projects', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    lang: 'pt-br',
  });
  
  const projetos = document?.results?.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    description: projeto.data.description,
    type: projeto.data.type,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }))

  return projetos;
}

export default HandleDocument