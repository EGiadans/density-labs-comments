async function create(comment) {
    return await fetch('/comments', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(comment)})
    .then(res => res.json())
}
 
async function remove(id) {
    return await fetch(`/comments/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    })
    .then(res => res.json())
}
 
async function update(id, message) {
    return await fetch(`/comments/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({message})
    })
    .then(res => res.json())
}

async function getAll() {
    return await fetch('/comments')
    .then((res) => res.json())
}

export { getAll, create, remove, update }