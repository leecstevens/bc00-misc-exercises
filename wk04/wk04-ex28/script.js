
let word_bank = ['Word', 'Phrase', 'Flamethrowers']
let random_number = 0

function randomize_word() {
    random_number = Math.floor(Math.random() * word_bank.length)
   return word_bank[random_number]
}

console.log(randomize_word())