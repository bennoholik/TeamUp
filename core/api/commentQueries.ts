import { useQuery } from "@tanstack/react-query";
import { commentApi } from "./apis";


export const commentQueries = {
 useGetCommentList: (projectId: string) => {
  return useQuery(["comment",projectId], ()=>{
    return commentApi.getCommentList(projectId)
  })
 }
}