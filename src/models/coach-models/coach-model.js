import type { AppFileModel } from '../app-files-models/app-file-model';

export type CoachModel = {
    id: string,
    firstName: string | undefined,
    lastName: string | undefined,
    description: string | undefined,
    instagramLink: string | undefined,
    birthDate: Date | undefined,
    avatar: { id: string },
    avatarUrl: any,
    photos: AppFileModel[]
}
