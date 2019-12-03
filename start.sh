export SECRET_KEY=435313ea80b5a872114356a1
export APP_SETTINGS="config.DevelopmentConfig"
export DATABASE_URL='postgresql+psycopg2://moringa:72330000@localhost/blogwebsite'

python3 manage.py test
