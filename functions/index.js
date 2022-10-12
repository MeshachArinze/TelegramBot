const functions = require("firebase-functions");

const {Telegraf} = require("telegraf");
const apixu = require("apixu");
const apixuClient = new apixu.Apixu({
  apikey: "b4676696af281aab7fbc1e0f2e97e1d0",
});
const bot = new Telegraf("5440756045:AAEyrqh0VJxFu0tHV42eS3WyiDZkVa1yhL8");
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  apixuClient.current("London").then((current) => {
    return response.send(current);
  }).catch((err) => {
    return response.send(err);
  });
});
