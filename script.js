// Sample Data for torn money
const tornNotes = [
  {
    title: "৫০০ টাকা (কস্টেপ স্পেশাল)",
    condition: "মাঝখান দিয়ে ২ ভাগ",
    price: "৩২০ টাকা",
    img: "https://via.placeholder.com/300x180/222/fbbf24?text=500+Taka+Torn",
  },
  {
    title: "১০০০ টাকা (ইঁদুরে খাওয়া)",
    condition: "কোনার ২০% নেই",
    price: "৪৫০ টাকা",
    img: "https://via.placeholder.com/300x180/222/fbbf24?text=1000+Taka+Missing",
  },
  {
    title: "১০০ টাকা (ভিজে যাওয়া)",
    condition: "রং একটু ঝাপসা",
    price: "৮৫ টাকা",
    img: "https://via.placeholder.com/300x180/222/fbbf24?text=100+Taka+Wet",
  },
];

// Function to render notes
const renderNotes = () => {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = tornNotes
    .map(
      (note) => `
        <div class="glass-card p-6 rounded-2xl">
            <img src="${note.img}" alt="Torn Note" class="w-full h-40 object-cover rounded-xl mb-4 grayscale hover:grayscale-0 transition duration-500">
            <h3 class="text-xl font-bold text-white mb-2">${note.title}</h3>
            <p class="text-sm text-gray-500 mb-4 italic">অবস্থা: ${note.condition}</p>
            <div class="flex justify-between items-center">
                <span class="text-yellow-500 font-mono font-bold text-lg">${note.price}</span>
                <button onclick="showAlert()" class="text-xs bg-white text-black px-3 py-2 rounded-lg font-bold">কিনুন</button>
            </div>
        </div>
    `,
    )
    .join("");
};

const showAlert = () => {
  alert(
    "আরে ভাই! সত্যি সত্যি ছেঁড়া টাকা কিনতে আসলেন? এটা তো জাস্ট মজা করার জন্য বানানো ওয়েবসাইট!",
  );
};

// Initialize
document.addEventListener("DOMContentLoaded", renderNotes);
