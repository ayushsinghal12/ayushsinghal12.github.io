var lighttheme = false;
var sidebarimgs = document.querySelectorAll("#breadcrumbs ul li a img")
var footerimgglow = document.querySelectorAll("#footer ul li a img");
// var navbarullia = document.querySelectorAll("#navbar ul li a")

function changetheme() {
    lighttheme = !lighttheme
    if (lighttheme) {
        //background
        document.body.style.background = "#EFFFFD"

        //changing between sun and moon image
        document.getElementById("changetheme").src = "moon logo.png"
            // for (let index = 0; index < sidebarimgs.length; index++) {
            //     sidebarimgs[index].style.background = "#EFFFFD";
            // }

        //footer image glow
        for (let index = 0; index < footerimgglow.length; index++) {
            footerimgglow[index].addEventListener('mouseenter', () => {
                footerimgglow[index].style.boxShadow = "0px 0px 5px black"
            })
            footerimgglow[index].addEventListener('mouseleave', () => {
                footerimgglow[index].style.boxShadow = "0px 0px 0px black"
            })
        }
        // document.getElementById("navbar").style.background = "#42C2FF"
        // for (let index = 0; index < navbarullia.length; index++) {
        //     navbarullia[index].style.background = "#42C2FF"
        //     navbarullia[index].addEventListener('mouseenter', () => {
        //         navbarullia[index].style.background = "#42C2FF"
        //     })
        //     navbarullia[index].addEventListener('mouseleave', () => {
        //         navbarullia[index].style.background = "#42C2FF"
        //     })
        // }

        //name
        document.getElementById("name").style.color = "#42C2FF";

        //description
        document.getElementById("description").style.color = "#30475E"
        document.getElementById("lenk").style.color = "navy"

        //footer images
        document.getElementById("discordsocial").src = "discord light.png";
        document.getElementById("githubsocial").src = "github light.png";
        document.getElementById("mailsocial").src = "mail light.png";
    } else {
        //background
        document.body.style.background = "#1b2027";
        //changing between sun and moon image
        document.getElementById("changetheme").src = "sun logo.png"
            // for (let index = 0; index < sidebarimgs.length; index++) {
            //     sidebarimgs[index].style.background = "#1b2027";
            // }

        //footer image glow
        for (let index = 0; index < footerimgglow.length; index++) {
            footerimgglow[index].addEventListener('mouseenter', () => {
                footerimgglow[index].style.boxShadow = "0px 0px 5px white"
            })
            footerimgglow[index].addEventListener('mouseleave', () => {
                footerimgglow[index].style.boxShadow = "0px 0px 0px white"
            })
        }
        // document.getElementById("navbar").style.background = "#30475E"
        // for (let index = 0; index < navbarullia.length; index++) {
        //     navbarullia[index].style.background = "#30475E"
        //     navbarullia[index].addEventListener('mouseenter', () => {
        //         navbarullia[index].style.background = "#F05454"
        //     })
        //     navbarullia[index].addEventListener('mouseleave', () => {
        //         navbarullia[index].style.background = "#30475E"
        //     })
        // }

        //name
        document.getElementById("name").style.color = "orange";

        //description
        document.getElementById("description").style.color = "#F05454"
        document.getElementById("lenk").style.color = "#ff9a9a"

        //footer images
        document.getElementById("discordsocial").src = "discord dark.png";
        document.getElementById("githubsocial").src = "github dark.png";
        document.getElementById("mailsocial").src = "mail dark.png";
    }
}