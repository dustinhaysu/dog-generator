// dog ceo api  https://dog.ceo/dog-api

// global variables
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')
const link = document.querySelector('#link')
const img = document.getElementById('dog-img')
let url = ""
let breed = ''
let count = -2

// arrays for tracking through our dogs
const images = [];//
const names = [];
const breeds = [];//
const dogSexes = [];//
const ages = [];//
const dogLikes = [];//
const dogDislikes = [];
const dogInfos = [];



fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message;//Turn the message into an object

        const breedsArray = Object.keys(breedsObject) // Turn the object into an array

        for (i=0; i<breedsArray.length; i++){
        const option = document.createElement('option')//<option></option>
        //option.className = "option"
        option.value = breedsArray[i] //<option value='breed'> value attribute, which specifies a value that is submitted when that menu item is selected
        option.innerText = breedsArray[i] //  <option value = 'breed'>breed</option> rendered text content of option i.e pugS
        select.appendChild(option) //adds current <option> tag to the select box list of options
    }    
          
        //console.log(breedsArray)
        //console.log(breedsObject)
    })

    select.addEventListener('change', event => {
        //console.log(event.target.value)
         breed = event.target.value
        //console.log(breed)
         url = `https://dog.ceo/api/breed/${event.target.value}/images/random`

        if(event.target.value === 'starter') {
            document.getElementById('dog-name').innerHTML = 'Dougie the Doggie';
            document.querySelector('img').setAttribute('src', 'corgi_default.jpg');
            document.getElementById('dog-breed').innerHTML = `Breed: corgi`;
            document.getElementById('MF').innerHTML =`Male` ;
            document.getElementById('likes').innerHTML='Likes: Ham, String Cheese';
            document.getElementById('dislikes').innerHTML='Dislikes: Baths, Entropy';
            document.getElementById('fun-fact').innerHTML='Additional Info: On every walk, has to visit that one spot where they found a piece of cheese on the ground six months ago.';
            document.getElementById('link').innerHTML = ''
            document.getElementById('paragraph').innerHTML = 'Do you want to ogle dogs until your head explodes? Then you have come to the right place! This website generates dog pictures with simple bios. To get things started click the "select me!" dropdown box and choose a breed. Have fun and if you want to check out my website <a href="https://dustin-hays.netlify.app/">click here</a>!'
           
            return
        } 
        
        //console.log(url);
        //call all object functions
        getDoggoImg(url);
        getBreed();
        doggoInfo.assignMF();//also assigns name
        //doggoInfo.assignAge(); //give an age to the dog
        doggoInfo.assignLikes();
        doggoInfo.assignDislikes();
        doggoInfo.assignFunFact();
        hitMeAgain()
        buttonDownBuild()
        buttonUpBuild()
        paragraphNew()
        count = names.length-1
        //console.log(count, names[count])
                
    })
  
    link.addEventListener('click', event => {
        getDoggoImg(url);
        getBreed();
        doggoInfo.assignMF();//also assigns name
        doggoInfo.assignLikes();
        doggoInfo.assignDislikes();
        doggoInfo.assignFunFact();
        count = names.length-1
        //buttonDownBuild()
    })

//paragraph build
function paragraphNew() {
    document.getElementById('paragraph').innerHTML = 'This site does not use cookies or a database. If you exit the app or refresh the page all your information will be lost.  consider yourself informed! If you would like to see my website <a href="https://dustin-hays.netlify.app/">click here</a>.'
}
// this breed again button build
    function hitMeAgain() {
        //clear inner html
          document.getElementById('link').innerHTML = ''        
        // Create element.
        let button = document.createElement('button'); 
          
        // Create the text node for anchor element.
        let text = document.createTextNode("This Breed Again");
          
        // Append the text node to anchor element.
        button.appendChild(text); 
          
        // Set the title.
        //button.title = "This is Link"; 
          
        // Append the anchor element to the body.
        document.getElementById('link').appendChild(button); 
    }


    function buttonDownBuild() {
          document.getElementById('button-down').innerHTML = ''        
        let button = document.createElement('button'); 
        let text = document.createTextNode("⬅️");
        button.appendChild(text);           
        document.getElementById('button-down').appendChild(button); 
    }


    function buttonUpBuild() {
          document.getElementById('button-up').innerHTML = '' 
        let button = document.createElement('button'); 
        let text = document.createTextNode("➡️");
        button.appendChild(text); 
        document.getElementById('button-up').appendChild(button); 
    }
