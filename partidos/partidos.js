// Shared match list for the picker (index.html) and the viewer (ver.html).
// id = file name in animaciones/; flags are flagcdn codes.
window.RONDAS = [
  { id: 'sf',  nombre: 'Semifinales' },
  { id: 'qf',  nombre: 'Cuartos de final' },
  { id: 'r16', nombre: 'Octavos de final' },
];

window.PARTIDOS = [
  { id: 'r16-paraguay-france',       ronda: 'r16', fecha: '4 jul',  local: ['Paraguay', 'py'],       visita: ['Francia', 'fr'],     marcador: [0, 1] },
  { id: 'r16-canada-morocco',        ronda: 'r16', fecha: '4 jul',  local: ['Canadá', 'ca'],         visita: ['Marruecos', 'ma'],   marcador: [0, 3] },
  { id: 'r16-brazil-norway',         ronda: 'r16', fecha: '5 jul',  local: ['Brasil', 'br'],         visita: ['Noruega', 'no'],     marcador: [1, 2] },
  { id: 'r16-portugal-spain',        ronda: 'r16', fecha: '6 jul',  local: ['Portugal', 'pt'],       visita: ['España', 'es'],      marcador: [0, 1] },
  { id: 'r16-mexico-england',        ronda: 'r16', fecha: '6 jul',  local: ['México', 'mx'],         visita: ['Inglaterra', 'gb-eng'], marcador: [2, 3] },
  { id: 'r16-switzerland-colombia',  ronda: 'r16', fecha: '7 jul',  local: ['Suiza', 'ch'],          visita: ['Colombia', 'co'],    marcador: [4, 3] },
  { id: 'r16-argentina-egypt',       ronda: 'r16', fecha: '7 jul',  local: ['Argentina', 'ar'],      visita: ['Egipto', 'eg'],      marcador: [3, 2] },
  { id: 'r16-united-states-belgium', ronda: 'r16', fecha: '7 jul',  local: ['Estados Unidos', 'us'], visita: ['Bélgica', 'be'],     marcador: [1, 4] },
  { id: 'qf-france-morocco',         ronda: 'qf',  fecha: '9 jul',  local: ['Francia', 'fr'],        visita: ['Marruecos', 'ma'],   marcador: [2, 0] },
  { id: 'qf-spain-belgium',          ronda: 'qf',  fecha: '10 jul', local: ['España', 'es'],         visita: ['Bélgica', 'be'],     marcador: [2, 1] },
  { id: 'qf-norway-england',         ronda: 'qf',  fecha: '11 jul', local: ['Noruega', 'no'],        visita: ['Inglaterra', 'gb-eng'], marcador: [1, 2] },
  { id: 'qf-argentina-switzerland',  ronda: 'qf',  fecha: '12 jul', local: ['Argentina', 'ar'],      visita: ['Suiza', 'ch'],       marcador: [3, 1] },
  { id: 'sf-france-spain',           ronda: 'sf',  fecha: '14 jul', local: ['Francia', 'fr'],        visita: ['España', 'es'],      marcador: [0, 2] },
  { id: 'sf-england-argentina',      ronda: 'sf',  fecha: '15 jul', local: ['Inglaterra', 'gb-eng'], visita: ['Argentina', 'ar'],   marcador: [1, 2] },
];

window.bandera = code => `https://flagcdn.com/${code}.svg`;
window.titulo = p => `${p.local[0]} ${p.marcador[0]}–${p.marcador[1]} ${p.visita[0]}`;
