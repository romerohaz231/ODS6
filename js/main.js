/* ============================================================
   main.js - JavaScript principal compartido en todas las páginas
   ODS 6: Agua Limpia y Saneamiento
   ============================================================
   FUNCIONES PRINCIPALES:
   1. Modo oscuro con localStorage
   2. Menú hamburguesa en móvil
   3. Animaciones de aparición al hacer scroll
   4. Menú activo según página actual
   5. Carga de galería desde JSON (con datos de respaldo)
   6. Carga de noticias desde JSON (con datos de respaldo)
   7. Carga de recursos desde JSON (con datos de respaldo)
   ============================================================ */

// ---- DATOS DE RESPALDO: GALERÍA ----
// Se usan si el fetch de galeria.json falla (p.ej. al abrir index.html directo)
var GALERIA_FALLBACK = [
  {
    "id": 1,
    "titulo": "Acceso al agua en comunidades rurales",
    "descripcion": "Niños y familias en zonas rurales de África subsahariana caminan hasta 6 km diarios para obtener agua.",
    "detalle": "En muchas regiones de África, Asia y América Latina, comunidades enteras dependen de fuentes de agua distantes. Las mujeres y niñas son quienes más sufren esta carga. Organizaciones internacionales trabajan en instalar sistemas de bombeo y pozos comunitarios.",
    "categoria": "Acceso",
    "fuente": "ONU-Agua / UNICEF",
    "imagen": "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=600&q=80"
  },
  {
    "id": 2,
    "titulo": "Ríos contaminados: una crisis silenciosa",
    "descripcion": "El 80% de las aguas residuales del mundo se vierte en ríos y mares sin tratamiento previo.",
    "detalle": "La contaminación de ríos por residuos industriales, plásticos y aguas negras representa una amenaza grave para la biodiversidad y la salud humana. Reducir la contaminación hídrica requiere inversión en plantas de tratamiento y educación ambiental.",
    "categoria": "Contaminación",
    "fuente": "OMS / PNUMA",
    "imagen": "https://images.unsplash.com/photo-1618477460930-d8bba58e0c61?w=600&q=80"
  },
  {
    "id": 3,
    "titulo": "Saneamiento básico: dignidad y salud",
    "descripcion": "3,600 millones de personas viven sin instalaciones de saneamiento seguras y adecuadas.",
    "detalle": "El saneamiento básico incluye inodoros, letrinas y sistemas de tratamiento de aguas residuales. Sin él, enfermedades diarreicas cobran miles de vidas cada año, especialmente menores de 5 años.",
    "categoria": "Saneamiento",
    "fuente": "UNICEF / OMS",
    "imagen": "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80"
  },
  {
    "id": 4,
    "titulo": "Tecnología para purificar el agua",
    "descripcion": "Nuevas tecnologías solares y de bajo costo permiten purificar agua en comunidades sin electricidad.",
    "detalle": "La innovación tecnológica transforma el acceso al agua. Filtros de cerámica, sistemas de ósmosis inversa solar y dispositivos portátiles permiten que comunidades aisladas obtengan agua potable segura.",
    "categoria": "Soluciones",
    "fuente": "Water.org / OMS",
    "imagen": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80"
  },
  {
    "id": 5,
    "titulo": "Glaciares en retroceso: el agua que se pierde",
    "descripcion": "Los glaciares del mundo se derriten a un ritmo sin precedentes por el cambio climático.",
    "detalle": "Los glaciares son el mayor reservorio de agua dulce. Suministran agua a ríos que alimentan a millones de personas. El cambio climático acelera su retroceso, amenazando el suministro a largo plazo.",
    "categoria": "Cambio Climático",
    "fuente": "IPCC / ONU-Agua",
    "imagen": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80"
  },
  {
    "id": 6,
    "titulo": "Huertos urbanos y uso eficiente del agua",
    "descripcion": "La agricultura urbana con riego por goteo puede reducir el consumo de agua hasta un 60%.",
    "detalle": "Los huertos urbanos con riego eficiente producen alimentos locales y demuestran cómo usar el agua responsablemente. El riego por goteo entrega agua directamente a las raíces minimizando pérdidas.",
    "categoria": "Acción Local",
    "fuente": "FAO / ONU-Hábitat",
    "imagen": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
  },
  {
    "id": 7,
    "titulo": "Niñas y el derecho al saneamiento escolar",
    "descripcion": "La falta de baños seguros en escuelas hace que millones de niñas abandonen sus estudios.",
    "detalle": "Cuando las escuelas no tienen baños seguros para niñas, estas dejan de asistir. UNICEF estima que 500 millones de niñas se ven afectadas. El programa WASH in Schools es fundamental para la equidad de género.",
    "categoria": "Género y Educación",
    "fuente": "UNICEF",
    "imagen": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80"
  },
  {
    "id": 8,
    "titulo": "Océanos y plásticos: una amenaza global",
    "descripcion": "Cada año se vierten 8 millones de toneladas de plástico en los océanos.",
    "detalle": "Los microplásticos están presentes en ríos, mantos acuíferos y agua potable. Estudios han detectado microplásticos en la sangre humana. Reducir el uso de plásticos de un solo uso es una acción directa que todos podemos tomar.",
    "categoria": "Contaminación",
    "fuente": "PNUMA / Greenpeace",
    "imagen": "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=600&q=80"
  }
];

