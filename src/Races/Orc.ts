import Race from './Race';

export default class Orc extends Race {
  constructor(
    public n: string, 
    public d: number, 
    public _maxLifePoints = 74,
  ) {
    super(n, d);
  }

  public override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}