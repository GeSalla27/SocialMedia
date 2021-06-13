export interface PostModel {
    id: number;
    url: string;
    description: string;
    allowComments: boolean;
    likes: number;
    comments: number;
    userId: number;
}

export type Posts = Array<PostModel>;
