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
        "heading": "Flip those jars!",
        "jar": "https://www.webstaurantstore.com/images/products/large/592230/2454581.jpg"
    },
    {
        "id": 3,
        "instruction": "Pick what you'd like to pickle.",
        "heading": "Select...what are some fruits and vegetables that can be pickled?",
        "cherries": "https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1933299218.jpg?sfvrsn=4a8d900b_0",
        "greenbeans": "https://images.everydayhealth.com/images/diet-nutrition/potential-health-benefits-of-green-beans-1440x810.jpg",
        "mushrooms": "https://www.southernliving.com/thmb/FaJ64cufLIteCkTYUDwb2unePnY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2612501_cooki_mushrooms_shiitake_096-1-4b8dd16a56be44768ed1468cebfc3a9e.jpg",
        "bellpeppers": "https://www.thespruceeats.com/thmb/KREtRDgPBBevtf_YaN3oavhGQFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-are-bell-peppers-5216131-still-life-9960d1febfd64dde9de5134dc184529e.jpg",
        "strawberries": "https://www.simplyrecipes.com/thmb/vUSYpxhcP3yGIy3BpxxrLr5_t1g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Strawberry-Guide-LEAD-02-9a5546836ac948e9b42e5d650918a21c.jpg",
        "tomatoes": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg"
    },
    {
        "id": 4,
        "instruction": "Prepare the vegetables by cutting or peeling them in whatever shapes and sizes you prefer.",
        "heading": "Let’s prepare our vegetables to be pickled. Drag and drop to separate the carrot into 5 pieces!"
    },
    {
        "id": 5,
        "instruction": "Add the flavorings. Divide the herbs, spices, or garlic you are using between the jars.",
        "heading": "Hit each check mark to verify you’ve got it!",
        "jar": "https://www.webstaurantstore.com/images/products/large/592230/2454581.jpg"
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
        "qnum": "1",
        "question": "Ultimately, the process of pickling is done as a food ___________ method.",
        "options": ["Preservation", "Enhancement", "Flavoring", "Sanitation"],
        "answer": "Preservation"
    },
    {
        "id": 1,
        "qnum": "2",
        "question": "What is brine?",
        "options": ["Sugary water", "Salty water", "Sauce", "A type of vinegar"],
        "answer": "Salty water"
    },
    {
        "id": 2,
        "qnum": "3",
        "question": "What is the best way to store canned/pickled food items?",
        "options": ["In a cool space, with natural sunlight.", "In a warm and damp place", "In a cool, dry, dark place", "In high humidity"],
        "answer": "In a cool, dry, dark place"
    },
    {
        "id": 3,
        "qnum": "4",
        "question": "Why is oxygen bad when pickling cucumbers?",
        "options": ["It allows spoilage microbes to grow.", "It affects the crunchiness of the pickles.", "It makes the pickles too sour.", "It will cause the pickles to ferment too quickly."],
        "answer": "It allows spoilage microbes to grow."
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
