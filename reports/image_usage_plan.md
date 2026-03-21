# Plan de uso de imagenes por secciones

Fecha: 2026-03-21

## Resumen rapido

- Se prioriza usar carpetas curadas para consistencia y mejor control.
- Se aumento el uso de imagenes en la seccion de actividades con carga bajo demanda.
- La carga inicial se mantiene contenida mostrando solo 4 imagenes por tarjeta y expandiendo el resto al hacer clic.

## Secciones con mayor peso historico

- Fogatas: 83.44 MB
- Templo: 48.76 MB
- Actividades: 48.09 MB
- Generales: 45.39 MB

## Estrategia aplicada

1. Mantener hero con 3 imagenes ligeras ya existentes.
2. En actividades (Trips):
- Se agregaron mas imagenes por categoria desde curadas.
- Se muestran miniaturas iniciales y el resto se expande con boton Ver mas.
3. Evitar por ahora usar carpetas originales pesadas directamente en nuevos componentes.
4. Mantener lazy loading en miniaturas y adicionales.

## Limpieza recomendada por etapas

1. Eliminar solo duplicados exactos confirmados por hash.
2. Monitorear rendimiento en produccion o Lighthouse.
3. Si se requiere mas limpieza, depurar fotos originales no curadas y pesadas.

## Resultado de limpieza ejecutada hoy

- Eliminado duplicado en originales:
  - public/images/Actividades/WhatsApp Image 2026-03-21 at 2.37.02 PM.jpeg
- Eliminado duplicado en originales:
  - public/images/Actividades/WhatsApp Image 2026-03-21 at 2.37.05 PM (6).jpeg

Nota: Se conservaron los archivos equivalentes en otras carpetas para no afectar contenido visible.
