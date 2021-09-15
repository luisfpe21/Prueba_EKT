import React, { useState,useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
export default function DetalleProducto(){
    const {id} = useParams(); // utiliza el parametro que se mando en el router
    const [Producto,setProducto] = useState();
    const obtenerProducto = async (id) => {//Se obtiene el producto
        const resProducto = await fetch("https://fakestoreapi.com/products/"+id);
        const productoJSON = await resProducto.json();
        setProducto(productoJSON);
    }
    //cuando se asigne/cambie el id, que vaya a buscar el detalle del producto
    useEffect(() => {
        obtenerProducto(id)},
        [id])
    return(
        <div>{!Producto? '': 
            <Card border="success" bg="info" key="0" text='light' style={{ width: '18rem' }}className="mb-2">
                <Card.Header >Detalle producto {Producto.id}</Card.Header>
                <Card.Body>
                    <Card.Title> {Producto.title}   </Card.Title>
                    <Card.Text>{Producto.description}</Card.Text>
                    <Card.Text> <h2>$ {Producto.price}</h2></Card.Text>
                </Card.Body>
            </Card>
            }
            
        </div>
    )
}