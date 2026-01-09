export interface Project {
    title: string;
    type: 'Film' | 'Series';
    year?: string;
    founder: 'Gilles Castera' | 'Aziz Hamichi';
    poster?: string;
}

const gillesProjectsRaw: { title: string; type: 'Film' | 'Series' }[] = [
    { title: "The Gallerist", type: "Film" },
    { title: "The Amateur", type: "Film" },
    { title: "Robin Hood", type: "Film" },
    { title: "Wonder Woman", type: "Film" },
    { title: "Absolutely Fabulous: The Movie", type: "Film" },
    { title: "Me Before You", type: "Film" },
    { title: "American Girl: Coco", type: "Film" },
    { title: "The Hunger Games: Mockingjay – Part 1", type: "Film" },
    { title: "The Hunger Games: Mockingjay – Part 2", type: "Film" },
    { title: "Tomorrowland", type: "Film" },
    { title: "Cédric", type: "Film" },
    { title: "As Above, So Below", type: "Film" },
    { title: "Bastille Day", type: "Film" },
    { title: "Mood Indigo", type: "Film" },
    { title: "Hansel & Gretel: Witch Hunters", type: "Film" },
    { title: "Safe House", type: "Film" },
    { title: "Sherlock Holmes: A Game of Shadows", type: "Film" },
    { title: "Hugo", type: "Film" },
    { title: "Monte Carlo", type: "Film" },
    { title: "The Tourist", type: "Film" },
    { title: "Hereafter", type: "Film" },
    { title: "Inception", type: "Film" },
    { title: "Iron Man 2", type: "Film" },
    { title: "Inglourious Basterds", type: "Film" },
    { title: "2012", type: "Film" },
    { title: "Transformers: Revenge of the Fallen", type: "Film" },
    { title: "The Informant!", type: "Film" },
    { title: "G.I. Joe: The Rise of Cobra", type: "Film" },
    { title: "Julie & Julia", type: "Film" },
    { title: "An Education", type: "Film" },
    { title: "The Happening", type: "Film" },
    { title: "National Treasure: Book of Secrets", type: "Film" },
    { title: "The Bourne Ultimatum", type: "Film" },
    { title: "Rush Hour 3", type: "Film" },
    { title: "The Devil Wears Prada", type: "Film" },
    { title: "Munich", type: "Film" },
    { title: "The Dreamers", type: "Film" },
    { title: "Double Down", type: "Film" },
    { title: "The Four Feathers", type: "Film" },
    { title: "102 Dalmatians", type: "Film" },
    { title: "The World Is Not Enough", type: "Film" },
    { title: "The Mummy", type: "Film" },
    { title: "Tomorrow Never Dies", type: "Film" },
    { title: "Rhinoceros Hunting in Budapest", type: "Film" },
    { title: "Incognito", type: "Film" },
    { title: "Nobody's Children", type: "Film" },
    { title: "Zadoc et le Bonheur", type: "Film" },
    { title: "La Note Bleue", type: "Film" },
    { title: "Captive in the Land", type: "Film" },
    { title: "The New Look", type: "Series" },
    { title: "The Serpent Queen", type: "Series" },
    { title: "The Syndicate", type: "Series" },
    { title: "Riviera", type: "Series" },
    { title: "Patrick Melrose", type: "Series" },
    { title: "Gossip Girl", type: "Series" },
    { title: "Entourage", type: "Series" },
    { title: "The Sopranos", type: "Series" },
    { title: "Sex and the City", type: "Series" },
];

const azizProjectsRaw: { title: string; type: 'Film' | 'Series' }[] = [
    { title: "Escape from Mogadishu", type: "Film" },
    { title: "Kingdom of Heaven", type: "Film" },
    { title: "Le Salaire de la Peur", type: "Film" },
    { title: "Les Harkis", type: "Film" },
    { title: "Mission: Impossible", type: "Film" },
    { title: "Prince of Persia", type: "Film" },
    { title: "That Dirty Black Bag", type: "Film" },
    { title: "The Mummy Returns", type: "Film" },
    { title: "Traitor", type: "Film" },
    { title: "Game of Thrones", type: "Series" },
    { title: "Transporter: The Series", type: "Series" },
    { title: "ZeroZeroZero", type: "Series" },
];

// Helper to find image in public folder (simulated)
const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

