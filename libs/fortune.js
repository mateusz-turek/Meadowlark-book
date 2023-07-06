const fortunes = [
    "Some funny 1",
    "Some funny 2",
    "Some funny 3",
    "Some funny 4",
    "Some funny 5",
    "Some funny 6",
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()* fortunes.length)
    return fortunes[idx]
}