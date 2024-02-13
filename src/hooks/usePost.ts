import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/posts";

export const usePost = (postID: number) => useQuery({ queryKey: ['post', postID], queryFn: () => getPost(postID) });