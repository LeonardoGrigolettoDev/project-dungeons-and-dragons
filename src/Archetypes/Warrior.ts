import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  public _energyType: EnergyType;
  protected static _arquetypeInstances = 0;
  constructor(public n: string) {
    super(n);
    this._energyType = 'stamina';
    Warrior._arquetypeInstances += 1;
  }

  override get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._arquetypeInstances;
  }
}