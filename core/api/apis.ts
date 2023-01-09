import { instance } from "../utils/axios";

export const mainpageApi = {
 getPopularList : async () => {const {data} = await instance.get("api/quests/main"); return data},
 getRecentList : async () => {const {data} =  await instance.get("api/quests/recent"); ; return data}
}