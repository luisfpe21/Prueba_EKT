import logo from './logo.svg';
import './App.css';
import ListadoProductos from './components/ListadoProductos';
import DetalleProducto from './components/DetalleProducto';
import { useState,useEffect } from 'react';
import { Container,Row,Col,CardGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  const [productos,setProductos] = useState();//para guardar el estado de los productos
  const obtenerListado = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=10");//peticion a la api
    const dataJSON = await response.json();// conversion del resultado a json
    setProductos(dataJSON);//asignacion de productos
  }

useEffect(() => {//inicie la busqueda al inicio
  obtenerListado()
   }, [])
  return (
    <div className="App"> 
      <h1>Listado de Productos</h1>
      <Container>
       <Row>{
         //En este caso se utiliza el router y dentro de el se va pintando cada uno de los productos en un cardGroup
         }
       <Router>
          <Col xs={8} md={8} lg ={8}>
            <CardGroup>
                {!productos? 'Cargando': 
                  productos.map((producto,index) =>{
                    producto.title = producto.title.slice(0,15);
                    return <Link key={producto.id} to={`/DetalleProducto/${producto.id}`}><ListadoProductos key={producto.id} producto={producto}/> </Link>
                  })
                }
              </CardGroup>
          </Col>
          <Col>{
            //En el swich se asigna el router con el parametro que le vamos a mandar, en este caso el id
          }
          <Switch>
                  <Route path={`/DetalleProducto/:id`}>
                    <DetalleProducto/>
                  </Route>
                </Switch>
          </Col>
          </Router> 
        </Row>
      </Container>
        
    </div>
  );
}
export default App;