// ---- DATOS DE RESPALDO: NOTICIAS ----
var NOTICIAS_FALLBACK = [
  {
    "id": 1,
    "titulo": "ONU advierte que el mundo no va por buen camino para lograr el ODS 6 en 2030",
    "fecha": "2024-03-22",
    "fuente": "ONU-Agua",
    "url": "https://www.unwater.org",
    "resumen": "El informe anual de ONU-Agua revela que al ritmo actual de progreso, el mundo no logrará el acceso universal al agua limpia y el saneamiento para 2030. Se necesitan cuadruplicar los esfuerzos en financiamiento y políticas públicas.",
    "categoria": "Informe Global",
    "icono": "📊"
  },
  {
    "id": 2,
    "titulo": "América Latina avanza en cobertura de agua potable pero el saneamiento sigue rezagado",
    "fecha": "2024-06-15",
    "fuente": "CEPAL / OPS",
    "url": "https://www.cepal.org",
    "resumen": "Aunque el 94% de la población urbana tiene acceso al agua, solo el 32% cuenta con tratamiento adecuado de aguas residuales. Las zonas rurales enfrentan los mayores déficits, con comunidades indígenas en situación crítica.",
    "categoria": "América Latina",
    "icono": "🌎"
  },
  {
    "id": 3,
    "titulo": "Tecnología de filtración solar lleva agua limpia a 500 comunidades en África",
    "fecha": "2024-09-05",
    "fuente": "UNICEF",
    "url": "https://www.unicef.org/wash",
    "resumen": "Un proyecto conjunto de UNICEF y socios locales ha instalado sistemas de purificación solar en 500 comunidades del Sahel africano, beneficiando a más de 300,000 personas con acceso diario a agua potable.",
    "categoria": "Innovación",
    "icono": "☀️"
  },
  {
    "id": 4,
    "titulo": "México declara emergencia hídrica en 9 estados por tercer año consecutivo de sequía",
    "fecha": "2024-07-20",
    "fuente": "CONAGUA",
    "url": "https://www.gob.mx/conagua",
    "resumen": "La Comisión Nacional del Agua reporta que el 45% de los embalses del país opera por debajo del 40% de su capacidad. La sequía prolongada afecta la agricultura y el suministro urbano.",
    "categoria": "México",
    "icono": "🇲🇽"
  },
  {
    "id": 5,
    "titulo": "Nuevo tratado global busca frenar la contaminación de ríos transfronterizos",
    "fecha": "2024-11-12",
    "fuente": "Naciones Unidas",
    "url": "https://www.un.org",
    "resumen": "Representantes de 140 países firmaron en Ginebra un protocolo para monitorear y reducir la contaminación en los 276 ríos compartidos entre naciones.",
    "categoria": "Política Internacional",
    "icono": "🤝"
  },
  {
    "id": 6,
    "titulo": "Jóvenes activistas lanzan campaña global '1 Persona, 1 Litro'",
    "fecha": "2025-01-08",
    "fuente": "WaterAid",
    "url": "https://www.wateraid.org",
    "resumen": "Estudiantes de 60 países impulsan una campaña en redes sociales para visibilizar el contraste entre el consumo diario de 400 litros en países desarrollados y los 20 litros a los que aspiran familias en crisis hídrica.",
    "categoria": "Activismo Juvenil",
    "icono": "📱"
  }
];

