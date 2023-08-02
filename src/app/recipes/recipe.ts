import {Instruction} from "./Instruction";

export interface Recipe {
  id: number,
  name: string,
  description?: string,
  instructions: Instruction[]
}
