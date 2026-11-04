# Topkapı Palace — Sultanato de Osamu

Archivo web estático del universo de Topkapı. La página conserva la identidad visual, los textos y los registros originales, con una reorganización de navegación, jerarquías y vínculos entre personajes e instituciones.

## Cómo abrir el sitio

Los archivos JavaScript utilizan módulos ES. Para evitar restricciones del navegador al abrir `index.html` directamente, inicia un servidor local desde esta carpeta:

```bash
python -m http.server 8000
```

Después abre `http://localhost:8000` en el navegador. También puedes utilizar la extensión **Live Server** de Visual Studio Code.

## Organización del código

- `index.html`: estructura y textos de las secciones.
- `styles.css`: identidad visual y componentes de la interfaz.
- `js/app.js`: renderizado, organigramas, buscador y fichas.
- `js/data.js`: catálogo único que reúne los registros.
- `js/data/`: datos de dinastía, harén, gobierno, administración y nobleza.
- `images/`: retratos y recursos gráficos.

Cada personaje tiene un único registro e identificador. Puede aparecer como referencia en más de una institución sin duplicar su ficha. Los nodos con retrato abren la ficha correspondiente.

## Criterio de clasificación

- La dinastía reúne a la familia imperial por nacimiento, la Haseki Sultan y la descendencia de la rama imperial materna registrada.
- Las demás consortes se presentan en el harén según su rango, desde Baş Kadın e İkbal.
- Los cargos administrativos enlazan con el personaje que los desempeña cuando existe un titular registrado.

Si un retrato no está incluido en `images/`, se muestra un marcador de imagen pendiente; no se elimina el registro del personaje.
