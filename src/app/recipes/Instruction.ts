import {Ingredient} from "./Ingredient";

export interface Instruction {
  id: number,
  step: number,
  action: string,
  instruction?: string,
  duration?: number,
  ingredients?: Ingredient[]
}
