export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información del Proyecto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Análisis Técnico</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Análisis completo del sitio web mvoconsultores.com.ar con propuesta de migración a tecnologías modernas.
            </p>
          </div>

          {/* Información del Desarrollador */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Desarrollador</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p><strong>Roger</strong></p>
              <p>Desarrollador Full Stack</p>
              <p>Especialista en React & Next.js</p>
              <p>Email: roger@desarrollador.com</p>
              <p>Teléfono: +54 11 1234-5678</p>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <a href="/" className="block hover:text-blue-400 transition-colors">Inicio</a>
              <a href="/propuesta" className="block hover:text-blue-400 transition-colors">Propuesta de Migración</a>
              <a href="/reporte" className="block hover:text-blue-400 transition-colors">Reporte Técnico</a>
              <a href="/datos" className="block hover:text-blue-400 transition-colors">Datos Técnicos</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Análisis Técnico MVO Consultores. Desarrollado por Roger.
          </p>
        </div>
      </div>
    </footer>
  )
}
