from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

temp = []
learn_data = [
    {
        "id": 0,
        "instruction": "This is the learning module."
    },
    {
        "id": 1,
        "instruction": "Let's begin assembling our materials."
    },
    {
        "id": 2,
        "instruction": "Prepare the jars. Wash and dry."
    },
    {
        "id": 3,
        "instruction": "Pick what you'd like to pickle."
    },
    {
        "id": 4,
        "instruction": "Prepare the vegetables by cutting or peeling them in whatever shapes and sizes you prefer."
    },
    {
        "id": 5,
        "instruction": "Add the flavorings. Divide the herbs, spices, or garlic you are using between the jars."
    },
    {
        "id": 6,
        "instruction": "Add the vegetables to the jars. Be sure there is ½ inch of space from the rim to the tops of the vegetables. Pack them in without smashing."
    },
    {
        "id": 7,
        "instruction": "Begin boiling the water."
    },
    {
        "id": 8,
        "instruction": "Create the brine."
    },
    {
        "id": 9,
        "instruction": "Fill the jar with brine and seal it."
    },
    {
        "id": 10,
        "instruction": "Remove air bubbles by tapping against the counter and adding more brine if necessary."
    },
    {
        "id": 11,
        "instruction": "Store your mix and wait at least 48 hours before opening!"
    }
]

# ROUTES

@app.route('/')
def homepage(): 
    return render_template('homepage.html', temp=temp)   

@app.route('/learn')
def learn():
    slide = learn_data[1]
    return render_template('learn.html', slide=slide) 

@app.route('/learn/<id>')
def learn_slide(id=None):
    slide = learn_data[1]
    id = int(id)
    for element in learn_data:
        if element["id"] == id:
            slide = element  
    return render_template('learn.html', slide=slide)  

@app.route('/quiz')
def quiz():
    return render_template('quiz.html', temp=temp) 

if __name__ == '__main__':
   app.run(debug = True)


       

