import { useQuery } from "@tanstack/react-query";
import { IProject } from "../types/projectType";
import { commentApi } from "./apis";


export const commentQueries = {
 useGetCommentList: (projectId: string) => {
  return useQuery<IProject>(["comment",projectId], ()=>{
    return commentApi.getCommentList(projectId)
  })
 }
}