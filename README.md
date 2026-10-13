# Un poquito de nosotros ♡

Una carta musical interactiva creada como regalo para Héctor. Sitio estático con HTML, CSS y JavaScript puro, preparado para GitHub Pages o Netlify.

## Vista previa local

1. Descarga o descomprime la carpeta.
2. Abre `index.html` en un navegador moderno. También puedes usar la extensión Live Server de Visual Studio Code.
3. Se requiere conexión a Internet para cargar las tipografías de Google Fonts y abrir los enlaces de Spotify. El resto del sitio es estático.

## Publicar en GitHub y Netlify

### Opción A: GitHub + Netlify (recomendado)

1. Crea un repositorio nuevo en https://github.com/new llamado `un-poquito-de-nosotros`.
2. Descomprime el ZIP y sube el contenido de la carpeta (no subas el ZIP como único archivo).
3. Entra a https://app.netlify.com/ e inicia sesión.
4. Selecciona **Add new site** → **Import an existing project** → **GitHub**.
5. Autoriza el acceso al repositorio y selecciónalo.
6. En configuración de despliegue, deja el directorio base vacío, el comando de build vacío y el directorio de publicación como `.` (raíz del repositorio).
7. Pulsa **Deploy site**. Cuando termine, Netlify mostrará la URL pública.
8. Cada vez que subas cambios al repositorio, Netlify podrá volver a publicar automáticamente.

### Opción B: arrastrar y soltar

1. Entra a https://app.netlify.com/drop/.
2. Arrastra la carpeta del proyecto descomprimida a la zona de carga.
3. Sigue las indicaciones de Netlify para publicar. Para actualizaciones automáticas, usa la opción A.

## Estructura

```text
un-poquito-de-nosotros/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── README.md
├── README.md
├── .gitignore
└── netlify.toml
```

## Personalizar

- Edita las dedicatorias y los títulos musicales en `index.html`.
- Cambia colores, tamaños y estilos en `css/styles.css`, en las variables al principio del archivo.
- Cambia interacciones en `js/script.js`.
- Los enlaces actuales llevan a búsquedas de Spotify para evitar inventar identificadores de pistas. Verifica la versión exacta de cada canción y reemplaza cada URL por el enlace directo que prefieras.

## Notas

- No se incluyen archivos de audio ni letras completas protegidas por derechos de autor.
- No hay reproducción automática.
- No se requieren claves, secretos ni servicios de pago.
- `netlify.toml` define la carpeta raíz como directorio de publicación.
