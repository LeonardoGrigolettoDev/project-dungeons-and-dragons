import Race from './Race';

export default class Elf extends Race {
  protected static _raceInstances = 0;
  constructor(
    public n: string, 
    public d: number, 
    public _maxLifePoints = 99,
  ) {
    super(n, d);
    Elf._raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._raceInstances;
  }

  public override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}