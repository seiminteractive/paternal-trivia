# Trivia Electron

Juego de trivia offline empaquetado como app de escritorio con Electron.

## Desarrollo

```bash
npm start
```

## Empaquetar

```bash
npm run package   # Genera el ejecutable
npm run make      # Genera instalador (.exe en Windows, .dmg en macOS)
```

## Estructura

- `main.js` - Proceso principal de Electron
- `preload.js` - Script de precarga
- `index.html`, `styles.css`, `app.js` - Juego de trivia
- `assets/` - Iconos (opcional)
