import { useMutation, useQuery } from "@tanstack/react-query";
import { IpostingProject, IProject } from "../types/projectType";
import { mainpageApi, projectApi } from "./apis";

export const projectQueries = {
  useGetProjectList: () =>{
    return useQuery<IProject[]>(
    ["projectList"],
    () => {
      return projectApi.getProjectList() //return 해줘야한다 - usequery의 queryFn은 promise를 반환해야함.
    },
    {
      staleTime: 60 * 1000,
      keepPreviousData: true,
    }
  )
  },
 useGetProjectDetail: (projectId: string) => {
  return useQuery<IProject>(["project",projectId], ()=>{
    return projectApi.getProjectDetail(projectId)
  })
 },
 useSubmitProject: () => {
  return useMutation(async (postInfo: IpostingProject) => await projectApi.submitProject(postInfo));
 },
 useDeleteProject: () => {
  return useMutation(async (projectId:string) => await projectApi.deleteProject(projectId))
 }

}