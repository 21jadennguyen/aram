import React, { useState } from "react";

const championList = [
  "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Ambessa", "Amumu", "Anivia", "Annie", "Aphelios",
  "Ashe", "Aurelion Sol", "Aurora", "Azir", "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Briar",
  "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko",
  "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar",
  "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Ivern", "Janna",
  "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'Sa", "Kalista", "Karma", "Karthus",
  "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc",
  "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai",
  "Master Yi", "Mel", "Milio", "Miss Fortune", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus",
  "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy",
  "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven",
  "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed",
  "Sion", "Sivir", "Skarner", "Smolder", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah",
  "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr",
  "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear",
  "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri",
  "Ziggs", "Zilean", "Zoe", "Zyra"
];

const RandomChampSelector = () => {
  const [numChamps, setNumChamps] = useState(1);
  const [selectedChamps, setSelectedChamps] = useState([]);

  const getRandomChamps = () => {
    const shuffled = [...championList].sort(() => 0.5 - Math.random());
    setSelectedChamps(shuffled.slice(0, numChamps));
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">League Champion Randomizer</h1>
      <input
        type="number"
        value={numChamps}
        onChange={(e) => setNumChamps(Math.min(Math.max(0, e.target.value), championList.length))}
        className="mb-2 p-2 border rounded"
        placeholder="Number of Champions"
      />
      <button onClick={getRandomChamps} className="mb-4 p-2 bg-blue-500 text-white rounded">Randomize</button>
      <div className="grid grid-cols-2 gap-2">
        Team 1:
        {selectedChamps.slice(0, Math.ceil(selectedChamps.length / 2)).map((champ) => (
          <div key={champ} className="p-4 border rounded text-center font-medium">
            {champ}
          </div>
        ))}
        <hr className="col-span-2 border-t-2 my-2" />
        Team 2:
        {selectedChamps.slice(Math.ceil(selectedChamps.length / 2)).map((champ) => (
          <div key={champ} className="p-4 border rounded text-center font-medium">
            {champ}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomChampSelector;
