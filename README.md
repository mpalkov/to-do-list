To-Do App (Lista de Tareas)
=========================

Este proyecto es un Tech Challenge para crear una Lista de Tareas que consume datos desde una API externa y los gestiona utilizando React, TypeScript y Context API.

Desarrollado por [mpalkov](https://github.com/mpalkov)

### La versión [DEMO](https://to-do-app-topaz-nine.vercel.app/) está publicada en Vercel.

Inicialización
--------------

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/mpalkov/to-do-list.git

cd to-do-list_APP

npm install
```

Desarrollo
----------

**Entorno necesario para desarrollo:**

-   Node.js
-   Git
-   Un IDE de tu elección por ejemplo VSCode

* * * * *

**Tecnologías utilizadas:**

-   React y Context API
-   TypeScript
-   Context API

* * * * *

**Compilación y vista previa mientras se desarrolla:**

El estado actual del proyecto puede verse en el navegador ejecutando:

```bash
npm run dev
```

y abriendo el enlace proporcionado en el navegador, por defecto `http://localhost:5173/`

* * * * *

**Compilar y para la producción:**

Todos los archivos del proyecto se compilan y minifican para producción en la carpeta `dist` ejecutando:

```bash
npm run build
```

* * * * *

Características
---------------

**Funcionalidades implementadas:**

-   **Consumo de API externa**: Se obtienen las tareas desde API externa y estos datos persisten en localStorage.
-   **Gestión de tareas**: Ver, marcar como completadas y eliminar tareas.
-   **Filtrado de tareas**: Por todas, completadas o pendientes.
-   **Persistencia de datos**: Uso de localStorage para mantener las tareas al recargar la página.
-   **Modo oscuro/claro**: Implementado usando Context API y persistente entre sesiones.
-   **Diseño responsive**: Adaptable a diferentes tamaños de pantalla.

* * * * *

Arquitectura
------------

El proyecto está estructurado siguiendo una arquitectura basada en componentes y contextos:

-   **Componentes**: Elementos reutilizables de la interfaz (TaskItem, TasksFilter, etc.)
-   **Contextos**:
    -   `ThemeContext`: Gestiona el modo oscuro/claro
    -   `ContentContext`: Gestiona las tareas, filtrado y operaciones CRUD
-   **Hooks personalizados**: Como `useLocalStorage` para facilitar la persistencia
-   **Tipos**: Definiciones de TypeScript para mayor seguridad
-   **Utils**: Funciones de utilidad como la API y filtrado

* * * * *

Requisitos del proyecto
-----------------------

**Objetivo:**

Crear una To-Do List que consuma tareas desde una API externa y las gestione utilizando React, TypeScript y Context API.

**Requisitos:**

-   Obtener tareas desde la API: `https://jsonplaceholder.typicode.com/todos?_limit=10`.
-   Mostrar la lista de tareas en la interfaz de usuario (UI).
-   Permitir marcar tareas como completadas.
-   Eliminar tareas en la UI (sin modificar la API).
-   Filtrar las tareas por: Todas, Completadas y Pendientes.
-   Persistir los datos en localStorage para mantenerlos al recargar la página.
-   Implementar un modo oscuro/claro utilizando useContext.
-   Usar Tailwind CSS o CSS puro para los estilos.

**Restricciones:**

-   Evitar el uso de librerías de estado como Redux o Zustand.
-   Solo consumir la API, sin modificarla.