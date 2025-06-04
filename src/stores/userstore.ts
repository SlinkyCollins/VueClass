import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'oyin',
    allUsersArray: [] as Array<{ username: string; fullname: string; password: string }>,
  }),
  actions: {
    receiveUser(username: string, fullname: string, password: string) {
      const newUser = {
        username,
        fullname,
        password,
      };
      this.allUsersArray.push(newUser);
    },
    getUsers() {
      return this.allUsersArray;
    },
  },
});
