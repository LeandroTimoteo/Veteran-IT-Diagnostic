import os
import sys
from flask import Flask, send_from_directory
from src.models.user import db
from src.routes.user import user_bp
from src.routes.weather import weather_bp

# Adiciona o diretório raiz ao sys.path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Define a pasta de arquivos estáticos
static_folder_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static')
app = Flask(__name__, static_folder=static_folder_path)

# Configurações do Flask
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(os.path.abspath(__file__)), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializa banco de dados
db.init_app(app)
with app.app_context():
    db.create_all()

# Registra os blueprints
app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(weather_bp, url_prefix='/api')

# Rota principal para servir arquivos estáticos
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    full_path = os.path.join(static_folder_path, path)
    index_path = os.path.join(static_folder_path, 'index.html')

    if path and os.path.exists(full_path):
        return send_from_directory(static_folder_path, path)
    elif os.path.exists(index_path):
        return send_from_directory(static_folder_path, 'index.html')
    else:
        return "index.html not found", 404

# Executa o servidor Flask
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    app.run(host="0.0.0.0", port=port)


