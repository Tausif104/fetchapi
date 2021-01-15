document.getElementById('getText').addEventListener('click', getText)
document.getElementById('getUsers').addEventListener('click', getUsers)
document.getElementById('getPosts').addEventListener('click', getPosts)

// get text
function getText() {
    fetch('sample.txt').then((res) =>
        res.text().then((data) => {
            document.getElementById('output').innerHTML = data
        })
    )
}

// get users
function getUsers() {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>Users</h2>'

            data.forEach((user) => {
                output += `
                    <ul>
                        <li>${user.id}</li>
                        <li>${user.name}</li>
                        <li>${user.email}</li>
                    </ul>
                `
            })
            document.getElementById('output').innerHTML = output
        })
}

// from externel api
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>Json data from external api</h2>'
            data.forEach((post) => {
                output += `
                    <div class='post-item'>
                        <h3>${post.id}</h3>
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>
                `
            })

            document.getElementById('output').innerHTML = output
        })
}
