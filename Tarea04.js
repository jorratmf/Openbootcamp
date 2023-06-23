let nombre = 'Maria Florencia';
console.log(nombre);

let apellido = 'Jorrat';
console.log(apellido);

let estudiante = (`${nombre} ${apellido}`);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let cantidadLetras = estudiante.length;
console.log(cantidadLetras);

let primeraLetra = nombre.charAt(0);
console.log(primeraLetra);

let ultimaLetra = apellido.charAt(apellido.length-1);
console.log(ultimaLetra);

let estudianteSinEspacios = estudiante.replace(/\s/g, '');
console.log(estudianteSinEspacios);

let nombreContenidoEnEstudiante = estudiante.includes(nombre);
console.log(nombreContenidoEnEstudiante);