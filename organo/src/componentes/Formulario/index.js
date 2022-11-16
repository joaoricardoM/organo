import { useState } from "react";
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            image,
            time
        })
        setNome('')
        setCargo('')
        setImage('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Olá bem vindo, preencha os dados para criar o card do colaborador </h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o cargo"
                    value={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Insira o link da imagem"
                    value={image}
                    aoAlterado={valor => setImage(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Time"
                    itens={props.time}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}
export default Formulario