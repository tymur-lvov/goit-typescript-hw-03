abstract class House {
  protected key: Key;
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
}

class Key {
  constructor(private signature: number) {}

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    return this.key;
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  public openDoor(key: Key) {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    } else {
      this.door = false;
    }
  }
}

const key = new Key(Math.random());

const person = new Person(key);

const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
