var WiseDrops = [
    {
        author: "skateboarder's grafitti",
        wisdom: "You'll eat street before you taste victory."
    },
    {
        author: "Ralph Waldo Emerson",
        wisdom: "What lies behind us and what lies before us are tiny matters compared to what lies within us."
    },
    {
        author: "13 conversations about one thing(movie)",
        wisdom: "Faith is the antithesis of proof<br /><small><em>(My favorite)</em></small>"
    },
    {
        author: "G.K. Chesterton",
        wisdom: "Reason itself is a matter of faith. It is an act of faith to assert that our thoughts have any relation to reality at all."
    },
    {
        author: "Woody Allen",
        wisdom: "I don't want to achieve immortality through my work. I want to achieve it through not dying."
    },
    {
        author: "Anonymous",
        wisdom: "You must be the change you want to see in the world."
    },
    {
        author: "John Olmstead",
        wisdom: "Every cheese has its age. Every age has its cheese"
    },
    {
        author: "I-Ching",
        wisdom: "Before the beginning of great brilliance and beauty there first must be a period of complete chaos."
    },
    {
        author: "Albert Einstein",
        wisdom: "The search for truth is more precious than its possession."
    },
    {
        author: "Richard Pryor",
        wisdom: "I was never a good fighter, man, but I had a cool run..."
    },
    {
        author: "Michael Strahan",
        wisdom: "Bravery and fear are the same feeling. It's just a matter of how you react to that same feeling."
    },
    {
        author: "Frank Zappa",
        wisdom: "Information is not knowledge;<br />Knowledge is not wisdom;<br />Wisdom is not truth;<br />Truth is not beauty;<br />Beauty is not love;<br />Love is not music;<br />Music is the best."
    },
    {
        author: "John Waters",
        wisdom: "Wouldn't you rather your son be a drug dealer than a drug addict?"
    },
    {
        author: "Woody Allen",
        wisdom: "Sex without love is an empty experience. But as far as empty experiences go, it's one of the best"
    },
    {
        author: "George W. Bush, Florence, S.C., Jan. 11, 2000",
        wisdom: "Rarely is the question asked: Is our children learning?"
    },
    {
        author: "Agnes de Mille",
        wisdom: "No trumpets sound when the important decisions of our lives are made. Destiny is made known silently."
    },
    {
        author: "Martin Luther King Jr.",
        wisdom: "In the end, we will not remember the words of our enemies, but the silence of our friends."
    },
    {
        author: "President George W. Bush, Nashville, Tenn., Sept. 17, 2002",
        wisdom: "There's an old saying in Tennessee - I know it's in Texas, probably in Tennessee - that says, fool me once, shame on - shame on you. Fool me - you can't get fooled again."
    },
    {
        author: "Presidential candidate George W. Bush, LaCrosse, Wis., Oct. 18, 2000",
        wisdom: "Families is where our nation finds hope, where wings take dream."
    },
    {
        author: "Umberto Eco",
        wisdom: "I believe that what we become depends on what our fathers teach us at odd moments, when they aren’t trying to teach us. We are formed by little scraps of wisdom."
    }
];

(function(arrWiseDrops) {
    var author,
        wisdom,
        wiseDrop,
        tempDrop,
        numOfWiseDrops = arrWiseDrops.length,
        index;
        setTimeout(function() {renderWiseDrop();}, 5000);
    
    function getRandomIndex() {
        return Math.floor((Math.random()*numOfWiseDrops)+1);
    }
    
    function getNewWiseDrop() {
        index = getRandomIndex();
        author = arrWiseDrops[index].author;
        wisdom = arrWiseDrops[index].wisdom;
        tempDrop = "<p>" + wisdom + "</p>";
        tempDrop += "<p class='thinker'>" + author + "</p>";
        return tempDrop;
    }
    
    function renderWiseDrop() {
        /*wiseDrop = document.createTextNode(getNewWiseDrop()*/
        wiseDrop = getNewWiseDrop();
        
        $("#wise-content").fadeOut(3000, function() {
            $("#wise-content").html(wiseDrop);
            $("#wise-content").fadeIn(3000, function() {
                setTimeout(function() {renderWiseDrop();}, 10000);
            });
        });
    }
})(WiseDrops);