// ---- DATOS DE RESPALDO: RECURSOS ----
var RECURSOS_FALLBACK = [
  {
    "id": 1,
    "titulo": "Informe Mundial sobre el Desarrollo de los Recursos Hídricos 2023",
    "tipo": "PDF / Informe",
    "organizacion": "UNESCO / ONU-Agua",
    "url": "https://www.unwater.org/publications/un-world-water-development-report-2023",
    "descripcion": "El informe anual más completo sobre el estado del agua en el mundo. Incluye datos por país, tendencias, proyecciones y recomendaciones de política pública.",
    "icono": "📘",
    "etiqueta": "Informe Técnico"
  },
  {
    "id": 2,
    "titulo": "Portal de datos del ODS 6 — Seguimiento global",
    "tipo": "Base de datos interactiva",
    "organizacion": "ONU-Agua",
    "url": "https://sdg6data.org",
    "descripcion": "Plataforma interactiva con datos actualizados sobre el progreso de cada indicador del ODS 6 por país. Incluye gráficas, mapas y descarga de datos en formato abierto.",
    "icono": "🌐",
    "etiqueta": "Datos Oficiales"
  },
  {
    "id": 3,
    "titulo": "WASH: Agua, Saneamiento e Higiene en Escuelas",
    "tipo": "Guía práctica",
    "organizacion": "UNICEF",
    "url": "https://www.unicef.org/wash",
    "descripcion": "Guías y materiales educativos para implementar programas de agua limpia, saneamiento e higiene en centros escolares. Disponible en español.",
    "icono": "🏫",
    "etiqueta": "Educación"
  },
  {
    "id": 4,
    "titulo": "Manual de Uso Eficiente del Agua para el Hogar",
    "tipo": "Guía práctica",
    "organizacion": "CONAGUA / México",
    "url": "https://www.gob.mx/conagua",
    "descripcion": "Consejos prácticos para reducir el consumo de agua en el hogar, calcular tu huella hídrica y adoptar hábitos sostenibles.",
    "icono": "🏠",
    "etiqueta": "Acción Individual"
  },
  {
    "id": 5,
    "titulo": "Directrices de la OMS sobre Calidad del Agua Potable",
    "tipo": "Norma técnica",
    "organizacion": "Organización Mundial de la Salud",
    "url": "https://www.who.int/publications/i/item/9789240045064",
    "descripcion": "Estándares internacionales de calidad para el agua de consumo humano. Referencia esencial para gobiernos, operadores de sistemas de agua y técnicos de salud.",
    "icono": "💊",
    "etiqueta": "Salud Pública"
  },
  {
    "id": 6,
    "titulo": "Herramienta de cálculo de huella hídrica personal",
    "tipo": "Calculadora interactiva",
    "organizacion": "Water Footprint Network",
    "url": "https://www.waterfootprint.org",
    "descripcion": "Calcula cuánta agua virtual consume tu dieta, tu ropa y tus productos cotidianos. Una herramienta educativa poderosa.",
    "icono": "🧮",
    "etiqueta": "Herramienta"
  },
  {
    "id": 7,
    "titulo": "Programa Conjunto OMS/UNICEF de Monitoreo (JMP)",
    "tipo": "Plataforma de seguimiento",
    "organizacion": "OMS / UNICEF",
    "url": "https://washdata.org",
    "descripcion": "Base de datos oficial con estadísticas de acceso al agua y saneamiento a nivel global. Incluye datos diferenciados por zona, género y nivel de servicio.",
    "icono": "📈",
    "etiqueta": "Datos Oficiales"
  },
  {
    "id": 8,
    "titulo": "Documental: 'Water & Power: A California Heist'",
    "tipo": "Documental",
    "organizacion": "Netflix",
    "url": "https://www.netflix.com",
    "descripcion": "Documental sobre la privatización y gestión política del agua en California, que refleja problemas globales sobre acceso, inequidad y poder económico.",
    "icono": "🎬",
    "etiqueta": "Multimedia"
  }
];

