import { Category } from "./category.model";

export interface Movie {
  id?: number;
  title: string;
  category?: Category;
  releaseYear: number;
  description: string;
  price: number;
}
