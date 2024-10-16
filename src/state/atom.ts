import { atom } from "recoil";

export const listaDeParticipantesState = atom<string[]>({
    key: "listaDeParticipantes",
    default: [],
});

export const erroState = atom<string>({
    key: "erroState",
    default: "",
});


