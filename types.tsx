export interface GetProductResult {
  data: Welcome[];
}
export interface Welcome {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}
export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MensClothing = "mens's clothing",
  WomensClothing = "women's clothing",
}
export interface Rating {
  rate: number;
  count: number;
}
