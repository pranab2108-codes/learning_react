import { atom, selector } from "recoil";


export const countAtom = atom({           

  key: "countAtom",                       
  default: 0

});

export const evenSelector = selector({    /* This is same as doing useMemo, here the evenSelector completely depend on the countAtom. */
                                          /* Selectors can depend on atoms, or selectors can depends on selectors also. */
  key: "evenSelector",
  get: ({ get }) => {

    const count = get(countAtom);
    return count % 2 == 0;

  }

});