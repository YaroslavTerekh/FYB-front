import { CoachingModel } from '../coaching-models/coaching-model';
import type { AppFileModel } from '../app-files-models/app-file-model';

export type FeedbackModel = {
    id: string,
    feedbackText: string,
    instagramLink: string,
    coachingId: string,
    coaching: CoachingModel,
    photos: AppFileModel[]
}
