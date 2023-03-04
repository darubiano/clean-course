# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

Clonar o descargar el proyecto y luego:

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten
```
yarn dev
ó
npm run dev
```

## Principios STUPID
* **S**ingleton: Patron singleton.
* **T**inght Coupling: Alto acoplamiento.
* **U**ntestability: codigo no probable.
* **P**remature optimization: optimizaciones prematuras.
* **I**ndescriptive Naming: nombre poco descriptivos.
* **D**uplication: duplicidad de codigo, no aplicar el principio DRY.
### Singleton
Garantiza una unica instancia de la clase a lo largo de toda la aplicación.
### Tinght Coupling
Bajo acoplamiento y buena cohesion
Se refiere a cuan relacionadas o dependientes son dos clases o modulos entres si.
* **En bajo acoplamiento**, cambiar algo importante en una clase no deberia afectar a la otra.
* **La alta cohesion** se enfoca en lo que la clase debe hacer.
* En alto acoplamiento, dificultaria el cambio y el mantenimiento de su codigo; dado que las clases estan muy unidas, hacer un cambio podria requerir una renovacion completa del sistema.
* La baja cohesion significa que la clase realiza una gran variedad de acciones.
### Untestability
Codigo con alto acoplamiento, muchas dependencias,
Debemos de tener en mente las pruebas desde la creacion del codigo.
### Premature optimization
No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que pueden añadir complejidad accidental.
### Indescriptive Naming
* Nombres de variables mal nombradas
* Nombres de clases genericas
* Nombre de funciones mal nombradas
* Ser muy especifico o demasiado generico.
### Duplication
No aplicar el principio DRY.
**Real**
* Codigo es identico y cumple la misma funcion
* Un cambio implicaria actualizar todo el codigo identico en varios lugares
* Incrementa posibilidades de error humano al olvidar una parte para actualizar
* Mayor cantidad de pruebas innecesarias.\

**Accidental**
* Codigo luce similar pero cumple funciones distintas.
* Cuando hay un cambio, solo hay que modificar un solo lugar.
* Este tipo de duplicidad se puede trabajar con parametros u optimizaciones.