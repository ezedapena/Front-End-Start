const members = data.results[0].members

const tbody = document.querySelector("tbody")


function functionFilter(){
    tbody.innerHTML = ""
    let check = document.getElementsByClassName("congress");
    for(let i = 0 ; i < check.length ; i++){
        if ( check[i].checked ){
            members.filter(e => e.party == check[i].value).forEach(member =>{

                let row = tbody.insertRow(-1);
                let fullname = member.first_name + " " + ( member.middle_name ||  "" ) + " " + member.last_name
                fullname = (member.url != "" ? `<a href="`+ member.url + `">` + fullname + `</a>` : fullname )
                 
                row.innerHTML = `
                <td> ${fullname}</td>
                <td>${member.party} </td>
                <td> ${member.state}</td>
                <td>${member.seniority} </td>
                <td> ${member.votes_with_party_pct}\%\</td>
                `
            })
        }
    }
}
document.getElementById("rep").addEventListener("click",functionFilter)
document.getElementById("dem").addEventListener("click",functionFilter)
document.getElementById("ind").addEventListener("click",functionFilter)
functionFilter()