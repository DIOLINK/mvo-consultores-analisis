export default function DatosPage() {
  const datosTecnicos = [
    {
      categoria: "Servidor Web",
      tecnologias: ["LiteSpeed"],
      estado: "excelente",
      descripcion: "Servidor web de alto rendimiento"
    },
    {
      categoria: "Lenguaje Backend",
      tecnologias: ["PHP"],
      estado: "funcional",
      descripcion: "Lenguaje de programación del lado del servidor"
    },
    {
      categoria: "Frameworks JavaScript",
      tecnologias: ["jQuery", "Redux"],
      estado: "mixto",
      descripcion: "jQuery obsoleto, Redux moderno"
    },
    {
      categoria: "Bibliotecas JavaScript",
      tecnologias: ["OWL Carousel", "Isotope"],
      estado: "funcional",
      descripcion: "Bibliotecas para carruseles y layouts dinámicos"
    },
    {
      categoria: "Framework CSS",
      tecnologias: ["Bootstrap"],
      estado: "desactualizado",
      descripcion: "Framework CSS para diseño responsive"
    },
    {
      categoria: "Componentes",
      tecnologias: ["Slider Revolution"],
      estado: "excelente",
      descripcion: "Galería de imágenes avanzada"
    },
    {
      categoria: "Iconos y Tipografía",
      tecnologias: ["Font Awesome", "Google Fonts"],
      estado: "excelente",
      descripcion: "Iconografía y tipografía modernas"
    },
    {
      categoria: "Analytics",
      tecnologias: ["Google Analytics"],
      estado: "excelente",
      descripcion: "Sistema de análisis web implementado"
    }
  ]

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'excelente':
        return 'bg-green-100 text-green-800'
      case 'funcional':
        return 'bg-blue-100 text-blue-800'
      case 'desactualizado':
        return 'bg-yellow-100 text-yellow-800'
      case 'mixto':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'excelente':
        return '✅'
      case 'funcional':
        return '⚠️'
      case 'desactualizado':
        return '❌'
      case 'mixto':
        return '🔄'
      default:
        return '❓'
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Datos Técnicos Detallados</h1>
        <p className="text-lg text-gray-600">
          Información técnica extraída mediante análisis con Wappalyzer del sitio web mvoconsultores.com.ar
        </p>
      </div>

      {/* Resumen de Tecnologías */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resumen de Tecnologías Detectadas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">8</div>
            <div className="text-sm text-gray-600">Categorías</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-600">Tecnologías</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <div className="text-sm text-gray-600">Obsoletas</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">5</div>
            <div className="text-sm text-gray-600">Modernas</div>
          </div>
        </div>
      </div>

      {/* Tabla de Tecnologías */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">Análisis Detallado por Categoría</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tecnologías
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descripción
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {datosTecnicos.map((dato, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{dato.categoria}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-2">
                      {dato.tecnologias.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getEstadoColor(dato.estado)}`}>
                      {getEstadoIcon(dato.estado)} {dato.estado.charAt(0).toUpperCase() + dato.estado.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">{dato.descripcion}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Análisis de Seguridad */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Análisis de Seguridad</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Riesgos Identificados</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-red-600">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Sin certificado SSL/TLS
              </li>
              <li className="flex items-center text-red-600">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Sin DMARC/SPF records
              </li>
              <li className="flex items-center text-yellow-600">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Tecnologías obsoletas
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Recomendaciones</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Implementar SSL/TLS
              </li>
              <li className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Configurar DMARC/SPF
              </li>
              <li className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Actualizar dependencias
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Información del Hosting */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Información del Hosting</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Proveedor</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Empresa:</strong> OVH Hosting, Inc.</p>
              <p><strong>Ubicación:</strong> Montreal, QC, Canadá</p>
              <p><strong>IP del Sitio:</strong> 51.222.134.247</p>
              <p><strong>Tipo:</strong> Hosting compartido/VPS</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Características</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Infraestructura robusta
              </li>
              <li className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Precios competitivos
              </li>
              <li className="flex items-center text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Soporte 24/7
              </li>
              <li className="flex items-center text-yellow-600">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Latencia para Argentina
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
