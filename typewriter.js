///take a sentence and display it as an animation.

const sentence = "hello there from lighthouse labs"
//displaying each word after a delay
for (const char of sentence) {
  setTimeout(()=>process.stdout.write(char),1000);
  
  }
let j = 0;
for (let i=0; i<sentence.length; i++) {
  setTimeout(()=>console.log(sentence[i]),j);
  j = j + 50;
}


