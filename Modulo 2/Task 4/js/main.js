var states =[]
const senate = document.querySelector('#senate')


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
        parties:[],
        states:[],
        selected: "All",
        
        
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
            app.statesFilter()  
            
        })
        
        
        //catch va al final del created
        .catch(function(error){
            console.log(error)
        })
    },
    methods:{
        statesFilter: function(){
            app.members.forEach(member =>{
                if( app.parties.indexOf(member.party) == (-1)){
                    app.parties.push(member.party)
                }
                if ( app.states.indexOf(member.state) == (-1)){
                    app.states.push(member.state)
                }
            })
            
        },
        
    },
    computed:{
        filterMembers(){

            if ( this.selected == "All"){
                return this.members.filter(e => app.parties.includes(e.party))
            }else{
                return this.members.filter(e => app.parties.includes(e.party) && e.state == this.selected)
            }
           
        }
    }
    
})
