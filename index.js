//Part One
function sum(num){
    let sum = 0;
    for (let i in num)
    {
        sum += num[i];
    }
    return sum;
}
console.log(sum([2,4,3,4,5,6]))
function average(num){
    let sum = 0;
    for(let i in num)
    {
        sum += num[i];
    }
    return sum/num.length;

}
console.log(average([2,4,6,8]))
function longestString(word)
{
    let compare = 0;
    let longestWord = "";
    for(let i in word)
    {
        if(compare < word[i].length)
        {
            compare = word[i].length;
            longestWord = word[i];
        }
    }
    return longestWord;
}
console.log(longestString(["oompaLoompa","Bye","Hello","Testing","Goodnight"]))
function stringsLongerThan(word, num)
{
    let wordsLongerThan = [];
    for(let i in word)
    {
        if(num < word[i].length)
        {
            wordsLongerThan.push(word[i]);
        }
    }
    return wordsLongerThan;
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
function recursion(start, n)
{
    if(start === n)
    {
        return console.log(start);
    }
    else
    {
        console.log(start);
        start++;
        recursion(start, n)
    }
}
recursion(1,5);
//Part Two

const data = 
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }];
const sortAge = data.sort((a, b) => a.age - b.age);
console.log(sortAge);
const filterAge = data.filter(person => person.age <= 50);
console.log(filterAge);
const newData = filterAge.map(person => ({
    id: person.id,
    name: person.name,
    job: person.occupation,
    age: Number(person.age) + 1
}));
console.log(newData);

const totalAge = data.reduce((sum, person) => sum + Number(person.age), 0);
console.log(totalAge);

const averageAge = totalAge / data.length;
console.log(averageAge);

//Part 3
const ageData = [{ id: "42", name: "Bruce", occupation: "Knight"},
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
function incrementAge(person) {
    for(i in person)
    {
        console.log(person[i]);
        if (!person[i].hasOwnProperty('age')) {
            person[i].age = 0;
        }
        person[i].age = Number(person[i].age) + 1;
        person[i].updated_at = new Date();
    }
    return person;
}
console.log(incrementAge(ageData));
function incrementAgeCopy(person) {
    const copy = { ...person };
    for (i in copy)
    {
        console.log(copy[i]);
        if (!copy[i].hasOwnProperty('age')) {
            console.log(copy[i]);
            copy[i].age = 0;
        }
        copy[i].age = Number(copy[i].age) + 1;
        copy[i].updated_at = new Date();
    }
    return copy;
}
console.log(incrementAgeCopy(ageData));