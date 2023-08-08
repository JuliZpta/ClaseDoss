let Usuario = ["Juli", "Zapata"];

const EliminarDato = (Usuario) => {
  Usuario.pop();
  return Usuario;
};
const AgregarNum = (Usuario, dato) => Usuario.push(dato);

const MostrarFunciones = (Usuario, fun, dato) => fun(Usuario, dato);

console.log(MostrarFunciones(Usuario, EliminarDato));
console.log(MostrarFunciones(Usuario, AgregarNum, 1));
console.log(MostrarFunciones(Usuario, EliminarDato));
console.log(Usuario);
console.log(MostrarFunciones(Usuario, AgregarNum, 5));
