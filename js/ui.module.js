import { details } from "./details.module.js";

export class ui{
    displayCard(g) {
        // div/////////////////////////////////////////
        $(".home .container .row").html("")
        for (let i = 0; i< g.length; i++) {
            let Dcol =  document.createElement("div")
            $(Dcol).addClass("col-lg-3");
            let card = document.createElement("div")
            $(card).addClass("card bg-dark shadow-lg h-100")
            $(card).attr("id",g[i].id)
            $(card).css("font-size","13px")
            let head = document.createElement("div")
            $(head).addClass("headImg");
            let body =  document.createElement("div")
            $(body).addClass("cBody mt-2 px-3 py-1 text-center");
            let bodyC =  document.createElement("div")
            $(bodyC).addClass("d-flex justify-content-between");
            let foot =  document.createElement("div")
            $(foot).addClass("card-footer d-flex justify-content-between");
            // end div ////////////////////////////////////////////
    
            let img =  document.createElement("img")
            let h6 = document.createElement("h6")
            let btn = document.createElement("button")
            let p = document.createElement("p")
            let span1 = document.createElement("span")
            let span2 = document.createElement("span")
            $(span1).addClass("cf px-2 py-1 rounded-2")
            $(span2).addClass("cf px-2 py-1 rounded-2")
            $(p).addClass("text-white-50")
            $(btn).addClass("btn cbtn text-white float-end bg-primary")
            $(img).addClass("w-100");
            //// fill content ////////////////////////
            $(img).attr("src", g[i].thumbnail)
            $(h6).html(g[i].title)
            $(p).html(g[i].short_description)
            $(btn).html("Free")
            $(span1).html(g[i].genre)
            $(span2).html(g[i].platform)
    
            $(head).append(img)
            $(bodyC).append(h6)
            $(bodyC).append(btn)
            $(body).append(bodyC)
            $(body).append(p)
            $(foot).append(span1)
            $(foot).append(span2)
            $(card).append(head)
            $(card).append(body)
            $(card).append(foot)
            $(Dcol).append(card)
            $(".home .container .row").append(Dcol)
            console.log("dispaly ui")
        }
        
    }

    disDetails(res) {
        $(".img").attr("src",res.thumbnail);
        $(".hr").html(res.title)
        $(".cat").html(res.genre)
        $(".plat").html(res.platform);
        $(".stat").html(res.status);
        $(".dis").html(res.description)
        $(".btn").click(function () {
            window.open(res.freetogame_profile_url)
        })
    }
}