class RCBPlayer{

    constructor(
        name,
        directorName,
        heroName,
        heroineName,
        producerName){
    console.log("creating RCBPlayer copy");
    this.name = name;
    this.directorName= directorName;
    this.heroName= heroName;
    this.heroineName= heroineName;
    this.producerName= producerName;
    console.log(
        name,
        directorName,
        heroName,
        heroineName,
        producerName);
    }
}
export default RCBPlayer;