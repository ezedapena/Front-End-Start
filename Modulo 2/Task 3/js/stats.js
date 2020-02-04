const members = data.results[0].members
const tableMost = document.querySelector("#tableMost")
const tableLeast = document.querySelector("#tableLeast")
var j = 0
var stats = {
    total : members.length ,
    democrats : 0 ,
    republicans : 0 ,
    independents : 0 ,
    leastLoyal : [],
    mostLoyal : [],
    mostEngaged : [],
    leastEngaged : [],
    
}

let engages = members.slice().sort(function (a, b) {
    (a.missed_votes_pct > 0 && b.missed_votes_pct > 0) ?  a.missed_votes_pct - b.missed_votes_pct : null ;
  });

 let loyals = members.slice().sort(function (a, b) {
    (a.votes_with_party_pct > 0 && b.votes_with_party_pct > 0) ? a.votes_with_party_pct - b.votes_with_party_pct : null ;
  });

function pushArray10Percent(array , pushedArray , prop){
    let j = 0
    do{
        pushedArray.push(array[j]);
        j++
    }while( j < (array.length * 0.1 ) || array[j][prop] == array[j-1][prop] )

}

pushArray10Percent(engages , stats.mostEngaged ,"missed_votes_pct" );
engages.reverse();
pushArray10Percent(engages , stats.leastEngaged ,"missed_votes_pct" );
pushArray10Percent( loyals , stats.mostLoyal , "votes_with_party_pct");
loyals.reverse();
pushArray10Percent( loyals , stats.mostLoyal , "votes_with_party_pct");


function innerTable(tableId , pushedArray , votes , pct){
    pushedArray.array.forEach(member => {
        let row = tbody.insertRow(-1);
        let fullname = member.first_name + " " + ( member.middle_name ||  "" ) + " " + member.last_name
        fullname = (member.url != "" ? `<a href="`+ member.url + `">` + fullname + `</a>` : fullname )
        row.innerHTML = `
                <td> ${fullname}</td>
                <td>${member.votes} </td>
                <td> ${member.pct}\%\</td>`
    });
}

innerTable(tableMost, engages , "missed_votes","missed_votes_pct" )