// ============================================================
// EJECUTAR CUANDO EL DOM ESTÉ LISTO
// ============================================================
document.addEventListener('DOMContentLoaded', function () {

  // 1. Modo oscuro
  iniciarModoOscuro();

  // 2. Menú hamburguesa (móvil)
  iniciarMenuMovil();

  // 3. Animaciones de aparición al scroll
  iniciarAnimacionesScroll();

  // 4. Marcar enlace activo en la navegación
  marcarEnlaceActivo();

  // 5. Detectar página actual y cargar contenido correspondiente
  var pagina = window.location.pathname.split('/').pop();

  if (pagina === 'galeria.html') {
    iniciarGaleria();
  }

  if (pagina === 'noticias.html') {
    iniciarNoticias();
  }

  if (pagina === 'recursos.html') {
    iniciarRecursos();
  }

});

/* ============================================================
   FUNCIÓN: Modo Oscuro
   Guarda la preferencia en localStorage para que persista
   entre páginas y sesiones.
   ============================================================ */
function iniciarModoOscuro() {
  var btn = document.getElementById('btn-modo-oscuro');
  if (!btn) return;

  // Recuperar modo guardado al cargar la página
  var modoGuardado = localStorage.getItem('modoOscuro');
  if (modoGuardado === 'activo') {
    document.body.classList.add('modo-oscuro');
    btn.textContent = '☀️ Modo claro';
  } else {
    btn.textContent = '🌙 Modo oscuro';
  }

  // Alternar modo al hacer clic
  btn.addEventListener('click', function () {
    document.body.classList.toggle('modo-oscuro');

    if (document.body.classList.contains('modo-oscuro')) {
      localStorage.setItem('modoOscuro', 'activo');
      btn.textContent = '☀️ Modo claro';
    } else {
      localStorage.setItem('modoOscuro', 'inactivo');
      btn.textContent = '🌙 Modo oscuro';
    }
  });
}

/* ============================================================
   FUNCIÓN: Menú Hamburguesa
   Muestra/oculta el menú en pantallas pequeñas.
   ============================================================ */
function iniciarMenuMovil() {
  var toggle = document.getElementById('menu-toggle');
  var links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('abierto');
    toggle.textContent = links.classList.contains('abierto') ? '✕' : '☰';
  });

  // Cerrar menú al hacer clic en un enlace
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('abierto');
      toggle.textContent = '☰';
    });
  });
}

/* ============================================================
   FUNCIÓN: Animaciones de scroll
   Los elementos con clase "aparecer" se animan cuando entran
   al área visible de la pantalla usando IntersectionObserver.
   ============================================================ */
function iniciarAnimacionesScroll() {
  var elementos = document.querySelectorAll('.aparecer');
  if (!elementos.length) return;

  var observer = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observer.unobserve(entrada.target); // Solo animar una vez
      }
    });
  }, { threshold: 0.10 });

  elementos.forEach(function (el) {
    observer.observe(el);
  });
}

/* ============================================================
   FUNCIÓN: Marcar enlace activo en la navegación
   Detecta la URL actual y añade la clase "activo" al enlace.
   ============================================================ */
function marcarEnlaceActivo() {
  var rutaActual = window.location.pathname.split('/').pop();
  var enlaces = document.querySelectorAll('.nav-links a');

  enlaces.forEach(function (a) {
    var href = a.getAttribute('href').split('/').pop();
    if (href === rutaActual || (rutaActual === '' && href === 'index.html')) {
      a.classList.add('activo');
    }
  });
}

/* ============================================================
   FUNCIÓN: Re-observar animaciones en elementos nuevos
   Útil después de insertar contenido dinámico (noticias, etc.)
   ============================================================ */
