import { ui } from "./ui.module.js";
import { details } from "./details.module.js";
export class games{
    constructor(){
        console.log("dispaly games")
        this.getGame("mmorpg")
        $(".navbar .collapse .navbar-nav li a").click( (e)=> {
            $(".active").removeClass("active")
            $(e.target).addClass("active")
            console.log(this)
            this.getGame( $(".active").attr("data-category") )
            console.log($(".active").attr("data-category") )
        })
    }

    async getGame(cat) {
        $("")
        console.log("cat  "+cat)
        this.u = new ui()
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2a6257a4d1msh1406282bbcb0b4bp1b466cjsn459c8c4d9169',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        console.log("dispaly games")
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options)
        let response = await api.json();
            this.u.displayCard(response)
        $(".col-lg-3 .card").click(function () {
            $(".overlay").removeClass("d-none");
            $(".home").addClass("d-none")
            this.det = new details($(this).attr("id"))
            console.log("id"+ $(this).attr("id"))
        })
        console.log("dispaly games")
    }
}





















