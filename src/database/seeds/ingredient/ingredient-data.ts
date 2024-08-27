export interface IIngredient {
  name: string;
  price: number;
  weight: number;
  image?: string | null;
}

export const ingredient: IIngredient[] = [
  { name: 'курка', image: '', price: 88, weight: 100 },

  { name: 'помідор', image: '', price: 95, weight: 100 },

  { name: 'соус песто', image: '', price: 105, weight: 100 },

  { name: 'соус цезар', image: '', price: 105, weight: 100 },

  { name: 'гострий соус', image: '', price: 50, weight: 100 },

  { name: 'жовток', image: '', price: 40, weight: 100 },

  { name: 'овочі', image: '', price: 78, weight: 100 },

  { name: 'багет', image: '', price: 58, weight: 100 },

  { name: 'печериці', image: '', price: 88, weight: 100 },

  { name: 'телятина', image: '', price: 102, weight: 100 },

  { name: 'моцарелла', image: '', price: 88, weight: 100 },

  { name: 'пармезан', image: '', price: 98, weight: 100 },

  { name: 'бекон', image: '', price: 88, weight: 100 },

  { name: 'креветки', image: '', price: 203, weight: 100 },

  { name: 'морепродукти', image: '', price: 208, weight: 100 },
];
