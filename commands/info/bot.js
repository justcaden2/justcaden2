const { MessageEmbed } = require("discord.js");

module.exports = {
  config: {
    name: "bot",
    description: "Displays invite and support server",
    usage: " ",
    noalias: "No Aliases",
    category: "info",
    accessableby: "everyone"
  },
  run: async (bot, message, args) => {
    message.channel.send("**Loading...**").then(m => {
      let ping = m.createdTimestamp - message.createdTimestamp;
      const embed = new MessageEmbed()
        .setColor("RED")
        .setDescription(
          `🐐 **|** **[Invite Aries](https://discord.com/api/oauth2/authorize?client_id=799784473524305982&permissions=8&scope=bot)**\n\n 🐐 **|** **[Support Server](https://discord.gg/TETb8u9aft)**`
        );
      message.channel.send(embed);
      m.delete();
    });
  }
};
