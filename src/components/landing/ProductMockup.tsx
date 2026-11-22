import mockup from "@/assets/mockup-reino-do-alfabeto.png.asset.json";

export function ProductMockup() {
  return (
    <div className="product-scene">
      <img
        className="product-mockup-img"
        src={mockup.url}
        alt="Material Alfabetização Sem Segredo, do Reino do Alfabeto, com uma página de atividade de sílabas"
        width={900}
        height={729}
        fetchPriority="high"
      />
    </div>
  );
}
