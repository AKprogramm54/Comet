const Discord = require("discord.js"); // on crée une variable Discord qui contient la librairie discord.js
const Token = require("./token.js"); // on crée une variable token qui contient le token du bot, situé dans le fichier token.js
const Client = new Discord.Client(); // on crée un nouveau bot Discord
const Prefix = ("co!");

Client.on("ready", () => { // dès que le bot est prêt
    Client.user.setStatus("idle"); // statut du bot
    Client.user.setActivity("mon créa le bg", { type: "WATCHING" }); // statut de jeu du bot (affichera "Regarde [statut]" sur Discord)
    let date = new Date(); // Déclare une nouvelle variable content la date actuelle
    console.log(`Je suis prêt - je m'appelle ${Client.user.tag} et je suis lancé à la date ${date.toLocaleString()}`); // insère dans la console que le bot est lancé avec son nom et la date
}); // fin du premier évènement

Client.on("message", async message => { // dès que le bot reçoit un message
    if (message.author.bot) { // si l'auteur du message est un bot
        return; // alors on ignore ce message
    }

    if (message.content.startsWith(Prefix)) { // si le message commence par le préfixe du bot, alors...
        switch (message.content) { // en fonction du contenu du message reçu par le bot
            case `${Prefix}message`: // si le contenu du message est "message 1"
                message.reply("message 1 !"); // alors on répond par "message 1 !"
                break; // et on passe à un autre message

            case `${Prefix}ping`:
                const msg = await message.channel.send("Ping?");
                msg.edit(`Latence de l'API Discord: ${msg.createdTimestamp - message.createdTimestamp} ms`);
                break;


            default: // si ça ne correspond à aucun des cas au dessus
                message.reply("Je n'ai pas compris ce que tu veux dire");
                break;
        }
    }
});

Client.login(Token.token); // on se connecte au bot grâce à son token
