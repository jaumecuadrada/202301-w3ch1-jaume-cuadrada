import { type CharacterStructure } from "../../characterCard/Character/CharacterStructure";
import { type Fighter } from "../Fighter/Fighter";

export type SquireStructure = {
  serves: Fighter;
  kissAssLevel: number;
} & CharacterStructure;
