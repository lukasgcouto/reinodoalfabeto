import cover from "@/assets/capa-alfabetizacao-sem-segredo.png.asset.json";
import { media } from "./media";

export function ProductMockup() {
  return (
    <div className="product-scene" aria-label="Material digital Alfabetização Sem Segredo e amostras das atividades">
      <img className="product-sheet product-sheet-back" src={media.ligue} alt="Página de atividade de associação de palavras" width={1050} height={1500} />
      <img className="product-sheet product-sheet-front" src={media.silabas} alt="Página de atividade de sílabas" width={1050} height={1500} />
      <div className="product-book">
        <img src={cover.url} alt="Capa do PDF Alfabetização Sem Segredo, Reino do Alfabeto, para crianças de 4 a 8 anos" width={768} height={1363} fetchPriority="high" />
      </div>
    </div>
  );
}