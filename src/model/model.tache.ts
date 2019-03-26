export class Tache {
  /*
  public nom: string;
  public description: string;
  public dateCreation: Date;
  public dateExpiration: Date;*/

  //déclarer les attributs avec les valeurs par défaut
  /*
  public nom: string = "";
  public description: string = "";
  public dateCreation: Date = null;
  public dateExpiration: Date = null;*/

  // Déclaration avec seul un constructeur
  /*
  constructor(
    public nom: string
    public description: string
    public dateCreation: Date
    public dateExpiration: Date
  ){}*/

   // Déclaration avec seul un constructeur (? vaut dire que cet attribut n'est pas obligatoir)
  /*
  constructor(
    public nom?: string
    public description?: string
    public dateCreation?: Date
    public dateExpiration?: Date
  ){}*/


  // Autre façon de déclarer les attributs avec les valeurs par défaut
  /*
  public nom?: string = "";
  public description?: string = "";
  public dateCreation?: Date = null;
  public dateExpiration?: Date = null;*/

  // Autre façon de déclarer les attributs
  public id?: number;
  public nom?: string;
  public description?: string;
  public dateCreation?: Date = new Date();
  public dateExpiration?: Date;
  public statut?: boolean;

  //Voici plusieurs façons de créer classe avec des attributs
}
