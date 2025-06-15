/// <reference path="../.astro/types.d.ts" />
declare global {
  interface Window {
    goToPage: (pageNum: number) => void;
  }
}

export {};
