let pokemones = [
    {
        id: "001",
        name: "Bulbasaur",
        color: ["#74CB48", "#A43E9E"],
        img: '../Images/bulbasaur.png',
        type: [
            'Grass',
            'Poison',
        ],
        weight: "6.9",
        height: "0.7",
        moves: [
            "Chiorophyll",
            "Overgrow",
        ],
        description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        stats:
        {
            hp: "049",
            atk: "049",
            def: "045",
            satk: "065",
            sdef: "065",
            spd: "045",
        },
    },

    {
        id: "004",
        name: "Charmander",
        color: ["#F57D31"],
        img: "../Images/charmander.png",
        type: ['Fire',],
        weight: "8.5",
        height: "0.8",
        moves: ["Mega-Punch", "Fire-Punch"],
        description: "It has a preference fot hot things. When it rains, steam is said to spout from the tip of its tail",
        stats:
        {
            hp: "037",
            atk: "052",
            def: "043",
            satk: "060",
            sdef: "050",
            spd: "065",
        },
    },
    {
        id: "007",
        name: "Squirtle",
        color: ["#6493EB"],
        img: "../Images/squirtle.png",
        type: ['Water'],
        weight: "9.0",
        height: "0.5",
        moves: [
            "Torrent",
            "Rain-Dish",
        ],
        description: "When it retracts its long neck into its shell, it squirts out water with vigorous force",
        stats:
        {
            hp: "044",
            atk: "047",
            def: "065",
            satk: "050",
            sdef: "064",
            spd: "043",
        },

    },
    {
        id: "012",
        name: "Butterfree",
        color: ["#A78723", "#A891EC"],
        img: "../Images/butterfree.png",
        type:
            [
                "Bug",
                "Flying"
            ],
        weight: "32.0",
        height: "1.1",
        moves: ["Conpound-Eyes", "Tinted-Lens"],
        description:
            "In Battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        stats: {
            hp: "060",
            atk: "045",
            def: "050",
            satk: "090",
            sdef: "080",
            spd: "070",
        },
    },

    {
        id: "025",
        name: "Pikachu",
        color: ["#F9CF30"],
        img: "../Images/pikachu.png",
        type: ["Electric"],
        weight: "6.0",
        height: "0.4",
        moves: ["Mega-Punch", "Pay-Day"],
        description:
            "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
        stats: {
            hp: "035",
            atk: "055",
            def: "040",
            satk: "050",
            sdef: "050",
            spd: "090",
        },
    },
    {
        id: "092",
        name: "Gastly",
        color: ["#70559B", "#666666"],
        img: "../Images/gastly.png",
        type: [
            "Ghost",
            "Type",
        ],
        weight: "0.1",
        height: "1.3",
        moves: ["Levitate"],

        description:
            "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
        stats: {
            hp: "030",
            atk: "035",
            def: "030",
            satk: "100",
            sdef: "035",
            spd: "080",
        },
    },

    {
        id: "132",
        name: "Ditto",
        color: ["#AAA67F"],
        img: "../Images/ditto.png",
        type: ['Normal'],
        weight: "4.0",
        height: "0.3",
        moves: ["Limber", "Imposter"],
        description: "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
        stats:
        {
            hp: "048",
            atk: "048",
            def: "048",
            satk: "048",
            sdef: "048",
            spd: "048",
        },
    },
    {
        id: "152",
        name: "Mew",
        color: ["#FB5584"],
        img: "../Images/mew.png",
        type: ['Psychic'],
        weight: "4.0",
        height: "0.4",
        moves: ["Synchronize",],
        description: "When viewed through a microscope, this Pokémon´s short, fine, delicate hair can be seen.",
        stats:
        {
            hp: "100",
            atk: "100",
            def: "100",
            satk: "100",
            sdef: "100",
            spd: "100",
        },
    },
    {
        id: "304",
        name: "Aron",
        color: ["#B7B9D0", "#B69E31"],
        img: "../Images/aron.png",
        type: [
            'Steel',
            'Rock'
        ],
        weight: "60",
        height: "0.4",
        moves: [
            "Sturdy",
            "Rock-Head"
        ],
        description: "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
        stats:
        {
            hp: "050",
            atk: "070",
            def: "100",
            satk: "040",
            sdef: "040",
            spd: "030",
        },
    },
]
export default pokemones