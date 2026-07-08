# Antropología — Portafolio

Sitio web estático de una sola página para mostrar los resultados de un trabajo de
investigación antropológica: presentación personal, líneas de investigación,
proyectos de campo, publicaciones, galería de fotos y contacto.

## Estructura

```
index.html      contenido y secciones del sitio
css/style.css   estilos (paleta, tipografía, layout responsive)
js/main.js      menú móvil y año dinámico en el footer
```

## Personalizar

1. Reemplazá "Nombre Apellido" y los textos de ejemplo en `index.html` por tu
   información real (bio, formación, proyectos, publicaciones).
2. Cambiá el email de contacto en las secciones "Contacto" si no es el tuyo.
3. Sumá tus propias fotos: agregalas en `assets/` y reemplazá los bloques
   `.gallery-item` y `.portrait-frame` por etiquetas `<img>`.
4. Ajustá colores en `css/style.css` (variables al inicio del archivo, bajo `:root`).

## Ver el sitio localmente

Abrí `index.html` directamente en el navegador, o serví la carpeta con:

```
python3 -m http.server 8000
```

y visitá `http://localhost:8000`.

## Publicar en GitHub Pages

1. En GitHub, andá a Settings → Pages.
2. Seleccioná la rama con el sitio (por ejemplo `main`) y carpeta `/root`.
3. Guardá; GitHub Pages publicará el sitio en unos minutos.
