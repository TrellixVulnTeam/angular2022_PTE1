import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ej08-tuberias';
    datos = {
    coches: [
      {
        id: "1",
        text: null,
        nombre: "A3 Sportback e-tron",
        imagen: "img/Audi_A3_Sportback_e-tron.jpg",
        precio: "38750",
        fabricante: "1",
        tecnologia: "3"
      },
      {
        id: "2",
        text: null,
        nombre: "Q7 e-tron quattro",
        imagen: "img/Audi_Q7_e-tron_quattro.jpg",
        precio: "83970",
        fabricante: "1",
        tecnologia: "3"
      },
      {
        id: "3",
        text: null,
        nombre: "i3",
        imagen: "img/BMW-i3-60Ah.jpg",
        precio: "35500",
        fabricante: "2",
        tecnologia: "1"
      },
      {
        id: "4",
        text: null,
        nombre: "Serie 2 iPerformance",
        imagen: "img/BMW_225xe_iPerformance.jpg",
        precio: "39500",
        fabricante: "2",
        tecnologia: "3"
      },
      {
        id: "5",
        text: null,
        nombre: "Serie 7 iPerformance",
        imagen: "img/BMW_740e_iPerformance.jpg",
        precio: "102500",
        fabricante: "2",
        tecnologia: "3"
      },
      {
        id: "6",
        text: null,
        nombre: "C-Zero",
        imagen: "img/Citroen_C-ZERO.jpg",
        precio: "26190",
        fabricante: "3",
        tecnologia: "1"
      },
      {
        id: "7",
        text: null,
        nombre: "Berlingo Electric",
        imagen: "img/Citroen_Berlingo.jpg",
        precio: "24900",
        fabricante: "3",
        tecnologia: "1"
      },
      {
        id: "8",
        text: null,
        nombre: "Mondeo HEV",
        imagen: "img/Ford_MondeoHEV.jpg",
        precio: "34500",
        fabricante: "4",
        tecnologia: "2"
      },
      {
        id: "9",
        text: null,
        nombre: "IONIQ",
        imagen: "img/Hyundai_IONIQ_Hybrid.jpg",
        precio: "21375",
        fabricante: "6",
        tecnologia: "2"
      },
      {
        id: "10",
        text: null,
        nombre: "IONIQ",
        imagen: "img/Hyundai_IONIQ_Electrico.jpg",
        precio: "29725",
        fabricante: "6",
        tecnologia: "1"
      },
      {
        id: "11",
        text: null,
        nombre: "IONIQ PHEV",
        imagen: "img/Hyundai_IONIQ_PHEV.jpg",
        precio: "27975",
        fabricante: "6",
        tecnologia: "3"
      },
      {
        id: "12",
        text: null,
        nombre: "i-Pace",
        imagen: "img/Jaguar-i-Pace.jpg",
        precio: "79100",
        fabricante: "7",
        tecnologia: "1"
      },
      {
        id: "13",
        text: null,
        nombre: "Niro",
        imagen: "img/Kia_Niro.jpg",
        precio: "25400",
        fabricante: "8",
        tecnologia: "2"
      },
      {
        id: "14",
        text: null,
        nombre: "Niro PHEV",
        imagen: "img/Kia_NiroPHEV.jpg",
        precio: "29070",
        fabricante: "8",
        tecnologia: "3"
      },
      {
        id: "15",
        text: null,
        nombre: "Soul EV",
        imagen: "img/Kia_SoulEV.jpg",
        precio: "32840",
        fabricante: "8",
        tecnologia: "1"
      },
      {
        id: "16",
        text: null,
        nombre: "Optima PHEV",
        imagen: "img/Kia_OptimaPHEV.jpg",
        precio: "45750",
        fabricante: "8",
        tecnologia: "3"
      },
      {
        id: "17",
        text: null,
        nombre: "CT",
        imagen: "img/Lexus_CT.jpg",
        precio: "22900",
        fabricante: "9",
        tecnologia: "2"
      },
      {
        id: "18",
        text: null,
        nombre: "IS",
        imagen: "img/Lexus_IS.jpg",
        precio: "35900",
        fabricante: "9",
        tecnologia: "2"
      },
      {
        id: "19",
        text: null,
        nombre: "GS",
        imagen: "img/Lexus_GS.jpg",
        precio: "45900",
        fabricante: "9",
        tecnologia: "2"
      },
      {
        id: "20",
        text: null,
        nombre: "LS",
        imagen: "img/Lexus_LS.jpg",
        precio: "121500",
        fabricante: "9",
        tecnologia: "2"
      },
      {
        id: "21",
        text: null,
        nombre: "NX",
        imagen: "img/Lexus_NX.jpg",
        precio: "39750",
        fabricante: "9",
        tecnologia: "2"
      },
      {
        id: "22",
        text: null,
        nombre: "RX",
        imagen: "img/Lexus_RX.jpg",
        precio: "68400",
        fabricante: "9",
        tecnologia: "2"
      },
      {
        id: "23",
        text: null,
        nombre: "Clase C",
        imagen: "img/Mercedes-C.jpg",
        precio: "50225",
        fabricante: "10",
        tecnologia: "3"
      },
      {
        id: "24",
        text: null,
        nombre: "Clase E",
        imagen: "img/Mercedes-E.jpg",
        precio: "64800",
        fabricante: "10",
        tecnologia: "3"
      },
      {
        id: "25",
        text: null,
        nombre: "GLC",
        imagen: "img/Mercedes-GLC.jpg",
        precio: "55850",
        fabricante: "10",
        tecnologia: "3"
      },
      {
        id: "26",
        text: null,
        nombre: "Clase S",
        imagen: "img/Mercedes-S.jpg",
        precio: "114325",
        fabricante: "10",
        tecnologia: "3"
      },
      {
        id: "27",
        text: null,
        nombre: "i-MiEV",
        imagen: "img/Mitsubishi_i-MIEV.jpg",
        precio: "24400",
        fabricante: "11",
        tecnologia: "1"
      },
      {
        id: "28",
        text: null,
        nombre: "Outlander PHEV",
        imagen: "img/Mitsubishi_Outlander.jpg",
        precio: "47200",
        fabricante: "11",
        tecnologia: "3"
      },
      {
        id: "29",
        text: null,
        nombre: "LEAF",
        imagen: "img/Nissan_LEAF_24Ah.jpg",
        precio: "29235",
        fabricante: "12",
        tecnologia: "1"
      },
      {
        id: "30",
        text: null,
        nombre: "e-NV200",
        imagen: "img/Nissan_E-NV200.jpg",
        precio: "25342",
        fabricante: "12",
        tecnologia: "1"
      }
    ],
    fabricantes: [
      {
        id: "1",
        text: "Audi"
      },
      {
        id: "2",
        text: "BMW"
      },
      {
        id: "3",
        text: "Citroën"
      },
      {
        id: "4",
        text: "Ford"
      },
      {
        id: "5",
        text: "Honda"
      },
      {
        id: "6",
        text: "Hyundai"
      },
      {
        id: "7",
        text: "Jaguar"
      },
      {
        id: "8",
        text: "Kia"
      },
      {
        id: "9",
        text: "Lexus"
      },
      {
        id: "10",
        text: "Mercedes"
      },
      {
        id: "11",
        text: "Mitsubishi"
      },
      {
        id: "12",
        text: "Nissan"
      },
      {
        id: "13",
        text: "Peugeot"
      },
      {
        id: "14",
        text: "Porsche"
      },
      {
        id: "15",
        text: "Renault"
      },
      {
        id: "16",
        text: "Suzuki"
      },
      {
        id: "17",
        text: "Tesla"
      },
      {
        id: "18",
        text: "Toyota"
      },
      {
        id: "19",
        text: "Volvo"
      },
      {
        id: "20",
        text: "Volkswagen"
      }
    ],
    tecnologias: [
      {
        id: "1",
        text: "eléctricos"
      },
      {
        id: "2",
        text: "híbridos"
      },
      {
        id: "3",
        text: "híbridos enchufables"
      }
    ]
  }

  getFab(id:string){
    return this.datos.fabricantes[parseInt(id)-1].text
  }
  getTec(id:string){
    return this.datos.tecnologias[parseInt(id)-1].text
  }
}

