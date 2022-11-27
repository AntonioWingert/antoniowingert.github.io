import Header from "../../src/components/Header";
import ProjetoItem from "../../src/components/ProjetoItem";
import HandleDocument from "../../src/services/HandleDocument";
import { ProjetosContainer } from "../../src/styles/ProjetosStyles";

export default function Projetos() {
  const projetos = HandleDocument();

  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
       {
       projetos?.map(projeto => (
        <ProjetoItem
        key={projeto.slug}
        imgUrl={projeto.thumbnail}
        slug={projeto.slug}
        title={projeto.title}
        type={projeto.type}
        />
       ))
       }
      </main>
    </ProjetosContainer>
  );
}
