export interface IBlog {
    title: string;
    tags: string[];
    contentHtml: string;
    contentJson: JSON;
    slug: string;
    publishedAt?: Date;
    isPublished?: boolean;
}
