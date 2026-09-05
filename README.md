# K’plan — landing v2

Landing implementada con React 19, TypeScript, Vite y Tailwind. Presenta el producto mediante fotografía de Nicaragua, pantallas reales de la app y una demostración manual. Incluye menú móvil, detalles de experiencias, preguntas frecuentes y formularios diferenciados para negocios y traductores/guías.

## Desarrollo

Con Node compatible con Vite y pnpm 11:

```sh
pnpm install
pnpm dev
pnpm typecheck
pnpm build
pnpm preview
```

`dist/` es la salida de producción. No requiere claves, correo ni servicios externos para la vista previa actual. En este equipo, si pnpm detecta un store distinto del existente, usar `--store-dir C:/Users/USUARIO/AppData/Local/pnpm/store` al instalar.

## Deploy en Vercel

La configuración está lista para dos formas de importación:

- Si conectás la carpeta raíz del proyecto, Vercel usará `../vercel.json`, instalará y compilará dentro de `LandingPage`, y publicará `LandingPage/dist`.
- Si conectás directamente `LandingPage` como root directory, Vercel usará `vercel.json` local y publicará `dist`.

Valores esperados en Vercel:

```txt
Framework Preset: Vite
Install Command: pnpm install --frozen-lockfile
Build Command: pnpm build
Output Directory: dist
Node.js: 22.x
```

La landing es una SPA, por eso las rutas se reescriben a `/index.html`. Los assets compilados en `/assets` y las imágenes de `/media` quedan con cache largo e inmutable.

## Estructura y contratos

- `src/app/App.tsx`: composición y perfil de participación.
- `src/content/landing-content.ts`: navegación, demo, experiencias, FAQ y créditos.
- `src/components/sections/`: secciones de la landing.
- `src/components/forms/ParticipationForm.tsx`: validación y revisión local.
- `src/components/ui/`: enlaces, pantallas, imágenes y diálogo nativo.
- `src/styles/landing.css`: tokens y diseño adaptable; Tailwind usa las mismas variables.
- `public/media/`: exportaciones WebP optimizadas.

Los formularios **no envían ni guardan datos**. La acción permite revisar y volver a editar; cambiar de perfil conserva cada borrador en memoria. Recargar los descarta. Esto responde a la decisión del usuario de posponer el destino del correo y el backend. No confundir esta revisión con una inscripción al piloto.

## Verificación reproducible

```sh
pnpm build
node scripts/serve-audit.cjs
```

Abrir `http://127.0.0.1:4173/` para el build y `http://127.0.0.1:4173/?audit` para la auditoría local. El panel mide LCP/CLS y eventos, fuerza las mismas reglas CSS de movimiento reducido y permite ralentizar animaciones a 5×. No forma parte de `dist`. El máximo de eventos es un diagnóstico, no el INP de campo; la medición depende del equipo y la red.

Probar menú con Tab/Enter/Escape, pasos rápidos de demo, detalles de ciudades, FAQ con teclado, errores de campos, revisión y conservación entre perfiles. Revisar 320, 375/390, 768, 1024 y 1440 px y pantalla baja. El informe registra lo comprobado y las limitaciones del navegador usado.

## Documentación

- [Sistema visual y comportamiento](DESIGN.md).
- [Inventario y licencias](ASSETS.md).
- [Verificación final](output/verification/VERIFICACION.md).
- [Plan aprobado](../DocumentacionInvestigacionApoyoVisual/plan-reestructuracion-landing-v2.md).
- [Revisión de movimiento](../plans/001-movimiento-landing-v2.md).

Las fuentes SVG y los documentos anteriores se conservan como material de referencia. Publicar la landing y activar envíos son trabajos posteriores; no se incluyen en la entrega local.
