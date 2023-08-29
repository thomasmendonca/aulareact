import { Button } from "./components/Button/Button"
import { Header } from "./components/Header/Header"
import { Card } from "./components/Card/Card"
import { Counter } from "./components/Counter/Counter"
import { Form } from "./components/Form/Form"
import { AddressForm } from "./components/AdressForm/AddressForm"
import { Address } from "./Pages/Address/Address"

function App() {
  // const user = {
  //   name: 'Thomas Nícolas',
  //   image: ""
  
  // }  

  // const products = [
  //   {id: 8, name: "Banana", value: 10},
  //   {id: 9, name: "Mamão", value: 12},
  //   {id: 10, name: "Maçã", value: 8},
  // ]
  return (
    <>
      {/* <Header userName={user.name}/>
      <p>{user.name}</p>
      <Button success>Salvar</Button>
      <Button danger>Cancelar</Button>
      <Button disabled>Cancelar desabilidado</Button>
      
        {products.map((product) => (
          <Card key={product.id}> 
          <h3>{product.name}</h3> 
          <p>{product.value}</p> 
          <Button>Adicionar</Button>
          </ Card>
        ) )}
        <Counter></Counter> */}
        {/* <Form></Form> */}
        <Address></Address>
        
    </>
  )
}

export default App
