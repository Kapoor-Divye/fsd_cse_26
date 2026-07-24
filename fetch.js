async function loadUser(username) {
    try {
        const url = `https://api.github.com/users/${username}`
        fetch(url)
        const response = await fetch(url)
        const data = await response.json()
        
        const {name, bio, avatar_url} = data
        document.getElementById("name").innerHTML = name
        document.getElementById("bio").innerHTML = bio
        document.getElementById("avatar").src = avatar_url
    }
    catch(err) {
        console.log(err)
    }
}

loadUser("Kapoor-Divye")