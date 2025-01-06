# FrontEnd - Módulo 5, Ejercicio 1

## Descripción proyecto

Este proyecto consiste en una página web para un hospital ficticio, incluyendo sus diferentes servicios y personal médico.
Se continúa con el proyecto iniciado en el Módulo 4.

## Implementación de Peticiones con useEffect y useState

Se simula solicitar datos a una API REST utilizando `fetch` desde archivos .json incluidos en el proyecto, los cuales se llaman desde el hook `useEffect` y se utilizan de manera asíncrona. Los resultados recibidos de esta manera se almacenan usando `useState`, lo que permite reflejar estos cambios visualmente en la aplicación.

## Uso de Fetch API o Axios para el Consumo de la API

Dado que ya se está utilizando `fetch` de manera exitosa, se opta por seguir usandolo y de esta manera también se evita añadir nuevas dependencias al proyecto.

## Peticiones Basadas en Eventos del Usuario

En la vista de Doctores se puede filtrar por especialidad y también limpiar el filtro mediante un par de botones. Ambas operaciones utilizan `fetch` para reobtener los datos y, en el caso del filtro, el uso de un parámetro para seleccionar un subconjunto de los datos. Ambas operaciones pueden ser gatilladas por el usuario libremente.

## Manejo de Errores en Peticiones Asíncronas

Se utiliza la instrucción `catch` para detectar errores, y mediante `useState` se almacena y muestra en pantalla dicho error de forma dinámica. Para ello se creó un componente `RequestError` que imprime el error en pantalla y además proporciona un botón para repetir el callback.

## Optimización del Rendimiento al Omitir Efectos en useEffect

Para evitar operaciones repetidas se utiliza `useEffect` sin agregar parámeros, o dicho de otra forma, con los corchetes vacíos []. Eso asegura que las peticiones iniciales mediante fetch no se repiten de manera innecesaria. Para futuras actualizaciones se utiliza una función asíncrona que, al recibir de manera los datos filtrados, los actualiza mediante `useState` para que dichos cambios se vean reflejados en la interfaz.

## Instrucciones de uso

Requiere Node.js y npm instalados para su uso. Ejecutar el comando `npm run dev` desde la raíz del proyecto para ejecutarlo.