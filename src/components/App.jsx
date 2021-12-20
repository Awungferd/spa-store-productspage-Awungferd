import Header from './Header'
import CreateProduct from './CreateProduct'
import Products from './Products'
import { ProductsContextProvider } from '../contexts/ProductsContext'
import { LocaleContextProvider } from '../contexts/LocaleContext'
import { Button, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
      <Alert variant="primary" className="GenAlert">
           <LocaleContextProvider>
            <ProductsContextProvider>
            <Header />
            <CreateProduct />
            <Products />
           
        </ProductsContextProvider>
       </LocaleContextProvider>
      </Alert>
    )
}