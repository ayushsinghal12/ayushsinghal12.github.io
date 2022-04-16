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
        //document.getElementById("name").style.color = "#42C2FF";

        //description
        //document.getElementById("description").style.color = "#30475E"
        //document.getElementById("lenk").style.color = "navy"

        //footer images
        document.getElementById("discordsocial").src = "discord light.png";
        document.getElementById("githubsocial").src = "github light.png";
        document.getElementById("mailsocial").src = "mail light.png";

        document.getElementById("a").style.color = "#42C2FF"
        document.getElementsByClassName("heading")[0].style.color = "#30475e"
        document.getElementsByClassName("heading")[1].style.color = "#30475e"


        for (let index = 0; index < document.querySelectorAll(".projectname a").length; index++) {
            document.querySelectorAll(".projectname a")[index].style.color = "navy"
        }
        document.getElementById("partition").style.background = "black";
        document.getElementsByTagName("hr")[0].style.background = "black"
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
        //document.getElementById("name").style.color = "orange";

        //description
        //document.getElementById("description").style.color = "#F05454"
        //document.getElementById("lenk").style.color = "#ff9a9a"

        //footer images

        document.getElementById("a").style.color = "orange"

        document.getElementById("discordsocial").src = "discord dark.png";
        document.getElementById("githubsocial").src = "github dark.png";
        document.getElementById("mailsocial").src = "mail dark.png";

        document.getElementById("a").style.color = "#orange"
        document.getElementsByClassName("heading")[0].style.color = "#F05454"
        document.getElementsByClassName("heading")[1].style.color = "#F05454"

        for (let index = 0; index < document.querySelectorAll(".projectname a").length; index++) {
            document.querySelectorAll(".projectname a")[index].style.color = "pink"
        }

        document.getElementById("partition").style.background = "white";
        document.getElementsByTagName("hr")[0].style.background = "white"
    }
}