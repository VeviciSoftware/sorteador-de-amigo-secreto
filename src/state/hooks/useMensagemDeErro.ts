import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { erroState } from '../atom';

const useMensagemDeErro = () => {
    const mensagem = useRecoilValue(erroState);
    return mensagem;
}

export { useMensagemDeErro };