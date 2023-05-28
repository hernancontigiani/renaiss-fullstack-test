import { api } from "./client"

const controller = new AbortController();

export const ChatAPI = {
  getAll: async function () {
    
    const response = await api.request({
      url: `/chats/`,
      method: "GET",
      signal: controller.signal
    })
    if(response) {
      return response.data
    }
  },
  abort: function(){
    controller.abort()
  },
}