import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static counter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.counter += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.counter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
