export interface IIngredient {
  name: string;
  price: number;
  image?: string | null;
}

export const ingredient: IIngredient[] = [
  { name: 'курка', image: '', price: 88 },

  { name: 'помідор', image: '', price: 95 },

  { name: 'соус песто', image: '', price: 105 },

  { name: 'соус цезар', image: '', price: 105 },

  { name: 'гострий соус', image: '', price: 50 },

  { name: 'жовток', image: '', price: 40 },

  { name: 'овочі', image: '', price: 78 },

  { name: 'багет', image: '', price: 58 },

  { name: 'печериці', image: '', price: 88 },

  { name: 'телятина', image: '', price: 102 },

  { name: 'моцарелла', image: '', price: 88 },

  { name: 'пармезан', image: '', price: 98 },

  { name: 'бекон', image: '', price: 88 },

  { name: 'креветки', image: '', price: 203 },

  { name: 'морепродукти', image: '', price: 208 },
];
