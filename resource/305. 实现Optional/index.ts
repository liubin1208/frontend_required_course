interface Article {
  title: string;
  content: string;
  author: string;
  datetime: Date;
  readCount: number;
}

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type CreateArticleOptions = Optional<Article, 'datetime' | 'readCount'>;

function createArticle(options: CreateArticleOptions) {}
