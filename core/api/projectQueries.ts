import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { IpostingProject, IProject } from "../types/projectType";
import { instance } from "../utils/axios";
import { mainpageApi, projectApi } from "./apis";

interface IQuestInifite {
  content: IProject[];
  nextPage: number;
  last: boolean;
  totalElements: number;
}

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
  useGetInfiniteList: (filterval: string) => {
    return useInfiniteQuery<
      IQuestInifite,
      Error,
      IQuestInifite,
      [string, string]
    >(
      ["filterlist", filterval],
       async ({ pageParam = 0 }) => {
        const { data } = await instance.get(
          `/api/quests/searches?page=${pageParam}&size=15&${filterval}`,
        );
        const { content, last, totalElements } = data;
        return { content, nextPage: pageParam + 1, last, totalElements };
      },
      {
        getNextPageParam: lastPage =>
          !lastPage.last ? lastPage.nextPage : undefined,
      },
    );
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