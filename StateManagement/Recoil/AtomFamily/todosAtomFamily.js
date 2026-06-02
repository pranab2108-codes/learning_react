import { atomFamily } from "recoil";
import { TODOS } from "./todos.js";


export const todosAtomFamily = atomFamily({             /* Atoms can not have asynchronous backend call in their default value, so they need to use selector. */
                                                        /* Because an atom is supposed to be a state container, not a place where Recoil executes business logic or data fetching. */
  key: 'todosAtomFamily',
  default: id => {

    return TODOS.find(x => x.id === id);                /* This is exactly the right approach. */

  }

});