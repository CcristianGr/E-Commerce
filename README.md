# 🛍️ Aplicación E-Commerce con React

Una aplicación web de comercio electrónico moderna y completa construida con React, TypeScript y Vite. Este proyecto implementa las mejores prácticas en arquitectura de componentes, gestión de estado y diseño UI/UX.

## ✨ Características

- **Catálogo de Productos**: Navega productos desde una API externa con datos en tiempo real
- **Carrito de Compras**: Agrega, visualiza y gestiona productos en tu carrito
- **Detalles de Producto**: Visualiza información detallada de cada producto
- **Diseño Responsivo**: UI completamente responsiva con TailwindCSS
- **Seguridad de Tipos**: Construido con TypeScript para una mejor experiencia de desarrollo
- **Enrutamiento Moderno**: Enrutamiento del lado del cliente con React Router v7
- **Context API**: Gestión de estado global con React Context
- **Arquitectura Basada en Componentes**: Componentes modulares y reutilizables

## 🚀 Stack Tecnológico

### Tecnologías Core
- **React 19.2.0** - Librería UI con las últimas características
- **TypeScript 5.9.3** - JavaScript con tipado seguro
- **Vite 7.2.4** - Herramienta de construcción y servidor de desarrollo rápido

### Estilos & UI
- **TailwindCSS 4.1.18** - Framework CSS utility-first
- **Heroicons 2.2.0** - Iconos SVG hermosos y artesanales
- **PostCSS & Autoprefixer** - Procesamiento CSS

### Enrutamiento & Navegación
- **React Router DOM 7.12.0** - Enrutamiento declarativo

### Herramientas de Desarrollo
- **ESLint** - Calidad y consistencia de código
- **TypeScript ESLint** - Reglas de linting específicas para TypeScript

## 📁 Estructura del Proyecto

```
src/
├── Components/
│   ├── Cards/
│   │   └── Cards.tsx              # Componente de tarjeta de producto individual
│   ├── CheckOutSideMenu/
│   │   └── CheckOutSideM.tsx      # Panel lateral del carrito de compras
│   ├── Layout/
│   │   └── Layout.tsx             # Wrapper de diseño de página
│   ├── NavBar/
│   │   ├── Navbar.tsx             # Componente de navegación
│   │   └── NavBar.css             # Estilos de navegación
│   └── ProductDetail/
│       └── ProductDetail.tsx      # Modal de detalle de producto
├── Context/
│   └── ShoppingContext.tsx        # Gestión de estado global
├── Pages/
│   ├── App/
│   │   ├── App.tsx                # Componente principal de la app
│   │   └── App.css                # Estilos globales
│   ├── Home/
│   │   └── Home.tsx               # Página de inicio con grid de productos
│   ├── MyAccount/
│   │   └── MyAccount.tsx          # Página de cuenta de usuario
│   ├── MyOrders/
│   │   └── MyOrders.tsx           # Página de historial de pedidos
│   ├── SignIn/
│   │   └── SignIn.tsx             # Página de autenticación
│   └── NotFound/
│       └── NotFound.tsx           # Página de error 404
├── index.css                      # Importaciones CSS globales
└── main.tsx                       # Punto de entrada de la aplicación
```

## 🏗️ Arquitectura y Patrones de Diseño

### Arquitectura de Componentes

La aplicación sigue el patrón **Container/Presentational**:

#### **Componentes Inteligentes (Containers)**
- Manejan la obtención de datos y lógica de negocio
- Gestionan el estado y efectos secundarios
- Ejemplo: `Home.tsx` obtiene productos y gestiona la lista de productos

#### **Componentes Presentacionales**
- Se enfocan únicamente en renderizar la UI
- Reciben datos mediante props
- Ejemplo: `Cards.tsx` renderiza una sola tarjeta de producto

### Gestión de Estado

La aplicación utiliza **React Context API** para la gestión de estado global:

```typescript
ShoppingCartContext proporciona:
├── count                      // Contador de items en el carrito
├── cartProducts              // Array de productos en el carrito
├── isProductDetailOpen       // Estado del modal de detalle de producto
├── isCheckOutSideMenuOpen    // Estado del sidebar de checkout
├── productToShow            // Producto seleccionado para vista de detalle
└── Funciones:
    ├── openProductDetail()
    ├── closeProductDetail()
    ├── openCheckOutSideMenu()
    └── closeCheckOutSideMenu()
```

### Jerarquía de Componentes

