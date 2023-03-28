export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  // static _raceInstances: 0;

  constructor(n: string, d: number) {
    this._name = n;
    this._dexterity = d;
    // Race._raceInstances += 1;
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances() {
    throw new Error('Not implemented');
  }
}