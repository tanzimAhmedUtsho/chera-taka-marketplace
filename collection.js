// আপনার কালেকশনের ডেটা এখানে যোগ করুন
const collections = [
  {
    id: 1,
    title: "৫০০ টাকার ছেঁড়া নোট",
    price: "অমূল্য",
    numericPrice: 1000000, // Priceless treated as high value
    img: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?q=80&w=400",
    desc: "কস্টেপ লাগানো ভিন্টেজ নোট, বাম পাশের কোণা নেই।",
    category: "টেপ লাগানো",
  },
  {
    id: 2,
    title: "ইঁদুরে খাওয়া ২ টাকা",
    price: "আলোচনা সাপেক্ষে",
    numericPrice: 0, // Negotiable treated as baseline
    img: "https://images.unsplash.com/photo-1589758438368-213672e39892?q=80&w=400",
    desc: "ঐতিহাসিক ইঁদুরে খাওয়া ডিজাইন, দুর্লভ সংগ্রহ।",
    category: "ইঁদুরে খাওয়া",
  },
  {
    id: 3,
    title: "পুরানো ১ টাকার কয়েন",
    price: "৫০০ টাকা",
    numericPrice: 500,
    img: "https://images.unsplash.com/photo-1625217527288-93919c99650a?q=80&w=400",
    desc: "১৯৯০ সালের অরিজিনাল স্টিল কয়েন।",
    category: "পুরানো",
  },
  {
    id: 4,
    title: "১০ টাকার ময়লা নোট",
    price: "১১০ টাকা",
    numericPrice: 110,
    img: "https://images.unsplash.com/photo-1594913366159-1832ffef8511?q=80&w=400",
    desc: "সম্পূর্ণ কালো হয়ে যাওয়া ১০০% খাঁটি ময়লা নোট।",
    category: "ছিঁড়া",
  },
  {
    id: 5,
    title: "পুড়ে যাওয়া ১০০ টাকা",
    price: "৩০০ টাকা",
    numericPrice: 300,
    img: "https://images.unsplash.com/photo-1633158829585-23bb8f628932?q=80&w=400",
    desc: "আগুনের ছোঁয়ায় শৈল্পিক রূপ পাওয়া নোট।",
    category: "ছিঁড়া",
  },
  {
    id: 6,
    title: "ধোলাই করা ৫০০ টাকা",
    price: "৫৫০ টাকা",
    numericPrice: 550,
    img: "https://images.unsplash.com/photo-1580519324649-c50de8176c5c?q=80&w=400",
    desc: "প্যান্টের পকেটে রেখে ওয়াশিং মেশিনে ধোয়া ধবধবে সাদা নোট।",
    category: "ছিঁড়া",
  },
  {
    id: 7,
    title: "নাম লেখা ১০ টাকার নোট",
    price: "১০০ টাকা",
    numericPrice: 100,
    img: "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?q=80&w=400",
    desc: "কারো হৃদয়ের নাম লেখা, প্রেমের এক অনন্য নিদর্শন।",
    category: "পুরানো",
  },
  {
    id: 8,
    title: "ছিঁড়ে যাওয়া ৫ টাকার কয়েন",
    price: "অমূল্য",
    numericPrice: 1000000,
    img: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?q=80&w=400",
    desc: "কয়েন কীভাবে ছিঁড়লো তা একটি রহস্য।",
    category: "ছিঁড়া",
  },
  {
    id: 9,
    title: "পুরানো ১০ টাকার বান্ডিল",
    price: "২০০০ টাকা",
    numericPrice: 2000,
    img: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?q=80&w=400",
    desc: "উইপোকার আক্রমণে ঝাঝরা হয়ে যাওয়া আস্ত বান্ডিল।",
    category: "ইঁদুরে খাওয়া",
  },
  {
    id: 10,
    title: "রং মাখা ২০ টাকা",
    price: "৪০ টাকা",
    numericPrice: 40,
    img: "https://images.unsplash.com/photo-1594913366159-1832ffef8511?q=80&w=400",
    desc: "হোলি খেলার সময় পকেটে থাকা রঙিন স্মৃতির নোট।",
    category: "ছিঁড়া",
  },
];

