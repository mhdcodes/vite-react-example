import api from "@modules/api";
import { useQuery } from "@tanstack/react-query";

type BlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useBlogPosts = () =>
  useQuery<BlogPost[]>({
    queryKey: ["posts"],
    queryFn: () => api.get<BlogPost[]>('posts', {}),
  });
