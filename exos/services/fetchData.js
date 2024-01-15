export default function loadTasks() {
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