import { ui } from "./ui.module.js";

export class details{
    constructor(id){
        $(".fa-solid").click(function(){
            $(".overlay").addClass("d-none");
            $(".home").removeClass("d-none");
        })
        this.getDetails(id)
    }
    async  getDetails(id) {
        this.u = new ui() 
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2a6257a4d1msh1406282bbcb0b4bp1b466cjsn459c8c4d9169',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        let response = await api.json();
        this.u.disDetails(response)
        console.log("dispaly details")
    }
}







