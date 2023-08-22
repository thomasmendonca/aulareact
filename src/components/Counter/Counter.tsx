import { useState } from "react"
import {Button} from "../Button/Button"

interface CounterProps {
    step? : number
}


export const Counter = () =>{

    const [count, setCount] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true)

    const handleDecrement =() =>{
        console.log("Decrementar")
        setCount(count-1)
        if (count <= 1){
            setIsDisabled(true)
        }
        else{
            setCount(count-1)
        }
        
    }
    const handleIncrement = () =>{
        console.log("Incrementar")
        if (count >= 0 )
        {
           setIsDisabled(false)
        }
        setCount(count+1)
    }

    return(
        <div>
            <Button danger onClick={handleDecrement} disabled={isDisabled}>
                Decrementar
            </Button>
            <span>{count}</span>
            <Button success onClick={handleIncrement}>
                Incrementar
            </Button>
        </div>
    )
}