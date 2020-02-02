const members = data.results[0].members

const tbody = document.querySelector("tbody")

const select = document.querySelector("select")
var aux = ""
var states =[]
members.forEach(member =>{
    if ( states.indexOf(member.state) == (-1)){
       states.push(member.state)
    }

         })

    for(let i= 0; i<states.length; i++)
     select.innerHTML +=`<option value="${states[i]}">${states[i]}</option>`

function functionFilter(){
    tbody.innerHTML = ""
    let check = document.getElementsByClassName("congress");
    for(let i = 0 ; i < check.length ; i++){
        if(check[i].checked){
            if ( select.value == "All"){
                aux = members.filter(e => e.party == check[i].value)
            }else{
                aux = members.filter(e => e.party == check[i].value && e.state == select.value)
            }
            aux.forEach(member => {

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
document.getElementById("select").addEventListener("change", functionFilter)
functionFilter()


 