import { atom } from "recoil";


export const countAtom = atom({           /* Atom act as state variable. */

  key: "countAtom",                       /* Here atom stores an object, here key is for uniqueness. */
  default: 0

});

export const evenSelector = selector({    /* This is same as doing useMemo. */

  key: "evenSelector",
  get: ({props}) => {

    const count = props.get(countAtom);
    return count % 2;

  }

});