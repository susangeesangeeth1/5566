import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import styles from '../styles/Home.module.css'
import Cliente from '../core/Cliente'
import Button from '../components/Button'
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../backend/db/ColecaoCliente'
import useClientes from '../hooks/useClientes'

export default function Home() {

 const {cliente, clientes, novoCliente,
        selecionarCliente,salvarCliente,excluirCliente,
        tabVisivel,exibirForm,exibirTabela} = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500 
      text-white
    `}>

      <Layout titulo='Cadastro Simples'>
        {tabVisivel ? (
          <>
            <div className='flex justify-end'>
              <Button className='mb-4' onClick={novoCliente}>
                Novo Cliente
              </Button>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente} />
          </>
        ) : (<Formulario cliente={cliente} clienteMudou={salvarCliente} cancelar={exibirTabela} />)}

      </Layout>

    </div>
  )
}
