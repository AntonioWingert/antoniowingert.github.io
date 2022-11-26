import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';

export default function Projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto
        type="App"
        imgUrl="https://www.adobe.com/content/dam/cc/us/en/creativecloud/file-types/image/raster/webp-file/thumbnail.jpeg"
        title="Timer"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque rerum
          ab exercitationem culpa soluta vero porro quidem quia earum, voluptas
          sapiente. Quo ipsa repudiandae quibusdam eveniet natus rem eius
          doloribus!
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