// scroll back through browser memory
        const buttonDown = document.getElementById('button-down')
        buttonDown.addEventListener('click', event => {
            if(count>0){
            count--
            document.getElementById('dog-name').innerHTML = `${names[count]}`   
            img.src = images[count];
            document.getElementById('dog-breed').innerHTML = `${breeds[count]}`;
            document.getElementById('MF').innerHTML = `${dogSexes[count]}`;
            document.getElementById('likes').innerHTML = `${dogLikes[count]}`;
            document.getElementById('dislikes').innerHTML = `${dogDislikes[count]}`;
            document.getElementById('fun-fact').innerHTML = `${dogInfos[count]}`;
            
    
         } else if (images[0]){
            count = 0
            document.getElementById('dog-name').innerHTML = `${names[0]}`
            img.src = images[0];
            document.getElementById('dog-breed').innerHTML = `${breeds[0]}`;
            document.getElementById('MF').innerHTML = `${dogSexes[0]}`;
            document.getElementById('likes').innerHTML = `${dogLikes[0]}`;
            document.getElementById('dislikes').innerHTML = `${dogDislikes[0]}`;
            document.getElementById('fun-fact').innerHTML = `${dogInfos[0]}`;
            count--
            
             }           
        
        if(images[count - 1] === images[count]){
            count = -1
            document.getElementById('dog-name').innerHTML = 'Dougie the Doggie'
            document.querySelector('img').setAttribute('src', 'corgi_default.jpg');
            document.getElementById('dog-breed').innerHTML = `Breed: corgi`;
            document.getElementById('MF').innerHTML =`S: Male` ;
            document.getElementById('likes').innerHTML='Likes: Ham, String Cheese';
            document.getElementById('dislikes').innerHTML='Dislikes: Baths, Entropy';
            document.getElementById('fun-fact').innerHTML='Additional Info: On every walk, has to visit that one spot where they found a piece of cheese on the ground six months ago.';   
            document.getElementById('paragraph').innerHTML = 'Do you want to ogle dogs until your head explodes? Then you have come to the right place! This website generates dog pictures with simple bios. To get things started click the "select me!" dropdown box and choose a breed. Have fun and if you want to check out my website <a href="https://dustin-hays.netlify.app/">click here</a>!'      
           
            return

         } 
        
      })

//scroll up through browser memory
        const buttonUp = document.getElementById('button-up')
        buttonUp.addEventListener('click', event => {
            if(count === images.length-1 || count === -2){
                return
            }else if (count<0){
                count = 0
                //console.log(count, 'second if')
                document.getElementById('dog-name').innerHTML = `${names[count]}`
                img.src=images[count]
                document.getElementById('dog-breed').innerHTML = `${breeds[count]}`;
                document.getElementById('MF').innerHTML = `${dogSexes[count]}`;
                document.getElementById('likes').innerHTML = `${dogLikes[count]}`;
                document.getElementById('dislikes').innerHTML = `${dogDislikes[count]}`;
                document.getElementById('fun-fact').innerHTML = `${dogInfos[count]}`;
            } else if (count === 0){
                count = 1;
                document.getElementById('dog-name').innerHTML = `${names[count]}`
                img.src=images[count]
                document.getElementById('dog-breed').innerHTML = `${breeds[count]}`;
                document.getElementById('MF').innerHTML = `${dogSexes[count]}`;
                document.getElementById('likes').innerHTML = `${dogLikes[count]}`;
                document.getElementById('dislikes').innerHTML = `${dogDislikes[count]}`;
                document.getElementById('fun-fact').innerHTML = `${dogInfos[count]}`;


            } else {
                count++
                document.getElementById('dog-name').innerHTML = `${names[count]}`
                img.src = images[count]
                document.getElementById('dog-breed').innerHTML = `${breeds[count]}`;
                document.getElementById('MF').innerHTML = `${dogSexes[count]}`;
                document.getElementById('likes').innerHTML = `${dogLikes[count]}`;
                document.getElementById('dislikes').innerHTML = `${dogDislikes[count]}`;
                document.getElementById('fun-fact').innerHTML = `${dogInfos[count]}`;               
                //console.log(count, 'third if')
            }
            
        })
    

