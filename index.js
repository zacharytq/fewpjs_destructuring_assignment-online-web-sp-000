const farmAnimals = 'cow horse sheep pig chicken'


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

// Strings

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ")

const [Bessie, , Dolly, Babe,Little] = farmAnimals.split(" ")
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.
const [black_and_white, , black, pink, ] = farmAnimals.split(" ")
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.
const [red, orange, yellow, green, blue, indigo, violet] = colors
// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [r, o, y, g, b, , v] = colors
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [ , , , , , indg, ] = colors
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const {name, color, song, job, partner} = muppet
// Objects
const {song_2, song_4} = k_muppet.k_album.the_muppet_movie
// 7. Use destructuring to assign all appropriate variables using the keys as the variable names

const {k_color, k_job, k_partner} = k_muppet
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner