

const Colaborador = ({ nome, cargo, image }) => {
    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src={image} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h3>{cargo}</h3>
            </div>
        </div>
    )
}

export default Colaborador