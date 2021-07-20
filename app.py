"""
Created on June 18 2021
@author: Akhilesh Thite
"""

# Importing necessary libraries.
from flask import Flask, json, render_template, request
import requests
# To dispay json {{output}} in tables.
import json2table

# Defining Flask app.
app = Flask(__name__)

# Main page
@app.route('/')
def home():
    return render_template('index.html')

# Search API
@app.route("/search", methods=["POST", "GET"])
def search():
    if request.method == 'POST':
        pincode = request.form["pincode"]
        date = request.form["date"]
        url = f"https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode={pincode}&date={date}"
        response = requests.get(url).json()
        build_direction = "TOP_TO_BOTTOM"
        table_attributes = {"style": "width:50%"}
        if response["sessions"] == []:
            error = "Sessions are currently unavailable, please try again after some time."
            return render_template('result.html', output=error)
        else:
            return render_template('result.html', output=json2table.convert(response, build_direction=build_direction,
                                                                        table_attributes=table_attributes))

# Breathing page
@app.route('/breathing')
def breathing():
    return render_template('breathing.html')

# Feedback page
@app.route('/feedback')
def feedback():
    return render_template('feedback.html')


if __name__ == "__main__":
    app.run(debug=True)
