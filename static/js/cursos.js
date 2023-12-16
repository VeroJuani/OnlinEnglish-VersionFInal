new Vue({
  el: '#app',
  data: {
    cargando: true,
    error: false,
    cursos: [],
    nombre: '',
    precio: 0,
    stock: 0,
    imagen: '',
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch('/api/cursos')
        .then(response => response.json())
        .then(data => {
          this.cursos = data;
          this.cargando = false;
        })
        .catch(error => {
          this.error = true;
          this.cargando = false;
        });
    },
    agregarCurso() {
      const nuevoCurso = {
        nombre: this.nombre,
        precio: this.precio,
        stock: this.stock,
        imagen: this.imagen,
      };

      fetch('/api/cursos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoCurso),
      })
        .then(response => response.json())
        .then(data => {
          this.cursos.push(data);
          this.nombre = '';
          this.precio = 0;
          this.stock = 0;
          this.imagen = '';
        })
        .catch(error => {
          console.error(error);
          alert('Error al agregar el curso');
        });
    },
    eliminar(id) {
      fetch(`/api/cursos/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => {
          const index = this.cursos.findIndex(curso => curso.id === id);
          this.cursos.splice(index, 1);
        })
        .catch(error => {
          console.error(error);
          alert('Error al eliminar el curso');
        });
    },
  },
});
