from flask import Flask, request, url_for, redirect

app = Flask(__name__)


@app.route('/')
@app.route('/index', methods=['POST'])
def hello_world():  # put application's code here
    key = request.args.get("key")
    if key and not key.isspace():
        return 'key is ' + key

    return 'No key found'


if __name__ == '__main__':
    app.run()
