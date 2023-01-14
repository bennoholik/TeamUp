import { useQuery } from "@tanstack/react-query"
import { getCookieToken } from "../utils/cookie";
import { userinfoApi } from "./apis"

export const userInfoQueries = {
  useGetUserinfo : () => {
    return useQuery(["userinfo"], ()=> {
      return userinfoApi.getUserInfo();
    }, {
      enabled: !!getCookieToken(),
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    })
  }
}