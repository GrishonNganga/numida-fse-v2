from sqlalchemy.orm import DeclarativeBase
from flask_sqlalchemy import SQLAlchemy

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)

def setup_database(app):
    from database.seed import seed_database  
    
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///numida.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_ECHO'] = True  # Logs all SQL queries to console
    db.init_app(app)
    with app.app_context():
        db.create_all()
        seed_database()

