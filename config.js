

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://info3bas:<db_password>@cluster0.wcikrgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/qii",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Koodi",
      password: "Koodi",
      host: "193.226.78.187",
      port:  9372,
      secure: false
    }
  ]
}
