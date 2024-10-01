export interface IIngredient {
  label: string;
  name: string;
  price: number;
  weight: number;
  image?: string | null;
}

export const ingredient: IIngredient[] = [
  {
    label: 'курка',
    name: 'chicken',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765376/Rectangle_15_1_amqhxw.jpg',
    price: 88,
    weight: 100,
  },

  {
    label: 'помідор',
    name: 'tomato',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765384/Rectangle_15_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F_f6z0mo.jpg',
    price: 95,
    weight: 100,
  },

  {
    label: 'соус песто',
    name: 'pesto-sauce',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765377/Rectangle_15_7_lkv54m.jpg',
    price: 105,
    weight: 100,
  },

  {
    label: 'соус цезар',
    name: 'caesar sauce',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765378/Rectangle_15_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F_2_y4zetg.jpg',
    price: 105,
    weight: 100,
  },

  {
    label: 'гострий соус',
    name: 'spicy sauce',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765377/Rectangle_15_9_wt3hfo.jpg',
    price: 50,
    weight: 100,
  },

  {
    label: 'жовток',
    name: 'yolk',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765377/Rectangle_15_10_nsrv7h.jpg',
    price: 40,
    weight: 100,
  },

  {
    label: 'овочі',
    name: 'vegetables',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765377/Rectangle_15_5_urks0e.jpg',
    price: 78,
    weight: 100,
  },

  {
    label: 'багет',
    name: 'baguette',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765377/Rectangle_15_8_xyxexk.jpg',
    price: 58,
    weight: 100,
  },

  {
    label: 'печериці',
    name: 'mushrooms',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765377/Rectangle_15_6_vhxhm5.jpg',
    price: 88,
    weight: 100,
  },

  {
    label: 'телятина',
    name: 'veal',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765377/Rectangle_15_2_zu9erc.jpg',
    price: 102,
    weight: 100,
  },

  {
    label: 'моцарелла',
    name: 'mozzarella',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765377/Rectangle_15_3_dmqzmh.jpg',
    price: 88,
    weight: 100,
  },

  {
    label: 'пармезан',
    name: 'parmesan',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765377/Rectangle_15_4_n9hzlu.jpg',
    price: 98,
    weight: 100,
  },

  {
    label: 'бекон',
    name: 'bacon',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765378/Rectangle_15_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F_3_u3v3gn.jpg',
    price: 88,
    weight: 100,
  },

  {
    label: 'креветки',
    name: 'shrimp',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765377/Rectangle_15_11_ewbdjv.jpg',
    price: 203,
    weight: 100,
  },

  {
    label: 'морепродукти',
    name: 'seafood',
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1724765384/Rectangle_15_lybncd.jpg',
    price: 208,
    weight: 100,
  },
];
