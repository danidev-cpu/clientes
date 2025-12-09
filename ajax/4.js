fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }
    return response.json()
  })

  .then((name) => {
    const userList = document.getElementById('userList')

    data.forEach((user) => {
      const listItem = document.createElement('li')
      listItem.textContent = `${user.name} - ${user.email}`
      userList.appendChild(listItem)
    })
  })
  .then((job) => {
    const userList = document.getElementById('userList')

    data.forEach((user) => {
      const listItem = document.createElement('li')
      listItem.textContent = `${user.name} - ${user.email}`
      userList.appendChild(listItem)
    })
  })
  .catch((error) => {
    console.log('Error al cargar los datos', error)
  })
