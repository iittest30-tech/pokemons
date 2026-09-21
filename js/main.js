const data = [
    {
        name: "Bulbasaur",
        type: ["Grass", "Poison"],
        URL: "http://www.serebii.net/pokemongo/pokemon/001.png",
        multiplers: [1.58]
    },
    {
        name: "Ivysaur",
        type: ["Grass",
          "Poison"],
        URL: "http://www.serebii.net/pokemongo/pokemon/002.png",
        multiplers: [1.2 , 1.6]
    },
    {
        name: "Venusaur",
        type: ["Grass",
          "Poison"],
        URL: "http://www.serebii.net/pokemongo/pokemon/003.png",
        multiplers: [null]
    },
    {
        name: "Charmander",
        type: ["Fire"],
        URL: "http://www.serebii.net/pokemongo/pokemon/004.png",
        multiplers: [1.65]
    },
    {
        name: "Charmeleon",
        type: ["Fire"],
        URL: "http://www.serebii.net/pokemongo/pokemon/005.png",
        multiplers: [1.79]
    }
]
const list = document.querySelector(".list");

for (let i = 0; i < data.length; i++) {
    const item = document.createElement("li");
    const name = document.createElement("p");
    const img = document.createElement("img");
    const multiplers = document.createElement("p");
    name.textContent = data[i].name;
    multiplers.textContent = data[i].multiplers;
    const ul = document.createElement("ul");
    for (let j = 0; j < data[i].type.length; j++) {
        const li = document.createElement("li");
        li.textContent = data[i].type[j];
        

        img.src = data[i].URL;
        ul.append(li);
        ul.append(img);
    }

    item.append(name);
    item.append(ul);
    list.append(item)
}