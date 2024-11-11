export interface IDish {
  title: string;
  volume?: number | null;
  weight?: number | null;
  composition?: string | null;
  price: number;
  image: string | null;
  type?: string | null;
  isNew?: boolean | null;
  customizable?: boolean;
}

export const dish: IDish[] = [
  {
    title: 'Напій Pepsi zero',
    price: 72,
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1727452399/pepsi-zero_1_xba9fj.webp',
    type: 'напої',
    customizable: false,
  },

  {
    title: 'Паста "Болоньєзе"',
    weight: 500,
    composition:
      "Томатно-пряний соус з двома видами м'яса, овочами ,пармезаном та часник",
    price: 345,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/aa864795-ca9f-4af1-b915-0f2c96887a22.jpeg',
    type: 'паста',
  },

  {
    title: 'Паста "Вегетаріанська"',
    weight: 400,
    composition: 'Смажені овочі в томатному соусі, печериці, пармезан,часник',
    price: 329,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/55ab7821-d00c-41c4-8ee8-eefa3c19c83d.jpeg',
    type: 'паста',
  },

  {
    title: 'Вода негазована',
    volume: 0.5,
    price: 68,
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1727452399/karpatska_pkjnbh.webp',
    type: 'напої',
    customizable: false,
  },

  {
    title: 'Суп "Гаспачо"',
    weight: null,
    composition:
      'Суп гаспачо на основі: томати,огірок,редис,часник,перець солодкий,соус песто',
    price: 220,
    image: null,
    type: 'супи',
    customizable: false,
  },

  {
    title: 'Паста з куркою та грибами',
    weight: 400,
    composition:
      'Шматочки соковитої курки, печериці, пармезан у томатно-вершковому соусі',
    price: 335,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/8ff88e23-762b-4e9b-bd8f-e18bf4011620.jpeg',
    type: 'паста',
  },

  {
    title: 'Паста з телятиною та овочами',
    weight: 400,
    composition: 'Ніжна телятина та овочі у вершково-пряному соусі',
    price: 345,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/2677177a-0a7a-4b5a-bb3c-f1453b165b00.jpeg',
    type: 'паста',
  },

  {
    title: 'Салат "Капрезе"',
    weight: 220,
    composition: 'Томати,моцарела та соус песто',
    price: 325,
    image:
      'https://images.bolt.eu/store/2023/2023-05-29/ed6cffef-ee4e-4d95-a82a-2f51f7fd6bb1.jpeg',
    type: 'салати',
  },

  {
    title: 'Паста "Карбонара"',
    weight: 320,
    composition: 'Вершковий соус з беконом, пармезаном і жовтком',
    price: 329,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/3609559b-2928-4f05-98c4-6df02772e616.jpeg',
    type: 'паста',
  },

  {
    title: 'Окрошка',
    weight: 250,
    composition: 'Копчене філе курки,редис,огірок,перепелине яйце\n(на айрані)',
    price: 220,
    image:
      'https://images.bolt.eu/store/2024/2024-05-30/31924a9d-ec6c-43a3-bc73-887bb4c839d7.jpeg',
    type: 'супи',
    customizable: false,
  },

  {
    title: 'Паста з морепродуктів',
    weight: 380,
    composition: 'Мідії, креветки, кальмар, соєвий соус, часник, овочі, вершки',
    price: 470,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/c41e6701-c8ae-4e31-beb9-55e71b4c1273.jpeg',
    type: 'паста',
  },

  {
    title: 'Паштет курячий',
    weight: 150,
    composition: 'Паштет курячий,карамелізована цибуля,хрусткий багет',
    price: 235,
    image:
      'https://images.bolt.eu/store/2022/2022-06-22/1e6440c7-d8e6-4349-9883-2eca6cac8eaa.jpeg',
    type: 'інше',
  },

  {
    title: 'Напій Pepsi',
    volume: 0.33,
    price: 72,
    image:
      'https://res.cloudinary.com/dzym4qxgp/image/upload/v1727452399/pepsi_idw42j.webp',
    type: 'напої',
    customizable: false,
  },

  {
    title: 'Пармезанове Різото 4 сири',
    weight: 280,
    composition: 'Вершки, дорблю, брі, пармезан, моцарелла',
    price: 355,
    image:
      'https://images.bolt.eu/store/2023/2023-10-14/0de39494-c254-487a-b697-928c2b68d2fa.jpeg',
    type: 'пармезанове різотто',
  },

  {
    title: 'Пармезанове Різото з морепродуктами',
    weight: 350,
    composition:
      'Кальмар, мідії, креветки, мікс овочей, вершково-соєвий соус, часник, пармезан, вершкове масло.',
    price: 465,
    image:
      'https://images.bolt.eu/store/2022/2022-08-14/7fe81970-3750-4aab-a350-c38c02647ec5.jpeg',
    type: 'пармезанове різотто',
  },

  {
    title: 'Пармезанове Різото курка-гриби',
    weight: 350,
    composition: 'Курка, печериці, вершки, пармезан',
    price: 340,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/2d20774b-12db-4fb5-9ce9-0873be772d2f.jpeg',
    type: 'пармезанове різотто',
  },

  {
    title: 'Пармезанове Різото овочі, гриби та песто',
    weight: 350,
    composition: 'Печериці, мікс овочей, пармезан, вершковий соус,песто',
    price: 340,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/6010298e-fe36-4c02-80b7-575cfba28f73.jpeg',
    type: 'пармезанове різотто',
  },

  {
    title: 'Пармезанове Різото телятина овочі',
    weight: 350,
    composition:
      'Ніжна телятина та овочі у вершково-пряному соусі з пармезаном',
    price: 350,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/8ea3eb1f-20cb-4d3e-ad1f-9a0f0e05534f.jpeg',
    type: 'пармезанове різотто',
  },

  {
    title: 'Пармезанове Різото тигрові креветки',
    weight: 350,
    composition: 'Тигрові креветки, вершки, пармезан, печериці, песто',
    price: 470,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/30e9d36c-fca3-41be-b65f-e19d927f35db.jpeg',
    type: 'пармезанове різотто',
  },

  {
    title: 'Роклето',
    weight: 350,
    composition:
      'Обсмажена картопля, курка, бекон, часник, домашні солоні огірки, сир моцарелла',
    price: 310,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/48eee2ba-b0fa-49e9-8227-445b187bb418.jpeg',
    type: 'роклетто',
  },

  {
    title: 'Роклето овочі',
    weight: 350,
    composition:
      'Обсмажена картопля, мікс овочей, печериці, часник, домашні солоні огірки, сир моцарелла',
    price: 275,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/4357e515-d081-4432-9d5f-4cd68cbe8b2e.jpeg',
    type: 'роклетто',
  },

  {
    title: 'Роклето телятина гриби',
    weight: 350,
    composition:
      'Обсмажена картопля,телятина,гриби,часник,домашні солоні огірки,сир моцарела',
    price: 315,
    image:
      'https://images.bolt.eu/store/2023/2023-03-31/7968b892-a817-475c-a5e6-94c3a37de7e5.jpeg',
    type: 'роклетто',
  },

  {
    title: 'Суп сирний з куркою',
    weight: 250,
    composition: 'Смажена курка, хрусткі часникові сухарики',
    price: 220,
    image:
      'https://images.bolt.eu/store/2023/2023-10-20/18d8afa8-91a3-4ffe-b38e-74428281efb0.jpeg',
    type: 'супи',
    customizable: false,
  },

  {
    title: 'Паста Тигрові креветки',
    weight: 400,
    composition: 'Тигрові креветки, вершки, пармезан, печериці,песто',
    price: 465,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/7a88decd-cdeb-4817-a5fb-6d54c475388b.jpeg',
    type: 'паста',
  },

  {
    title: 'Томатний суп з морепродуктів',
    weight: 250,
    composition: 'Креветки, кальмар, мідії, часник, петрушка',
    price: 380,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/9004e66e-2007-434a-9288-9a930c5b98fb.jpeg',
    type: 'супи',
    customizable: false,
  },

  {
    title: 'Тортеліні з куркою та грибами',
    weight: 270,
    composition:
      'З твердих сортів пшениці,філе курки,вершки,смажені печериці,вершково-томатний соус.',
    price: 335,
    image:
      'https://images.bolt.eu/store/2023/2023-10-22/6bbd7aae-1783-40b9-8c71-ec4583bae8ba.jpeg',
    type: 'тортеліні',
  },

  {
    title: 'Тортеліні з телятиною',
    weight: 270,
    composition:
      'З твердих сортів пшениці,фарш на основі(телятина,бекон,м) вершковий соус.',
    price: 350,
    image:
      'https://images.bolt.eu/store/2023/2023-10-11/35fbbe99-5fd0-43c5-a7d8-efc555be649a.jpeg',
    type: 'тортеліні',
  },

  {
    title: 'Паста тунець з оливками',
    weight: 380,
    composition: 'Консервований тунець,оливки,томати,вершки,часник,пармезан',
    price: 375,
    image:
      'https://images.bolt.eu/store/2022/2022-06-22/1698cf5c-e392-43d2-b60d-d7ef9be0cbbc.jpeg',
    type: 'паста',
  },

  {
    title: 'Салат "Цезар"',
    weight: 220,
    composition:
      'Смажена курка, бекон, пармезан, томат, айсберг, хрусткі крутони, соус цезар, пармезан',
    price: 325,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/3394f8be-77d1-4967-a415-e4383d17f545.jpeg',
    type: 'салати',
  },

  {
    title: 'Салат "Цезар з креветками"',
    weight: 220,
    composition: 'Томати, айсберг, креветки, соус цезар, пармезан, сухарики',
    price: 430,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/7e88e185-4b6a-49a2-ac4b-eed0fbd837e8.jpeg',
    type: 'салати',
  },

  {
    title: 'Паста Чорізо моцарела',
    weight: 400,
    composition: 'Ковбаса Чорізо,оливки,томати,вершки,моцарела,пармезан',
    price: 375,
    image:
      'https://images.bolt.eu/store/2023/2023-02-16/b46a15c5-e4dd-42da-bab2-6731632d4826.jpeg',
    type: 'паста',
  },

  {
    title: 'Паста "Чотири сири"',
    weight: 380,
    composition: 'Дорблю, пармезан, брі, моцарелла, вершки',
    price: 350,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/065af4dd-260e-46bf-bcef-7b9220125e93.jpeg',
    type: 'паста',
  },
];