```
App (Raíz)
├── ShoppingCartProvider (Context)
├── BrowserRouter
│   ├── NavBar
│   ├── Routes
│   │   ├── Home
│   │   │   ├── Layout
│   │   │   │   └── Cards (Múltiples instancias)
│   │   │   └── ProductDetail
│   │   ├── MyAccount
│   │   ├── MyOrders
│   │   └── SignIn
│   └── CheckOutSideM (Posición fija)
```

## 🔧 Instalación

### Prerequisitos
- Node.js (v18 o superior)
- npm o yarn

### Configuración

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd React-Project
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con hot reload |
| `npm run build` | Construye para producción (TypeScript + Vite) |
| `npm run lint` | Ejecuta ESLint para verificar calidad de código |
| `npm run preview` | Vista previa del build de producción localmente |
| `npm run deploy` | Despliega manualmente a GitHub Pages |

## 🌐 Integración con API

La aplicación obtiene los datos de productos desde:
```
https://api.escuelajs.co/api/v1/products
```

### Flujo de Datos
1. `Home.tsx` obtiene los productos al montar el componente
2. Los productos se almacenan en el estado local
3. Cada producto se pasa al componente individual `Cards`
4. Las interacciones del usuario actualizan el `ShoppingCartContext` global

## 🎨 Características UI/UX

- **Grid de Productos**: Diseño de cuadrícula responsiva de 4 columnas
- **Agregar al Carrito**: Botón rápido con icono en cada tarjeta
- **Vista de Detalle de Producto**: Modal superpuesto con información detallada del producto
- **Carrito Lateral**: Panel de carrito con posición fija que se desliza desde la derecha
- **Navegación**: Barra de navegación superior persistente
- **Retroalimentación Visual**: Estados hover y transiciones suaves

## 🔒 Seguridad de Tipos

Todos los componentes están completamente tipados con TypeScript:
- Definiciones de interfaces para props
- Consumo de contexto con seguridad de tipos
- Configuración estricta de TypeScript

## 🚧 Mejores Prácticas de Desarrollo

- **Reutilización de Componentes**: El componente Cards es atómico y reutilizable
- **Separación de Responsabilidades**: Obtención de datos separada de la presentación
- **Seguridad de Tipos**: TypeScript para una mejor experiencia de desarrollo
- **Calidad de Código**: Configuración de ESLint para estilo de código consistente
- **React Moderno**: Uso de las últimas características de React 19
- **Rendimiento**: Vite para HMR rápido y builds optimizados

## 📦 Build y Deployment

### Build de Producción
```bash
npm run build
```

Esto crea un build de producción optimizado en el directorio `dist/`.

### Vista Previa del Build
```bash
npm run preview
```

Prueba el build de producción localmente antes del deployment.

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Configuración Inicial (Solo una vez)

1. **Habilitar GitHub Pages en tu repositorio:**
   - Ve a tu repositorio en GitHub
   - Click en **Settings** → **Pages**
   - En **Source**, selecciona **GitHub Actions**

2. **Instalar dependencias de despliegue:**
   ```bash
   npm install
   ```

### Despliegue Automático

El proyecto se despliega automáticamente cuando:
- Haces push a las ramas `main` o `Rama-Desarrollo`
- Se ejecuta mediante **Actions** → **Deploy to GitHub Pages** → **Run workflow**

El workflow de GitHub Actions (`.github/workflows/deploy.yml`) se encarga de:
1. Construir el proyecto
2. Optimizar los assets
3. Desplegar a GitHub Pages

### Despliegue Manual (Opcional)

También puedes desplegar manualmente desde tu máquina local:

```bash
npm run deploy
```

### URL de la Aplicación

Una vez desplegado, tu aplicación estará disponible en:
```
https://ccristiangr.github.io/React-Project/
```

### Solución de Problemas

Si el despliegue falla:
1. Verifica que GitHub Pages esté habilitado en Settings
2. Revisa los logs en la pestaña **Actions** de tu repositorio
3. Asegúrate de que el `base` en `vite.config.ts` coincida con el nombre del repositorio

### Configuración Especial para GitHub Pages

El proyecto incluye configuraciones especiales para que funcione correctamente en GitHub Pages:

1. **`vite.config.ts`**: Configurado con `base: '/React-Project/'` para rutas correctas
2. **`App.tsx`**: BrowserRouter con `basename="/React-Project"` para enrutamiento correcto
3. **`public/404.html`**: Maneja redirecciones para rutas del lado del cliente
4. **`index.html`**: Script de redirección para SPA (Single Page Application)

## 🤝 Contribuir

1. Crear una rama de característica
2. Hacer commit de tus cambios
3. Hacer push a la rama
4. Abrir un Pull Request

## 📝 Licencia

Este proyecto es privado y para propósitos educativos/de desarrollo.
---

**Construido con ❤️ usando React + TypeScript + Vite**
