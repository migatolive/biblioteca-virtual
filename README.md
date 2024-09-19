# Biblioteca Virtual
___

[agregar descripcion]

## Estructura de carpetas
```tree
root/
├── node_modules # library root 
├── public # Public assets
└── src  # Source files /
    ├── assets # Static assets (images, fonts, etc.) /
    │   └── images/
    │       ├── logo.png
    │       ├── facebook.png
    │       └── etc..
    ├── components # React components/
    │   ├── BookDataForm.jsx
    │   ├── Footer.jsx
    │   └── Header.jsx 
    ├── hooks # Custom React hooks/
    │   └── useBorders.jsx
    ├── pages # Page components
    ├── styles # Tailwind styles/
    │   └── tailwind.css
    ├── App.jsx # Main App component
    └── main.jsx # Entry point for the React application
index.html # Main HTML file
```


## Guías de Desarrollo

### Herramientas y Tecnologías

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Una herramienta de construcción que proporciona una experiencia de desarrollo más rápida y ligera para proyectos web modernos.
- **Tailwind CSS**: Un marco de CSS utilitario para el desarrollo rápido de interfaces de usuario.
- **ESLint**: Una herramienta para identificar y reportar patrones en el código ECMAScript/JavaScript.
- **PostCSS**: Una herramienta para transformar CSS con plugins de JavaScript.

### Configuración del Proyecto

1. **Clonar el repositorio**:
   ```sh
   git clone --branch feature/api-integration https://github.com/migatolive/biblioteca-virtual.git
   cd biblioteca-virtual
   ```

2. **Instalar dependencias:**
   `npm install`
3. **Ejecutar el servidor de desarrollo:**
   `npm run dev`

### Guías de Directorios
- **src/assets/**: Coloca todos los recursos estáticos como imágenes y fuentes aquí.
- **src/components/**: Crea componentes reutilizables de React aquí.
- **src/hooks/**: Añade hooks personalizados de React aquí.
- **src/pages/**: Añade componentes de página que representan diferentes rutas de la aplicación aquí.
- **src/styles/**: Añade configuraciones globales de CSS y Tailwind CSS aquí.

### Estándares de Codificación
- Sigue las reglas de ESLint definidas en `eslint.config.js`.
- Usa Tailwind CSS para estilizar componentes.
- Mantén los componentes pequeños y reutilizables.
- Usa componentes funcionales y hooks de React.