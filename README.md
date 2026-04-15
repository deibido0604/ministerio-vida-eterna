# Ministerio Vida Eterna

Sitio web del Ministerio Vida Eterna construido con React + TypeScript, enfocado en presentar la vision del ministerio, actividades, proyectos y donaciones en una sola pagina.

## Resumen

Esta aplicacion incluye:

- Secciones informativas del ministerio (historia, viajes, proyectos, ministerios, contacto).
- Internacionalizacion basica ES/EN con archivos JSON en public/locales.
- Integracion de donaciones con PayPal.
- Diseño responsive con Tailwind CSS.

## Stack Tecnologico

- React 18
- TypeScript
- React Router DOM
- Tailwind CSS + PostCSS
- Lucide React

## Requisitos

- Node.js 18 o superior recomendado
- npm 8 o superior

En Windows, si tienes restricciones de ExecutionPolicy en PowerShell, usa npm.cmd y npx.cmd.

## Instalacion

```bash
npm install
```

## Variables De Entorno

Crea un archivo .env en la raiz del proyecto con:

```env
REACT_APP_PAYPAL_CLIENT_ID=tu_client_id_de_paypal
```

Si no se define, la app usa el valor test.

## Scripts Disponibles

```bash
npm start
```
Inicia la app en modo desarrollo.

```bash
npm run build
```
Genera la compilacion de produccion en la carpeta build.

```bash
npm test
```
Ejecuta pruebas con react-scripts.

## Estructura Del Proyecto

```text
ministerio-vida-eterna/
	public/
		images/
		locales/
			es.json
			en.json
	src/
		components/
			Header.tsx
			Hero.tsx
			History.tsx
			Trips.tsx
			Projects.tsx
			Ministries.tsx
			Donations.tsx
			Contact.tsx
			Footer.tsx
		context/
			LanguageContext.tsx
		App.tsx
		index.tsx
```

## Internacionalizacion

- El idioma se administra desde LanguageContext.
- Traducciones cargadas desde public/locales/es.json y public/locales/en.json.
- Para agregar nuevos textos, define la clave en ambos archivos y consume t('ruta.de.clave').

## Donaciones

- Se crean ordenes con montos predefinidos y captura en el flujo onApprove.

## Despliegue

Este proyecto incluye vercel.json para despliegue en Vercel.

Flujo recomendado:

1. Configurar REACT_APP_PAYPAL_CLIENT_ID en el entorno de Vercel.
2. Ejecutar build (Vercel lo hace automaticamente).
3. Verificar carga de traducciones en /locales y recursos de /images.

## Mantenimiento Recomendado

- Mantener sincronizados los textos en es.json y en.json.
- Revisar periodicamente imagenes en public/images para optimizar peso.
- Validar flujo de donaciones con cuenta sandbox antes de pasar a produccion.