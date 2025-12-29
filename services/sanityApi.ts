import { client, urlFor } from '../src/lib/sanity';
import type { PortableTextBlock } from '@portabletext/types';

export interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  content: PortableTextBlock[];
  category: string;
  author: string;
  authorAvatar: unknown;
  featuredImage: unknown;
  readTime: string;
  publishedDate: string;
  stats: { fill?: string; hug?: string } | null;
}

export const getArticles = async (): Promise<Article[]> => {
  return client.fetch(`
    *[_type == "article"] | order(publishedDate desc) {
      _id,
      title,
      slug,
      description,
      category,
      author,
      authorAvatar,
      featuredImage,
      readTime,
      publishedDate,
      stats
    }
  `);
};

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      content,
      category,
      author,
      authorAvatar,
      featuredImage,
      readTime,
      publishedDate,
      stats
    }`,
    { slug }
  );
};

export const getImageUrl = (image: unknown): string => {
  if (!image) return 'https://via.placeholder.com/400x250';
  return urlFor(image as { _type: string; asset: { _ref: string } }).url();
};