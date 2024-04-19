overLay()

let theImages = [`/images/rock.png`, `/images/leaf.png`, `/images/scissor.png`]
let theElements = [`Rock`, `Paper`, `Secissors`]
let playersNames = ["Emily", "Viki", "Sophia", "Ahmad", "Olivia", "Mary", "Ava"]

let ramdomName = Math.floor(Math.random() * playersNames.length)

let theChooseIs

let points1 = 0
let points2 = 0

let theName = document.getElementById("the-name")

document.getElementById("the-button").addEventListener("click", () => {

    theName.value === null || theName.value === "" ? theName = `Player` : theName = theName.value
    
    document.querySelector(".overLay").remove()

    mainRoom(theName)

})

function mainRoom(myName) {

    let mainBox = document.createElement("div")
    mainBox.className = `main-box`

    let player1 = document.createElement("h1")
    player1.className = `player one`

    let player1Points = document.createElement("span")

    let inplayer1Points = document.createTextNode(points1)

    player1Points.appendChild(inplayer1Points)

    let inplayer1 = document.createTextNode(`${myName} `)

    player1.append(inplayer1, player1Points)

    let player2 = document.createElement("h1")
    player2.className = `player two`

    let player2Points = document.createElement("span")

    let inplayer2Points = document.createTextNode(points2)

    player2Points.appendChild(inplayer2Points)

    let inplayer2 = document.createTextNode(`${playersNames[ramdomName]} `)

    player2.append(inplayer2, player2Points)

    let leftSide = document.createElement("div")
    leftSide.className = `left-box both`

    let rightSide = document.createElement("div")
    rightSide.className = `right-box both`

    inTheSide(leftSide)
    inTheSide(rightSide)

    mainBox.append(player1, player2, leftSide, rightSide)

    document.querySelector(".container").append(mainBox, myInformation())

    document.querySelectorAll(".left-box div").forEach((e, i) => {
    
        e.addEventListener("click", () => {
    
            e.classList.add(`choose`)
    
            document.querySelectorAll(".left-box div").forEach((c) => {c.classList.contains(`choose`) ? null : c.remove()})

            theChooseIs = e.children[0]

            systemChoice(rightSide, theChooseIs)
    
        })
    
    })

}

function inTheSide(side) {

    for (let i = 0; i < 3; i++) {
        
        let div = document.createElement("div")
        div.className = `box`

        let img = document.createElement("img")
        img.src = theImages[i]
        img.alt = theElements[i]

        div.appendChild(img)

        side.appendChild(div)

    }

}

function systemChoice(rightSide, myChoose) {

    let arrayOfElements = [...rightSide.children] // Or Array.from(rightSide.children)

    let count = 0

    let stopInterval = setInterval(highlights, 500)

    function highlights() {

        arrayOfElements.forEach((e, i) => {e.classList.toggle("highlights")})

        count += 1000

        if (count == 6000) {
            
            let ramdomNumber = Math.floor(Math.random() * arrayOfElements.length)
            
            arrayOfElements[ramdomNumber].classList.add(`choose`)

            arrayOfElements.forEach((c, i) => {c.classList.contains(`choose`) ? null : c.remove()})

            document.querySelectorAll(".right-box div").forEach((e, i) => {

                let elements = e.children

                for (const img of elements) {
                    // The logic of game
                    if (
                        myChoose.alt == theElements[0] && img.alt == theElements[2] ||
                        myChoose.alt == theElements[1] && img.alt == theElements[0] ||
                        myChoose.alt == theElements[2] && img.alt == theElements[1]
                    ) {

                        points1++
                        document.querySelector(".one span").textContent = points1

                    } else if (
                        img.alt == theElements[0] && myChoose.alt == theElements[2] ||
                        img.alt == theElements[1] && myChoose.alt == theElements[0] ||
                        img.alt == theElements[2] && myChoose.alt == theElements[1]
                    ) {

                        points2++
                        document.querySelector(".two span").textContent = points2

                    }

                }

            })

            setTimeout(() => {document.querySelector(".container").innerHTML = ``, mainRoom(theName)}, 2000)
            
            clearInterval(stopInterval)
        }
    }

}

function overLay() {

    let overLayBox = document.createElement("div")
    overLayBox.setAttribute("class", `overLay`)

    let box = document.createElement("div")
    box.className = `box`

    let h3 = document.createElement("h3")
    let inH3 = document.createTextNode(`The name`)
    h3.appendChild(inH3)

    let inputName = document.createElement("input")
    inputName.type = `text`
    inputName.id = `the-name`
    inputName.placeholder = `Enter your name`

    let inputBtn = document.createElement("input")
    inputBtn.type = `button`
    inputBtn.id = `the-button`
    inputBtn.value = `Enter`

    box.append(h3, inputName, inputBtn)

    overLayBox.appendChild(box)

    document.querySelector(".container").appendChild(overLayBox)

}

function myInformation(myInfo) {

    myInfo = document.createElement("div")
    myInfo.className = `my-info`

    let xLink = document.createElement("a")
    xLink.href = "https://twitter.com/AhmadAlhadidi95"
    xLink.target = "_blank"
    xLink.rel = "noopener noreferrer"
    xLink.title = "Visit my Twitter (X)"

    let xIcon = document.createElement("i")
    xIcon.className = `fa-brands fa-x-twitter`

    xLink.appendChild(xIcon)

    let myLogo = document.createElement("img")
    myLogo.src = `/images/My-sign.png`
    myLogo.alt = `My-sign`
    myLogo.style.width = `50px`

    let githubLink = document.createElement("a")
    githubLink.href = "https://github.com/AhmadAlhadidi95"
    githubLink.target = "_blank"
    githubLink.rel = "noopener noreferrer"
    githubLink.title = "Visit my Github"

    let githubIcon = document.createElement("i")
    githubIcon.className = `fa-brands fa-github`

    githubLink.appendChild(githubIcon)

    myInfo.append(xLink, myLogo, githubLink)

    return myInfo

}