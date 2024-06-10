const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name?", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question("Which meal is your favorite?(eg: dinner, brunch, etc.)?", (meal) => {
        rl.question("What's your favorite thing to eat for that meal?", (food) => {
          rl.question("which sport is your absolute favorite?", (sport) => {
            rl.question("what is your superpower?", (superpower) => {

              const profile = `
              Meet ${name}! They love to spend their time  ${activity} while listening to ${music}. 
              Their favourite meal of the day is ${meal}, and their favorite food is ${food}. 
              ${name}'s, favorite sport is ${sport}. 
              They also have a superpower: ${superpower}!
              `;
              console.log(profile);
                rl.close();
            });
          })
        })
      })
    })
  })

  
});


