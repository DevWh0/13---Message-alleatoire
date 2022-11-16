/*const messageBox = ['TROUVER LE TRÉSOR : Il y a 20ans, des voleurs ont fait irruption dans votre maison et ont volé l’or de votre pére. Ils ont été capturés mais le butin n’a jamais été retrouvé.', 'CHASSE AUX FANTÔMES : des apparitions de fantômes ont été rapportées un peu partout dans la ville. Allez observer les lieux pour trouver des indices.', 'PYRAMIDES : les runes anciennes montrent la voie vers le trésor d’une civilisation perdue. Partez explorer des pyramides découvertes!', 'AGENT SECRET : Pour accepter cette mission, ouvrez l’enveloppe devant vous et suivez attentivement les instructions.', 'MYSTÈRE ARCHÉOLOGIQUE : en utilisant une statue ancienne et des indices cachés, découvrez ce qui est arrivé au dernier des archéologues disparus', 'CHEVALIERS DE LA TABLE RONDE : si vous pouvez établir le dernier lieu de repos du chevalier disparu, vous résoudrez une énigme qui a intrigué des générations.'];*/

const messageRandom = () => {
    let messageBox = {
        sujet: ['Vous et votre femme ', 'Votre ami et vous ', 'Votre ennemi et vous ','votre groupe'],
        verbe: ['doivent sauver ', 'doivent tuer ', 'doivent capturer ', 'doivent espionner'],
        cod: ['le quartier général.', 'le répére enemi.', "l'agent Carl michael", 'Mother'],
    }
    let message = [];
    let i = Math.floor(Math.random() * 3);
    message.push(messageBox.sujet[i], messageBox.verbe[i], messageBox.cod[i]);
    message = message.join('');
    return message;
}

console.log(messageRandom());