from flask import Flask, request, render_template, url_for, redirect

app = Flask(__name__)


@app.route('/')
@app.route('/index', methods=['POST'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
