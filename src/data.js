import thumbnailProductImage_1 from "./assets/images/image-product-1-thumbnail.jpg";
import thumbnailProductImage_2 from "./assets/images/image-product-2-thumbnail.jpg";
import thumbnailProductImage_3 from "./assets/images/image-product-3-thumbnail.jpg";
import thumbnailProductImage_4 from "./assets/images/image-product-4-thumbnail.jpg";

import previewProductImage_1 from "./assets/images/image-product-1.jpg";
import previewProductImage_2 from "./assets/images/image-product-2.jpg";
import previewProductImage_3 from "./assets/images/image-product-3.jpg";
import previewProductImage_4 from "./assets/images/image-product-4.jpg";

export const IMAGES = {
  product_1: {
    title: "fall limited edition sneakers",
    originalPrice: 250,
    discount: 0.5,
    productID: 0,
    get price() {
      return this.originalPrice * (1 - this.discount);
    },
    thumbnail: [
      {
        id: "0",
        src: thumbnailProductImage_1,
      },
      {
        id: "1",
        src: thumbnailProductImage_2,
      },
      {
        id: "2",
        src: thumbnailProductImage_3,
      },
      {
        id: "3",
        src: thumbnailProductImage_4,
      },
    ],
    preview_pictures: [
      {
        id: "IP_1",
        src: previewProductImage_1,
      },
      {
        id: "IP_2",
        src: previewProductImage_2,
      },
      {
        id: "IP_3",
        src: previewProductImage_3,
      },
      {
        id: "IP_4",
        src: previewProductImage_4,
      },
    ],
  },
};
