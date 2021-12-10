let postsBox = document.querySelector(".posts")
let form = document.querySelector(".form").value


async function getPosts () {
    const response = await fetch('http://localhost:3000/posts')
    const posts = await response.json()
    console.log(posts)   
    
    for(post of posts) {
        postsBox.innerHTML += 
        `
        <h1>Title:<h1> <h2> ${post.title} </h2>
        <h1>Description:<h1> <h3> ${post.description} </h3>
        <br>
        `
    }
}

async function postPosts () {
    let description = document.querySelector(".description").value
    let title = document.querySelector(".title").value
    let data = {
        description,
        title
    }
    console.log(data)
    try {

    const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log(await response.json)

} catch (err) {
    response.json({message: err})
}
// location.reload();
}

// form.addEventListener('submit', function(e) {
//     e.preventDefault()

//     postPosts();
// })

getPosts();

