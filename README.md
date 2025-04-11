
# Lineamientos

## Proyecto progresivo JavaScript

Desarrollar una aplicación web funcional que consuma datos de un API (de libre elección), los almacene mediante mecanismos como Local Storage y presente una interfaz responsiva utilizando HTML, CSS y JavaScript.

### **Requisitos del Proyecto:**

1. **Selección del API:**
    - Investigar y seleccionar un API público o con acceso gratuito.
    - Implementar el consumo de datos de dicha API.
2. **Almacenamiento Local:**
    - Guardar información relevante en Local Storage.
    - Permitir la recuperación y visualización de los datos almacenados.
3. **Interfaz Responsiva:**
    - Diseñar una UI atractiva y funcional.
    - Asegurar la adaptabilidad a diferentes tamaños de pantalla (desktop y móvil).
4. **Funcionalidad Dinámica:**
    - Implementar interacciones con JavaScript (eventos, manipulación del DOM, etc.).
    - Garantizar una navegación intuitiva y fluida.
5. **Entrega:**
    - Subir el código a un repositorio en GitHub.
    - Documentar el proyecto en un README detallado con descripción, instrucciones de uso e información del API utilizado.
    - Entregar la URL del repositorio para evaluación.

### **Criterios de Evaluación:**

- **Consumo correcto del API (20%)**: Llamados eficientes, manejo de respuestas y errores.
- **Uso adecuado de Local Storage (20%)**: Almacenamiento, recuperación y eliminación de datos.
- **Diseño responsivo (20%)**: Correcta aplicación de CSS y adaptabilidad.
- **Interactividad y funcionalidad (20%)**: Fluidez en interacciones con JavaScript.
- **Documentación y estructura del código (20%)**: Claridad y organización en el repositorio.

### **Entrega Final:**

Fecha límite: 11 de abril a las 10 a.m.

Formato de entrega: URL del repositorio en GitHub.

## Contenido


1. **Selección del API:**
    Las API(s) seleccionadas fueron las siguientes:

    - [CIP-30](https://cips.cardano.org/cip/CIP-30): CIP-30 es una propuesta de mejora para Cardano que define un estándar para la interacción entre aplicaciones descentralizadas (dApps) basadas en la web y monederos de Cardano. Este estándar permite que las dApps se comuniquen con los monederos del usuario mediante código JavaScript inyectado en las páginas web, facilitando operaciones como la consulta de direcciones, la firma de mensajes y la construcción de transacciones . Contiene la sintaxis necesaria para poder construir transacciones y para el manejo de errores.

    - [Meshjs](https://meshjs.dev/): ​MeshJS es una biblioteca de código abierto escrita en TypeScript que proporciona un conjunto completo de herramientas para facilitar el desarrollo de aplicaciones Web3 en la blockchain de Cardano. Su objetivo es hacer que el desarrollo en Web3 sea accesible tanto para desarrolladores principiantes como para empresas, ofreciendo APIs confiables, escalables y bien diseñadas

    - [Mockapi](https://mockapi.io/): MockAPI es una plataforma en línea que permite a desarrolladores crear y simular APIs REST de manera rápida y sencilla, sin necesidad de configurar un backend real. Es especialmente útil para el desarrollo frontend, pruebas de integración y prototipado de aplicaciones.

    - La implementaciion de las apis fue la siguiente, [CIP-30](https://cips.cardano.org/cip/CIP-30) y [Meshjs](https://meshjs.dev/) como base fundamental para el envio de transacciones a traves de la red de CARDANO,.
2. **Almacenamiento Local:**
    - Guardar información relevante en Local Storage.
    - Permitir la recuperación y visualización de los datos almacenados.
3. **Interfaz Responsiva:**
    - Diseñar una UI atractiva y funcional.
    - Asegurar la adaptabilidad a diferentes tamaños de pantalla (desktop y móvil).
4. **Funcionalidad Dinámica:**
    - Implementar interacciones con JavaScript (eventos, manipulación del DOM, etc.).
    - Garantizar una navegación intuitiva y fluida.
5. **Entrega:**
    - Subir el código a un repositorio en GitHub.
    - Documentar el proyecto en un README detallado con descripción, instrucciones de uso e información del API utilizado.
    - Entregar la URL del repositorio para evaluación.






### Requisitos













This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
