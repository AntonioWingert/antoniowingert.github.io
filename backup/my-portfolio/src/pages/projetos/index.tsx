import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetoItem
          slug="timer"
          imgUrl="https://www.adobe.com/content/dam/cc/us/en/creativecloud/file-types/image/raster/webp-file/thumbnail.jpeg"
          type="App"
          title="Timer"
        />
        <ProjetoItem
          slug="timer"
          imgUrl="https://www.adobe.com/content/dam/cc/us/en/creativecloud/file-types/image/raster/webp-file/thumbnail.jpeg"
          type="App"
          title="Timer"
        />
        <ProjetoItem
          slug="timer"
          imgUrl="https://www.adobe.com/content/dam/cc/us/en/creativecloud/file-types/image/raster/webp-file/thumbnail.jpeg"
          type="App"
          title="Timer"
        />
      </main>
    </ProjetosContainer>
  );
}
