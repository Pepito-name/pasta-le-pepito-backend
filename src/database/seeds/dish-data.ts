import { DishType } from 'src/common';

interface IDish {
  title: string;
  volume?: number | null;
  weight?: number | null;
  composition: string | null;
  price: number;
  image: string | null;
  type: string | null;
}
export const dish: IDish[] = [
  {
    title: 'Pepsi zero',
    composition: '',
    price: 72,
    image:
      'https://images.bolt.eu/store/2024/2024-04-07/c128ea29-2204-4644-bf60-b2f4b8a05c3d.webp',
    type: DishType.Drink,
  },

  {
    title: 'Болоньєзе',
    weight: 500,
    composition:
      "Томатно-пряний соус з двома видами м'яса, овочами ,пармезаном та часник",
    price: 345,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/aa864795-ca9f-4af1-b915-0f2c96887a22.jpeg',
    type: DishType.Pasta,
  },

  {
    title: 'Вегетаріанська',
    weight: 400,
    composition: 'Смажені овочі в томатному соусі, печериці, пармезан,часник',
    price: 329,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/55ab7821-d00c-41c4-8ee8-eefa3c19c83d.jpeg',
    type: DishType.Pasta,
  },

  {
    title: 'Вода негазована',
    weight: 0.5,
    composition: '0.5л',
    price: 68,
    image:
      'https://images.bolt.eu/store/2023/2023-02-16/1a4c621b-ee06-4c79-9ea3-8181077de4b5.jpeg',
    type: DishType.Drink,
  },

  {
    title: 'Гаспачо',
    weight: null,
    composition:
      'На основі томати,огірок,редис,часник,перець солодкий,соус песто ',
    price: 220,
    image: null,
    type: DishType.Soup,
  },

  {
    title: 'З куркою та грибами',
    weight: 400,
    composition:
      'Шматочки соковитої курки, печериці, пармезан у томатно-вершковому соусі',
    price: 335,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/8ff88e23-762b-4e9b-bd8f-e18bf4011620.jpeg',
    type: DishType.Pasta,
  },

  {
    title: 'З телятиною та овочами',
    weight: 400,
    composition: 'Ніжна телятина та овочі у вершково-пряному соусі',
    price: 345,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/2677177a-0a7a-4b5a-bb3c-f1453b165b00.jpeg',
    type: DishType.Pasta,
  },

  {
    title: 'Капрезе',
    weight: 220,
    composition: 'Томати,моцарела та соус песто',
    price: 325,
    image:
      'https://images.bolt.eu/store/2023/2023-05-29/ed6cffef-ee4e-4d95-a82a-2f51f7fd6bb1.jpeg',
    type: DishType.Salad,
  },

  {
    title: 'Карбонара',
    weight: 320,
    composition: 'Вершковий соус з беконом, пармезаном і жовтком',
    price: 329,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/3609559b-2928-4f05-98c4-6df02772e616.jpeg',
    type: DishType.Pasta,
  },

  {
    title: 'Окрошка',
    weight: 250,
    composition: 'Копчене філе курки,редис,огірок,перепелине яйце\n(на айрані)',
    price: 220,
    image:
      'https://images.bolt.eu/store/2024/2024-05-30/31924a9d-ec6c-43a3-bc73-887bb4c839d7.jpeg',
    type: DishType.Soup,
  },

  {
    title: 'Паста з морепродуктів',
    weight: 380,
    composition: 'Мідії, креветки, кальмар, соєвий соус, часник, овочі, вершки',
    price: 470,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/c41e6701-c8ae-4e31-beb9-55e71b4c1273.jpeg',
    type: DishType.Pasta,
  },

  {
    title: 'Паштет курячий',
    weight: 150,
    composition: 'Паштет курячий,карамелізована цибуля,хрусткий багет',
    price: 235,
    image:
      'https://images.bolt.eu/store/2022/2022-06-22/1e6440c7-d8e6-4349-9883-2eca6cac8eaa.jpeg',
    type: '',
  },

  {
    title: 'Пепсі',
    weight: 0.33,
    composition: '',
    price: 72,
    image:
      'https://images.bolt.eu/store/2023/2023-02-16/a6a6581a-f111-4009-bc8e-d3d351a204d7.jpeg',
    type: DishType.Drink,
  },

  {
    title: 'Різото 4 сири',
    weight: 280,
    composition: 'Вершки, дорблю, брі, пармезан, моцарелла',
    price: 355,
    image:
      'https://images.bolt.eu/store/2023/2023-10-14/0de39494-c254-487a-b697-928c2b68d2fa.jpeg',
    type: DishType.ParmesanRisotto,
  },

  {
    title: 'Різото з морепродуктами',
    weight: 350,
    composition:
      'Кальмар,мідії,креветки,мікс овочей,вершково-соєвий соус,часник,пармезан,вершкове масло.',
    price: 465,
    image:
      'https://images.bolt.eu/store/2022/2022-08-14/7fe81970-3750-4aab-a350-c38c02647ec5.jpeg',
    type: DishType.ParmesanRisotto,
  },

  {
    title: 'Різото курка гриби',
    weight: 350,
    composition: 'Курка, печериці, вершки, пармезан',
    price: 340,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/2d20774b-12db-4fb5-9ce9-0873be772d2f.jpeg',
    type: DishType.ParmesanRisotto,
  },

  {
    title: 'Різото овочі гриби та песто',
    weight: 350,
    composition: 'Печериці, мікс овочей, пармезан, вершковий соус,песто',
    price: 340,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/6010298e-fe36-4c02-80b7-575cfba28f73.jpeg',
    type: DishType.ParmesanRisotto,
  },

  {
    title: 'Різото телятина овочі',
    weight: 350,
    composition:
      'Ніжна телятина та овочі у вершково-пряному соусі з пармезаном',
    price: 350,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/8ea3eb1f-20cb-4d3e-ad1f-9a0f0e05534f.jpeg',
    type: DishType.ParmesanRisotto,
  },

  {
    title: 'Різото тигрові креветки',
    weight: 350,
    composition: 'Тигрові креветки, вершки, пармезан, печериці, песто',
    price: 470,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/30e9d36c-fca3-41be-b65f-e19d927f35db.jpeg',
    type: DishType.ParmesanRisotto,
  },

  {
    title: 'Роклето',
    weight: 350,
    composition:
      'Обсмажена картопля, курка, бекон, часник, домашні солоні огірки, сир моцарелла',
    price: 310,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/48eee2ba-b0fa-49e9-8227-445b187bb418.jpeg',
    type: DishType.Roquette,
  },

  {
    title: 'Роклето овочі',
    weight: 350,
    composition:
      'Обсмажена картопля, мікс овочей, печериці, часник, домашні солоні огірки, сир моцарелла',
    price: 275,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/4357e515-d081-4432-9d5f-4cd68cbe8b2e.jpeg',
    type: DishType.Roquette,
  },

  {
    title: 'Роклето телятина гриби',
    weight: 350,
    composition:
      'Обсмажена картопля,телятина,гриби,часник,домашні солоні огірки,сир моцарела',
    price: 315,
    image:
      'https://images.bolt.eu/store/2023/2023-03-31/7968b892-a817-475c-a5e6-94c3a37de7e5.jpeg',
    type: DishType.Roquette,
  },

  {
    title: 'Сирний з куркою',
    weight: 250,
    composition: 'Смажена курка, хрусткі часникові сухарики',
    price: 220,
    image:
      'https://images.bolt.eu/store/2023/2023-10-20/18d8afa8-91a3-4ffe-b38e-74428281efb0.jpeg',
    type: DishType.Soup,
  },

  {
    title: 'Тигрові креветки',
    weight: 400,
    composition: 'Тигрові креветки, вершки, пармезан, печериці,песто',
    price: 465,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/7a88decd-cdeb-4817-a5fb-6d54c475388b.jpeg',
    type: DishType.Pasta,
  },

  {
    title: 'Томатний суп з морепродуктів',
    weight: 250,
    composition: 'Креветки, кальмар, мідії, часник, петрушка',
    price: 380,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/9004e66e-2007-434a-9288-9a930c5b98fb.jpeg',
    type: DishType.Soup,
  },

  {
    title: 'Тортеліні з куркою та грибами',
    weight: 270,
    composition:
      'З твердих сортів пшениці,філе курки,вершки,смажені печериці,вершково-томатний соус.',
    price: 335,
    image:
      'https://images.bolt.eu/store/2023/2023-10-22/6bbd7aae-1783-40b9-8c71-ec4583bae8ba.jpeg',
    type: DishType.Tortellini,
  },

  {
    title: 'Тортеліні з телятиною',
    weight: 270,
    composition:
      'З твердих сортів пшениці,фарш на основі(телятина,бекон,м) вершковий соус.',
    price: 350,
    image:
      'https://images.bolt.eu/store/2023/2023-10-11/35fbbe99-5fd0-43c5-a7d8-efc555be649a.jpeg',
    type: DishType.Tortellini,
  },

  {
    title: 'Тунець з оливками',
    weight: 380,
    composition: 'Консервований тунець,оливки,томати,вершки,часник,пармезан',
    price: 375,
    image:
      'https://images.bolt.eu/store/2022/2022-06-22/1698cf5c-e392-43d2-b60d-d7ef9be0cbbc.jpeg',
    type: DishType.Pasta,
  },

  {
    title: 'Цезар',
    weight: 220,
    composition:
      'Смажена курка, бекон, пармезан, томат, айсберг, хрусткі крутони, соус цезар, пармезан',
    price: 325,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/3394f8be-77d1-4967-a415-e4383d17f545.jpeg',
    type: DishType.Salad,
  },

  {
    title: 'Цезар з креветками',
    weight: 220,
    composition: 'Томати, айсберг, креветки, соус цезар, пармезан, сухарики',
    price: 430,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/7e88e185-4b6a-49a2-ac4b-eed0fbd837e8.jpeg',
    type: DishType.Salad,
  },
  {
    title: 'Чорізо моцарела',
    weight: 400,
    composition: 'Ковбаса Чорізо,оливки,томати,вершки,моцарела,пармезан',
    price: 375,
    image:
      'https://images.bolt.eu/store/2023/2023-02-16/b46a15c5-e4dd-42da-bab2-6731632d4826.jpeg',
    type: DishType.Pasta,
  },

  {
    title: 'Чотири сири',
    weight: 380,
    composition: '3 Дорблю, пармезан, брі, моцарелла, вершки',
    price: 350,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/065af4dd-260e-46bf-bcef-7b9220125e93.jpeg',
    type: DishType.Pasta,
  },
];
