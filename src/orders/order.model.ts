import { BaseModel } from "../base.model/base.model";
import { Product } from "../products/product.model";
import { User } from "../users/user.model";

export interface order extends BaseModel {
    products: Product[];
    user: User;
}