const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
هلااخي
متاكد انك ما تريد ترد  خاص بس امتمنى انك تدخل
نقصنا كثير اعضاء فا بليز ادخل
:heart:
`)
}).catch(console.error)

})
 

client.login(process.env.BOT_TOKEN);
