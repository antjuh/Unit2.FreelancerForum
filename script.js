const initial = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher"}
]
    
   


const extraFreelancers = [
    { name: "Dr. Slice", price: 25, occupation: "Gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
    { name: "Prof. Prism", price: 81, occupation: "Teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
    { name: "Prof. Spark", price: 76, occupation: "Programmer" },
    { name: "Dr. Wire", price: 47, occupation: "Teacher" },
    { name: "Prof. Goose", price: 72, occupation: "Driver" },
  ]; 

const maxLancers = 5;

render();


const addFreelancerInterval = setInterval(addFreelancer, 5000);

function render() {
    const container = document.querySelector(".container")

    for(let i = 0; i < initial.length; i++){
    const usersBox = document.createElement("div")
    usersBox.className = "usersBox"
    
    const name = document.createElement("p")
    const price = document.createElement("p")
    const occ = document.createElement("p")
    
    name.innerText = `${initial[i].name}`
    price.innerText = `$${initial[i].price}`
    occ.innerText = `${initial[i].occupation}`
    
    usersBox.appendChild(name)
    usersBox.appendChild(price)
    usersBox.appendChild(occ)
    
    container.appendChild(usersBox)
  }
}


function addFreelancer() {
    const freelancer = extraFreelancers[Math.floor(Math.random() * extraFreelancers.length)];
    initial.push(freelancer);
    render();
    

    if (initial.length >= maxLancers) {
      clearInterval(addFreelancerInterval);
    }
    averageStartingPrice();
}


const avg = document.createElement("p")
avg.className = "avg"
avg.innerText = `${averageStartingPrice()}`;













function averageStartingPrice() {
  const totalStartingPrice = initial.reduce((acc, freelancer) => acc += freelancer.price, 0);
  return totalStartingPrice / initial.length;
}

