import { useLocaleContext } from '../contexts/LocaleContext';
import { useProductsContext } from '../contexts/ProductsContext';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Products() {
    const [ products,setProducts ] = useProductsContext();
    const [locale]=useLocaleContext()
    let currSign= "€"
    if (locale==="eng-gb") { currSign="£"}
    if (locale==="eng-us") { currSign="$"}

function deleteProduct(prod) {
    const newProducts=products.filter(f=>f.id !==prod.id);
     
    setProducts(newProducts)
  
    
}


    return (      
<Table striped bordered hover>
   
  <thead>
    <tr>
      <th>ID</th>
      <th>Product</th>
      <th>Price</th>      
    </tr>
  </thead>
  
  <tbody>
{products.map(prod => 
    <tr key={prod.id} >
      <td>{prod.id}</td>
      <td>{prod.name}:</td>
      <td>{prod.price} {currSign}</td>
       <td onClick={(e)=>deleteProduct(prod)} >Delete</td>            
    </tr>)}    
  </tbody>
</Table>


    )
}