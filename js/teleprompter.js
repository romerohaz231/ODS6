/* ============================================================
   teleprompter.js - Texto deslizante en la barra superior
   ODS 6: Agua Limpia y Saneamiento
   ============================================================
   CÓMO EDITAR EL TEXTO:
   - Modifica el array MENSAJES para cambiar las frases
   - Puedes agregar cuantas frases quieras
   - La velocidad se ajusta con la variable VELOCIDAD_PX_POR_SEGUNDO
   ============================================================ */

// ---- MENSAJES QUE APARECEN EN LA BARRA SUPERIOR ----
// EDITA AQUÍ para cambiar los textos del teleprompter
var MENSAJES = [
  '💧 Cuida el agua — es vida',
  '🌊 2,200 millones de personas no tienen acceso a agua potable segura',
  '🚰 Cerrar el grifo mientras te lavas los dientes ahorra 12 litros por minuto',
  '♻️ Reutiliza el agua de cocinar verduras para regar tus plantas',
  '🌍 ODS 6: Agua Limpia y Saneamiento para todos antes del 2030',
  '💧 Una ducha de 10 minutos consume entre 80 y 100 litros de agua',
  '🐟 El 70% del agua dulce del planeta se usa en la agricultura',
  '🏫 500 millones de niñas faltan a la escuela cada año por falta de baños seguros',
  '🚿 Repara las tuberías — una fuga de 1 gota/segundo desperdicia 30 litros al día',
  '🌱 El acceso al agua limpia reduce la pobreza y mejora la salud',
  '🤝 Únete al cambio — el agua es un derecho humano fundamental',
];

// ---- CONFIGURACIÓN ----
var VELOCIDAD_PX_POR_SEGUNDO = 80; // Edita para hacer el texto más rápido o lento

// ---- CÓDIGO DE ANIMACIÓN ----
document.addEventListener('DOMContentLoaded', function () {
  var contenedor = document.getElementById('teleprompter-texto');
  if (!contenedor) return;

  var indice = 0;
  var texto  = '';

  // Generar el texto completo uniendo todos los mensajes con separadores
  texto = MENSAJES.join('   •   ') + '   •   ';
  contenedor.textContent = texto;

  // Calcular duración según el ancho del texto
  function ajustarVelocidad() {
    var ancho = contenedor.scrollWidth;
    var duracion = ancho / VELOCIDAD_PX_POR_SEGUNDO;
    contenedor.style.animationDuration = duracion + 's';
  }

  ajustarVelocidad();

  // Re-ajustar si la ventana cambia de tamaño
  window.addEventListener('resize', ajustarVelocidad);
});
