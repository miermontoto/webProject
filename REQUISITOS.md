# Bulletlist de requisitos

## 1. HTML
(23/23) => 100%
Dos elementos por revisar.

### 1.1 Elementos básicos

- [x] ReqH1: Un título.
- [x] ReqH2: Codificación de caracteres.
- [x] ReqH3: Autor, descriptción y palabras claves.
- [x] ReqH4: Encabezado.
- [x] ReqH5: Pie de página con autor y fecha de publicación.
- [x] ReqH6: Algún artículo por párrafos.
  - [ ] Desarrollar artículo, ahora mismo está incompleto.

### 1.2 Características de texto

- [x] ReqH7: Marcar algo como importante.
- [x] ReqH8: Marcar algo como especial, diferente.
- [x] ReqH9: Alguna definición.
- [x] ReqH10: Algo de código de programación.

### 1.3 Enlaces

- [x] ReqH11: Enlaces a páginas web externas y a distintos destinos de visualización de esas páginas.
  - [ ] Revisar. Ojo con lo de "distintos destinos".
- [x] ReqH12: Enlaces a imágenes o vídeos utilizando referencias absolutas a elementos externos.
- [x] ReqH13: Enlaces a imágenes o vídeos utilizando referencias relativas a elementos internos.
- [x] ReqH14: Correo electrónico indicando un asunto.
- [x] ReqH15: Enlaces a las otras dos páginas del proyecto.

### 1.4 Imágenes, videos y audios

- [x] ReqH16: Una imagen dotada de tamaño.
- [x] ReqH17: Un vídeo dotado de tamaño.
- [x] ReqH18: Alternativas para evitar fallos en los vídeos (códecs).

### 1.5 Bloques

- [x] ReqH19: Varias secciones.
- [x] ReqH20: La página se divide utilizando `<div>`.

### 1.6 Listas y tablas

- [x] ReqH21: Una lista ordenada.
- [x] ReqH22: Una lista no ordenada dentro de una ordenada.
- [x] ReqH23: Una tabla, combinando celdas tanto en filas como en columnas.

## 2. CSS
(16/23) => 69.5%
Tres elementos a revisar.

### 2.1 Clases e identificadores

- [x] ReqC1: Clase `IMPORTANTE` para dar formato a algunos textos de tu página web.
  - [x] ReqS2: Fuente 'Arial' para `<p>`,'Sans-Serif' para `<h1>`.
- [x] ReqC3: Un título destacado utilizando el identificador `TITULO` con fuente de tamaño 18pt.
  - [x] ReqS4: Otro identificador diferente para títulos que tengan 14pt de tamaño de fuente.
  - [x] ReqS5: El texto marcado como título `TÍTULO` es también `IMPORTANTE`.
    - [ ] Revisar.

### 2.2 Selectores

- [x] ReqC6: Estilo de fuente "normal" en toda la página.
- [x] ReqC7: Contenidos de títulos `<h1>` y de la clase `IMPORTANTE` centrados.
- [x] ReqC8: Todos los párrafos están identados y un poco opacos.
- [x] ReqS9: El texto `<strong>` de un párrafo está subrayado.
- [x] ReqC10: Los artículos hijos directos de secciones tienen márgenes y relleno. (margin + padding)

### 2.3 Pseudoclases

- [x] ReqC11: Los links cambian de color dependiendo de si han sido visitados o no y de si se arrastra el cursor sobre ellos.
- [x] ReqC12: El primer y el último elemento de una lista estarán en negrita, la primera letra con mayúsculas y el resto en minúsculas y con sombra.
- [x] ReqC13: La primera letra de los artículos tiene borde, indicando explícitamente su anchura, color y estilo. Los bordes son diferentes dos a dos.
  - [ ] Comprobar bordes "diferentes dos a dos".
- [x] ReqC14: La primera línea de un párrafo está ligeramente en negrita.

### 2.4 Fondos

- [x] ReqS15: El cuerpo de la página tiene una imagen de fondo.

### 2.5 Listas

- [ ] ReqC16: Las listas ordenadas tienen viñetas.
- [ ] ReqC17: Las listas no ordenadas tienen una imagen por viñeta.
- [ ] ReqS18: Todas las listas tienen posición, sean ordenadas o no.

### 2.6 Tablas

- [ ] ReqC19: La posición del título de las tablas está indicado explícitamente.
- [x] ReqC20: Las celdas de una tabla tienen espacios entre sí.
  - [ ] ¿Es esto?

