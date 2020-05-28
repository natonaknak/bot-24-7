const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'hi') {
 msg.reply('היי');
 }
 });
client.on('message', msg => {
    if (msg.content === 'hello') {
    msg.reply('היי');
}
});
client.on('message', (msg) => {
    if (msg.content === 'היי','moom') {
    if (msg.author.bot) return;
    msg.reply(`hi ${client.user.tag}`);
}
});
client.on('message', msg => {
    if (msg.content ==='הי') {
    msg.reply('היי');
}
});
client.on('message', msg => {
    //if (user==='<@&704412508756115567>'){
    if (msg.content ==='!H') {
    msg.reply(`<@&702899313029808198> <@&704412508756115567> <@&704688169882222593>  he need your help` );
};

    /*if (user) {
        msg.reply('sorry you have no premision!!')
};*/
});
/*.bulkDelete(5)
  .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
  .catch(console.error);
client.on('message', message => {
if (!message.content.startsWith('!') || message.author.bot) return;
    let args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
    const amount = args.join('  '); // Amount of messages which should be deleted
    if (!amount) {return msg.reply('You haven\'t given an amount of messages which should be deleted!')}; // Checks if the `amount` parameter is given
    if (isNaN(amount)) {return msg.reply('The amount parameter isn`t a number!')}; // Checks if the `amount` parameter is a number. If not, the command throws an error
    if (amount > 100) {return msg.reply('You can`t delete more than 100 messages at once!')}; // Checks if the `amount` integer is bigger than 100
    if (amount < 1) {return msg.reply('You have to delete at least 1 message!')}; // Checks if the `amount` integer is smaller than 1
    async(
    await msg.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
        msg.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
    )}))
};*/
client.on('message', message => {
if (!message.content.startsWith('!') || message.author.bot) return;

    let args = message.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
	    	message.channel.send('hi,someone need to help you,not me');
    } else if (command === 'pi') {
    		message.channel.send('pko');
}
	// other commands...
});
client.on('guildMemberAdd',member => {
    const channel = member.guild.channels.find('name','welcome');
    if (!channel) return; 

    channel.send(`hi ${member},nice to see you around!!`)
});

client.login(process.env.BOT_TOKEN);
