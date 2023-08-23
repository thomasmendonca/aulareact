import {useState} from "react"

export const Form = () =>{

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("Não selecionado")
    const [documentCPF, setDocumentCPF] = useState(false)
    const [documentCNH, setDocumentCNH] = useState(false)
    const [termosCondicoes, setTermosCondicoes] = useState(false)

    

    const handleChangeName = (event) =>{
        setName(event.target.value)
    }
    const handleChangeLastName = (event) =>{
        setLastName(event.target.value)
    }
    const handleChangeBirthday = (event) =>{
        setBirthday(event.target.value)
    }
    const handleChangeMaritalStatus = (event) =>{
        setMaritalStatus(event.target.value)
    }
    const handleChangeDocumentCPF = (event) =>{
        setDocumentCPF(event.target.checked)
        setDocumentCNH(event.target.value)
    }
    const handleChangeDocumentCNH = (event) =>{
        setDocumentCNH(event.target.checked)
        setDocumentCNH(event.target.value)
    }
    const handleChangeTaC = (event) =>{
        setTermosCondicoes(event.target.checked)
        setDocumentCNH(event.target.value)
    }
    const handleSave = () =>{
        const payload = {
            nome: name,
            sobrenome: lastName,
            estado_civil: maritalStatus,
            data_nascimento: birthday,
            documento: documentCPF ? 'CPF' : 'CNH',
            termos: termosCondicoes
        }
        console.log(payload)
        
    }
    

    return(
        <form>
            <h3>Nome Completo: {name}{lastName} <br />
                Idade: {birthday} <br />
                Estado civil: {maritalStatus} <br />
                Documento selecionado: {documentCNH}
            </h3>
            <div className="form">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" onChange={handleChangeName}/>
                <br />
                <label htmlFor="lastName">Sobrenome</label>
                <input type="text"  id="lastName" onChange={handleChangeLastName}/>
                <br />
                <label htmlFor="birthday">Data de nascimento</label>
                <input type="date"  id="birthday" onChange={handleChangeBirthday}/>
                <br />
                <label htmlFor="maritalStatus">Estado civil</label>
                <select id="maritalStatus" onChange={handleChangeMaritalStatus}>
                    <option value="Solteiro">Solteiro</option>
                    <option value="Casado">Casado</option>
                    <option value="Viuvo">Viuvo</option>
                    <option value="Divorciado">Divorciado</option>
                </select>
                <br /><br />
                <fieldset>
                    <legend>Documento</legend>
                <input type="radio" value="CPF" name="documento" id="cpf" onChange={handleChangeDocumentCPF}/><label htmlFor="cpf">CPF</label> <br />
                <input type="radio" value="CNH" name="documento" id="cnh"onChange={handleChangeDocumentCNH}/><label htmlFor="cnh">CNH</label>
                </fieldset>
                <br />
                <input type="checkbox" id="termos-condicoes" onChange={handleChangeTaC}/>
                <label htmlFor="termos-condicoes">Aceitar termos e condições.</label>
                <br />
                <button onClick={handleSave} type="button">Salvar</button>
                
            </div>
        </form>
    )
}