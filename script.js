/* Home page */
const grid = document.getElementById('grid');
const pages = document.getElementById('pages');
const loader = document.getElementById("loader");
/* User data in popup card*/
const username = document.getElementById('username');
const name = document.getElementById('name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const largeImage = document.getElementById('large_image');
/* Popup card */
const visible = document.getElementById('details');
const closeContainer = document.getElementById('close_container');
const stopScrolling = document.getElementById('body');
const closeFromOutside = document.getElementById('close_outside');

let spoilers = [
    {
    title: "Star Wars: Empire Strikes Back" ,
    spoiler: "Darth Vader is Luke's father"
    },
    {
        title: "Harry Potter and the Deathly Hallows" ,
        spoiler: "Dobby dies."
    },
    {
        title: "Avengers: Endgame",
        spoiler: "Steve Rogers goes back in time and stays with Peggy"
    },
    {
        title: "Game of Thrones" ,
        spoiler: "Bran is the new king."
    },
    {
        title: "Lost" ,
        spoiler: "Not Penny's boat"
    },
    {
        title: "Avengers: Infinity War" ,
        spoiler: "Thanos kills Loki in front of Thor."
    },
    {
        title: "Game of Thrones",
        spoiler: "Jon Snow kills Dany"
    },
    {
        title: "Game of Thrones" ,
        spoiler: "A few bricks kill Cersei"
    },

    {
        title: "Harry Potter and the Half-Blood Prince" ,
        spoiler: "Snape kills Dumbledore"
    },
    {
        title: "Citizen Kane" ,
        spoiler: "Rosebud is his childhood sled"
    },
    {
        title: "The Good Place" ,
        spoiler: "They are in the bad place."
    },
    {
        title: "The Sixth Sense" ,
        spoiler: "Malcolm Crowe is dead"
    },
    {
        title: "Westworld" ,
        spoiler: "Dolores is in Hale's body"
    },
    {
        title: "Titanic" ,
        spoiler: "The ship sinks"
    },
    {
        title: "Star Wars: The Force Awakens" ,
        spoiler: "Kylo Ren kills Han Solo"
    },
    {
        title: "Captain America: The Winter Soldier" ,
        spoiler: "Hydra infiltrated Shield"
    },
    {
        title: "Lost" ,
        spoiler: "They're all dead."
    },
    {
        title: "The Terminator" ,
        spoiler: "He'll be back-- and back, and back..."
    },

    {
        title: "Buffy, the Vampire Slayer" ,
        spoiler: "Spikes gets a soul"
    },
    {
        title: "Breaking Bad" ,
        spoiler: "Walter dies"
    },
    {
        title: "Orange is the New Black" ,
        spoiler: "Pennsatucky dies"
    },
    {
        title: "The Wire" ,
        spoiler: "A kid kills Omar"
    },
    {
        title: "Westworld" ,
        spoiler: "Bernard is a robot"
    },
    {
        title: "Friends" ,
        spoiler: "They were on a break (or were they?)"
    },

    {
        title: "The Walking Dead" ,
        spoiler: "Sophia was in Hershel’s barn the whole time"
    },
    {
        title: "Star Wars: Return of the Jedi",
        spoiler: "Luke and Leia are siblings"
        },
    {
        title: "Strangers Things" ,
        spoiler: "Barb dies"
    },
    {
        title: "The Handmaid's Tale" ,
        spoiler: "Eden and Isaac are executed for adultery"
    },
    {
        title: "The 100" ,
        spoiler: "Lexa deserved better (she dies)"
    },
    {
        title: "Grey's Anatomy" ,
        spoiler: "It's still on the air. (it probably doesn't matter when you read this)"
    },
    {
        title: "Brother Bear" ,
        spoiler: "The bear that Kenai kills is Koda's mother."
    },
    {
        title: "The Sopranos" ,
        spoiler: "Tony dies"
    },
    {
        title: "How I Met Your Mother",
        spoiler: "The ending sucks."
    },
    {
        title: "Gossip Girl	" ,
        spoiler: "Dan is Gossip Girl"
    },
    {
        title: "Fight Club" ,
        spoiler: "Tyler Durden doesn't exist"
    },
    {
        title: "Spider-Man: Far From Home" ,
        spoiler: "Fury is actually Talos"
    },
    {
        title: "Toy Story 4" ,
        spoiler: "Woody leaves with Bo Peep"
    },
    {
        title: "The Others" ,
        spoiler: "They are the others"
    },
    {
        title: "Agents of SHIELD" ,
        spoiler: "Ward is Hydra"
    },
    {
        title: "Coco" ,
        spoiler: "Hector is Coco's father (Coco is not the boy)"
    },
    {
        title: "Friends" ,
        spoiler: "Rachel dates Joey"
    },
    {
        title: "Buffy, the Vampire Slayer" ,
        spoiler: "Buffy dies... twice"
    },

]

/* LOADER */
let time;

const toLoad = () => {
    time = setTimeout(displayPage, 1000);
}

const displayPage = () => {
    loader.style.display = "none";
    grid.style.display = "flex";
}


/* Page functions */

const getAllProfiles = () => {

            const gridModel = grid.children[0];
            const profiles = spoilers;
            grid.innerHTML = '';

            for (const profile of profiles) {
                let newProfile = gridModel.cloneNode(true);
                newProfile.children[0].innerHTML = `${profile.title}`;
                grid.appendChild(newProfile);


                newProfile.onclick = () => {
                    visible.style.visibility = 'visible';
                    stopScrolling.classList.add('stop-scrolling');
                    username.innerHTML = `<b>${profile.spoiler}</b><br><br>`;
                    name.innerHTML = `--${profile.title}`;
                }
            }

        }
        getAllProfiles();

let unselectPage = 1;



closeContainer.onclick = () => {
    visible.style.visibility = 'hidden';
    stopScrolling.classList.remove('stop-scrolling');
}

closeFromOutside.onclick = () => {
    visible.style.visibility = 'hidden';
    stopScrolling.classList.remove('stop-scrolling');
};