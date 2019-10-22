export interface Sandwich {
  id: string;
  kaas: boolean;
  hesp: number;
  broodje: string;
}

export function createDeliciousSandwich(): Sandwich {
  return {
    id: Math.random().toString(),
    kaas: true,
    hesp: 2,
    broodje: 'bruin'
  };
}
