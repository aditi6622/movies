
var xhr = new XMLHttpRequest();

function getdata(){
    var srch = document.getElementById("search").value;
    var ur = 'http://www.omdbapi.com/?i=tt3896198&apikey=cbedd9bc&t='+srch;
    xhr.open('GET',ur);
    xhr.send();
    xhr.onload = function() {
        var data = xhr.responseText;
       // console.log(data);
        var jdata = JSON.parse(data);
        console.log(jdata);
        $(".fclass").hide();
        document.body.style.backgroundImage="none";
       
   
        var a =jdata.Poster;
       // console.log(typeof b);
        console.log(a);
        
        $("#resp").append(`<br></br><div id="id_${0}"> \
                    <div class="row jumbotron" >
                        <div class="col-xs-4 col-sm-4" style="text-align:left; margin:0;">
                        <img src=${a} style=" width=100%;"></img>
                        </div>
                        <div class="col-xs-4 col-sm-4" style="text-align:left; margin:0;">
                        <h1>${jdata.Title}</h1>
                        <h4><b>Year:</b> ${jdata.Year}</h4>
                        <h4><b>Rated:</b> ${jdata.Rated}</h4>
                        <h4><b>Genre:</b> ${jdata.Genre}</h4>
                        <h4><b>Director:</b> ${jdata.Director}</h4>
                        <h4><b>Actors:</b> ${jdata.Actors}</h4>
                        <h4><b>Plot:</b> ${jdata.Plot}</h4>
                        <h4><b>imdb Rating:</b> ${jdata.imdbRating}</h4>
                        <h4><b>Metascore:</b> ${jdata.Metascore}</h4>
                        </div>
                        
                    </div>
                </div>`);      
    
    }

}
