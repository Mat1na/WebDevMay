let base_url="https://opentdb.com/api.php?amount=10&category=18"

const APIFetch={
    getAllData:async function(){
        let response = await fetch(`${base_url}/results`)
        let data = await response.json()
        return data
    
},


}