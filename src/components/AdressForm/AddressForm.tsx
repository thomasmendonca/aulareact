import { useEffect, useState } from "react"
interface  AddressDataProps {
    addressData: object
}

export const AddressForm = ({addressData}:AddressDataProps) =>{

    const [postalCode, setPostalCode] = useState(addressData.cep)
    const [stateName, setstateName] = useState(addressData.state)
    const [cityName, setCityName] = useState(addressData.city)
    const [neiborhoodName, setNeiborhoodName] = useState(addressData.neighborhood)
    const [streetName, setStreetName] = useState(addressData.street)

    useEffect(()=>{
        setPostalCode(addressData.cep)
        setstateName(addressData.state)
        setCityName(addressData.city)
        setNeiborhoodName(addressData.neighborhood)
        setStreetName(addressData.street)
    },[addressData])

    return(
        <form action="">
            <div>
                <label htmlFor="cep">Cep</label>
                <input type="text" id="cep" value={postalCode}/>
            </div>
            <div>
                <label htmlFor="logradouro">Logradouro</label>
                <input type="text" id="logradouro" value={streetName}/>
            </div>
            <div>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" value={neiborhoodName} />
            </div>
            <div>
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" value={cityName}/>
            </div>
            <div>
                <label htmlFor="estado">Estado</label>
                <input type="text" id="estado" value={stateName}/>            
            </div>
        </form>

    )
}