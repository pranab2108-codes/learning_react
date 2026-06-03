import { atom } from "recoil";


export const todoAtom1 = atom({

  key: "todoAtom1",
  default: {

    id: 1,
    title: "Go to GYM",
    description: "Hit the GYM from 7:00 A.M - 9:00 A.M"

  }

});

export const todoAtom2 = atom({

  key: "todoAtom2",
  default: {

    id: 2,
    title: "Go to eat food",
    description: "Eat the food from 9:00 A.M - 10:00 A.M"

  }

});