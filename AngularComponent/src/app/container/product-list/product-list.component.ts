import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Nike Dunk Low',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 16000,
      discountPrice: 7000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c00d92bc-b95b-498a-9a7e-0a35863b8a4e/air-max-1-shoes-9JTw1z.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 2,
      name: 'Nike Dunk Low Next Nature SE ',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue'],
      price: 15000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 3,
      name: 'Nike Air Max Dn',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'green'],
      price: 13000,
      discountPrice: 10040,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a710787c-70eb-489b-a37a-8c5d3d0f3fc2/air-max-dn-shoes-FtLNfm.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 4,
      name: 'Nike Dunk Low Retro SE',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White'],
      price: 11000,
      discountPrice: 7000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d973b32f-2890-4146-81ef-b6bce38ed64d/air-max-plus-3-shoes-HtMt7V.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 5,
      name: 'Nike Dunk Low Premium',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 19000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/75d714d3-fd6d-4a57-bfee-a47ef60c979f/lunar-roam-shoes-czbgcZ.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 6,
      name: 'Nike Lunar Roam',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 20000,
      discountPrice: 14000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6e506c9-9f45-44ca-a94c-1fda25effd40/jordan-stadium-90-shoes-Jn6ZH4.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 7,
      name: 'Air Jordan 1 Mid SE Craft',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 10000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8abc822d-3142-449f-bb12-d5ce0fa0fd6a/air-jordan-1-mid-se-craft-shoes-7T3WKG.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 8,
      name: 'Air force 1 07 LV8',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 12000,
      discountPrice: 7040,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c1661989-40b0-44dc-8afc-b4799c8f044f/zoom-vomero-5-shoes-8m9brL.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 9,
      name: 'ACG Rufus',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 28000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9a6be3ef-b39e-47f4-92c7-47c874ee079f/invincible-3-road-running-shoes-KZFTMC.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 10,
      name: 'Jordan Stadium 90',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 20000,
      discountPrice: 10040,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/41f1ed1d-aae3-46ff-9f92-4ded22f69382/air-max-pulse-shoes-VVklpx.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 11,
      name: 'Nike Zoom Vomero 5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 36000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3bdf52f5-1615-4bdf-9936-355332055c21/tatum-2-legacy-pf-basketball-shoes-WWbXXK.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 12,
      name: 'Zion 3 SE PF',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 52000,
      discountPrice: 34000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b7b72af-953a-4d97-9a0b-1306339b9f32/air-force-1-07-lv8-shoes-cfp5ms.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 13,
      name: 'Air Max Plus 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 66000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/18364584-e9cf-4d45-8b9c-b2349ca96401/zion-3-se-pf-basketball-shoes-gTv8md.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 14,
      name: 'Luka 2 PF',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 10000,
      discountPrice: 7000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ed1921be-4eab-45d2-b72b-f23b2db4ad5d/air-max-plus-shoes-dz4jLD.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 15,
      name: 'G.T Cut 3 EP',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 16000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f07f36c-b98b-4f2f-ab68-e96761e9eb93/air-max-ishod-shoes-pJPHs6.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 16,
      name: 'Nike Vectory 3 proto',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 16000,
      discountPrice: 10000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4b8d3b6c-e5cf-4c19-8d89-4e05dad6ebf9/luka-2-pf-basketball-shoes-LM9ScX.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 17,
      name: 'Nike Dunk Low LX',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 16000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/177dfa40-254c-47d6-baa6-79be6240a653/gt-cut-3-ep-basketball-shoes-DGJp2L.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 18,
      name: 'Nike InfinityRN 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 16000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d9c0b7f-f5b8-44c6-a4c1-08ba9b792d90/cortez-txt-shoes-9BDLNk.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 19,
      name: 'Nike React Infinity Run Flyknit',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 16000,
      discountPrice: 10000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 20,
      name: 'Air max plus ',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 26000,
      discountPrice: 17000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/206977f0-f9d0-4f35-937d-7efe2a8e800f/phantom-gx-2-elite-se-fg-low-top-football-boot-9Qlw4H.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 21,
      name: 'icon Classic SE',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 16000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/65e274d7-1355-41f6-b54c-f4f4a53bca17/vomero-17-road-running-shoes-qXFWTq.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 22,
      name: 'Air Max Excee',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue'],
      price: 15000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22b21a6e-d033-40c8-8b58-184245a9ea4a/wio-11-road-running-shoes-2SNS3P.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 23,
      name: 'Metcon',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'green'],
      price: 23000,
      discountPrice: 15000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/67b01dab-e0c4-42b9-992b-a3fdfd8dc35c/infinityrn-4-road-running-shoes-50JtjN.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 24,
      name: 'Off-White x Nike collaborations',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White'],
      price: 52000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9a738073-ff5f-415e-99e4-0a35b9337e0f/motiva-walking-shoes-Fjzkq7.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 25,
      name: 'Air Zoom Alphafly NEXT%',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 49000,
      discountPrice: 30400,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de19560f-411b-412f-a6a6-ddf9c33e7fbd/invincible-3-road-running-shoes-Wwmmlp.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 26,
      name: 'Renew Run',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 20000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d9566cd-4520-4b0b-914c-1a7aca4789b4/infinityrn-4-road-running-shoes-SFXkMs.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 27,
      name: 'Air Max 2090',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 10000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e0a9f08-7b5c-49f7-a85f-36dfe7c2b3c7/infinityrn-4-road-running-shoes-VKhgV0.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 28,
      name: 'Air Presto',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 56000,
      discountPrice: 40040,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/23bfd438-2e90-4e18-9edf-31f7f9887704/invincible-3-road-running-shoes-0h8j3v.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 29,
      name: 'LeBron',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 28000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/102f041b-6a0e-4473-82e1-b6746e0b338f/vomero-17-road-running-shoes-0DbNrf.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 31,
      name: 'Daybreak',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 20000,
      discountPrice: 10040,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ce8db870-78e9-4de3-be5b-744828105013/tatum-2-sidewalk-chalk-pf-basketball-shoes-SjC3nc.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 32,
      name: 'Huarache',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 20000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6e506c9-9f45-44ca-a94c-1fda25effd40/jordan-stadium-90-shoes-Jn6ZH4.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 30,
      name: 'SB Dunk',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum voluptatem repudiandae placeat velit ab accusantium sed enim, nulla delectus laboriosam fugiat, provident in, atque possimus illum veniam eius. Mollitia?',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 45000,
      discountPrice: 35000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6a588034-2960-4631-b425-c94c665175d5/vaporfly-3-road-racing-shoes-xsDgvM.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
  ];

  totalProdCount = this.products.length;

  totalProductInStock = this.products.filter((p) => p.is_in_inventory == true)
    .length;
  totalProductOutOfStock = this.products.filter(
    (p) => p.is_in_inventory == false
  ).length;

  onFilterChanged(value: string) {
    // console.log(`onFilterChanged Called`);
    console.log(value);

    this.selectedFilterRadioButton = value;
  }

  selectedFilterRadioButton: string = 'all';

  constructor() {}

  ngOnInit(): void {}
}
