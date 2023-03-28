import Race from './Race';

export default class Halfling extends Race {
  protected static _raceInstances = 0;
  constructor(
    public n: string, 
    public d: number, 
    public _maxLifePoints = 60,
  ) {
    super(n, d);
    Halfling._raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._raceInstances;
  }

  public override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}