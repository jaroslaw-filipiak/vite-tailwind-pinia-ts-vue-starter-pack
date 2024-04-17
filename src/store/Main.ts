import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    version: '1.0',
  }),
  getters: {
    getVersion(): string {
      return this.version;
    },
  },
});
