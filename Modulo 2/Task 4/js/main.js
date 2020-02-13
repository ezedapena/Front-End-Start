var states =[]
// let data
// const tbody = document.querySelector("tbody")

// const select = document.querySelector("select")
const senate = document.querySelector('#senate')
// const collapseButton = document.querySelector("#buttonCollapse")


var aux = ""
const app = new Vue({
    el: '#app',
    data:{
        url : (senate != undefined ) ? "https://api.propublica.org/congress/v1/113/senate/members.json" : "https://api.propublica.org/congress/v1/113/house/members.json",
        init: { 
            method: 'GET',
            headers: {
                "X-API-Key": "4muVhYCCuzr0T6UBB0e6h7cyn589EEJofWWPld1f"
            }
        },
        members:[],
        partys:[],


    },
    created(){
        fetch(this.url,this.init).then(function(res){
            if(res.ok){
                return res.json();
            }else{
                throw new Error(error.status);
            }
        })
        .then(function(json){
            app.members = json.results[0].members
            console.log(app.members)
        })
        .catch(function(error){
            console.log(error)
        })
        app.members.forEach(member =>{
            if ( states.indexOf(member.state) == (-1)){
                states.push(member.state)
            }
            
        })

    },
    methods:{
        toFullname: function(member){
            let fullname = member.first_name + " " + ( member.middle_name ||  "" ) + " " + member.last_name
            return fullname;
        },

    },
    computed:{
        filterMembers(){
            return this.members.filter(e => app.partys.includes(e.party))
        }
    }

})


// async function getData(url , init){
//     await 
//     members = data.results[0].members
//     members.forEach(member =>{
//         if ( states.indexOf(member.state) == (-1)){
//             states.push(member.state)
//         }
        
//     })
    
//     for(let i= 0; i<states.length; i++)
//     select.innerHTML +=`<option value="${states[i]}">${states[i]}</option>`
    
//     functionFilter()
    
    
//     //FIN ASYNC
// }
// getData( url, init);




// function functionFilter(){
//     tbody.innerHTML = ""
//     let check = document.getElementsByClassName("congress");
//     for(let i = 0 ; i < check.length ; i++){
//         if(check[i].checked){
//             if ( select.value == "All"){
//                 aux = members.filter(e => e.party == check[i].value)
//             }else{
//                 aux = members.filter(e => e.party == check[i].value && e.state == select.value)
//             }
//             aux.forEach(member => {
                
//                 let row = tbody.insertRow(-1);
//                 let fullname = member.first_name + " " + ( member.middle_name ||  "" ) + " " + member.last_name
//                 fullname = (member.url != "" ? `<a href="`+ member.url + `">` + fullname + `</a>` : fullname )
                
//                 row.innerHTML = `
//                 <td> ${fullname}</td>
//                 <td>${member.party} </td>
//                 <td> ${member.state}</td>
//                 <td>${member.seniority} </td>
//                 <td> ${member.votes_with_party_pct}\%\</td>
//                 `
                
                
//             })
            
//         }
//     }
// }

// function collapse(){
//     collapseButton.innerText == "Read more" ? collapseButton.innerText = "Read less" : collapseButton.innerText = "Read more"
// }
// if(document.getElementById("index")){
//     collapseButton.addEventListener("click", collapse)
    
// }else{
//     document.getElementById("rep").addEventListener("click",functionFilter)
//     document.getElementById("dem").addEventListener("click",functionFilter)
//     document.getElementById("ind").addEventListener("click",functionFilter)
//     document.getElementById("select").addEventListener("change", functionFilter)
// }
