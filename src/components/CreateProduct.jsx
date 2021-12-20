import { useState } from 'react'
import { useProductsContext } from '../contexts/ProductsContext'
import { Button, Alert, InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CreateProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useProductsContext();
    //Set currency state here
    const [curr, setCurr]=useState("de-de")
    
    function createProduct(e) {
        const id = Math.floor(Math.random() * 99999999999);

        setProducts([ ...products, { id, name, price, curr } ]);
    }

    return (
       <Alert variant="primary">
          
 <InputGroup className="mb-3">
        <InputGroup.Text>Item and Price</InputGroup.Text>
        <FormControl aria-label="First name" placeholder="Product name" value={name} onChange={e => setName(e.target.value)}/>
        <FormControl aria-label="Last name" placeholder="Product price" value={price} onChange={e => setPrice(e.target.value)}/>
        
</InputGroup>
<Button variant="info" onClick={createProduct}>Add product!</Button>
       </Alert>
       
    )
}