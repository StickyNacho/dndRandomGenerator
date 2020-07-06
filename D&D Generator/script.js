var race = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Half-Orc", "Halfling", "Human", "Tiefling", "Orc", "Lizardfolk", "Minotaur", "Aarakocra", "Aasimer", "Changeling", "Genasi", "Goliath", "Kalashtar", "Kenku", "Tortle", "Triton", "Warforged"];

var classe = ["Babarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

var background = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Hermit", "Noble", "Outlander", "Sage", "Sailor", "Soldier", "Urchin"];

var optStats = ["Strength<br> Constitution", "Charisma<br>Dexterity", "Wisdom<br>Str/Con", "Wisdom<br>Constitution", "Str/Dex<br>Con/Int", "Dexterity<br>Wisdom", "Strength<br>Charisma", "Dexterity<br>Wisdom", "Dexterity<br>Int/Charisma", "Charisma<br>Constitution", "Charisma<br>Constitution", "Intelligence<br>Whatever school you choose"];

var alignment = ["Chaotic-Evil", "Chaotic-Neutral", "Chaotic-Good", "Neutral-Evil", "Neutral-Neutral", "Neutral-Good", "Lawful-Evil", "Lawful-Neutral", "Lawful-Good"];
var raceFeatures = [
        //Dragonborn
        "<a href='http://dnd5e.wikidot.com/dragonborn' target='_blank'>More Info about Race</a><br>Ability score increase +2 Strength and +1 Charisma<br>Draconic Ancestry<br>Breath Weapon<br>Damage Resistance", 
        //Dwarf
        "<a href='http://dnd5e.wikidot.com/dwarf' target='_blank'>More Info about Race</a><br>Ability score increase +2 Constitution<br>Speed 25ft<br>Darkvision 60ft<br>Dwarven Resilience<br>Dwarven Combat Training<br>Tool Profiency<br>Stonecunning<br>Subrace:<br><br>Hill Dwarf:<br>Ability score increase +1 Wisdom<br> Dwarven Toughness<br><br>Mountain Dwarf;<br>Ability score increase +2 Strength<br>Dwarven Armor Training",
        //Elf
        "<a href='http://dnd5e.wikidot.com/elf' target='_blank'>More Info about Race</a><br>Ability score increase +2 Dexterity<br>Darkvision 60ft<br>Keen Senses<br>Fey Ancestry<br>Trance<br>Subrace:<br><br>High Elf:<br>Ability score increase +1 Intelligience<br>Elf Weapon Training<br>Cantrip<br>Extra Language<br><br>Wood Elf:<br>Ability score increase +1 Wisdom<br> Elf Weapon Training<br>Fleet of Foot 5ft<br>Mask of the Wild<br><br>Dark Elf/Drow:<br>Ability score increase +1 Charisma<br>Superior Darkvision 120ft<br>Sunlight Sensitivity<br>Drow Magic<br>Drow Weapon Training", 
        //Gnome
        "<a href='http://dnd5e.wikidot.com/gnome' target='_blank'>More Info about Race</a><br>Ability score increase +2 Intelligience score<br>Speed 25ft<br>Darkvision 60ft<br>Gnome Cunning<br>Subrace:<br><br>Forest Gnome:<br>Ability score increase +1 Dexterity<br>Natural Illusionist<br>Speak with Small Beasts<br><br>Rock Gnome:<br>Ability score increase +1 Constitution<br>Artificer's lore<br>Thinker",
        //Half-Elf
        "<a href='http://dnd5e.wikidot.com/half-elf' target='_blank'>More Info about Race</a><br>Ability score increase +2 Charisma and two other scores +1<br>Darkvision 60ft<br>Fey Ancestry<br>Skill Versatility",
        //Half-Orc
        "<a href='http://dnd5e.wikidot.com/half-orc' target='_blank'>More Info about Race</a><br>Ability score increase +2 Strength and +1 Constitution<br>Darkvision<br>Menacing<br>Relentless Endurance<br>Savage Attacks",
        //Halfling
        "<a href='http://dnd5e.wikidot.com/halfling' target='_blank'>More Info about Race</a><br>Ability score increase +2 Dexterity<br>Speed 25ft<br>Lucky<br>Brave<br>Halfling Nimbleness<br>Subrace:<br><br>Lightfoot:<br>Ability score increase +1 Charisma score<br>Naturally Stealthy<br><br>Stout:<br>Ability increase +1 Constitution<br>Stout Resillience",
        //Human
        "<a href='http://dnd5e.wikidot.com/human' target='_blank'>More Info about Race</a><br>All Ability score increase +1",
        //Tiefling
        "<a href='http://dnd5e.wikidot.com/tiefling' target='_blank'>More Info about Race</a><br>Ability score increase +2 Charisma and +1 Intelligience<br>Darkvision 60ft<br>Hellish Resistance<br>Infernal Legacy",
        //Orc
        "<a href='http://dnd5e.wikidot.com/orc' target='_blank'>More Info about Race</a><br>Ability score increase +2 Strength, +1 Constitution and -2 Intelligence<br>Darkvision 60ft<br>Aggressive<br>Menacing<br>Powerful Build",
        //LizardFolk
        "<a href='http://dnd5e.wikidot.com/lizardfolk' target='_blank'>More Info about Race</a><br>Ability score increase +2 Constitution and +1 Wisdom<br>Bite<br>Cunning Artisan<br>Hold Breath<br>Hunter's Lore<br>Natural Armor<br>Hungry Jaws",
        //Minotaur
        "<a href='http://dnd5e.wikidot.com/minotaur' target='_blank'>More Info about Race</a><br>Ability score increase +1 Strength and +1 Str or Int or Wis<br>Horns<br>Goring Rush<br>Hammering Horns<br>Labyrinthine Recall<br>Sea Reaver",
        //Aarakocra
        "<a href='http://dnd5e.wikidot.com/aarakocra' target='_blank'>More Info about Race</a><br>Ability score increase +2 Dexterity and +1 Wisdom<br>Speed 25ft<br>Flight 50ft<br>Talons",
        //Aasimar
        "<a href='http://dnd5e.wikidot.com/aasimar' target='_blank'>More Info about Race</a><br>Ability score increase +2 Charisma<br>Darkvision<br>Celestial Resistance<br>Healing Hands<br>Light Bearer<br>Subrace:<br><br>Protector Aasimar:<br>Ability score increase +1 Wisdom<br>Radiant Soul<br><br>Scourge Aasimar:<br>Ability score increase +1 Constitution<br>Radiant Consumption<br><br>Fallen Aasimar:<br>Ability score increase +1 Strength<br>Necrotic Shroud",
        //Changeling
        "<a href='http://dnd5e.wikidot.com/changeling' target='_blank'>More Info about Race</a><br>Ability score increase +2 Charisma and +1 Dex or Int<br>Change Appearance<br>Changeling Instincts<br>Unsetteling Visage<br>Divergent Persona",
        //Genasi
        "<a href='http://dnd5e.wikidot.com/genasi' target='_blank'>More Info about Race</a><br>Ability score increase +2 Constitution<br>Subrace:<br><br>Air Genasi:<br>Ability score increase +1 Dexterity<br>Unending Breath<br>Mingle with the Wind<br><br>Earth Genasi:<br>Ability score increase +1 Strength<br>Earth Walk<br>Merge with Stone<br><br>Fire Genasi:<br>Ability score increase +1 Intelligience<br>Darkvision 60ft<br>Fire Resistance<br>Reacht the Blaze<br><br>Water Genasi:<br>Ability score increase +1 Wisdom<br>Acid Resistance<br>Amphibious<br>Swim<br>Call to the Wave",
        //Goliath
        "<a href='http://dnd5e.wikidot.com/goliath' target='_blank'>More Info about Race</a><br>Ability score increase +2 Strength and +1 Constitution<br>Natural Athlete<br>Stone's Endurance<br>Powerfull Build<br>Mountain Born",
        //Kalashtar
        "<a href='http://dnd5e.wikidot.com/kalashtar' target='_blank'>More Info about Race</a><br>Ability score increase +1 Wisdom and +1 Charisma<br>Dual Mind<br>Mental Discipline<br>Mind Link<br>Psychic Glamour<br>Severed from Dreams",
        //Kenku
        "<a href='http://dnd5e.wikidot.com/kenku' target='_blank'>More Info about Race</a><br>Ability score increase +2 Dexterity and +1 Wisdom<br>Expert Forgery<br>Kenku Training<br>Mimicry",
        //Tortle
        "<a href='http://dnd5e.wikidot.com/tortle' target='_blank'>More Info about Race</a><br>Ability score increase +2 Strength and +1 Wisdom<br>Claws<br>Hold Breath<br>Natural Armor<br>Shell Defense<br>Survival Instinct",
        //Triton
        "<a href='http://dnd5e.wikidot.com/triton' target='_blank'>More Info about Race</a><br>Ability score increase +1 Strength, +1 Constitution and +1 Wisdom<br>Amphibious<br>Control Air and Water<br>Emissary of the Sea<br>Guardians of the Depths",
        //Warforged
        "<a href='http://dnd5e.wikidot.com/warforged' target='_blank'>More Info about Race</a><br>Ability score increase +2 Constitution and +1 any other score<br>Constructed Resilience<br>Sentry's Rest<br>Integrated Protection<br>Specialized Design"
    ];
var classFeatures =[
        //Babarian
        "<a href='http://dnd5e.wikidot.com/barbarian' target='_blank'>More Info about Class</a><br>Rage<br>Unarmored Defense",
        //Bard
        "<a href='http://dnd5e.wikidot.com/bard' target='_blank'>More Info about Class</a><br>Spellcasting<br>Bardic Inspiration",
        //Cleric
        "<a href='http://dnd5e.wikidot.com/cleric' target='_blank'>More Info about Class</a><br>Spellcasting<br>Divine Domain",
        //Druid
        "<a href='http://dnd5e.wikidot.com/druid' target='_blank'>More Info about Class</a><br>Spellcasting<br>Druidic",
        //Fighter
        "<a href='http://dnd5e.wikidot.com/fighter' target='_blank'>More Info about Class</a><br>Fighting Style<br>Second Wind",
        //Monk
        "<a href='http://dnd5e.wikidot.com/monk' target='_blank'>More Info about Class</a><br>Unarmored Defense<br>Martial Arts",
        //Paladins
        "<a href='http://dnd5e.wikidot.com/paladin' target='_blank'>More Info about Class</a><br>Divine Sense<br>Lay on Hands",
        //Ranger
        "<a href='http://dnd5e.wikidot.com/ranger' target='_blank'>More Info about Class</a><br>Favored Enemy<br>Natural Explorer",
        //Rogue
        "<a href='http://dnd5e.wikidot.com/rogue' target='_blank'>More Info about Class</a><br>Expertise<br>Sneak Attack<br>Thieves' Cant",
        //Sorcerer
        "<a href='http://dnd5e.wikidot.com/sorcerer' target='_blank'>More Info about Class</a><br>Spellcasting<br>Sorcerous Origin",
        //Warlock
        "<a href='http://dnd5e.wikidot.com/warlock' target='_blank'>More Info about Class</a><br>Otherwordly Patron<br>Pact Magic",
        //Wizard
        "<a href='http://dnd5e.wikidot.com/wizard' target='_blank'>More Info about Class</a><br>Spellcasting<br>Arcane Recovery"
    ];
var backgroundFeatures = [
        //Acolyte
        "<a href='http://dnd5e.wikidot.com/background:acolyte' target='_blank'>More Info about Background</a><br>Shelter of the Faithful",
        //Charlatan
        "<a href='http://dnd5e.wikidot.com/background:charlatan' target='_blank'>More Info about Background</a><br>Favorite Schemes",
        //Criminal
        "<a href='http://dnd5e.wikidot.com/background:criminal' target='_blank'>More Info about Background</a><br>Criminal Specialty<br>Criminal Contact",
        //Entertainer
        "<a href='http://dnd5e.wikidot.com/background:entertainer' target='_blank'>More Info about Background</a><br>Entertainer Routines",
        //Folk Hero
        "<a href='http://dnd5e.wikidot.com/background:folk-hero' target='_blank'>More Info about Background</a><br>Defining Event",
        //Guild Artisan
        "<a href='http://dnd5e.wikidot.com/background:guild-artisan' target='_blank'>More Info about Background</a><br>Guild Business",
        //Hermit
        "<a href='http://dnd5e.wikidot.com/background:hermit' target='_blank'>More Info about Background</a><br>Life of Seclusion",
        //Noble
        "<a href='http://dnd5e.wikidot.com/background:noble' target='_blank'>More Info about Background</a><br>Position of Privilege",
        //Outlander
        "<a href='http://dnd5e.wikidot.com/background:outlander' target='_blank'>More Info about Background</a><br>Origin",
        //Sage
        "<a href='http://dnd5e.wikidot.com/background:sage' target='_blank'>More Info about Background</a><br>Specialty<br>Researcher",
        //Sailor
        "<a href='http://dnd5e.wikidot.com/background:sailor' target='_blank'>More Info about Background</a><br>Ship's Passage",
        //Soldier
        "<a href='http://dnd5e.wikidot.com/background:soldier' target='_blank'>More Info about Background</a><br>Specialty<br>Military Rank",
        //Urchin
        "<a href='http://dnd5e.wikidot.com/background:urchin' target='_blank'>More Info about Background</a><br>City Secrets"
    ];
var classHP = ["12 + CON", "8 + CON", "8 + CON", "8 + CON", "10 + CON", "8 + CON", "10 + CON", "10 + CON", "8 + CON", "6 + CON", "8 + CON", "6 + CON"];
var classHitDice = ["1d12 + CON", "1d8 + CON", "1d8 + CON", "1d8 + CON", "1d10 + CON", "1d8 + CON", "1d10 + CON", "1d10 + CON", "1d8 + CON", "1d6 + CON", "1d8 + CON", "1d6 + CON"];


function randomRace()
    {
        var numberRace = Math.floor((Math.random() * 21) + 0);
        document.getElementById("Race").innerHTML = race[numberRace];
        document.getElementById("raceFeatures").innerHTML = raceFeatures[numberRace];
    }
    
function randomClass()
    {
        var numberClass = Math.floor((Math.random() * 11) + 0);
        document.getElementById("Class").innerHTML = classe[numberClass];
        document.getElementById("OptStats").innerHTML = optStats[numberClass];
        document.getElementById("classFeatures").innerHTML = classFeatures[numberClass];
        document.getElementById("HP").innerHTML = classHP[numberClass];
        document.getElementById("HitDice").innerHTML = classHitDice[numberClass];
    }

function randomBackground()
    {
        var numberBackground = Math.floor((Math.random() * 12) + 0);
        document.getElementById("Background").innerHTML = background[numberBackground];
        document.getElementById("backgroundFeatures").innerHTML = backgroundFeatures[numberBackground];
    }

function randomstats()
    {
        var one = Math.floor((Math.random() * 13) + 8);
        var two = Math.floor((Math.random() * 13) + 8);
        var three = Math.floor((Math.random() * 13) + 8);
        var four = Math.floor((Math.random() * 13) + 8);
        var five = Math.floor((Math.random() * 13) + 8);
        var six = Math.floor((Math.random() * 13) + 8);
        var total = one + two + three + four + five + six;
        document.getElementById("Stats").innerHTML = one + " + " + two + " + " + three + " + " + four + " + " + five + " + " + six + " = " + total;
    }
function randomAlignment()
    {
        var numberAlignment = Math.floor((Math.random() * 8) + 0);
        document.getElementById("Alignment").innerHTML = alignment[numberAlignment];
    }

function start()
    {
        randomRace();
        randomClass();
        randomBackground();
        randomAlignment();
        randomstats();
        
}