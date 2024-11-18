import { create } from "zustand";

export const useIOStore = create((set) => ({
    userInput: {
        face: null,
        betNumber: 1,
        wager: null,
        side: "heads",
    },
    setFace: (value) => set((state) => ({ userInput: { ...state.userInput, face: value } })),
    setBetNumber: (value) => set((state) => ({ userInput: { ...state.userInput, betNumber: value } })),
    setWager: (value) => set((state) => ({ userInput: { ...state.userInput, wager: value } })),
    setSide: (value) => set((state) => ({ userInput: { ...state.userInput, side: value } })),
}))

// updateField: (state, field) => set({ userInput: { ...userInput, [field]: state } }), upates one new field/key
// updateField: (newParams) => set({ userInput: { ...userInput, ...newParams } }), updates as much keys as i can pass through to the function
// updateField: (userInput) => set({ userInput }), replaces the whole object
