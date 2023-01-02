import { useState } from "react";

export default function useTabOuForm() {
    const [visivel,setVisivel] = useState<'tabela' | 'form'> ('tabela')

    const exibirTabela = ()=> setVisivel('tabela')
    const exibirForm = ()=> setVisivel('form')

    return {
        formVisivel: visivel === 'form',
        tabVisivel: visivel === 'tabela',
        exibirForm,
        exibirTabela
    }
}