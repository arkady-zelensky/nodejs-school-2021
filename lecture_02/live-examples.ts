type Nullable<T> = {
  [P in keyof T]: T[P] extends Array<infer U> ? U[] : T[P] | null;
};

type Draft<
  TDataStructure extends {},
  TRequiredFields extends keyof TDataStructure,
> = Pick<TDataStructure, TRequiredFields> &
  Nullable<Omit<TDataStructure, TRequiredFields>>;

interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Draft<User, 'id'>;

let a: PartialUser = {
  id,
  email,
  name,
};

// ----------------------

interface UserEntity {
  id: string;
  name: string;
  email: string;
}

type UserUpdateData = Omit<UserEntity, 'id'>;

// ---------------------------------

const getOrDefault = <TValue, TDefaultValue>(
  value: TValue | undefined,
  defaultValue: TDefaultValue,
): TValue | TDefaultValue => (value === undefined ? defaultValue : value);

//

interface IEnergySource {
  getEnergy(): string;
}

class AtomicEnergySource implements IEnergySource {
  public getEnergy() {
    return 'atomic source';
  }
}

class HomeEnergySource implements IEnergySource {
  public getEnergy() {
    return 'home source';
  }
}

class Lamp {
  constructor(private energySource: IEnergySource) {}

  public on(): void {
    console.log(`Got energy from ${this.energySource.getEnergy()}`);
  }
}

const lamp = new Lamp(new HomeEnergySource());
