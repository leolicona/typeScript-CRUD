import { BaseModel } from '../base.model/base.model';
import { Category } from '../categories/category.model';

export type sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;  
  tags?: string[];
}

