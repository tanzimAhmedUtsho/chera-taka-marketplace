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

// Sample Data for client reviews
const clientReviews = [
  {
    name: "আবুল কাশেম",
    role: "নিয়মিত বিক্রেতা",
    comment:
      "কস্টেপ লাগানো ৫০০ টাকার নোট নিয়ে খুব বিপদে ছিলাম, কেউ নিচ্ছিলো না। এখানে এসে ভালো দামে বিক্রি করলাম!",
    img: "https://i.pravatar.cc/150?u=abul",
  },
  {
    name: "মরিয়ম বেগম",
    role: "কালেক্টর",
    comment:
      "আমি ইঁদুরে খাওয়া নোট সংগ্রহ করি। এখান থেকে দারুণ কিছু রেয়ার কালেকশন পেয়েছি। জাস্ট অসাধারণ!",
    img: "https://i.pravatar.cc/150?u=marium",
  },
  {
    name: "জলিল মিয়া",
    role: "ব্যবসাী",
    comment:
      "ছেঁড়া টাকা যে অমূল্য সম্পদ হতে পারে, এই ওয়েবসাইট না দেখলে বিশ্বাস করতাম না। প্রতি সপ্তাহে আমি এখানে চেক করি।",
    img: "https://i.pravatar.cc/150?u=jolil",
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

// Function to render reviews
const renderReviews = () => {
  const reviewGrid = document.getElementById("reviews-grid");
  reviewGrid.innerHTML = clientReviews
    .map(
      (review) => `
        <div class="glass-card p-6 rounded-2xl border border-white/5 bg-white/5">
            <div class="flex items-center gap-4 mb-4">
                <img src="${review.img}" alt="${review.name}" class="w-12 h-12 rounded-full border-2 border-yellow-500">
                <div>
                    <h4 class="text-white font-bold">${review.name}</h4>
                    <p class="text-xs text-yellow-500">${review.role}</p>
                </div>
            </div>
            <p class="text-gray-400 text-sm italic leading-relaxed">"${review.comment}"</p>
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
document.addEventListener("DOMContentLoaded", () => {
  renderNotes();
  renderReviews();
});
