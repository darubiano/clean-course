(() => {

    // arreglo de temperaturas celsius
    // const arrayOfNums = [33.6, 12.34];
    const temps_celsius = [33.6, 12.34];

    // Dirección ip del servidor
    // const ip = '123.123.123.123';
    const server_ip = '123.123.123.123';

    // Listado de usuarios
    // const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    const users = [{ id: 1, email: 'fernando@google.com' },
                    { id: 2, email: 'juan@google.com' },
                    { id: 3, email: 'melissa@google.com' }
                ];
    // Listado de emails de los usuarios
    // const emails = people.map( u => u.email );
    const user_emails = users.map(user => user.email);

    // Variables booleanas de un video juego
    // const jump = false;
    const is_jump = false;

    // const run = true;
    const is_run = true;

    // const noTieneItems = true;
    const has_items = true;

    // const loading = false;
    const is_loading = false;

    // Otros ejercicios
    // tiempo inicial
    // const start = new Date().getTime();
    const start_time = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    // const end = new Date().getTime() - start;
    const end_time = new Date().getTime() - start_time;

    // Funciones
    // Obtiene los libros
    function get_books() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function get_books_url(url: string) {
        throw new Error('Function not implemented.');
    }

    // obtiene el área de un cuadrado basado en sus lados
    function get_squeare_area(side: number) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function print_job() {
        throw new Error('Function not implemented.');
    }






})();
