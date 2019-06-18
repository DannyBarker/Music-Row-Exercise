let jumpStop = []
let chatten = []
let polar = []



const createObj = (obj) => {
    let artist = {
        name: "",
        genre: "",
        age: "",
    }
    artist.name = obj[0]
    artist.genre = obj[1]
    artist.age = obj[2]

    return artist
}

const addToArr = (name, genre, age) => {
    let artistArr =[name, genre, age]
    if (genre == 'Funk' || genre == 'Rap') {
        let artistObj = createObj(artistArr)
        jumpStop.push(artistObj)
        console.log('JumpStop:', jumpstop);
    } 
    if (genre == 'Country' || genre == 'Bluegrass') {
        let artistObj = createObj(artistArr)
        chatten.push(artistObj)
        console.log('Chatten Records:', chatten);
    }
    if (genre == 'Pop') {
        let artistObj = createObj(artistArr)
        polar.push(artistObj)
        console.log('Polar Records:', polar);
    }
}

addToArr('Bruce Atikins', 'Country', 23)
addToArr('Jensen Brown', 'Pop', 20)

