import { atom } from "recoil";

const listPageReLoading = atom({
    key: 'listPageReLoading', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });
  
const focusNav = atom({
  key: 'focusNav', // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export { listPageReLoading, focusNav };