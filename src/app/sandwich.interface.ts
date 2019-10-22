export interface Sandwich {
  kaas: boolean;
  hesp: number;
  broodje: string;
}

export function createDeliciousSandwich(): Sandwich {
  return {
    kaas: true,
    hesp: 2,
    broodje: 'bruin'
  };
}
