# Cómo actualizar GitHub desde el móvil

## Importante

- **Los sitios que borras** (en "Otros sitios del Excel") se guardan **solo en tu dispositivo** (localStorage). No se suben a GitHub. Cada persona que abre la app ve la lista completa hasta que borra los suyos en su propio móvil/ordenador.
- **El código de la app** (lo que ven todos al abrir la URL) solo cambia cuando **actualizas el repositorio en GitHub** (commit + push).

---

## Opciones para actualizar GitHub desde el móvil

### 1. GitHub en el navegador del móvil
1. Abre **github.com** en Chrome/Safari.
2. Inicia sesión y entra en el repositorio **KrumKK/China-trip-2026**.
3. Ve al archivo que quieras cambiar (p. ej. `index.html`).
4. Pulsa el **lápiz** (Edit) y edita el contenido.
5. Abajo, escribe un mensaje de commit y pulsa **Commit changes**.
6. Los cambios quedan en GitHub; en 1–2 minutos la web https://krumkk.github.io/China-trip-2026/ mostrará la nueva versión.

*Editar HTML largo en el móvil puede ser incómodo; sirve para cambios pequeños.*

### 2. App GitHub (iOS/Android)
- Con la **app oficial de GitHub** puedes ver el repo, crear/issues, y en algunos casos editar archivos.
- Para editar `index.html` suele ser más práctico usar la web en el móvil (opción 1) o un ordenador.

### 3. Ordenador (recomendado para muchos cambios)
- Haces los cambios en tu carpeta **APP VIAJE** en el PC.
- En la terminal: `git add .` → `git commit -m "mensaje"` → `git push`.
- Así actualizas GitHub y todo el mundo ve lo mismo al abrir la app.

---

## Resumen

| Qué quieres | Cómo |
|-------------|------|
| Que **tú** no veas un sitio extra | Borrar en la app (solo afecta a tu dispositivo). |
| Que **todo el mundo** vea los mismos sitios por defecto | Cambiar el código en `index.html` y subir a GitHub (desde PC o desde GitHub web en el móvil). |
| Compartir la app | Comparte la URL: https://krumkk.github.io/China-trip-2026/ . Todos ven la misma app; lo que cada uno borra en "Otros sitios" es personal. |
