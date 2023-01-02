import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Button from "./Button";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelar?: ()=> void
}

export default function Formulario(props: FormularioProps) {

const id = props.cliente?.id ?? null

const [nome,setNome] = useState(props.cliente.name ?? '')
const [idade,setIdade] = useState(props.cliente.idade ?? 0)

    return (
        <div>
            {id ? <Entrada somenteLeitura text="ID" valor={'Teste'} className='mb-5'/> : false} 
            <Entrada text="Nome" valor={nome} valorMudou={setNome} className='mb-5'/>
            <Entrada text="Idade" tipo="number" valor={idade} valorMudou={setIdade}/>

            <div className=" flex justify-end mt-7">
                <Button className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome,+idade,id))}>
                    {id? "Alterar" : "Salvar"}
                </Button>

                <Button onClick={props.cancelar}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}