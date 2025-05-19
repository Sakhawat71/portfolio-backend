export interface IBlog {
    title: string;
    content: string;
    image?: string | null;
    slug?: string | null;
    summary?: string | null;
    tags: string[];
    author: string;
}
