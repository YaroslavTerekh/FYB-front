import type { FoodModel } from './food-model';

export type FoodPointModel = {
    id: string,
    title: string,
    description: string,
    portionMass: number,
    foodId: string,
    food: FoodModel
}