// fetch image
    const getDoggoImg = url => {
        fetch(url) // going to API url above
            .then(res => {
                return res.json();
                //console.log(res.json)
            })
            .then(data => {
                images.push(data.message)
                img.src = images[images.length-1]
                //img.src = data.message//extract message from JSON and attach to img tag as new source
                console.log(images)
            })
        }
//post breed to DOM
        const getBreed =() => {
            breeds.push(`Breed: ${breed}`)
            document.getElementById('dog-breed').innerHTML = ''
            document.getElementById('dog-breed').innerHTML = `Breed: ${breeds[breeds.length-1]}`
        }
    


// mayanwolfes object
        const doggoInfo = {
            fNames: ['Abby',	'Addie',	'Alexis',	'Alice',	'Allie',	'Alyssa',	'Amber',	'Angel',	'Anna',	'Annie',	'Ariel',	'Ashley',	'Aspen',	'Athena',	'Autumn',	'Ava',	'Avery',	'Baby',	'Bailey',	'Basil',	'Bean',	'Bella',	'Belle',	'Betsy',	'Betty',	'Bianca',	'Birdie',	'Biscuit',	'Blondie',	'Blossom',	'Bonnie',	'Brandy',	'Brooklyn',	'Brownie',	'Buffy',	'Callie',	'Camilla',	'Candy',	'Carla',	'Carly',	'Carmela',	'Casey',	'Cassie',	'Chance',	'Chanel',	'Chloe',	'Cinnamon',	'Cleo',	'Coco',	'Cookie',	'Cricket',	'Daisy',	'Dakota',	'Dana',	'Daphne',	'Darla',	'Darlene',	'Delia',	'Delilah',	'Destiny',	'Diamond',	'Diva',	'Dixie',	'Dolly',	'Duchess',	'Eden',	'Edie',	'Ella',	'Ellie',	'Elsa',	'Emma',	'Emmy',	'Eva',	'Faith',	'Fanny',	'Fern',	'Fiona',	'Foxy',	'Gabby',	'Gemma',	'Georgia',	'Gia',	'Gidget',	'Gigi',	'Ginger',	'Goldie',	'Grace',	'Gracie',	'Greta',	'Gypsy',	'Hailey',	'Hannah',	'Harley',	'Harper',	'Hazel',	'Heidi',	'Hershey',	'Holly',	'Honey',	'Hope',	'Ibby',	'Inez',	'Isabella',	'Ivy',	'Izzy',	'Jackie',	'Jada',	'Jade',	'Jasmine',	'Jenna',	'Jersey',	'Jessie',	'Jill',	'Josie',	'Julia',	'Juliet',	'Juno',	'Kali',	'Kallie',	'Karma',	'Kate',	'Katie',	'Kayla',	'Kelsey',	'Khloe',	'Kiki',	'Kira',	'Koko',	'Kona',	'Lacy',	'Lady',	'Layla',	'Leia',	'Lena',	'Lexi',	'Libby',	'Liberty',	'Lily',	'Lizzy',	'Lola',	'London',	'Lucky',	'Lulu',	'Luna',	'Mabel',	'Mackenzie',	'Macy',	'Maddie',	'Madison',	'Maggie',	'Maisy',	'Mandy',	'Marley',	'Matilda',	'Mattie',	'Maya',	'Mia',	'Mika',	'Mila',	'Miley',	'Millie',	'Mimi',	'Minnie',	'Missy',	'Misty',	'Mitzi',	'Mocha',	'Molly',	'Morgan',	'Moxie',	'Muffin',	'Mya',	'Nala',	'Nell',	'Nellie',	'Nikki',	'Nina',	'Noel',	'Nola',	'Nori',	'Olive',	'Olivia',	'Oreo',	'Paisley',	'Pandora',	'Paris',	'Peaches',	'Peanut',	'Pearl',	'Pebbles',	'Penny',	'Pepper',	'Phoebe',	'Piper',	'Pippa',	'Pixie',	'Polly',	'Poppy',	'Precious',	'Princess',	'Priscilla',	'Raven',	'Reese',	'Riley',	'Rose',	'Rosie',	'Roxy',	'Ruby',	'Sadie',	'Sage',	'Sally',	'Sam',	'Samantha',	'Sammie',	'Sandy',	'Sasha',	'Sassy',	'Savannah',	'Scarlet',	'Shadow',	'Sheba',	'Shelby',	'Shiloh',	'Sierra',	'Sissy',	'Sky',	'Smokey',	'Snickers',	'Sophia',	'Sophie',	'Star',	'Stella',	'Sugar',	'Suki',	'Summer',	'Sunny',	'Sweetie',	'Sydney',	'Tasha',	'Tessa',	'Tilly',	'Tootsie',	'Trixie',	'Violet',	'Willow',	'Winnie',	'Xena',	'Zelda',	'Zoe'],
            mNames: ['Abe',	'Abbott',	'Ace',	'Aero',	'Aiden',	'AJ',	'Albert',	'Alden',	'Alex',	'Alfie',	'Alvin',	'Amos',	'Andy',	'Angus',	'Apollo',	'Archie',	'Aries',	'Artie',	'Ash',	'Austin',	'Axel',	'Bailey',	'Bandit',	'Barkley',	'Barney',	'Baron',	'Baxter',	'Bear',	'Beau',	'Benji',	'Benny',	'Bentley',	'Billy',	'Bingo',	'Blake',	'Blaze',	'Blue',	'Bo',	'Boomer',	'Brady',	'Brody',	'Brownie',	'Bruce',	'Bruno',	'Brutus',	'Bubba',	'Buck',	'Buddy',	'Buster',	'Butch',	'Buzz',	'Cain',	'Captain',	'Carter',	'Cash',	'Casper',	'Champ',	'Chance',	'Charlie',	'Chase',	'Chester',	'Chewy',	'Chico',	'Chief',	'Chip',	'CJ',	'Clifford',	'Clyde',	'Coco',	'Cody',	'Colby',	'Cooper',	'Copper',	'Damien',	'Dane',	'Dante',	'Denver',	'Dexter',	'Diego',	'Diesel',	'Dodge',	'Drew',	'Duke',	'Dylan',	'Eddie',	'Eli',	'Elmer',	'Emmett',	'Evan',	'Felix',	'Finn',	'Fisher',	'Flash',	'Frankie',	'Freddy',	'Fritz',	'Gage',	'George',	'Gizmo',	'Goose',	'Gordie',	'Griffin',	'Gunner',	'Gus',	'Hank',	'Harley',	'Harvey',	'Hawkeye',	'Henry',	'Hoss',	'Huck',	'Hunter',	'Iggy',	'Ivan',	'Jack',	'Jackson',	'Jake',	'Jasper',	'Jax',	'Jesse',	'Joey',	'Johnny',	'Judge',	'Kane',	'King',	'Kobe',	'Koda',	'Lenny',	'Leo',	'Leroy',	'Levi',	'Lewis',	'Logan',	'Loki',	'Louie',	'Lucky',	'Luke',	'Marley',	'Marty',	'Maverick',	'Max',	'Maximus',	'Mickey',	'Miles',	'Milo',	'Moe',	'Moose',	'Morris',	'Murphy',	'Ned',	'Nelson',	'Nero',	'Nico',	'Noah',	'Norm',	'Oakley',	'Odie',	'Odin',	'Oliver',	'Ollie',	'Oreo',	'Oscar',	'Otis',	'Otto',	'Ozzy',	'Pablo',	'Parker',	'Peanut',	'Pepper',	'Petey',	'Porter',	'Prince',	'Quincy',	'Radar',	'Ralph',	'Rambo',	'Ranger',	'Rascal',	'Rebel',	'Reese',	'Reggie',	'Remy',	'Rex',	'Ricky',	'Rider',	'Riley',	'Ringo',	'Rocco',	'Rockwell',	'Rocky',	'Romeo',	'Rosco',	'Rudy',	'Rufus',	'Rusty',	'Sam',	'Sammy',	'Samson',	'Sarge',	'Sawyer',	'Scooby',	'Scooter',	'Scout',	'Scrappy',	'Shadow',	'Shamus',	'Shiloh',	'Simba',	'Simon',	'Smoky',	'Snoopy',	'Sparky',	'Spencer',	'Spike',	'Spot',	'Stanley',	'Stewie',	'Storm',	'Taco',	'Tank',	'Taz',	'Teddy',	'Tesla',	'Theo',	'Thor',	'Titus',	'TJ',	'Toby',	'Trapper',	'Tripp',	'Tucker',	'Tyler',	'Tyson',	'Vince',	'Vinnie',	'Wally',	'Walter',	'Watson',	'Willy',	'Winston',	'Woody',	'Wrigley',	'Wyatt',	'Yogi',	'Yoshi',	'Yukon',	'Zane',	'Zeus',	'Ziggy'],
            likesList: ['Ice water from McDonalds','Kisses','Snuggles','Sniffing the air','Biting the wind','Trash cans','Raiding the cat box for treasure','Barking hello to friends','Stealing cat food','Sleeping in the car','Payaya','Stealing socks','New friends','Ear rubs','Sliced hot dogs','Running at top speed inside the house','Causing diversions','Bread','Sunbathing','Running through tall grass','Deep sighs','Ear scratchies','Licking people directly on the mouth','Destroying soft toys','The human bed','Squeaky toys','Sitting with (or on) people','Chicken','Going to bed after midnight',  'Puddles', 'Howling at Sirens','Staring out the window','Bubbles','Peanut butter','String cheese','Pats, rubs, and butt scritches', 'Your dirtiest, stinkiest, sweatiest clothes', 'Toys', 'Puzzles', 'Cheese', 'Bacon', 'Anything stolen off your plate', 'Swimming', 'Car Rides', 'Chasing squirrels', 'A nice, peaceful nap in a quiet spot', 'Sniffing the bushes', 'Sleeping in', 'Playing frisbee', 'Digging holes in the flower bed', 'Staring at you while pooping', 'Stealing blankets off the bed', 'Drinking out of puddles', 'Farting', 'Doing tricks', 'Agility', 'Barking at the delivery person', 'Stealing dirty laundry', 'Chewing your favorite shoe', 'Staring into space', 'Wrestling with friends', 'Going to the dog park', 'Getting as muddy as possible', 'Going on hikes', 'Annoying the cat', 'Playing tug of war', 'Waking you up at 4am for food', 'Staring at you with love', 'Sitting on your lap'],
            dislikesList: ['Eating alone', 'Roombas','Small children','Thunder','Staying clean after a bath','Nail trims','Being groomed','People','Showers','Being bored','Sharing food','Being home alone','Balloons','Suitcases','Being carried','Helicopters','Doorbells','Pillows','Landscapers/lawnmowers','Their own shadow','Going to bed late','Broccoli','Carrots','Vegetables','Vacuum clearners','Puddles', 'Bathing', 'Not being included', 'The neighbor', 'The UPS person', 'Garbage trucks', 'Thunderstorms', 'Wet grass', 'Burrs'],
            factList: ['Remembers every squirrel they have ever seen','Wishes they knew how cars work','Thinks pond water tastes the very best','Can carry three tennis balls at once and is very proud of that.','Eats grass for fun',"Doesn't actually know their own name, just likes your voice.",'Understands more words than you think','Saw a shooting star once','Will only sleep with 2 blankets','Ate an entire cake at a birthday party before anyone noticed','Can hear a bag of cheese opening from half a mile away',"Believes that frogs are smarter than they look","Once gave a grasshopper a ride on their nose","Doesn't understand the stock market",'Can sprint up to 30mph',"Believes they could win Crufts, but can't afford a plane ticket.","Wishes there weren't so many different streaming services.",'Secretly enjoys baths, but will never tell.','Ate a bee and got stung, then did it again the next day','Unsure of the meaning of life, but believes it may involve bacon.','Truly believes they are a cat','Can actually count to 12, but has never had a reason to do so.','Feels a sense of longing when watching birds migrate in the Fall.',"Enjoys watching SNL, but doesn't understand the jokes",'Sheds enough hair to fill a 5-gallon bucket each week.','Responds to commands in English, German, and Klingon.','Only pretends to understand what you are saying, loves you anyway.','Caught a squirrel once, and now dreams about that moment every single night.',
            "Knows exactly how the universe will end, but doesn't care.",'Would be a top-notch violinist, if they had thumbs.','Dreams of breaking into the dog food plant down the road and eating EVERYTHING.','Can see one more color than any other dog. You will never know which one it is.','Won the award for "fastest lick of the kitchen counter" in 2018 (self-awarded).','Ears and tail are the same length (big ears)!','Takes charge and loudly demands treats','Very bouncy, scientists suspects that legs may contain springs.',"Prefers to eat at the same time as the humans - it's only polite!",'Originally from Tijuana, unkown level of fluency in Spanish.','Favorite hobby is sculpting (the fence, with their mouth)','Can eat an entire loaf of bread in one sitting',"Thinks they are the cat's best friend, but the cat considers them an acquaintence, at best.",'Chooses whether to listen to you on a cas-by-case basis','Can escape any harness ever made','Has an extra toe','Caught a butterfly and immediately spit it back out','Fences are less of an obstacle and more of a suggestion','Terrified of the kitten','Once ate an entire pack of gum','Can consume a rawhide chew in 30 seconds','Farts every time they sit down','Can howl on pitch','Will immediately present belly for rubs','Dream job: bacon taste-tester','Career: retired actor/consultant'],
            MF: '',
            rname: '',
            age: '',
            likes: '',
            dislikes: '',
            fact: '',

            assignMF() { // sex generator
                x = (Math.floor(Math.random() * 2)===0) // randomly selects 1/0 or t/f
                //console.log(x)
                if(x) {
                    this.MF = "Female";
                    dogSexes.push('Female')
                    this.assignName(this.fNames)
                } else {
                    this.MF = "Male";
                    dogSexes.push('Male')
                    this.assignName(this.mNames)
                }
                document.getElementById("MF").innerHTML = `${this.MF}`
            },

            assignName(array) { // get random element from an array
                this.rname = array[Math.floor(Math.random()*array.length)];
                document.getElementById("dog-name").innerHTML = `${this.rname}`
                names.push(`${this.rname}`)
            },

            // assignAge() {
            //     this.age = Math.floor(Math.random() * 10) +1 // assign random age 
            //     ages.push(this.age)
            //     //console.log(age)
            //     document.getElementById('age').innerHTML = `Age: ${this.age}`

            // },
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            yatesShuffle(array) {// fisher yates shuffle: https://bost.ocks.org/mike/shuffle/
                let m = array.length, t, i;
                //While there remain elements to shuffle...
                while (m) {
                    // Pick a remaining element...
                    i = Math.floor(Math.random() * m--);
                    // And swap it with the current element.
                    t = array[m];
                    array[m] = array[i];
                    array[i] = t;
                }
                return array;
            },
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

                assignLikes() {
                    this.likes = this.yatesShuffle(this.likesList).slice(0,2)
                    document.getElementById('likes').innerHTML = `Likes: ${this.likes[0]}, ${this.likes[1]}`
                    dogLikes.push(`Likes: ${this.likes[0]}, ${this.likes[1]}`)

                },

                assignDislikes() {
                    this.dislikes = this.yatesShuffle(this.dislikesList).slice(0,2)
                    document.getElementById('dislikes').innerHTML = `Dislikes: ${this.dislikes[0]}, ${this.dislikes[1]}`
                    dogDislikes.push(`Dislikes: ${this.dislikes[0]}, ${this.dislikes[1]}`)

                },

                assignFunFact() {
                    this.fact = this.factList[Math.floor(Math.random() * this.factList.length)]
                    document.getElementById('fun-fact').innerHTML = `Additional Info: ${this.fact}`
                    dogInfos.push(`Additional Info: ${this.fact}`)

                },
            

        }

        