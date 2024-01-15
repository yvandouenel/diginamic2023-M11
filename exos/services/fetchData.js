export function loadTasks() {
  return fetch("http://localhost:3001/tasks")
  .then((response)=>{
    console.log(`response.status`, response.status);
    if(response.status) return response.json();
  })
  .then((tasks)=>{
    return tasks;
  })
  .catch(error => {
    console.error("Erreur attrapée dans loadTask : " + error)
  })
}
export function addTask(task) {
  fetch("http://localhost:3001/tasks",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(task)
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
}