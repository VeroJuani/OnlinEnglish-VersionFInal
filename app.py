from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__, static_url_path='/static')
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://solnp:riverplate33@solnp.mysql.pythonanywhere-services.com/solnp$proyecto'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Curso(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    precio = db.Column(db.Integer)
    stock = db.Column(db.Integer)
    imagen = db.Column(db.String(400))

    def __init__(self, nombre, precio, stock, imagen):
        self.nombre = nombre
        self.precio = precio
        self.stock = stock
        self.imagen = imagen

class CursoSchema(ma.Schema):
    class Meta:
        fields = ('id', 'nombre', 'precio', 'stock', 'imagen')

curso_schema = CursoSchema()
cursos_schema = CursoSchema(many=True)


with app.app_context():
    db.create_all()

# Rutas para la interfaz web
@app.route('/index.html')
def index():
    return render_template('index.html')


@app.route('/cursos.html')
def cursos():
    return render_template('cursos.html')

@app.route('/alumnos.html')
def alumnos():
    return render_template('alumnos.html')

@app.route('/prueba.html')
def prueba():
    return render_template('prueba.html')

@app.route('/contacto.html')
def contacto():
    return render_template('contacto.html')

# Rutas JSON para la API
@app.route('/cursos.html', methods=['GET'])
def get_cursos():
    all_cursos = Curso.query.all()
    result = cursos_schema.dump(all_cursos)
    return jsonify(result)

@app.route('/cursos.html/<id>', methods=['GET'])
def get_curso(id):
    curso = Curso.query.get(id)
    return curso_schema.jsonify(curso)

@app.route('/cursos.html', methods=['POST'])
def create_curso():
    nombre = request.json['nombre']
    precio = request.json['precio']
    stock = request.json['stock']
    imagen = request.json['imagen']
    new_curso = Curso(nombre, precio, stock, imagen)
    db.session.add(new_curso)
    db.session.commit()
    return curso_schema.jsonify(new_curso)

@app.route('/cursos.html/<id>', methods=['PUT'])
def update_curso(id):
    curso = Curso.query.get(id)
    nombre = request.json['nombre']
    precio = request.json['precio']
    stock = request.json['stock']
    imagen = request.json['imagen']
    curso.nombre = nombre
    curso.precio = precio
    curso.stock = stock
    curso.imagen = imagen
    db.session.commit()
    return curso_schema.jsonify(curso)

@app.route('/cursos.html/<id>', methods=['DELETE'])
def delete_curso(id):
    curso = Curso.query.get(id)
    db.session.delete(curso)
    db.session.commit()
    return curso_schema.jsonify(curso)