function reobservarAnimaciones(contenedor) {
  setTimeout(function () {
    var nuevos = contenedor.querySelectorAll('.aparecer');
    nuevos.forEach(function (el) {
      el.classList.add('visible');
    });
  }, 60);
}

/* ============================================================
   FUNCIÓN: Iniciar Galería
   ============================================================
   Intenta cargar desde ../data/galeria.json.
   Si falla (por ejemplo, al abrir sin servidor),
   usa los datos de GALERIA_FALLBACK definidos arriba.

   PARA AGREGAR IMÁGENES: edita /data/galeria.json
   ============================================================ */
function iniciarGaleria() {
  // Intentar obtener la ruta correcta según la ubicación del archivo
  var ruta = obtenerRutaData('galeria.json');

  fetch(ruta)
    .then(function (resp) {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    })
    .then(function (datos) {
      renderizarGaleria(datos);
    })
    .catch(function (err) {
      console.warn('No se pudo cargar galeria.json. Usando datos de respaldo. Error:', err);
      renderizarGaleria(GALERIA_FALLBACK);
    });
}

/* ============================================================
   FUNCIÓN: Renderizar galería en el DOM
   Recibe un array de objetos de imagen y genera las tarjetas.
   ============================================================ */
function renderizarGaleria(items) {
  var grid = document.getElementById('galeria-grid');
  if (!grid) return;

  grid.innerHTML = '';

  items.forEach(function (item) {
    var div = document.createElement('div');
    div.className = 'galeria-item aparecer';
    div.setAttribute('data-id', item.id);

    div.innerHTML =
      '<img src="' + item.imagen + '" alt="' + item.titulo + '" loading="lazy" ' +
      'onerror="this.src=\'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80\'">' +
      '<div class="galeria-info">' +
        '<h3>' + item.titulo + '</h3>' +
        '<p>' + item.descripcion + '</p>' +
        '<span class="etiqueta" style="margin-top:0.4rem; display:inline-block;">' + item.categoria + '</span>' +
      '</div>';

    // Al hacer clic, abrir el modal con detalles
    div.addEventListener('click', function () {
      abrirModalGaleria(item);
    });

    grid.appendChild(div);
  });

  reobservarAnimaciones(grid);
}

/* ============================================================
   FUNCIÓN: Abrir modal de galería
   Muestra la imagen grande y el detalle del ítem seleccionado.
   ============================================================ */
function abrirModalGaleria(item) {
  var modal = document.getElementById('modal-galeria');
  if (!modal) return;

  // Rellenar el modal con los datos del ítem
  var img = modal.querySelector('#modal-imagen');
  var titulo = modal.querySelector('#modal-titulo');
  var detalle = modal.querySelector('#modal-detalle');
  var fuente = modal.querySelector('#modal-fuente');
  var categ = modal.querySelector('#modal-categoria');

  if (img)     img.src = item.imagen;
  if (img)     img.alt = item.titulo;
  if (titulo)  titulo.textContent = item.titulo;
  if (detalle) detalle.textContent = item.detalle || item.descripcion;
  if (fuente)  fuente.textContent = 'Fuente: ' + (item.fuente || '');
  if (categ)   categ.textContent = item.categoria || '';

  // Mostrar el modal
  modal.classList.add('activo');
  document.body.style.overflow = 'hidden'; // Bloquear scroll del fondo
}

/* ============================================================
   FUNCIÓN: Cerrar modal de galería
   ============================================================ */
function cerrarModalGaleria() {
  var modal = document.getElementById('modal-galeria');
  if (!modal) return;
  modal.classList.remove('activo');
  document.body.style.overflow = '';
}

// Hacer la función global para poder llamarla desde el HTML
window.cerrarModalGaleria = cerrarModalGaleria;

/* ============================================================
   FUNCIÓN: Iniciar Noticias
   ============================================================
   Intenta cargar desde ../data/noticias.json.
   Si falla, usa NOTICIAS_FALLBACK.

   PARA AGREGAR NOTICIAS: edita /data/noticias.json
   ============================================================ */
