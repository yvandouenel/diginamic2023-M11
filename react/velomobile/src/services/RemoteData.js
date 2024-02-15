export default class RemoteData {
  static url = "http://localhost:3001/";
  /**
   * L'effet global de cette méthode est d'envoyer une requête à un serveur distant, 
   * de vérifier si la requête a réussi, d'analyser la réponse au format JSON, 
   * de l'afficher dans la console  et de la renvoyer. Si une étape échoue, 
   * il affiche un message d'erreur.
   * @returns Promise<{}[]>
   */
  static loadVelosMobiles() {
    return fetch(RemoteData.url + "velosMobiles")
      .then((response) => {
        console.log(`response.status`, response.status);
        if (response.status == 200) {
          return response.json();
        } else throw new Error("Problème de serveur dans loadVelosMobiles. Statut de l'erreur : " + response.status)
      })
      .then((velosMobiles) => {
        console.log(`velosMobiles`, velosMobiles);
        return velosMobiles;
      })
  }
  /**
   * Supprime un vélomobile en bd via une requête http utilisant le verbe DELETE
   * @param {*} id 
   * @returns Promise<deleted Object veloMobile>
   */
  static deleteVeloMobile(id) {
    return fetch(`${RemoteData.url}velosMobiles/${id}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE",
      })
      .then((response) => {
        console.log(`response.status`, response.status);
        if (response.status == 200) {
          return response.json();
        } else throw new Error("Problème de serveur dans deleteVeloMobile. Statut de l'erreur : " + response.status)
      })
      .then((veloMobile) => {
        console.log(`veloMobile supprimé : `, veloMobile);
        return veloMobile;
      })
  }
  /**
   * Execute une requête HTTP avec le verbe GET
   * afin de récupérer la liste des utilisateurs 
   * @returns Promise<Users[]>
   */
  static loadUsers() {
    return fetch(RemoteData.url + "users")
      .then((response) => {
        console.log(`response.status`, response.status);
        if (response.status == 200) {
          return response.json();
        } else throw new Error("Problème de serveur dans loadUsers. Statut de l'erreur : " + response.status)
      })
      .then((users) => {
        console.log(`users`, users);
        return users;
      })
  }
  /**
   * Permet de savoir si l'utilisateur est connecté (login et pwd ok)
   * @param {String} login 
   * @param {String} pwd 
   * @returns Promise<boolean>
   */
  static isLogged(login, pwd) {
    console.log(`DAns isLogged`, login, pwd);
    return RemoteData.loadUsers()
      .then((users) => {
        let isLogged = false;
        for (let i = 0; i < users.length; i++) {
          if (login === users[i].login && pwd === users[i].pwd) {
            return true;
          }
        }
        return false;
      })
  }
  /**
   * 
   * @param {*} newVeloMobile 
   * @returns 
   */
  static postVeloMobile(newVeloMobile) {
    return fetch(`${RemoteData.url}velosMobiles/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(newVeloMobile)
    })
      .then((response) => {
        console.log(`response.status de post VeloMobile`, response.status);
        if (response.status !== 201) throw new Error("Erreur " + response.status)
        return response.json();
      })
      .then(data => { console.log(`data reçue après le post : `, data); })

  }
}