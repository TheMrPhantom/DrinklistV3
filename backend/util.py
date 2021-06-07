from flask import Response
import json


def build_response(message: object, code: int = 200, type: str = "application/json"):
    """
    Build a flask response, default is json format
    """
    
    return Response(response=json.dumps(message), status=code, mimetype=type)
