import Race from './Race';

export default class Dwarf extends Race {
  protected static _raceInstances = 0;
  constructor(
    public n: string, 
    public d: number, 
    public _maxLifePoints = 80,
    public _raceInstances = 0,
  ) {
    super(n, d);
    Dwarf._raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._raceInstances;
  }

  public override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}