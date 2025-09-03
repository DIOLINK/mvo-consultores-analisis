# 🚀 Instrucciones de Deploy - GitHub Pages

## Pasos para subir a GitHub Pages

### 1. Crear Repositorio en GitHub
1. Ve a [GitHub](https://github.com/DIOLINK) y crea un nuevo repositorio
2. Nombra el repositorio: `mvo-consultores-analisis` (o el nombre que prefieras)
3. Hazlo público para GitHub Pages gratuito
4. NO inicialices con README (ya tenemos uno)

### 2. Subir el Código
```bash
# En la carpeta del proyecto
git init
git add .
git commit -m "Initial commit: SPA análisis MVO Consultores"
git branch -M main
git remote add origin https://github.com/[TU-USUARIO]/[NOMBRE-REPO].git
git push -u origin main
```

### 3. Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Click en **Settings** (pestaña superior)
3. Scroll hacia abajo hasta **Pages** (sidebar izquierdo)
4. En **Source**, selecciona **GitHub Actions**
5. El workflow ya está configurado en `.github/workflows/deploy.yml`

### 4. Activar GitHub Actions
1. Ve a la pestaña **Actions** en tu repositorio
2. Deberías ver el workflow "Deploy to GitHub Pages"
3. Si no se ejecuta automáticamente, haz un pequeño cambio y push

### 5. Acceder al Sitio
Una vez desplegado, tu sitio estará disponible en:
```
https://[TU-USUARIO].github.io/[NOMBRE-REPO]/
```

## 🔧 Configuración Adicional

### Cambiar el Nombre del Repositorio
Si cambias el nombre del repo, actualiza en `next.config.js`:
```javascript
basePath: process.env.NODE_ENV === 'production' ? '/nuevo-nombre-repo' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/nuevo-nombre-repo/' : '',
```

### Dominio Personalizado
Si tienes un dominio personalizado:
1. Crea un archivo `CNAME` en la carpeta `public/`
2. Agrega tu dominio en el archivo
3. Configura DNS en tu proveedor de dominio

## 📝 Notas Importantes

- ✅ El proyecto está configurado para export estático
- ✅ GitHub Actions se ejecuta automáticamente en cada push
- ✅ El sitio es completamente responsive
- ✅ Incluye información del desarrollador (Roger)
- ✅ Colores sobrios y diseño profesional

## 🆘 Solución de Problemas

### El sitio no se despliega
1. Verifica que GitHub Actions esté habilitado
2. Revisa los logs en la pestaña Actions
3. Asegúrate de que el repositorio sea público

### Errores de build
1. Verifica que todas las dependencias estén en `package.json`
2. Revisa que no haya errores de TypeScript
3. Ejecuta `npm run build` localmente para probar

### Enlaces rotos
1. Verifica que `next.config.js` tenga la configuración correcta
2. Asegúrate de que el `basePath` coincida con el nombre del repo

---

**¡Listo! Tu SPA estará disponible en GitHub Pages** 🎉
