import db from './database.js';

//Ejercicio 1

async function getTelefono() {
    try {
        const [rows] = await db.query('SELECT nombre, apellido, telefono FROM PACIENTE');
        console.log ('Los pacientes son: ',rows);
    }  
    catch (error) {
        console.error('Error al obtener informacion:', error);
    throw error;
    }
};

getTelefono();

//Ejercicio 2 

async function getTelefonoPaciente(nro_historial_clinico) {
    try {
        const [rows]= await db.query ('SELECT telefono FROM paciente where nro_historial_clinico =?', [nro_historial_clinico]);
        return rows;
    }
    catch (error) {
        console.error ('Error al obtener el telefono del paciente;', error);
        throw error;
    }
    
};

const telefono= await getTelefonoPaciente (1236);
console.log('El historial del paciente coincide con el contacto :', telefono);

// Ejercicio 3 

async function getMedicosPaciente(numero_historial){
    try{
        const [rows]= await db.query ('select PACIENTE.nro_historial_clinico , MEDICO.nombre, MEDICO.apellido FROM PACIENTE JOIN INGRESO ON PACIENTE.nro_historial_clinico = INGRESO.nro_historial_paciente JOIN MEDICO ON MEDICO.matricula = INGRESO.matricula_medica WHERE nro_historial_clinico = ?', [numero_historial]);
        console.log ('El paciente fue atentido por estos medicos');
        return rows;
        
    }
    catch (error) {
        console.error ('Error al obtener el medico atentido a ese historial clinico', error);
        throw error;
    }
    
};

const historial= await getMedicosPaciente (675);
console.log (historial);
