export interface PopularKeyword {
  key: string;
  rank: number;
  is_new: boolean;
  display_keyword: string;
  diff_rank: number;
}
export interface GetPopularKeywordsRes {
  popular_keywords: {
    results: PopularKeyword[];
    version: string;
  };
}
export const getPopularKeywords = async () => {
  const result: GetPopularKeywordsRes = await fetch(
    'http://localhost:3000/api/popular-keywords'
  ).then((res) => res.json());

  return result;
};
