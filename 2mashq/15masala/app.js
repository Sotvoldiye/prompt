const ulgbbekObj = {
  name: 'Ulugbek',
  lastName: 'Sotvoldiyev',
  age: 17,
  region: "Farg'ona",
  job: 'Dasturchilikni',
  haqida: function() {
    return `Assalomu Alaykum, Mening ismim ${this.name}, Familyam ${this.lastName}. Yoshim ${this.age}da. ${this.region}da yashayman. ${this.job}likni o'rganyapman.`
  }
}

console.log(ulgbbekObj.haqida())