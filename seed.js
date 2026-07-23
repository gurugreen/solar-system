const mongoose = require('mongoose');

// Use the local MongoDB connection targeting the 'superData' database expected by the app
const MONGO_URI = 'mongodb://127.0.0.1:27017/superData';

// Define the exact Schema used in app.controller.js
const Schema = mongoose.Schema;
const dataSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  image: String,
  velocity: String,
  distance: String
});

// Target the 'planets' collection
const Planet = mongoose.model('planets', dataSchema);

const planetData = [
  {
    id: 1,
    name: "Mercury",
    image: "https://githubusercontent.com",
    velocity: "47.4",
    distance: "57.9",
    description: "Mercury is the smallest planet in our solar system and closest to the Sun."
  },
  {
    id: 2,
    name: "Venus",
    image: "https://githubusercontent.com",
    velocity: "35.0",
    distance: "108.2",
    description: "Venus spins slowly in the opposite direction from most planets. Its thick atmosphere traps heat."
  },
  {
    id: 3,
    name: "Earth",
    image: "https://githubusercontent.com",
    velocity: "29.8",
    distance: "149.6",
    description: "Our home planet is the only place we know of so far that’s inhabited by living things."
  },
  {
    id: 4,
    name: "Mars",
    image: "https://githubusercontent.com",
    velocity: "24.0",
    distance: "227.9",
    description: "Mars is a dusty, cold, desert world with a very thin atmosphere."
  },
  {
    id: 5,
    name: "Jupiter",
    image: "https://githubusercontent.com",
    velocity: "13.1",
    distance: "778.5",
    description: "Jupiter is more than twice as massive than the other planets of our solar system combined."
  },
  {
    id: 6,
    name: "Saturn",
    image: "https://githubusercontent.com",
    velocity: "9.7",
    distance: "1434.0",
    description: "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system."
  },
  {
    id: 7,
    name: "Uranus",
    image: "https://githubusercontent.com",
    velocity: "6.8",
    distance: "2871.0",
    description: "Uranus, the seventh planet from the Sun, rotates at a nearly 90-degree angle from the plane of its orbit."
  },
  {
    id: 8,
    name: "Neptune",
    image: "https://githubusercontent.com",
    velocity: "5.4",
    distance: "4495.0",
    description: "Neptune, the eighth and most distant major planet orbiting our Sun, is dark, cold, and whipped by supersonic winds."
  }
];

async function seedDatabase() {
  try {
    console.log('Connecting to local MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('Connected successfully!');

    // Clear existing data in the collection to prevent duplicates
    await Planet.deleteMany({});
    console.log('Old records cleared.');

    // Insert the 8 planets
    await Planet.insertMany(planetData);
    console.log('All 8 planets successfully inserted into superData.planets!');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Terminate connection gracefully
    await mongoose.disconnect();
    console.log('Database connection closed.');
    process.exit(0);
  }
}

seedDatabase();