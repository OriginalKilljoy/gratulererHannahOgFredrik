// updateView()

// function updateView(){
//     document.getElementById('app').innerHTML = /*HTML*/`
    
//     <div id="frontPage" class="frontPage">Jasså? Dere fant skatten? Ja da gjenstår det bare å skrive inn den hemmelige koden nedenfor og løs mysteriet.
//     <br> Det skal ikke være mellomrom, og kun små bokstaver
//     <br>
//     <input onchange="changePage(this.value)">
//     </div>
//     `
// }

// function prizePage(){
//     document.getElementById('frontPage').innerHTML = /*HTML*/`
//     <div>Gratulerer!! Dere får 200 norske kroner som går mot bryllupsreisen. Send Julie den Snåle en melding om at dere har knukket koden, så blir det vippset snarest!</div>
//     `
// }

// //CONTROLLER

// function changePage(){
//     if(input = "gratulerermedbryllupsdagentilderåestefolkaiverden"){
//         prizePage()
// }
// }

updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="frontPage" class="frontPage">
        <div class="text1">Jasså? Dere fant skatten? Ja da gjenstår det bare å skrive inn den hemmelige koden nedenfor og løs mysteriet</div>
        <br>
         <div class="text2">Det skal ikke være mellomrom, og kun små bokstaver</div>
         <br>
         <div class="text3">Lykke til</div>
         <br>
        <input onchange="changePage(this.value)"/>    
    </div>
    `
}

function prizePage(){
    document.getElementById('frontPage').innerHTML = /*HTML*/`
    <div class="text1">Gratulerer, dere løste gåten!!</div><br>
    <div class="text2">Dere får 200 norske kroner som går mot bryllupsreisen. Send Julie den Snåle en melding om at dere har knukket koden, så blir det vippset snarest!</div><br>
    <div class="text3">(Authors note fra etter bryllupsreisen. Siden Julie den Snåle er så snål at hun glemte gaven i Sandefjord, gir ikke gaven så mye mening lenger.</div>
    <div class="text3">Så i stedet for at det brukes på bryllupsreisen, så kan dere kjøpe en liten treat ellerno idk hehehe LOVE YOU)</div>
    `
}

function changePage(){
    if(input = "gratulerermedbryllupsdagentilderåestefolkaiverden"){
        prizePage()
    }
}

