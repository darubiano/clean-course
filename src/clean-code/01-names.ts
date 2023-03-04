(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const files_evaluate = [
        { id: 1, delete: false },
        { id: 2, delete: false },
        { id: 3, delete: true },
        { id: 4, delete: false },
        { id: 5, delete: false },
        { id: 7, delete: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = files_evaluate.map( file => file.delete);

    // Malos nombre
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };

    // Todo: Tarea
        
    // día de hoy - today
    //const ddmmyyyy = new Date();
    const today = new Date();
        
    // días transcurridos - elapsed time in days
    //const d:number = 23;
    const elapsed_days:number = 23;
    
    // número de archivos en un directorio - number of files in directory
    // const dir = 33;
    const number_files_directory = 33;
    
    // primer nombre - first name
    // const nombre = 'Fernando';
    const first_name = 'Fernando';
    
    // primer apellido - last name
    //const apellido = 'Herrera';
    const last_name = 'Herrera';

    // días desde la última modificación - days since modification
    // const dsm = 12;
    const days_since_modification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    // const max = 6;
    const max_class_student = 6;

})();