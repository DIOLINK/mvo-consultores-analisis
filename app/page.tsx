import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Análisis Técnico
          <span className="block text-blue-600">MVO Consultores</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Análisis completo del sitio web mvoconsultores.com.ar con propuesta de migración 
          a tecnologías modernas para mejorar performance, seguridad y experiencia de usuario.
        </p>
      </div>

      {/* Cards de Documentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Propuesta de Migración */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 ml-3">Propuesta de Migración</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Propuesta completa de migración a React con cronograma detallado, 
            cotización y beneficios esperados.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Migración a React + TypeScript
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              300% mejora en performance
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Reducción 40% costos mantenimiento
            </div>
          </div>
          <Link 
            href="/propuesta"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Ver propuesta completa
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Reporte Técnico */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 ml-3">Reporte Técnico</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Análisis detallado de las tecnologías actuales, fortalezas, debilidades 
            y oportunidades de mejora.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              jQuery obsoleto (2006)
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Sin certificado SSL
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              LiteSpeed Server (excelente)
            </div>
          </div>
          <Link 
            href="/reporte"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Ver reporte completo
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Datos Técnicos */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 ml-3">Datos Técnicos</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Información técnica detallada extraída con Wappalyzer sobre 
            tecnologías, frameworks y servicios utilizados.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              PHP + LiteSpeed
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              jQuery + Bootstrap
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              Google Analytics
            </div>
          </div>
          <Link 
            href="/datos"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Ver datos técnicos
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Resumen Ejecutivo */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumen Ejecutivo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Estado Actual</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Tecnologías obsoletas (jQuery 2006)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Sin certificado SSL/TLS
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Servidor LiteSpeed (excelente)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Hosting OVH confiable
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Propuesta de Mejora</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Migración a React + TypeScript
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                300% mejora en performance
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Implementación SSL/TLS
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                40% reducción costos mantenimiento
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
