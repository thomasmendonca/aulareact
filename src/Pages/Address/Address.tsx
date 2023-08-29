import { useEffect, useState } from "react"
import { AddressForm } from "../../components/AdressForm/AddressForm"


export const Address = () =>{
    
    const[AddressData, setAddressData] = useState({})
    
    useEffect(()=>{
        fetch('https://brasilapi.com.br/api/cep/v1/06440260')
        .then((response)=>{
            console.log(response)
            if(response.ok){
                return response.json()
            }
        })
        .then((data)=>{
            setAddressData(data)
        })

    },[])

    return(
        <AddressForm addressData={AddressData}/>
        
    )
}