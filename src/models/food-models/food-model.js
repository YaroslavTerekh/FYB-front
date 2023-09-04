import type { BaseUserModel } from '../user-models/base-user-model';
import type { CoachingModel } from '../coaching-models/coaching-model';
import type { FoodPointModel } from './food-point-model';

export type FoodModel = {
    id: string,
    users: BaseUserModel[],
    price: number,
    title: string,
    description: string,
    unixExpireTime: number,
    coachingId: string,
    coaching: CoachingModel,
    foodPoints: FoodPointModel[]
}
