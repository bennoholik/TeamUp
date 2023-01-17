import { instance } from "../utils/axios";

export const mainpageApi = {
 getPopularList : async () => {const {data} = await instance.get("api/quests/main"); return data},
 getRecentList : async () => {const {data} =  await instance.get("api/quests/recent"); ; return data}
}

export const projectApi = {
  getProjectList : async () => {const {data} = await instance.get("api/quests"); return data},
  getProjectDetail : async (projectId:string) => {const {data} = await instance.get(`api/quests/${projectId}`); return data},
  submitProject : async (postInfo) => {const {data} = await instance.post("api/quests",postInfo); return data},
  deleteProject : async (projectId: string) => {
    const { data } = await instance.delete(`/api/quests/${projectId}`);
    return data;
  }
}

export const commentApi = {
  getCommentList :async (projectId:string) => {
    const {data} = await instance.get(`api/quests/${projectId}/comments`); 
    return data
  }
}

export const userinfoApi = {
  getUserInfo: async () => {
    const { data } = await instance.get(`/api/members/status`);
    return data;
  }
}