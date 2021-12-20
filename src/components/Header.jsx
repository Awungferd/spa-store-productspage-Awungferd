import { useLocaleContext } from '../contexts/LocaleContext';
import { useProductsContext } from '../contexts/ProductsContext';
import { Button,ButtonGroup, Alert, ButtonProps } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Header() {
 
    const [ products] = useProductsContext();
    const [locale, setLocale]=useLocaleContext();   
     let wordGram= "Item"
    let currSign= "€"
     if (locale==="eng-gb") { currSign="£"}
    if (locale==="eng-us") { currSign="$"}
   if (products.length>1) {wordGram="Items"}
     
 
     const priceTotal= products.reduce((totalPrice, item)=>totalPrice + parseInt(item.price,10),0)
 

   
   
     
    return (
         <Alert variant="success">
        <header>
           <Alert.Heading>Product Manager</Alert.Heading>
            <hr />    
            <div>             
             Products Inventory: {products.length} {wordGram}             
            </div>
            <h6>Total Value: {priceTotal} {currSign}</h6>
            <h6>Select Currency: {' '}       
            <ButtonGroup  size="sm" >
            <Button variant="info" className="" onClick={()=>{setLocale("de-de")}}>EUR</Button>{' '}
            <Button variant="info"  onClick={()=>{setLocale("eng-us")}} >USD</Button>{' '}
            <Button variant="info"  onClick={()=>{setLocale("eng-gb")}}>GBP</Button>{' '}
            </ButtonGroup> {' '}
              = <Button variant="warning">{currSign}</Button>   
            </h6>             
        </header>
          </Alert>
    )
}