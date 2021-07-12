const Extras = {
  currency_sign: {
    naira: "&#8358",
    dollar: "&#36",
  },
  productCardHeaderName: "Related items",
};

const allProducts = {
  data: [
    {
      id: 1,
      name: "Bigman cloths",
      slug: "bigman-cloths",
      category: "Men",
      recent_price: 20000,
      discount_price: 20,
      main_price: 40,
      image: "pexels-photo-2955375.jpeg",

      related_items: {
        header: { text: Extras.productCardHeaderName, href: "#" },

        products: [
          //Related products here

          {
            id: 2,
            name: "Timberlin",
            slug: "timberlin",
            recent_price: 70,
            discount_price: 90,
            main_price: 70,
            image: "pexels-photo-5935748.jpeg",
            currency_symbol: {
              naira: Extras.currency_sign.naira,
              dollar: Extras.currency_sign.dollar,
            },

            related_items: [
              {
                header: { text: Extras.productCardHeaderName, href: "#" },
                products: [],
              },
            ],

            getDiscount() {
              const getDiscount =
                (this.recent_price / 100) * this.discount_price;

              this.main_price = Math.floor(this.recent_price - getDiscount);
            },
          },
        ],
      },
    },

    {
      id: 2,
      name: "Shakky",
      slug: "shakky",
      recent_price: 70,
      discount_price: 90,
      main_price: 70,
      category: "Female",
      image: "pexels-photo-2002717.jpeg",

      // related_items: [
      //   {
      //     header: { text: Extras.productCardHeaderName, href: "#" },

      //     products: [
      //       //Related products here

      //       {
      //         id: 2,
      //         name: "Timberlin",
      //         slug: "timberlin",
      //         recent_price: 70,
      //         discount_price: 90,
      //         main_price: 70,
      //         image: "pexels-photo-1317712.jpeg",
      //         currency_symbol: {
      //           naira: Extras.currency_sign.naira,
      //           dollar: Extras.currency_sign.dollar,
      //         },

      //         related_items: [
      //           {
      //             header: { text: Extras.productCardHeaderName, href: "#" },
      //             products: [],
      //           },
      //         ],

      //         getDiscount() {
      //           const getDiscount =
      //             (this.recent_price / 100) * this.discount_price;

      //           this.main_price = Math.floor(this.recent_price - getDiscount);
      //         },
      //       },
      //     ],
      //   },
      // ],
    },

    {
      id: 3,
      name: "Kins quatty wears",
      category: "Female",
      slug: "kins-quatty-wears",
      recent_price: 100,
      discount_price: 15,
      main_price: 100,
      image: "pexels-photo-2728263.jpeg",

      // related_items: [
      //   {
      //     header: { text: Extras.productCardHeaderName, href: "#" },

      //     products: [
      //       //Related products here

      //       {
      //         id: 2,
      //         name: "Timberlin",
      //         slug: "timberlin",
      //         recent_price: 70,
      //         discount_price: 90,
      //         main_price: 70,
      //         image: "pexels-photo-1317712.jpeg",
      //         currency_symbol: {
      //           naira: Extras.currency_sign.naira,
      //           dollar: Extras.currency_sign.dollar,
      //         },

      //         related_items: [
      //           {
      //             header: { text: Extras.productCardHeaderName, href: "#" },
      //             products: [],
      //           },
      //         ],

      //         getDiscount() {
      //           const getDiscount =
      //             (this.recent_price / 100) * this.discount_price;

      //           this.main_price = Math.floor(this.recent_price - getDiscount);
      //         },
      //       },
      //     ],
      //   },
      // ],
    },

    {
      id: 4,
      name: "Broad arms",
      slug: "broad-arms",
      category: "Kids",
      recent_price: 80,
      discount_price: 90,
      main_price: 80,
      image: "pexels-photo-3193731.jpeg",

      // related_items: [
      //   {
      //     header: { text: Extras.productCardHeaderName, href: "#" },

      //     products: [
      //       //Related products here

      //       {
      //         id: 2,
      //         name: "Timberlin",
      //         slug: "timberlin",
      //         recent_price: 70,
      //         discount_price: 90,
      //         main_price: 70,
      //         image: "pexels-photo-1317712.jpeg",
      //         currency_symbol: {
      //           naira: Extras.currency_sign.naira,
      //           dollar: Extras.currency_sign.dollar,
      //         },

      //         related_items: [
      //           {
      //             header: { text: Extras.productCardHeaderName, href: "#" },
      //             products: [],
      //           },
      //         ],

      //         getDiscount() {
      //           const getDiscount =
      //             (this.recent_price / 100) * this.discount_price;

      //           this.main_price = Math.floor(this.recent_price - getDiscount);
      //         },
      //       },
      //     ],
      //   },
      // ],
    },

    {
      id: 1,
      name: "White glide",
      slug: "white-glide",
      category: "Kids",
      recent_price: 40,
      discount_price: 60,
      main_price: 40,
      image: "pexels-photo-1719641.jpeg",

      // related_items: [
      //   {
      //     header: { text: Extras.productCardHeaderName, href: "#" },

      //     products: [
      //       //Related products here

      //       {
      //         id: 2,
      //         name: "Timberlin",
      //         slug: "timberlin",
      //         recent_price: 70,
      //         discount_price: 90,
      //         main_price: 70,
      //         image: "pexels-photo-1317712.jpeg",
      //         currency_symbol: {
      //           naira: Extras.currency_sign.naira,
      //           dollar: Extras.currency_sign.dollar,
      //         },

      //         related_items: [
      //           {
      //             header: { text: Extras.productCardHeaderName, href: "#" },
      //             products: [],
      //           },
      //         ],

      //         getDiscount() {
      //           const getDiscount =
      //             (this.recent_price / 100) * this.discount_price;

      //           this.main_price = Math.floor(this.recent_price - getDiscount);
      //         },
      //       },
      //     ],
      //   },
      // ],
    },

    {
      id: 2,
      name: "Plane Polo Top",
      category: "Kids",
      slug: "plane-polo-top",
      recent_price: 70,
      discount_price: 90,
      main_price: 70,
      image: "pexels-photo-2726161.jpeg",

      // related_items: [
      //   {
      //     header: { text: Extras.productCardHeaderName, href: "#" },

      //     products: [
      //       //Related products here

      //       {
      //         id: 2,
      //         name: "Timberlin",
      //         slug: "timberlin",
      //         recent_price: 70,
      //         discount_price: 90,
      //         main_price: 70,
      //         image: "pexels-photo-1317712.jpeg",
      //         currency_symbol: {
      //           naira: Extras.currency_sign.naira,
      //           dollar: Extras.currency_sign.dollar,
      //         },

      //         related_items: [
      //           {
      //             header: { text: Extras.productCardHeaderName, href: "#" },
      //             products: [],
      //           },
      //         ],

      //         getDiscount() {
      //           const getDiscount =
      //             (this.recent_price / 100) * this.discount_price;

      //           this.main_price = Math.floor(this.recent_price - getDiscount);
      //         },
      //       },
      //     ],
      //   },
      // ],
    },

    {
      id: 3,
      name: "Net knit",
      slug: "net-knit",
      category: "Female",
      recent_price: 100,
      discount_price: 30,
      main_price: 100,
      image: "pexels-photo-2994951.jpeg",

      // related_items: [
      //   {
      //     header: { text: Extras.productCardHeaderName, href: "#" },

      //     products: [
      //       //Related products here

      //       {
      //         id: 2,
      //         name: "Timberlin",
      //         slug: "timberlin",
      //         recent_price: 70,
      //         discount_price: 90,
      //         main_price: 70,
      //         image: "pexels-photo-1317712.jpeg",
      //         currency_symbol: {
      //           naira: Extras.currency_sign.naira,
      //           dollar: Extras.currency_sign.dollar,
      //         },

      //         related_items: [
      //           {
      //             header: { text: Extras.productCardHeaderName, href: "#" },
      //             products: [],
      //           },
      //         ],

      //         getDiscount() {
      //           const getDiscount =
      //             (this.recent_price / 100) * this.discount_price;

      //           this.main_price = Math.floor(this.recent_price - getDiscount);
      //         },
      //       },
      //     ],
      //   },
      // ],
    },

    {
      id: 4,
      name: "clark tikky",
      slug: "clark-tikky",
      category: "Kids",
      recent_price: 80,
      discount_price: 90,
      main_price: 80,
      image: "pexels-photo-4620624.jpeg",

      // related_items: [
      //   {
      //     header: { text: Extras.productCardHeaderName, href: "#" },

      //     products: [
      //       //Related products here

      //       {
      //         id: 2,
      //         name: "Timberlin",
      //         slug: "timberlin",
      //         recent_price: 70,
      //         discount_price: 90,
      //         main_price: 70,
      //         image: "pexels-photo-1317712.jpeg",
      //         currency_symbol: {
      //           naira: Extras.currency_sign.naira,
      //           dollar: Extras.currency_sign.dollar,
      //         },

      //         related_items: [
      //           {
      //             header: { text: Extras.productCardHeaderName, href: "#" },
      //             products: [],
      //           },
      //         ],

      //         getDiscount() {
      //           const getDiscount =
      //             (this.recent_price / 100) * this.discount_price;

      //           this.main_price = Math.floor(this.recent_price - getDiscount);
      //         },
      //       },
      //     ],
      //   },
      // ],
    },
    {
      id: 1,
      name: "Hunai ",
      slug: "hunai",
      category: "Female",
      recent_price: 40,
      discount_price: 60,
      main_price: 40,
      image: "pexels-photo-5886045.jpeg",

      // related_items: [
      //   {
      //     header: { text: Extras.productCardHeaderName, href: "#" },

      //     products: [
      //       //Related products here

      //       {
      //         id: 2,
      //         name: "Timberlin",
      //         slug: "timberlin",
      //         recent_price: 70,
      //         discount_price: 90,
      //         main_price: 70,
      //         image: "pexels-photo-1317712.jpeg",
      //         currency_symbol: {
      //           naira: Extras.currency_sign.naira,
      //           dollar: Extras.currency_sign.dollar,
      //         },

      //         related_items: [
      //           {
      //             header: { text: Extras.productCardHeaderName, href: "#" },
      //             products: [],
      //           },
      //         ],

      //         getDiscount() {
      //           const getDiscount =
      //             (this.recent_price / 100) * this.discount_price;

      //           this.main_price = Math.floor(this.recent_price - getDiscount);
      //         },
      //       },
      //     ],
      //   },
      // ],
    },

    {
      id: 2,
      name: "Corbs",
      slug: "corbs",
      category: "Men",
      recent_price: 70,
      discount_price: 90,
      main_price: 70,
      image: "pexels-photo-3526923.jpeg",

      // related_items: [
      //   {
      //     header: { text: Extras.productCardHeaderName, href: "#" },

      //     products: [
      //       //Related products here

      //       {
      //         id: 2,
      //         name: "Timberlin",
      //         slug: "timberlin",
      //         recent_price: 70,
      //         discount_price: 90,
      //         main_price: 70,
      //         image: "pexels-photo-1317712.jpeg",
      //         currency_symbol: {
      //           naira: Extras.currency_sign.naira,
      //           dollar: Extras.currency_sign.dollar,
      //         },

      //         related_items: [
      //           {
      //             header: { text: Extras.productCardHeaderName, href: "#" },
      //             products: [],
      //           },
      //         ],

      //         getDiscount() {
      //           const getDiscount =
      //             (this.recent_price / 100) * this.discount_price;

      //           this.main_price = Math.floor(this.recent_price - getDiscount);
      //         },
      //       },
      //     ],
      //   },
      // ],
    },

    {
      id: 3,
      name: "Neck rolls",
      slug: "neck-rolls",
      category: "Men",
      recent_price: 100,
      discount_price: 5,
      main_price: 100,
      image: "pexels-photo-2466756(1).jpeg",

      // related_items: [
      //   {
      //     header: { text: Extras.productCardHeaderName, href: "#" },

      //     products: [
      //       //Related products here

      //       {
      //         id: 2,
      //         name: "Timberlin",
      //         slug: "timberlin",
      //         recent_price: 70,
      //         discount_price: 90,
      //         main_price: 70,
      //         image: "pexels-photo-1317712.jpeg",
      //         currency_symbol: {
      //           naira: Extras.currency_sign.naira,
      //           dollar: Extras.currency_sign.dollar,
      //         },

      //         related_items: [
      //           {
      //             header: { text: Extras.productCardHeaderName, href: "#" },
      //             products: [],
      //           },
      //         ],

      //         getDiscount() {
      //           const getDiscount =
      //             (this.recent_price / 100) * this.discount_price;

      //           this.main_price = Math.floor(this.recent_price - getDiscount);
      //         },
      //       },
      //     ],
      //   },
      // ],
    },

    {
      id: 4,
      name: "Suit brandy",
      slug: "suit-brandy",
      category: "Men",
      recent_price: 80,
      discount_price: 90,
      main_price: 80,
      image: "pexels-photo-952214.jpeg",

      // related_items: [
      //   {
      //     header: { text: Extras.productCardHeaderName, href: "#" },

      //     products: [
      //       //Related products here

      //       {
      //         id: 2,
      //         name: "Timberlin",
      //         slug: "timberlin",
      //         recent_price: 70,
      //         discount_price: 90,
      //         main_price: 70,
      //         image: "pexels-photo-1317712.jpeg",
      //         currency_symbol: {
      //           naira: Extras.currency_sign.naira,
      //           dollar: Extras.currency_sign.dollar,
      //         },

      //         related_items: [
      //           {
      //             header: { text: Extras.productCardHeaderName, href: "#" },
      //             products: [],
      //           },
      //         ],

      //         getDiscount() {
      //           const getDiscount =
      //             (this.recent_price / 100) * this.discount_price;

      //           this.main_price = Math.floor(this.recent_price - getDiscount);
      //         },
      //       },
      //     ],
      //   },
      // ],
    },

    {
      id: 4,
      name: "Suit",
      slug: "suit",
      category: "Boys",
      recent_price: 80,
      discount_price: 90,
      main_price: 80,
      image: "pexels-photo-6791665.jpeg",

      // related_items: [
      //   {
      //     header: { text: Extras.productCardHeaderName, href: "#" },

      //     products: [
      //       //Related products here

      //       {
      //         id: 2,
      //         name: "Timberlin",
      //         slug: "timberlin",
      //         recent_price: 70,
      //         discount_price: 90,
      //         main_price: 70,
      //         image: "pexels-photo-1317712.jpeg",
      //         currency_symbol: {
      //           naira: Extras.currency_sign.naira,
      //           dollar: Extras.currency_sign.dollar,
      //         },

      //         related_items: [
      //           {
      //             header: { text: Extras.productCardHeaderName, href: "#" },
      //             products: [],
      //           },
      //         ],

      //         getDiscount() {
      //           const getDiscount =
      //             (this.recent_price / 100) * this.discount_price;

      //           this.main_price = Math.floor(this.recent_price - getDiscount);
      //         },
      //       },
      //     ],
      //   },
      // ],
    },
  ],
};

module.exports = allProducts;

///////////////////////////////

// const div = document.querySelector(".div");
// const btn = document.querySelector("button");
// const nameInput = document.querySelector(".name");
// const ageInput = document.querySelector(".age");
// const datas = [];

// const addToList = () => {
//   const UserDetails = {
//     name: nameInput.value,
//     age: ageInput.value,
//   };

//   datas.push(UserDetails);
//   console.log(datas);

//   div.innerHTML = "";

//   datas.forEach((data) => {
//     div.innerHTML += `<div style="border: 1px solid black">
//           <h1>name:${data.name}</h1>
//           <h1>age:${data.age}</h1>
//         </div>`;
//   });
// };

// btn.addEventListener("click", addToList);
