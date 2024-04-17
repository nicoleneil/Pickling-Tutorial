from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

temp = []
learn_data = [
    {
        "id": 0,
        "instruction": "This is the learning module.",
        "heading": "Start Page"
    },
    {
        "id": 1,
        "instruction": "Let's begin assembling our materials.",
        "heading": "Guess! Which of these do we need?",
        "milk": "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?resize=768,574",
        "dill": "https://www.eatingwell.com/thmb/JpO2j5YTFLxFT_oQ2XtFPsbAOcE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dill-ac021c11b2dc41ac83b809819617f042.jpg",
        "alcohol": "https://i5.walmartimages.com/seo/Jagermeister-Herbal-Liqueur-750-ml-Bottle-35-ABV_fa58bf1e-4919-43a3-aa2f-765d9b4ac8d3.be19a28334a592aaa7705eddd3440664.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    },
    {
        "id": 2,
        "instruction": "Prepare the jars. Wash and dry.",
        "heading": "Flip those jars!"
    },
    {
        "id": 3,
        "instruction": "Pick what you'd like to pickle.",
        "heading": "Select...what are some fruits and vegetables that can be pickled?"
    },
    {
        "id": 4,
        "instruction": "Prepare the vegetables by cutting or peeling them in whatever shapes and sizes you prefer.",
        "heading": "Let’s prepare our vegetables to be pickled. Drag and drop to separate the carrot into 5 pieces!"
    },
    {
        "id": 5,
        "instruction": "Add the flavorings. Divide the herbs, spices, or garlic you are using between the jars.",
        "heading": "Hit each check mark to verify you’ve got it!"
    },
    {
        "id": 6,
        "instruction": "Add the vegetables to the jars. Be sure there is ½ inch of space from the rim to the tops of the vegetables. Pack them in without smashing.",
        "heading": "Predict … how many sliced cucumbers can fit inside this jar?"
    },
    {
        "id": 7,
        "instruction": "Begin boiling the water.",
        "heading": "Pick the fallacy about boiling water…"
    },
    {
        "id": 8,
        "instruction": "Create the brine.",
        "heading": "Watch this video..."
    },
    {
        "id": 9,
        "instruction": "Fill the jar with brine and seal it.",
        "heading": "Click to view each part!"
    },
    {
        "id": 10,
        "instruction": "Remove air bubbles by tapping against the counter and adding more brine if necessary.",
        "heading": "Remove the air bubbles!"
    },
    {
        "id": 11,
        "instruction": "Store your mix and wait at least 48 hours before opening!",
        "heading": "Where should you store your mix?"
    }
]

quiz_data = [
    {
        "id": 0,
        "question": "This is the start state."
    },
    {
        "id": 1,
        "question": "Ultimately, the process of pickling is done as a food ___________________ method."
    },
    {
        "id": 2,
        "question": "What is brine?"
    },
    {
        "id": 3,
        "question": "What is the best way to store canned/pickled food items?"
    },
    {
        "id": 4,
        "question": "Why is oxygen bad when pickling cucumbers?"
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

@app.route('/quiz/<id>')
def quiz_slide(id=None):
    slide = quiz_data[0]
    id = int(id)
    for element in quiz_data:
        if element["id"] == id:
            slide = element  
    return render_template('quiz.html', slide=slide)  

@app.route('/quiz')
def quiz():
    slide = quiz_data[0]
    return render_template('quiz.html',slide=slide) 

if __name__ == '__main__':
   app.run(debug = True)


       

