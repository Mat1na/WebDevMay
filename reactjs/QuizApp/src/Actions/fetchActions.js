let base_url="https://opentdb.com/api.php?amount=50&category=18"

const APIFetch={
    getAllData:async function(){
        let response = await fetch(`${base_url}`)
        let data = await response.json()
        return data
    
},


}