import { useState } from "react";

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
        <section className="Formulario">
            <form onSubmit={aoSalvar}>

            </form>
        </section>
    )

}