const gridContainer = document.getElementById("collection-grid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortOrder = document.getElementById("sortOrder");
const resultsCount = document.getElementById("results-count");
const cartItemsContainer = document.getElementById("cart-items");
const cartCountLabel = document.getElementById("cart-count");
const cartTotalLabel = document.getElementById("cart-total");

let cart = [];

function displayCollections(filteredData = collections) {
  if (!gridContainer) return;

  if (filteredData.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full text-center py-20">
        <p class="text-gray-500 text-lg">দুঃখিত! এই নামে বা ক্যাটাগরিতে কোনো নোট খুঁজে পাওয়া যায়নি। 😢</p>
      </div>
    `;
    if (resultsCount) resultsCount.innerText = "0";
    return;
  }

  if (resultsCount) resultsCount.innerText = filteredData.length;

  gridContainer.innerHTML = filteredData
    .map(
      (item) => `
        <div class="glass-card group rounded-2xl overflow-hidden transition-all duration-500 animate-fadeIn relative">
            <div class="relative h-60 overflow-hidden">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span class="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-orange-500/50 text-orange-400 text-[12px] font-black tracking-wider px-4 py-2 rounded-full shadow-2xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <span class="text-[10px] mr-1 opacity-70">মূল্য:</span>${item.price}
                </span>
                <span class="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    ${item.category}
                </span>
            </div>

            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-orange-500 transition-all text-white line-clamp-1">${item.title}</h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">${item.desc}</p>
                <button onclick="addToCart(${item.id})" class="w-full py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 text-orange-500 text-sm font-bold rounded-xl hover:from-orange-500 hover:to-red-600 hover:text-black hover:border-transparent transition-all duration-500 shadow-lg shadow-orange-500/5 flex items-center justify-center gap-2">
                    <span>🛒</span> কার্টে ভরুন
                </button>
            </div>
        </div>
    `,
    )
    .join("");
}

// Cart Logic
function toggleCart() {
  const drawer = document.getElementById("cart-drawer");
  drawer.classList.toggle("translate-x-full");
}

function addToCart(id) {
  const item = collections.find((c) => c.id === id);
  cart.push(item);
  updateCartUI();

  // Funny Alert
  const funnyAlerts = [
    "কার্টে তো নিলেন, এখন টাকা দেওয়ার সময় কি আসল নোট দিবেন নাকি কস্টেপ লাগানো? 🤔",
    "সাবধান! এই ছেঁড়া নোটগুলো আপনার আসল টাকার সাথে মিশে গেলে উৎস ভাই দায়ী নন! 🚁",
    "চমৎকার পছন্দ! ইঁদুরে খাওয়া নোটটি এখন আপনার হওয়ার পথে!",
    "উৎস ভাই খবর পেয়েছেন আপনি একটা নোট পছন্দ করেছেন, তিনি হেলিকপ্টার স্টার্ট দিচ্ছেন! 🚁",
  ];
  alert(funnyAlerts[Math.floor(Math.random() * funnyAlerts.length)]);
}

function updateCartUI() {
  cartCountLabel.innerText = cart.length;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="text-gray-500 text-center py-10 italic">থলি খালি! কিছু নোট কিপটেমি না করে কার্টে ভরুন।</p>`;
    cartTotalLabel.innerText = "৳ ০";
    return;
  }

  let total = 0;
  cartItemsContainer.innerHTML = cart
    .map((item, index) => {
      // If numericPrice is huge (priceless), don't add to numeric total or show special
      if (item.numericPrice < 1000000) total += item.numericPrice;

      return `
      <div class="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5">
        <img src="${item.img}" class="w-12 h-12 rounded object-cover border border-white/10">
        <div class="flex-grow">
          <h4 class="text-white text-sm font-bold truncate w-32">${item.title}</h4>
          <p class="text-orange-500 text-xs">${item.price}</p>
        </div>
        <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-400 text-xl">&times;</button>
      </div>
    `;
    })
    .join("");

  cartTotalLabel.innerText = total > 0 ? `৳ ${total}` : "অমূল্য!";
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function checkoutCart() {
  alert(
    "উফ! এত টাকার নোট? উৎস ভাই খুশি হয়ে আপনাকে তার ৭১টি ব্যবসার একটি গিফট করার কথা ভাবছেন! (যদিও সেটা হবে না)",
  );
  cart = [];
  updateCartUI();
  toggleCart();
}

function filterCollections() {
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const selectedCategory = categoryFilter ? categoryFilter.value : "all";
  const selectedSort = sortOrder ? sortOrder.value : "default";

  let filtered = collections.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm);
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sorting Logic
  if (selectedSort === "lowToHigh") {
    filtered.sort((a, b) => a.numericPrice - b.numericPrice);
  } else if (selectedSort === "highToLow") {
    filtered.sort((a, b) => b.numericPrice - a.numericPrice);
  }

  displayCollections(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  searchInput?.addEventListener("input", filterCollections);
  categoryFilter?.addEventListener("change", filterCollections);
  sortOrder?.addEventListener("change", filterCollections);
});

displayCollections();
