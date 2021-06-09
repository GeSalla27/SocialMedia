export interface PostModal {
    id: number;
    url: string;
    description: string;
    allowComments: boolean;
    likes: number;
    comments: number;
    userId: number;
}

export type Posts = Array<PostModal>;
