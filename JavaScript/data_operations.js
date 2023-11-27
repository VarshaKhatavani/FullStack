// Part 1 => User Data Manipulation

// Array of 15 Users
let users = [
    {   name: 'Mohit', 
        age: 25, 
        gender: 'Male', 
        location: 'Delhi, India' 
    },
    {   name: 'Rishi', 
        age: 30, 
        gender: 'Female', 
        location: 'Mumbai, India' 
    },    
    { name: 'Joy', age: 22, gender: 'Male', location: 'Bangalore, India' },
    { name: 'Riya', age: 28, gender: 'Female', location: 'Chennai, India' },
    { name: 'Jitesh', age: 35, gender: 'Male', location: 'Hyderabad, India' },
    { name: 'User6', age: 29, gender: 'Female', location: 'Kolkata, India' },
    { name: 'User7', age: 26, gender: 'Male', location: 'Pune, India' },
    { name: 'User8', age: 32, gender: 'Female', location: 'Ahmedabad, India' },
    { name: 'User9', age: 16, gender: 'Male', location: 'Jaipur, India' },
    { name: 'User10', age: 31, gender: 'Female', location: 'Lucknow, India' },
    { name: 'User11', age: 24, gender: 'Male', location: 'Chandigarh, India' },
    { name: 'User12', age: 18, gender: 'Female', location: 'Bhopal, India' },
    { name: 'User13', age: 28, gender: 'Male', location: 'Indore, India' },
    { name: 'User14', age: 29, gender: 'Female', location: 'Jaipur, India' },
    { name: 'User15', age: 17, gender: 'Male', location: 'Varanasi, India' }
]

// Solution 3
// isAdult() function taking object as an argument
let isAdult = function(user){
    return user.age >=18;
};

// Solution 4
// Checking each user age for greater than equal to 18 and storing in printAdult array
let adultUsers = users.filter(isAdult);
// Passing user object to verify age is greater than equal to 18
console.log(isAdult(users[0]));
console.log(adultUsers);

// Solution 5
// getFullName() method taking user object as an input and returning user name and location as an string
function getFullName(user){
    return user.name + " " + user.location ;
}

// Solution 6
// Printing all user full name [name + location] using map() method and storing in getAllUserFullName array
let userNames = users.map(getFullName);
console.log(userNames);

// Part 2 => Chaining user Data Operations

//Solution 1
// function takes user object and gender and validate whether given gender is same or not
let filterByGender  = function(user, gender){
    if(Object.keys(user).length != 0){
        return gender === user.gender;
    }    
}
console.log(filterByGender(users[5], "Male"));

// Solution 2 
// Filtering female users and then mapping their names and location and storing it in femaleUsers array
let femaleUsers = users.filter((user)=>{
                       return filterByGender(user,'Female')
                  }).map((user) => {
                       return user.name  + " " + user.location
                  });                
console.log(femaleUsers);

// Part 3 
// Array of Bollywood movies
let bollywoodMovies = [
    { title: 'Dangal', genre: 'Biography', year: 2016, rating: 8.4 },
    { title: 'PK', genre: 'Comedy', year: 2014, rating: 8.1 },
    { title: '3 Idiots', genre: 'Comedy', year: 2009, rating: 8.4 },
    { title: 'Lagaan', genre: 'Drama', year: 2001, rating: 8.1 },
    { title: 'Sholay', genre: 'Adventure', year: 1975, rating: 8.2 },
    { title: 'Chennai Express', genre: 'Action', year: 2013, rating: 6.0 },
    { title: 'Queen', genre: 'Comedy', year: 2013, rating: 8.2 },
    { title: 'Padmaavat', genre: 'Drama', year: 2018, rating: 7.0 },
    { title: 'Andhadhun', genre: 'Crime', year: 2018, rating: 8.3 },
    { title: 'Koi Mil Gaya', genre: 'Sci-Fi', year: 2003, rating: 7.1 }
];

//Part 4 - Chaining movie data

// Solution 1 - Passing movie object and user genre input into filterByGenre() to validate the movie genre
let filterByGenre = function(bollywoodMovies, genre){
        return bollywoodMovies.genre === genre
}
console.log(filterByGender(bollywoodMovies[0], "Action"));

// Solution 2 => Chaining
// Filtering movie genre and storing movie name in movieTitle array
let actionMovies =  bollywoodMovies.filter((movies)=>{
                        return filterByGenre(movies,"Action")
                    });
console.log(actionMovies);                   

// Part 5 => Integration and Manipulation
// Solution 1

let combinedArray = [...userNames, ...femaleUsers, ...actionMovies];
console.log(combinedArray);

