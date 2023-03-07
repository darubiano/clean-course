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
https://refactoring.guru/es/design-patterns
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
Bajo acoplamiento y alta cohesion
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
* Mayor cantidad de pruebas innecesarias.

**Accidental**
* Codigo luce similar pero cumple funciones distintas.
* Cuando hay un cambio, solo hay que modificar un solo lugar.
* Este tipo de duplicidad se puede trabajar con parametros u optimizaciones.

## Principios SOLID
* **S**ingle responsibility: Responsabilidad unica
* **O**pen an close: Abierto y cerrado
* **L**iskov Substitution: Sustitucion de liskov
* **I**nterface segregation: Segregacion de interfaz
* **D**ependency inversion: Inversion de dependencias

## Single Responsibility
Nunca deberia haber mas de un motivo por el cual cambiar una clase o modulo, tener una unica responsabilidad != hace una unica cosa.
* Nombres de clases y modulos demasiados genericos
* Cambios en el codigo suelen afectar la clase o modulo
* La clase involucra multiples capas
* Numero elevado de importaciones.
* Cantidad elevada de metodos publicos.
* Excesivo numero de lineas de codigo.

## Open and close
Establece que las entidades de software (clases, modulos, metodos, etc.) deben estar abiertas para la extension, pero cerradas para la modificacion.
```writeFile('hola.txt');```
se puede cambiar a, no toca modificar el metodo.
```writeFile('cambio.txt');```
* Los cambios normalmente afectan nuestra clase o modulo.
* Cuando una clase o modulo afecta muchas capas

## Liskov Substitution
si S es un subtipo de T, entonces los objetos de tipo T en un programa de computadora pueden ser sustituidos por objetos de tipo S (es decir, los objetos de tipo S pueden sustituir objetos de tipo T), sin alterar ninguna de las propiedades deseables de ese programa
* Cuando se repite un mismo metodo o funcion en varias clases esta puede ser abstract
* Priorizar la composicion frente a la herencia! 

## Interface segregation
Establece que los clientes de un programa dado solo deberían conocer de este aquellos métodos que realmente usan, y no aquellos que no necesitan usar y no deberia pasar que las interfaces que diseñamos nos obligan a violar los principios de responsabilidad unica
y substitucion de Liskov

## Dependency inversion
Es una forma específica de desacoplar módulos de software

* Los modulos de alto nivel no deberian depender de mödulos de bajo nivel.
* Ambos deberian depender de abstracciones.
* Las abstracciones no deberian depender de detalles.
* Los detalles deberian depender de abstracciones.

## KISS