// Known filename mappings based on user provide list + ls output
const imageMap: Record<string, string> = {
    "102 dalmatians": "102 dalmatians.jfif",
    "2012": "2012.jpg",
    "as above, so below": "As_Above,_So_Below.jpg",
    "bastille day": "Bastille_Day.png",
    "captive in the land": "Captive-in-the-Land.jpg",
    "g.i. joe: the rise of cobra": "G.I._Joe_-_The_Rise_of_Cobra_(2009_film).jpg",
    "hereafter": "Hereafter.jpg",
    "hugo": "Hugo.jpg",
    "inception": "Inception_(2010).jpg",
    "incognito": "Incognito1998Poster.jpg",
    "iron man 2": "Iron_Man_2.jpg",
    "julie & julia": "Julie_and_julia.jpg",
    "the hunger games: mockingjay – part 1": "MockingjayPart1.jpg",
    "the hunger games: mockingjay – part 2": "Mockingjay_Part_2.jpg",
    "monte carlo": "Monte_Carlo.jpg",
    "munich": "Munich_1_Poster.jpg",
    "patrick melrose": "Patrick_Melrose_Poster.jpeg",
    "prince of persia": "Prince_of_Persia_poster.jpg",
    // "rebecca": "Rebecca_poster.jpeg", // Not in list?
    "rhinoceros hunting in budapest": "Rhinoceros hunting in budapest.jpg",
    "rush hour 3": "Rush_Hour_3_poster.png",
    "safe house": "Safe_House.jpg",
    "the informant!": "TheInformant.jpg",
    "the bourne ultimatum": "The_Bourne_Ultimatum_(2007_film_poster).jpg",
    "the devil wears prada": "The_Devil_Wears_Prada_main_onesheet.jpg",
    "the dreamers": "The_Dreamers_movie.jpg",
    "the four feathers": "The_Four_Feathers_2002_movie.jpg",
    "the mummy returns": "The_Mummy_Returns_poster.jpg",
    "the tourist": "The_Tourist.jpg",
    "the mummy": "The_mummy.jpg",
    "tomorrowland": "Tomorrowland.jpg",
    "zadoc et le bonheur": "Zadoc et le bonheur.jpg",
    "absolutely fabulous: the movie": "absoultelyfabulous.jpg",
    "the amateur": "amateur.jpg",
    "an education": "an education.jpg",
    "la note bleue": "blue note.jpg",
    "entourage": "entourage.jpg",
    "escape from mogadishu": "escape from mogadishu.jfif",
    "the gallerist": "gallerist.jpg",
    "game of thrones": "game of thrones.jpg",
    "gossip girl": "gossip girl.jpg",
    "hansel & gretel: witch hunters": "hansel_and_grettel.jpg",
    "inglourious basterds": "inglourious Basterds.jpg",
    "kingdom of heaven": "kingdom of heaven.jpg",
    "double down": "l'homme de la riviera.jpg", // L'Homme de la Riviera
    "le salaire de la peur": "le salaire de la peur.jfif",
    "les harkis": "les harkis.jfif",
    "me before you": "mebeforeyou.jpg",
    "mission: impossible": "mission impossible.jfif",
    "mood indigo": "mood_indigo.jfif",
    "national treasure: book of secrets": "national treasure.jpg",
    "nobody's children": "nobody's children.jpg",
    "riviera": "riviera.jfif",
    "robin hood": "robinhood2018.jpg",
    "the serpent queen": "serpent queen.jfif",
    "sex and the city": "sex and the city.jpg",
    "sherlock holmes: a game of shadows": "sherlock_holmes.jpg",
    "the sopranos": "sopranos.jfif",
    "that dirty black bag": "that dirty blackbag.jpg",
    "the happening": "the happening.jfif",
    "the new look": "the new look.jpg",
    "the syndicate": "the syndicate.jfif",
    "tomorrow never dies": "tomorrow never dies.jfif",
    "traitor": "traitor.jpg",
    "transformers: revenge of the fallen": "transformers.jpg",
    "transporter: the series": "transporter the series.jpg",
    "wonder woman": "wonderwoman.jpg",
    "the world is not enough": "world is not enough.jfif",
    "zerozerozero": "zerozerozero.jfif"
};

const getPoster = (title: string) => {
    const key = Object.keys(imageMap).find(k => normalize(k) === normalize(title));
    return key ? `/${imageMap[key]}` : undefined;
};

export const projects: Project[] = [
    ...gillesProjectsRaw.map(p => ({
        ...p,
        founder: 'Gilles Castera' as const,
        poster: getPoster(p.title)
    })),
    ...azizProjectsRaw.map(p => ({
        ...p,
        founder: 'Aziz Hamichi' as const,
        poster: getPoster(p.title)
    }))
];
