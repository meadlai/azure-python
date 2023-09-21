from flask import Flask, request, render_template, url_for, redirect,Response,send_from_directory
import json

app = Flask(__name__)


@app.route('/')
@app.route('/index', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/download/<path:fileName>', methods=['GET'])
def download_file(fileName):
    response = send_from_directory("files", fileName, as_attachment=True)
    return response

if __name__ == '__main__':
    app.run()
