
const map = new Map([
  ["name", "Bard"],
  ["age", 3],
  ["occupation", "AI"],
]);

// Get the value of a key
const name = map.get("name"); // Bard

// Set the value of a key
map.set("age", 4);

// Check if a key exists in the map
console.log(map.has("occupation")); // true

// Remove a key-value pair from the map
map.delete("occupation");

// Get the size of the map
console.log(map.size); // 2

// Iterate over the map
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
