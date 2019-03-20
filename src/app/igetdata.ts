interface Pet {
    name: string;
    type: string;
  }

export interface Igetdata {
    data: {
        name: string;
        gender: string;
        age: number;
        pets: Pet[]; 
    }
}
