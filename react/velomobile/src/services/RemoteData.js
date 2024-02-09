export default class RemoteData {
  static url = "http://localhost:3001/velosMobiles";
  /**
   * L'effet global de cette méthode est d'envoyer une requête à un serveur distant, de vérifier si la requête a réussi, d'analyser la réponse au format JSON, de consigner la réponse et de renvoyer les données analysées. Si une étape échoue, il enregistre un message d'erreur.
   * 
   * @returns Promise<{}[]>
   */
  static loadVelosMobiles() {
    return fetch(RemoteData.url)
      .then((response) => {
        console.log(`response.status`, response.status);
        if (response.status == 200) {
          return response.json();
        } else throw new Error("Problème de serveur dans loadVelosMobiles")
      })
      .then((velosMobiles) => {
        console.log(`velosMobiles`, velosMobiles);
        return velosMobiles;
      })
      .catch(error => {
        console.log(`Erreur attrapée : ` + error);
      })
  }
}