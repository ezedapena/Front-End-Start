let vm

start()

async function start(){
    await import('./components/app.js')

    vm = new Vue({
        el: '#wrapper',
        data: {
            //FIREBASE URL
            url: "",
            init: {
                method: 'GET',
            },
            students: [],
            teams: [],
        },
        created(){
            fetch(this.url, this.init)
            .then(function(res){
                if(res.ok){
                    return res.json()
                } else{
                    throw new Error(res.status)
                }
            })
            .then(function(json){
                vm.students = json.students
                vm.teams = vm.getKeyValue(json.students,"team")
            })
            .catch(function(error){
                console.log(error)
            })
        },
    })
}
