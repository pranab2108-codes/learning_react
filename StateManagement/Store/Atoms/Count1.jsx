import { atom } from "recoil";


export const countAtom = atom({           /* Atom act as state variable. */

  key: "countAtom",                       /* Here atom stores an object, here key is for uniqueness. */
  default: 0

});