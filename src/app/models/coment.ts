export interface CommentModel {
    date: Date;
    text: string;
    userName: string;
}

export type Comments = Array<CommentModel>;
