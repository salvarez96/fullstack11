interface Empleado {
    nombre: string;
    salario: number;
    pedirAumento(): void;
    getAntiguedad(): number;
}

export default Empleado;