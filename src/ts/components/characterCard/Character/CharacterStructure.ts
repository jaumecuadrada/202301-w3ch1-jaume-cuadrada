import { type CharacterDataStructure } from "./CharacterDataStructure";

export type CharacterStructure = {
  characterData: CharacterDataStructure;
  isAlive: boolean;
  series: string;
  communicate: () => string;
  die: () => void;
};