function iniciarNoticias() {
  var ruta = obtenerRutaData('noticias.json');

  fetch(ruta)
    .then(function (resp) {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    })
    .then(function (datos) {
      renderizarNoticias(datos);
    })
    .catch(function (err) {
      console.warn('No se pudo cargar noticias.json. Usando datos de respaldo. Error:', err);
      renderizarNoticias(NOTICIAS_FALLBACK);
    });
}

/* ============================================================
   FUNCIÓN: Renderizar noticias en el DOM
   ============================================================ */
function renderizarNoticias(lista) {
  var contenedor = document.getElementById('contenedor-noticias');
  var filtrosEl  = document.getElementById('filtros-noticias');
  if (!contenedor) return;

  contenedor.innerHTML = '';

  // Generar filtros por categoría
  if (filtrosEl) {
    var categorias = [];
    lista.forEach(function (n) {
      if (categorias.indexOf(n.categoria) === -1) categorias.push(n.categoria);
    });

    filtrosEl.innerHTML = '<span style="font-size:0.85rem;font-weight:700;color:var(--color-texto-claro);">Filtrar por: </span>';

    // Botón "Todas"
    var btnTodas = document.createElement('button');
    btnTodas.textContent = 'Todas';
    btnTodas.className = 'etiqueta';
    btnTodas.style.cssText = 'cursor:pointer;border:none;';
    btnTodas.addEventListener('click', function () { mostrarNoticias(lista, contenedor); });
    filtrosEl.appendChild(btnTodas);

    // Botones por categoría
    categorias.forEach(function (cat) {
      var btn = document.createElement('button');
      btn.textContent = cat;
      btn.className = 'etiqueta';
      btn.style.cssText = 'cursor:pointer;border:none;';
      btn.addEventListener('click', function () {
        mostrarNoticias(lista.filter(function (n) { return n.categoria === cat; }), contenedor);
      });
      filtrosEl.appendChild(btn);
    });
  }

  mostrarNoticias(lista, contenedor);
}

/* ============================================================
   FUNCIÓN: Mostrar noticias filtradas en el contenedor
   ============================================================ */
function mostrarNoticias(lista, contenedor) {
  contenedor.innerHTML = '';

  if (!lista.length) {
    contenedor.innerHTML = '<div class="burbuja"><p>No hay noticias en esta categoría.</p></div>';
    return;
  }

  lista.forEach(function (noticia) {
    var div = document.createElement('div');
    div.className = 'burbuja aparecer';

    div.innerHTML =
      '<div class="tarjeta-noticia">' +
        '<span class="noticia-icono-grande">' + (noticia.icono || '📰') + '</span>' +
        '<div class="noticia-cuerpo">' +
          '<div class="noticia-meta">' +
            '<span class="noticia-fecha">📅 ' + formatearFecha(noticia.fecha) + '</span>' +
            '<span class="noticia-fuente">📌 ' + noticia.fuente + '</span>' +
            '<span class="etiqueta">' + noticia.categoria + '</span>' +
          '</div>' +
          '<h3>' + noticia.titulo + '</h3>' +
          '<p>' + noticia.resumen + '</p>' +
          '<a href="' + noticia.url + '" target="_blank" rel="noopener" class="noticia-leer">' +
            'Leer más en ' + noticia.fuente + ' →' +
          '</a>' +
        '</div>' +
      '</div>';

    contenedor.appendChild(div);
  });

  reobservarAnimaciones(contenedor);
}

/* ============================================================
   FUNCIÓN: Iniciar Recursos
   ============================================================
   Intenta cargar desde ../data/recursos.json.
   Si falla, usa RECURSOS_FALLBACK.

   PARA AGREGAR RECURSOS: edita /data/recursos.json
   ============================================================ */
function iniciarRecursos() {
  var ruta = obtenerRutaData('recursos.json');

  fetch(ruta)
    .then(function (resp) {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    })
    .then(function (datos) {
      renderizarRecursos(datos);
    })
    .catch(function (err) {
      console.warn('No se pudo cargar recursos.json. Usando datos de respaldo. Error:', err);
      renderizarRecursos(RECURSOS_FALLBACK);
    });
}

