export default class RemoteData {
  static url = "http://localhost:3001/velosMobilesss";
  /**
   * L'effet global de cette méthode est d'envoyer une requête à un serveur distant, de vérifier si la requête a réussi, d'analyser la réponse au format JSON, de l'afficher dans la console  et de la renvoyer. Si une étape échoue, il affiche un message d'erreur.
   * 
   * @returns Promise<{}[]>
   */
  static loadVelosMobiles() {
    return fetch(RemoteData.url)
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
}