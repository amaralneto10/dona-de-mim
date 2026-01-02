export type Coupon = {
  code: string;
  discountPercentage: number;
};

export const coupons: Coupon[] = [
  {
    code: "POUPE10",
    discountPercentage: 10,
  },
  {
    code: "PROMO15",
    discountPercentage: 15,
  },
];
