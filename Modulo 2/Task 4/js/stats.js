let data 
const tableMost = document.querySelector("#tableMost")
const tableLeast = document.querySelector("#tableLeast")
const loyalId = document.querySelector("#Loyal")
const attendanceId = document.querySelector("#Attendance")
const senate = document.querySelector('#senate')

const url =  (senate != undefined ) ? "https://api.propublica.org/congress/v1/113/senate/members.json" : "https://api.propublica.org/congress/v1/113/house/members.json" ;

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
        stats:[
            {
                party: "Democrats" ,
                numberOfReps: 0 ,
                votedWithParty: 0,

            },
            {
                party: "Republicans" ,
                numberOfReps: 0,
                votedWithParty: 0,
            },
            {
                party: "Independents",
                numberOfReps: 0,
                votedWithParty: 0,
            },
            {
                party: "Total",
                numberOfReps: 0,
                votedWithParty: 0,
            }

        ],
        leastLoyal : [],
        mostLoyal : [],
        mostEngaged : [],
        leastEngaged : [],
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
             app.members = app.members.filter(e => e.total_votes > 0)
            app.glanceMath()
            if (attendanceId){
                let engages = app.members.slice().sort(function (a, b) {
                    return a.missed_votes_pct - b.missed_votes_pct 
                });
                app.pushArray10Percent(engages , app.mostEngaged ,"missed_votes_pct" );
                engages.reverse();
                app.pushArray10Percent(engages , app.leastEngaged ,"missed_votes_pct" );
    
    
            }else{
    
                let loyals = app.members.slice().sort(function (a, b) {
                    return a.votes_with_party_pct - b.votes_with_party_pct
                });
                app.pushArray10Percent( loyals , app.leastLoyal , "votes_with_party_pct");
                loyals.reverse();
               app.pushArray10Percent( loyals , app.mostLoyal , "votes_with_party_pct");
    
            }
            
            
        })
    },
    methods:{
        glanceMath: function(){
            app.members.forEach(member =>
                {
                    if(member.party== "D"){
                        app.stats[0].numberOfReps++
                        app.stats[0].votedWithParty += member.votes_with_party_pct
                    }else if(member.party == "R"){
                        app.stats[1].numberOfReps++
                        app.stats[1].votedWithParty += member.votes_with_party_pct
                    }else{
                        app.stats[2].numberOfReps++
                        app.stats[2].votedWithParty += member.votes_with_party_pct
                    }
                })
                //STATS , PERDON MUCHACHOS NI YO SE QUE HICE... PERO FUNCIONA
                 app.stats[0].votedWithParty > 0  ? app.stats[0].votedWithParty /= app.stats[0].numberOfReps : null 
                 app.stats[1].votedWithParty > 0  ? app.stats[1].votedWithParty /= app.stats[1].numberOfReps : null 
                 app.stats[2].votedWithParty > 0  ? app.stats[2].votedWithParty /= app.stats[2].numberOfReps : null 
                app.stats[3].votedWithParty = (app.stats[0].votedWithParty * app.stats[0].numberOfReps + app.stats[1].votedWithParty * app.stats[1].numberOfReps + app.stats[2].votedWithParty * app.stats[2].numberOfReps)  / app.members.length
                app.stats[3].numberOfReps = app.members.length
        },
        pushArray10Percent: function (array , pushedArray , prop){
            let pct10 = array.length * 0.1
            let i = 0
            do{
                pushedArray.push(array[i]);
                i++
            }while(i< pct10 || array[i][prop] == array[i+1][prop])
            
    
        },
        calc: function(member ){
             return ( member.total_votes * member.votes_with_party_pct / 100 ).toFixed(0) 
          
        }
           
        

    }
})
