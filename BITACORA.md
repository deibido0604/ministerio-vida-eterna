# Bitacora Del Proyecto - Ministerio Vida Eterna

## Objetivo

Registrar cambios, avances, decisiones tecnicas y pendientes del proyecto para facilitar mantenimiento y continuidad.

## Estado Actual

- Frontend en React + TypeScript.
- Estilos con Tailwind CSS.
- Traducciones disponibles en espanol e ingles.
- Donaciones integradas con PayPal.
- Sitio orientado a contenido institucional del ministerio.

## Entradas

### 2026-03-21

- Se actualizo la documentacion principal del proyecto en README.md.
- Se creo esta bitacora para seguimiento tecnico y funcional.

### 2026-03-21 (actualizacion multimedia y contenido)

- Se integro un Centro Multimedia en la web con fotos y videos organizados por contexto ministerial.
- Se genero un inventario unificado de medios en public/media-manifest.json para aprovechar practicamente todo el material disponible.
- Se reorganizo el contexto visual en actividades para evitar cruces incorrectos entre fogatas y misiones.
- Se reemplazaron textos de prueba por contenido institucional mas realista en espanol e ingles.
- Se agrego enlace de navegacion a la nueva seccion multimedia desde header y footer.
- Se depuro un archivo residual no visual en public/images/Generales.

### 2026-03-21 (ajuste de experiencia visual y contexto)

- Se agrego previsualizacion en pantalla completa al hacer click sobre imagenes en Hero, Actividades y Centro Multimedia.
- Se reforzo la parte inicial del sitio con una galeria rapida de fotos para mostrar mas contenido desde el primer bloque.
- Se aumento la carga inicial del Centro Multimedia para mostrar mas fotos por seccion sin esperar clicks adicionales.
- Se actualizaron textos de proyectos para alinearlos con frentes de trabajo reales del ministerio.
- Se verifico cobertura de medios: 256 archivos inventariados y 256 en uso activo.

### 2026-03-21 (ajuste solicitado: header + preview global + proyectos reales)

- Se movio el refuerzo visual del inicio al header con una tira de imagenes contextuales.
- Se implemento un visor global para previsualizar cualquier imagen del sitio con click.
- Se eliminaron visores locales duplicados para unificar comportamiento en toda la pagina.
- Se actualizo la seccion Proyectos de Transformacion con data operativa actual del ministerio (ES/EN).

Archivos clave tocados:

- src/components/MediaCenter.tsx
- public/media-manifest.json
- src/App.tsx
- src/components/Trips.tsx
- src/components/Header.tsx
- src/components/Footer.tsx
- src/components/Contact.tsx
- public/locales/es.json
- public/locales/en.json

Impacto funcional:

- Se habilito visualizacion de la mayor parte de imagenes y videos del repositorio en una seccion dedicada.
- Se mejoro la consistencia narrativa entre contenido textual y evidencia visual.
- Se mantuvo rendimiento con carga progresiva y lazy loading.

## Decisiones Tecnicas Relevantes

- Se usa react-scripts (Create React App) como base de build y desarrollo.
- Se utiliza baseUrl en src para imports absolutos internos.
- Las traducciones se cargan dinamicamente desde public/locales.
- El client id de PayPal se toma desde REACT_APP_PAYPAL_CLIENT_ID.

## Pendientes Sugeridos

- Añadir pruebas para componentes criticos (donaciones, idioma y navegacion).
- Definir convencion de ramas y versionado para despliegues.
- Documentar proceso de publicacion en Vercel paso a paso.
- Registrar cambios funcionales en esta bitacora por fecha.

## Plantilla Para Nuevas Entradas

Copiar y completar este formato en cada cambio:

### YYYY-MM-DD

- Cambio realizado:
- Archivos tocados:
- Impacto funcional:
- Riesgos detectados:
- Acciones siguientes:
