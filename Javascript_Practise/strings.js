//find length of a string

let myName='deepak';
console.log(myName.length);

//escape character

let anySentence = "hello my name is \"deepak\" soni, i am a frontend developer";
console.log(anySentence);

//finding a string in a string
//a.)string.prototype.indexOf()

const myBioData = 'I am the Deepak Soni';
console.log(myBioData.indexOf("Deepak"));


//searching for a string in a string
//a.) string.prototype.search(regexp)

const bioData = "I am the Deepak soni";
console.log(bioData.search("the"));


//Extracting string parts
//a.) string.prototype.slice(start,end)

let str = "apple , banana , orange";
let res = str.slice(0,4);
console.log(res);

//display only 280 characters in a string

let myTweet = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium illo esse mollitia ducimus eaque beatae assumenda odit officiis eveniet et! Autem laborum atque accusamus facere, distinctio, error in amet porro quibusdam dignissimos id ea, praesentium magnam. Expedita, ratione itaque minima, eos odio delectus aut quaerat, dolorem asperiores animi ducimus. Necessitatibus, harum dolore. Adipisci tempore accusantium suscipit autem commodi, sint atque iste architecto, voluptates hic consequatur fugit ab non odio vero magni? Repudiandae, officia fugit enim sit, quia unde quod aliquam nisi asperiores amet, laborum quas qui deserunt illo praesentium corporis hic quae dolor eveniet temporibus fuga animi aspernatur ipsum voluptas. Sapiente quos culpa ab magni eos laborum itaque mollitia accusamus error placeat deleniti eveniet quae veritatis quas, officiis in excepturi! Voluptatibus beatae cum corrupti provident rerum reiciendis. Minima tempore, necessitatibus quos ipsum totam nisi doloremque laborum enim cumque, delectus quam, esse velit mollitia optio deleniti sed tempora. Repudiandae sint commodi ea dolore! Eum minima omnis soluta magnam corrupti, qui, veniam culpa temporibus sed fugit voluptatem ullam repellat tempora beatae id. Culpa excepturi, quis rerum eum assumenda maxime minima voluptatibus voluptatem provident quasi veritatis repellendus ducimus reprehenderit suscipit pariatur qui doloribus ea inventore facere officiis! Officia cum aut expedita ipsam provident eveniet hic quae fugiat inventore! Quas dolor, ab culpa facilis impedit sunt. Aspernatur, tempore expedita quisquam dicta, et porro, saepe odio maxime quas sapiente fugiat reiciendis recusandae blanditiis tenetur beatae labore? Incidunt a obcaecati omnis autem nesciunt magni, voluptate ipsam facilis nam natus dolorem repudiandae veniam perspiciatis exercitationem provident impedit amet dignissimos rem dolorum voluptatibus ea sit dicta! Perspiciatis, autem! Voluptatibus, dolorem voluptate. Unde voluptatibus eius nihil illum a explicabo dolorum. Perspiciatis hic et, ipsum ut dolore nemo laudantium tempora voluptatem eaque, nesciunt impedit ullam laboriosam provident soluta blanditiis maxime voluptas mollitia quod repellendus nihil? Pariatur veritatis maxime aspernatur delectus! ";

let myActualTweet = myTweet.slice(0,280);
console.log(myActualTweet);

//b.) substring() method

let mystr = "orange , banana , amrud";
let newstr = mystr.substring(7, -2);
console.log(newstr);


//Replacing string content
//string.prototype.replace(searchFor,replaceWith)

let myName1 = "Deepak Soni";
let newName = myName1.replace("Deepak","DEEPAK");
console.log(newName);


//CONVERTING A STRING INTO AN ARRAY.
//TO CONVERT STRING TO ARRAY WE USE- split() method

let myRole = "f,r,o,n,t";
let pqr = myRole.split(",");
console.log(pqr);