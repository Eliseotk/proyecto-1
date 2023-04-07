import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit{

  nombre: string = 'Eliseo Lopez Quispe';
  correo: any = "eliseotk05@gmail.com";
  edad: number = 21;
  numero: number = 144;
  fecha = new Date();
  html: string = `<strong>Texto en negtita</strong>`;
  paises: Array <any>;
  ejemplo: string;
  cantidad: number = 123456;
  texto: string =`​Dedicado a ofrecer servicios de fotografía y vídeo,
      utilizando altos estándares de calidad en cada uno de los productos
      con el propósito de satisfacer las necesidades del cliente 😌📸🎥🎞️.  
      El presente trabajo de investigación se llevó a cabo con el objetivo de dar 
      a conocer las tendencias del uso de aplicaciones de software en la gestión 
      pedagógica de calidad en instituciones educativas, tomando como base la revisión 
      de la literatura científica de los últimos 10 años. Esta investigación se realizó 
      siguiendo una serie de fases establecidas por la estrategia PRISMA. Luego de hacer
       una búsqueda sistemática de los estudios publicados en el periodo de tiempo antes
        mencionado, se seleccionaron 30 investigaciones, las cuales fueron extraídas de 
        bases de datos como: Proquest, Dialnet, Google Académico, Science Direct; haciendo 
        uso de criterios de búsqueda como: software applications in the pedagogical quality
         management of educational institutions, software applications in the quality
          management of educational institutions, platforms web and quality and educational 
          institutions, web applications in the quality management of educational institutions.
           Los resultados obtenidos demuestran las distintas tendencias del uso de aplicaciones
            de software en instituciones de educación. De acuerdo con lo mencionado, se concluye 
            que el empleo de aplicaciones de software en la gestión pedagógica de calidad en instituciones 
            de educación es relevante, debido a que garantizan una formación óptima y de calidad en los estudiantes.`
  constructor() {
    this.paises=[
    {
      nombre: "Perú",
      dominio: "pe"
    },
    {
      nombre: "Chile",
      dominio: "cl"
    },
    {
      nombre: "Ecuador",
      dominio: "ec"
    },
    {
      nombre: "Bolivia",
      dominio: "bo"
    },
    {
      nombre: "Argentina",
      dominio: "ar"
    },
    {
      nombre: "Colombia",
      dominio: "co"
    },
    {
      nombre: "Venezuela",
      dominio: "ve"
    },
    {
      nombre: "México",
      dominio: "mx"
    },
    {
      nombre: "España",
      dominio: "es"
    }]
  }

  ngOnInit(): void {
      
  }
  
}
