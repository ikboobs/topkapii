import dinastia from "./data/dinastia.js";
import haren from "./data/haren.js";
import gobierno from "./data/gobierno.js";
import administracion from "./data/administracion.js";
import nobleza from "./data/nobleza.js";

const characters = [
  ...dinastia,
  ...haren.characters,
  ...administracion.characters,
  ...nobleza.characters
];

// Un solo registro por personaje. Las instituciones consultan este catálogo
// mediante identificadores, sin duplicar fichas para representar varios vínculos.
const TOPKAPI = {
  characters,
  offices: gobierno.offices,
  positions: administracion.positions
};

export default TOPKAPI;