### 2.7 Posicionamiento y visualización

- [ ] ReqS21: La página está dividida en bloques y tienen posición.
- [ ] ReqS22: Existen prioridades en caso de solapamiento. (z-index)

## 3. JavaScript
(2/28) => 7%
Un elemento por revisar.

### 3.1 Formulario

- [x] ReqF1: El formulario tiene nombre.
- [x] ReqF2: El formulario no debe comprobarse antes de enviarse.
  - [ ] ¿Cuenta `required` como comprobación?
- [ ] ReqF3: No deben hacerse sugerencias cuando se esté rellenando.
- [ ] ReqF4: El resultado del formulario se muestra en una pestaña aparte.
- [ ] ReqF5: El resultado se envía por correo.

### 3.2 Elementos del formulario

- [ ] ReqF6: Un panel que contiene:
  - [ ] ReqF7: Un cuadro de texto.
  - [ ] ReqF8: Otro cuadro de texto para incluir una contraseña.
  - [ ] ReqF9: Se puede incluir un teléfono.
  - [ ] ReqF10: Se puede introducir una URL.
- [ ] ReqF11: Un bloque de opciones excluyentes. Por defecto se marca una opción.
- [ ] ReqF12: Un bloque de casillas de verificación. Las opciones del mismo tipo están en un panel.
- [ ] ReqF13: Un bloque para escoger un color.
- [ ] ReqF14: Una lista desplegable. Tiene al menos dos grupos, la opción por defecto indica lo que debe seleccionar el usuario.
- [ ] ReqF15: Existe la posibilidad de subir un archivo.
- [ ] ReqF16: Existe la posibilidad de escoger una fecha y hora.
- [ ] ReqF17: Botón de submit y botón de reset.

### 3.3 Código JS

- [ ] ReqF18: Se modifica el contenido de los elementos HTML en función de los datos introducidos.
- [ ] ReqF19: Se cambia el estilo de los elementos del formulario en función de si son valores válidos o no.
- [ ] ReqF20: Se indica alguna ayuda cuando se detecte (mediante js) que un campo no es válido.
- [ ] ReqJ21: Una función con varios parámetros que sea llamada con diferentes valores de los mismos.
- [ ] ReqF22: Los dos eventos de foco sobre algún elemento.
- [ ] ReqF23: Algún evento de teclado.
  - [ ] ReqJ24: Su función correspondiente.
- [ ] ReqF25: Algún evento de ratón.
  - [ ] ReqJ26: Su función correspondiente.
- [ ] ReqF27: Evento de hacer click en un botón (incluye un botón).
  - [ ] ReqJ28: Su función correspondiente.

## 4. Internacionalización
(0/17) => 0%

### 4.1 Requisitos en HTML

#### 4.1.1 General

- [ ] ReqI1: Indicador de idioma para todo el contenido del fichero HTML.

#### 4.1.2 Formateadores

- [ ] ReqI2: Un formateador de números decimales.
- [ ] ReqI3: Un formateador de moneda.
- [ ] ReqI4: Un formateador de fecha corta.
- [ ] ReqI5: Un formateador de fecha larga.

#### 4.1.3 Elementos de entrada

- [ ] ReqI6: Varios campos que permitan introducir números.
- [ ] ReqI7: Un campo que permite introducir fechas.

#### 4.1.4 Elementos a mostrar

- [ ] ReqI8: Se muestra el resultado de operar varios los campos como otro número.
- [ ] ReqI9: Se muestra el resultado de operar con varios campos como moneda.
- [ ] ReqI10: Se muestra el resultado de operar con varios campos como fecha.

#### 4.1.5 Formato

- [ ] ReqI11: Elemento de una clase con formato según el idioma indicado en lang.

### 4.2 Requisitos en I18n.js

- [ ] ReqI12: Al menos 2 funciones que tomen como parámetros varios IDs y que modifiquen algunos
de los componentes asociados según los valores de los elementos en la WEB a los que se
refieran los IDs
  - Esta marca se repite por cada función.
  - Se marca el uso de:
    - [ ] ReqI13: un formateador de números decimales.
    - [ ] ReqI14: un formateador de moneda.
    - [ ] ReqI15: un formateador de fecha corta.
    - [ ] ReqI16: un formateador de fecha larga.

### 4.3 Requisitos en fichero CSS

- [ ] ReqI17: Regla que modifica el formato aplicado a una clase dependiendo del idioma.
