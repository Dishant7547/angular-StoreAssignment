module.exports = function () {
  return {
      products: [
          { id: 1, name: "Kayak", category: "Watersports",
              description: "A boat for one person", price: 275 },
          { id: 2, name: "Lifejacket", category: "Watersports" },
          { id: 3, name: "Soccer Ball", category: "Soccer"},
          { id: 4, name: "Corner Flags", category: "Soccer"},
          { id: 5, name: "Stadium", category: "Soccer"},
          { id: 6, name: "Thinking Cap", category: "Chess"},
          { id: 7, name: "Unsteady Chair", category: "Chess"},
          { id: 8, name: "Human Chess Board", category: "Chess"},
          { id: 9, name: "Bling King", category: "Chess" }
      ],
      productDetails:[
        {id:0,productId:1,
          description: "A boat for one person", price: 275},
        {id:1,productId:2,
          description: "Protective and fashionable", price: 48.95},
        {id:2,productId:3,
          description: "FIFA-approved size and weight", price: 19.50 },
        {id:3,productId:4,
          description: "Give your playing field a professional touch",
          price: 34.95 },
        {id:4,productId:5,
          description: "Flat-packed 35,000-seat stadium", price: 79500 },
        {id:5,productId:6,
          description: "Improve brain efficiency by 75%", price: 16 },
        {id:6,productId:7,
          description: "Secretly give your opponent a disadvantage",
          price: 29.95 },
        {id:7,productId:8,
          description: "A fun game for the family", price: 75 },
        {id:8,productId:9,
          description: "Gold-plated, diamond-studded King", price: 1200},
      ],
      orders: []
  }
}
