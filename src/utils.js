
const COLORS = [
    "green",
    "pink",
    "blue",
    "purple",
    "red",
    "orange",
    "yellow",
    "gold",
    "lightgray",
    "violet",
    "lightblue"
]


export const randomColor = () => {
    let randomNum = Math.floor(Math.random() * 11)
    return COLORS[randomNum]
}

