//screens will be stored in an array of objects.
//each screen has an id, main text and a button panel

var fieriScreens = [
    {
        "screenID":0,
        "imageName":"images/image1.jpg",
        "musicName":"music/MainTitle.mp3",
        "mainText":"A stout, well-tanned man in a flame-blazen shirt and bleached tips approaches you.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"You recognize him, that's GUY FIERI! You love his show!",
                "buttonGoTo":1
            },
            {
                "buttonPos":1,
                "buttonText":"Leave",
                "buttonGoTo":2
            },
            {
                "buttonPos":2,
                "buttonText":"You've seen the memes, that's the dude that loves burgers",
                "buttonGoTo":20,
            },
            {
                "buttonPos":3,
                "buttonText":"Eat one of your limbs out of panicked depseration",
                "buttonGoTo":0,
                "addOnText":"You have a hard time picking which limb to eat but settle on your left hand. You now have no left hand."
            }
        ]
    },
    {
        "screenID":1,
        "imageName":"images/generous1.jpg",
        "mainText":"You are visibly nervous. A massive smile appears on his face. 'Ah, a true fan' he says as he notices the sparkles in your eyes.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Profess your leigitmate love for his culinary prowess",
                "buttonGoTo":3

            },
            {
                "buttonPos":1,
                "buttonText":"Play it coy and tell him you have no idea who he is",
                "buttonGoTo":4
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":2,
        "mainText":"You turn around and walk away from the stout man. Nothing happened.",
        "imageName":"images/nothing.jpg",
        "musicName":"music/gameover.mp3",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Restart",
                "buttonGoTo":0
            },
            {
                "buttonPos":1,
                "buttonText":"",
                "buttonGoTo":0

            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":0
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":0
            }
        ]
    },
    {
        "screenID":3,
        "mainText":"You tell him you really enjoy the energy he brings to his content, and that you feel his taste in food and his desire to share his passion with others has marked you positively. He smiles, but remains silent. His orange-tinted cheeks begin to take on a rosy material.",
        "imageName":"images/heartbroken1.jpg",
        "musicName":"music/gameover.mp3",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Ask him what he's doing in your university's parking garage",
                "buttonGoTo":4
            },
            {
                "buttonPos":1,
                "buttonText":"Remain silent",
                "buttonGoTo":0

            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":0
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":0
            }
        ]
    },
    {
        "screenID":4,
        "imageName":"images/pleased.jpg",
        "mainText":"You ask him what he's doing in your school's parking garage, which is currently empty. He tells you that you should know, since it's your dream.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"What does he mean, 'it's MY dream'?",
                "buttonGoTo":5

            },
            {
                "buttonPos":1,
                "buttonText":"Realize you are now lucid dreaming",
                "buttonGoTo":6
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":5,
        "imageName":"images/pleased.jpg",
        "mainText":"You're dumbfounded. You ask him what he means by 'it's MY dream'. He smirks. 'Welcome to Flavortown, baby' he whispers as he raises his arms. Welcome to Flavortown.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Restart",
                "buttonGoTo":0

            },
            {
                "buttonPos":1,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":6,
        "imageName":"images/pleased.jpg",
        "mainText":"You realize now that you are lucid dreaming. You are able to pause your dream, resume it, quit, change settings... pretty much anything. However, in the moment, only two options come to mind.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Kiss Guy Fieri",
                "buttonGoTo":7
            },
            {
                "buttonPos":1,
                "buttonText":"Kill Guy Fieri",
                "buttonGoTo":100
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":7,
        "imageName":"images/pleased.jpg",
        "mainText":"You gently carress Guy's shoulders. They're firm, but soft, like his dye job. You let out a slight sigh; you've finally found the person you're meant to be with. Your connection is unspeakable, something words were never construed to describe. You want this feeling to last forever. You gaze into his eyes, and lean in for a kiss. You feel a burning sensation on your lips. Guy Fieri has turned into his evil form, Guy Fiery. He's a literal burning mass of flesh. You retreat, but still see his soft eyes through the flames.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Reach for him one last time to pull him out of the fire",
                "buttonGoTo":8
            },
            {
                "buttonPos":1,
                "buttonText":"Abandon the dream, and him",
                "buttonGoTo":12
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":8,
        "imageName":"images/pleased.jpg",
        "mainText":"You reach into the flames, feeling the heat on your skin, smelling the hair on your arm burning. It smells good somehow. It's satisfying to know you're so committed to something that it's changing you, physically. However, you reach in and nothing's there. It hurts to keep your arm in the fire but you keep it there, hoping to find Guy eventually. You wave your arm around, but no one's there.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Keep your arm in the fire",
                "buttonGoTo":9
            },
            {
                "buttonPos":1,
                "buttonText":"Abandon the dream, and him",
                "buttonGoTo":12
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":9,
        "imageName":"images/pleased.jpg",
        "mainText":"You keep your arm in the fire, devoted to searching for Guy within the flaming mess. You no longer feel pain. You can no longer see your arm, either. You're not sure if your arm is gone, or if it's covered by the flames. You're too scared to pull it out and see.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Keep your arm in the fire, forever",
                "buttonGoTo":11
            },
            {
                "buttonPos":1,
                "buttonText":"Pull out your arm",
                "buttonGoTo":10
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":10,
        "imageName":"images/pleased.jpg",
        "mainText":"You pull your arm out of the fire. It's gone. And so is Guy. The fire subsides, and you are left alone. Although you're sad about losing your arm, and Guy, you can seek comfort in knowing that you're still in control of yourself and your decisions. You leave the area, never to return.",
        "buttonPanel":[
            {
                "buttonPos":1,
                "buttonText":"Restart",
                "buttonGoTo":0
            },
            {
                "buttonPos":1,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":11,
        "imageName":"images/pleased.jpg",
        "mainText":"Crippling indecision overcomes you. You don't want to abandon Guy by removing your arm, but as such you will never know if you arm is still there or not. You stand, waiting. Forever. You can't realize he's gone, and you're so used to the pain that its become all that you know.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Restart",
                "buttonGoTo":0
            },
            {
                "buttonPos":1,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":12,
        "imageName":"images/pleased.jpg",
        "mainText":"You decide to abandon the dream. He's gone. He isn't who you thought he was. Quit while you're ahead, before you get hurt. To leave your dream, you must die.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Die",
                "buttonGoTo":13
            },
            {
                "buttonPos":1,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":13,
        "imageName":"images/pleased.jpg",
        "mainText":"You conjure up a knife, then wonder if it's the best way to go out. You've never thought of this before, surprisingly. You hate the idea, you hate its implications, but there's no other way out. You drop the knife and it disappears. You need to find another way to die.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Love Guy Fieri unconditionally",
                "buttonGoTo":14
            },
            {
                "buttonPos":1,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":14,
        "imageName":"images/pleased.jpg",
        "mainText":"You let your emotions take over, your gut drives you. You give in to your feelings towards Guy. Even a flaming, harmful mess you still desire to be with him. You abandon everything to be with him. As such, you leave yourself completely open. You open your arms, welcoming a final carress from Guy. Guy lunges from within the fire and slits your throat.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Restart",
                "buttonGoTo":0
            },
            {
                "buttonPos":1,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":15,
        "imageName":"images/pleased.jpg",
        "mainText":"You feel the urge to kill Guy Fieri. You conjure a spatula. A bucket of flaming hot coals appears by your side. You let out in a primal scream: 'WELCOME TO FLAVORTOWN' as you pick up a hot coal, throw it into the air, then hit it with your spatula. You miss Guy by a mile. He's now aware of your intentions to harm him and has turned around. He's apparently building something.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Wait to see what he's got cookin",
                "buttonGoTo":16
            },
            {
                "buttonPos":1,
                "buttonText":"Take this opportunity to kill him",
                "buttonGoTo":18
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":16,
        "imageName":"images/pleased.jpg",
        "mainText":"You wait. Guy turns around. He's baked you a cake with decorative frosting flames. There's text on the cake. It reads: 'I care about you. I am in love with every facet of you, purely because it is you. Your features may change, physically and emotionally, but as long as you're you I will be by yourside through those changes.'",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Kiss Guy Fieri",
                "buttonGoTo":7
            },
            {
                "buttonPos":1,
                "buttonText":"Slap the cake out of his hands",
                "buttonGoTo":17
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":17,
        "imageName":"images/pleased.jpg",
        "mainText":"You hate what he wrote. You slap the cake out of his hands. His eyes begin to water and leak. 'I made that for you' he whimpers. You can't stand how much weakness he is showing. You pick up a flaming hot coal. He watches you, fearful and hurt, as you lob it into the air. When it comes back down you hit it with your spatula, sending the flaming hot coal bullet squarely on Guy's chest. It goes through his chest, through his heart, and becomes lodged in there. He looks at you, tears in his eyes. 'No one has ever hurt me as much as you've hurt me.' He falls over, dead. You killed Guy Fieri.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Restart",
                "buttonGoTo":0
            },
            {
                "buttonPos":1,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
    {
        "screenID":18,
        "imageName":"images/pleased.jpg",
        "mainText":"You decide to take this opportunity to kill him. You grab another coal, this time you won't miss. You lob it into the air. As you do, Guy turns around. He's baked you a cake with decorative frosting flames. You hit the coal with the spatula as it decents. There's text on the cake. It reads: 'I care about you. I am in love with every facet of you, purely because it is you. Your features may change, physically and emotionally, but as long as you're you I will be by your side through those changes.' You somehow read all of this before the flaming hot coal bullet lands squarely on Guy's chest. It goes through his chest, through his heart, and becomes lodged in there. He looks up, tears in his eyes. 'No one has ever hurt me as much as you've hurt me.' He falls over, dead. You killed Guy Fieri.",
        "buttonPanel":[
            {
                "buttonPos":0,
                "buttonText":"Restart",
                "buttonGoTo":0
            },
            {
                "buttonPos":1,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":2,
                "buttonText":"",
                "buttonGoTo":100
            },
            {
                "buttonPos":3,
                "buttonText":"",
                "buttonGoTo":100
            }
        ]
    },
];