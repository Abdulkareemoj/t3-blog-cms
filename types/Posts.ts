export interface Posts {
  posts: Posts[];
  createdAt: string;
  slug: string;
  title: string;
  featuredImage: {
    url: string;
  };
}

export interface PostDetails {
  posts: Posts[];
  createdAt: string;
  slug: string;
  title: string;
  featuredImage: {
    url: string;
  };
}

export interface RecentPosts {
  posts: Posts[];
  createdAt: string;
  slug: string;
  title: string;
  featuredImage: {
    url: string;
  };
}

export interface SimilarPosts {
  posts: Posts[];
  createdAt: string;
  slug: string;
  title: string;
  featuredImage: {
    url: string;
  };
}
