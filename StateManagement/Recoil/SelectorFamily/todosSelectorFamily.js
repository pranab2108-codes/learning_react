import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";


export const todosAtomFamily = atomFamily({

  key: 'todoAtomFamily',
  default: selectorFamily({                                    /* As we have known atom use selector while calling an asynchronously fetching data from backend, Similarly in atomFamily it can not have asynchronous backend call in it's default value, so they need to use selctorFamily. */

    key: "todoSelectorFamily",
    get: (id) => async ({ get }) => {

      if(id === 4) {                                           /* Here we are artificially doing a delay. */

        await new Promise(resolve =>

          setTimeout(resolve, 5000)

        );

      }

      const res = await axios.get(`https://dummyjson.com/todos/${id}`);
      return res.data;

    }

  })

});