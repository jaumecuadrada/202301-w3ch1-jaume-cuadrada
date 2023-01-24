import { type CharacterStructure } from "../../characterCard/Character/CharacterStructure";

export type FighterStructure = {
  weapon: string;
  dexterity: number;
} & CharacterStructure;
