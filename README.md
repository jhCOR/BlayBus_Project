# 📦 Django Blank Project

A minimal Django project setup for quick development and customization. Perfect as a starting point for any web application.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/blank-django-project.git
cd blank-django-project
```

### 2️⃣ Set Up a Virtual Environment
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```

### 3️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

### 4️⃣ Run the Server
```bash
python manage.py migrate
python manage.py runserver
```

Visit [http://127.0.0.1:8000/](http://127.0.0.1:8000/) to see the running project.

---

## ⚙️ Project Structure
```
blank_project/
├── manage.py
├── blank_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── app/
    ├── migrations/
    ├── __init__.py
    ├── admin.py
    ├── models.py
    ├── tests.py
    └── views.py
```

- **`blank_project/`**: Core Django project configuration.
- **`app/`**: Placeholder app for development.
- **`manage.py`**: Command-line utility for Django tasks.

---

## 🗂️ Environment Variables
Create a `.env` file for sensitive configurations:
```ini
SECRET_KEY=your-secret-key
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
```

Ensure `.env` is excluded from Git:
```bash
# .gitignore
.env
db.sqlite3
```

---

## 🚧 To-Do
- [ ] Set up Django REST Framework (optional)
- [ ] Add Docker support (optional)
- [ ] Write tests
- [ ] Deploy to production

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).