/* ============================================================
   FUNCIÓN: Renderizar recursos en el DOM
   ============================================================ */
function renderizarRecursos(lista) {
  var contenedor = document.getElementById('contenedor-recursos');
  var filtrosEl  = document.getElementById('filtros-recursos');
  if (!contenedor) return;

  contenedor.innerHTML = '';

  // Generar filtros por etiqueta
  if (filtrosEl) {
    var etiquetas = [];
    lista.forEach(function (r) {
      if (etiquetas.indexOf(r.etiqueta) === -1) etiquetas.push(r.etiqueta);
    });

    filtrosEl.innerHTML = '<span style="font-size:0.85rem;font-weight:700;color:var(--color-texto-claro);">Filtrar: </span>';

    var btnTodos = document.createElement('button');
    btnTodos.textContent = 'Todos';
    btnTodos.className = 'etiqueta';
    btnTodos.style.cssText = 'cursor:pointer;border:none;';
    btnTodos.addEventListener('click', function () { mostrarRecursos(lista, contenedor); });
    filtrosEl.appendChild(btnTodos);

    etiquetas.forEach(function (et) {
      var btn = document.createElement('button');
      btn.textContent = et;
      btn.className = 'etiqueta';
      btn.style.cssText = 'cursor:pointer;border:none;';
      btn.addEventListener('click', function () {
        mostrarRecursos(lista.filter(function (r) { return r.etiqueta === et; }), contenedor);
      });
      filtrosEl.appendChild(btn);
    });
  }

  mostrarRecursos(lista, contenedor);
}

/* ============================================================
   FUNCIÓN: Mostrar recursos filtrados en el contenedor
   ============================================================ */
function mostrarRecursos(lista, contenedor) {
  contenedor.innerHTML = '';

  lista.forEach(function (rec) {
    var div = document.createElement('div');
    div.className = 'burbuja tarjeta-icono aparecer';

    div.innerHTML =
      '<span class="icono">' + rec.icono + '</span>' +
      '<div class="etiquetas">' +
        '<span class="etiqueta">' + rec.etiqueta + '</span>' +
        '<span class="etiqueta" style="background:rgba(0,100,50,0.1);color:#006845;border-color:rgba(0,100,50,0.2);">' + rec.tipo + '</span>' +
      '</div>' +
      '<h3>' + rec.titulo + '</h3>' +
      '<p style="font-size:0.82rem;color:var(--color-texto-claro);font-weight:700;margin:-0.2rem 0 0.3rem;">' + rec.organizacion + '</p>' +
      '<p>' + rec.descripcion + '</p>' +
      '<a href="' + rec.url + '" target="_blank" rel="noopener" class="boton-secundario" style="margin-top:0.5rem;display:inline-block;font-size:0.82rem;">' +
        'Acceder →' +
      '</a>';

    contenedor.appendChild(div);
  });

  reobservarAnimaciones(contenedor);
}

/* ============================================================
   FUNCIÓN AUXILIAR: Obtener ruta correcta al archivo de datos
   ============================================================
   Detecta si estamos en /pages/ o en la raíz y ajusta la ruta.
   Esto soluciona el problema de rutas relativas incorrectas.
   ============================================================ */
function obtenerRutaData(archivo) {
  var ruta = window.location.pathname;
  // Si la URL contiene "/pages/", subimos un nivel
  if (ruta.indexOf('/pages/') !== -1) {
    return '../data/' + archivo;
  }
  return 'data/' + archivo;
}

/* ============================================================
   FUNCIÓN AUXILIAR: Formatear fecha en español
   Convierte "2024-03-22" → "22 de marzo de 2024"
   ============================================================ */
function formatearFecha(fechaStr) {
  var meses = [
    'enero','febrero','marzo','abril','mayo','junio',
    'julio','agosto','septiembre','octubre','noviembre','diciembre'
  ];
  if (!fechaStr) return '';
  var partes = fechaStr.split('-');
  if (partes.length < 3) return fechaStr;
  return parseInt(partes[2]) + ' de ' + meses[parseInt(partes[1]) - 1] + ' de ' + partes[0];
}
