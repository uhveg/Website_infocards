var item = document.getElementById("contain");

fetch("https://raw.githubusercontent.com/uhveg/Website_infocards/master/static/list_jobs.json")
.then(response => {
    return response.json();
})
.then(jsondata => {
    var id = 0;
    jsondata.forEach(element => {
        item.innerHTML += 
        "<div class=\"card\"> \
                <div class=\"inside_car\"> \
                    <div class=\"img_cont\"> \
                        <div class=\"image\" id=\"" +  element["Title"]+id  + "\"></div> \
                        <h1>" + element["Title"] + "<h1> \
                    </div><div class=\"info\"> " +
                    element["Description"] +
                    "<br><br> \
                    <h3>Indispensable</h3> " +
                    element["Indispensable"] +
                    "<br><br> \
                    <h3>Opcional</h3>" +
                    element["Opcional"] +
                    "<br><br> \
                    <h3>Ubicación</h3>" +
                    element["Ubicacion"] +
                    "<\div><div class=\"buttons_div\"> \
                        <button onclick=\"openFB()\" id=\"FB\"></button> \
                        <button onclick=\"openWA()\" id=\"WA\"></button> \
                    </div> \
                </div> \
            </div>";
        document.getElementById(element["Title"]+id).style.backgroundImage = "url('"+ element["img_url"] +"')"
        id++;
    });
    // console.log(jsondata[0]["img_url"]);
    if(item.scrollWidth > item.clientWidth) {
        document.getElementById("r_arrow").style.visibility = "visible";
    }
})

window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) item.scrollLeft += 100;
    else item.scrollLeft -= 100;
    document.getElementById("r_arrow").style.opacity = "0%";
});

item.addEventListener('scroll', function (event) {
    document.getElementById("r_arrow").style.opacity = "0%";
});



function openWA() {
    link = "https://web.whatsapp.com/send?phone=+523782037823&text=Hola! Me interesa conseguir un trabajo!" // Web
    link = "whatsapp://send?phone=+523782037823&text=Hola! Me interesa conseguir un trabajo!" // Mobile
    window.open(link, "_blank")
}

function openFB() {
    link = "https://web.whatsapp.com/send?phone=+523782037823&text=Hola! Me interesa conseguir un trabajo!" // Web
    link = "whatsapp://send?phone=+523782037823&text=Hola! Me interesa conseguir un trabajo!" // Mobile
    window.open(link, "_blank")
}