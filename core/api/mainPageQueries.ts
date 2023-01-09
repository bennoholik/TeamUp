import { useQuery } from "@tanstack/react-query"
import { IProject } from "../types/projectType";
import { mainpageApi } from "./apis";

export const mainPageQueries = {
  useGetPopularList: () =>{
    return useQuery<IProject[]>(
    ["popular"],
    () => {
      return mainpageApi.getPopularList(); //return 해줘야한다 - usequery의 queryFn은 promise를 반환해야함.
    },
    {
      staleTime: 60 * 1000,
      keepPreviousData: true,
    }
  )
  },
  useGetRecentList: () => {
    return useQuery<IProject[]>(["recent"], () => {
    return mainpageApi.getRecentList();
  },{
      staleTime: 60 * 1000,
      keepPreviousData: true,
    })
  }
}