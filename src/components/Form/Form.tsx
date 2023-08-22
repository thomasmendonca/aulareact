import {useState} from "react"

export const Form = () =>{

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")

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

    return(
        <form>
            <h3>{name},{lastName},{birthday}</h3>
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
                    <option value="solteiro">Solteiro</option>
                    <option value="casado">Casado</option>
                    <option value="viuvo">Viuvo</option>
                </select>
                <br />
                <fieldset>
                    <legend>Documento</legend>
                <input type="radio" value="CPF" name="documento" id="CPF"/>CPF
                <input type="radio" value="CPF" name="documento" id="CPF"/>Documento
                </fieldset>
                
            </div>
        </form>
    )
}