from flask import Flask,render_template , url_for,request,redirect
from . import main
from flask_login import login_required,current_user
from app.models import User,Post,Comment
from .. import db,photos
from app.requests import get_Quotes



@main.route('/')
def index():
    quotes=get_Quotes()
    print(quotes)
   
    return render_template('index.html',quotes=quotes)


