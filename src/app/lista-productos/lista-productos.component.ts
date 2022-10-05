import { Component, OnInit, TemplateRef } from '@angular/core';
import { producto2 } from './model/producto2';
import {  Productosss } from './model/Productosss';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})

export class ListaProductosComponent implements OnInit {
 

  p_id:number=0;
  p_detalles:string= " " ;
  p_nombre: string = " " ;
  p_precio: number = 0 ;
  p_imagen: string = " " ; 
  productos: Productosss[] = [
    {
      id:457788457848,
      detalles:"acabdo 3d",
      nombre: "-juego de Sala matine",
      precio: 45.00,
      imagen: "assets/juegosala.jpg"
    },
    {
      id:4578978945498,
      detalles:"Laminado de madera",
      nombre: "Lamina en pino",
      precio: 70.00,
      imagen: "assets/lamina.jpg"
    },
    {
      id:4578978945498,
      detalles:"Laminado de madera",
      nombre: "Lamina en pino",
      precio: 70.00,
      imagen: "assets/lamina.jpg"
    },
    
  ];
  pd_id:number=0;
  pd_detalles:string="";
  pd_nombre: string = "";
  pd_precio: number = 0;
  pd_imagen: string ="";
  productos2: producto2[] = [
    {
      id:45454646465545,
      detalles:"parquet soleado",
      nombre: "Juego de parquet 40x40",
      precio: 24.00,
      imagen: "assets/parquet.jpg"
    },
  ];
  
  productosss: any;
  eliminarProducto(posicion: number): void {
     this.productos.splice(posicion, 1);
    }
  agregarProducto(): void {
      const proddcutonuevo = {
        Id: this.p_id,
        detalles:  this.p_detalles,
        nombre: this.p_nombre,
        imagen: this.p_imagen,
        precio: this.p_precio,
      };
      this.productosss.push(proddcutonuevo);
      this.p_id=0,
      this.p_detalles="",
      this.p_nombre = "";
      this.p_precio=0,
      this.p_imagen = "";
  
  }
  verProdcuto():void {
    

  };
  constructor() { }

  ngOnInit(): void {
  }

}
