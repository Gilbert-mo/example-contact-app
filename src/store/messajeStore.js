import { create } from "zustand";

export const useMessajeStore = create((set, get) => ({
  messaje: [],
  show: false,
  addMessaje: (value) => {
    set(state => ({...state, messaje: [...state.messaje, value]}))
    // setTimeout(() => {
    //     set(state => ({...state, messaje: [], show: !state.show}))
    // }, 5000)
  },
  onClickShow: () => set((state) => {
    return { ...state, show: !state.show }
  }),
}));

// show === false ? state.show = true : state.show = false
