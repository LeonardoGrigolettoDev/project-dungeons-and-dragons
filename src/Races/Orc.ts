import Race from './Race';

export default class Orc extends Race {
  protected static _raceInstances = 0;
  constructor(
    public n: string, 
    public d: number, 
    public _maxLifePoints = 74,
  ) {
    super(n, d);
    Orc._raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._raceInstances;
  }

  public override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}