import type { CoachModel } from '../coach-models/coach-model';
import type { FoodModel } from '../food-models/food-model';
import type { AppFileModel } from '../app-files-models/app-file-model';
import type { CoachingDetailModel } from './coaching-detail-model';
import type { FeedbackModel } from '../feedbacks-models/feedback-model';
import type { CoachingVideoModel } from './coaching-video-model';

export type CoachingModel = {
    id: string,
    title: string,
    description: string,
    price: number,
    coachId: string,
    coach: CoachModel,
    foodId: string,
    food: FoodModel,
    coachingPhotoId: string,
    accessDays: number,
    coachingDetails: CoachingDetailModel[],
    feedbacks: FeedbackModel[],
    coachingPhoto: AppFileModel[],
    videos: CoachingVideoModel[],
    icon: string
}
