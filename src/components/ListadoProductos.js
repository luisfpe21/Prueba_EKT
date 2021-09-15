import react from "react";
import {Card} from 'react-bootstrap';
export default function ListadoProductos(props){
    const {producto} = props;// se recibe la propiedadad del producto para ir pintando en cada uno de los card la información del producto
    return(
        <div>    
                    <Card style={{ width: '12rem',height:'20rem' }}>
                        <Card.Img variant="top" src ={producto.image} style={{height:'10rem' }}/>
                        <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Card.Text> Price {producto.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>      
        </div>
    )
}
//<Row>
  //                      <Col xs={8} md ={8} lg={8}>
    //                        <Image width="150" height="200" src ={producto.image} thumbnail/>
      //                  </Col>
        //                <Col xs={4} md ={4} lg={4}>
          //                  <label>Id: {producto.id}</label>
            //            </Col>
              //      </Row>