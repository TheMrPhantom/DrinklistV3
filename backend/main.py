from flask import Flask
from flask import request
from flask_cors import CORS
from debug import names
import random

import util

app = Flask(__name__)
CORS(app)

@app.route('/getToken', methods=["POST"])
def generateToken():
    post_data=request.json
    print(post_data)
    #return util.build_response(5,code=random.choice([200,403,500,401]))
    return util.build_response(5)

@app.route('/isTokenValid', methods=["POST"])
def tokenValid():
    post_data=request.form
    print(post_data)
    return util.build_response(5,code=random.choice([200,403,500,401]))

@app.route('/getUser', methods=["POST"])
def getUser():
    post_data=request.form
    print(post_data)
    return util.build_response([random.choice(names) for _ in range(30)] )

@app.route('/getDrinks', methods=["POST"])
def getDrinks():
    return util.build_response([{"name":"Cola-Mix","cost":"0.50€","stock":109},{"name":"Trap","cost":"13€","stock":3},{"name":"Trap","cost":"13€","stock":3},{"name":"Trap","cost":"13€","stock":3},{"name":"Trap","cost":"13€","stock":3},{"name":"Trap","cost":"13€","stock":3},{"name":"Trap","cost":"13€","stock":3},{"name":"Trap","cost":"13€","stock":3}])


app.run()

