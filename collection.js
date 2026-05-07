// আপনার কালেকশনের ডেটা এখানে যোগ করুন
const collections = [
  {
    id: 1,
    title: "৫০০ টাকার ছেঁড়া নোট",
    price: "অমূল্য",
    img: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?q=80&w=400",
    desc: "কস্টেপ লাগানো ভিন্টেজ নোট, বাম পাশের কোণা নেই।",
    category: "টেপ লাগানো",
  },
  {
    id: 2,
    title: "ইঁদুরে খাওয়া ২ টাকা",
    price: "আলোচনা সাপেক্ষে",
    img: "https://images.unsplash.com/photo-1589758438368-213672e39892?q=80&w=400",
    desc: "ঐতিহাসিক ইঁদুরে খাওয়া ডিজাইন, দুর্লভ সংগ্রহ।",
    category: "ইঁদুরে খাওয়া",
  },
  {
    id: 3,
    title: "পুরানো ১ টাকার কয়েন",
    price: "৫০০ টাকা",
    img: "https://images.unsplash.com/photo-1625217527288-93919c99650a?q=80&w=400",
    desc: "১৯৯০ সালের অরিজিনাল স্টিল কয়েন।",
    category: "পুরানো",
  },
  {
    id: 4,
    title: "১০ টাকার ময়লা নোট",
    price: "১১০ টাকা",
    img: "https://images.unsplash.com/photo-1594913366159-1832ffef8511?q=80&w=400",
    desc: "সম্পূর্ণ কালো হয়ে যাওয়া ১০০% খাঁটি ময়লা নোট।",
    category: "ছিঁড়া",
  },
  {
    id: 5,
    title: "পুড়ে যাওয়া ১০০ টাকা",
    price: "৩০০ টাকা",
    img: "https://images.unsplash.com/photo-1633158829585-23bb8f628932?q=80&w=400",
    desc: "আগুনের ছোঁয়ায় শৈল্পিক রূপ পাওয়া নোট।",
    category: "ছিঁড়া",
  },
  {
    id: 6,
    title: "ধোলাই করা ৫০০ টাকা",
    price: "৫৫০ টাকা",
    img: "https://images.unsplash.com/photo-1580519324649-c50de8176c5c?q=80&w=400",
    desc: "প্যান্টের পকেটে রেখে ওয়াশিং মেশিনে ধোয়া ধবধবে সাদা নোট।",
    category: "ছিঁড়া",
  },
  {
    id: 7,
    title: "নাম লেখা ১০ টাকার নোট",
    price: "১০০ টাকা",
    img: "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?q=80&w=400",
    desc: "কারো হৃদয়ের নাম লেখা, প্রেমের এক অনন্য নিদর্শন।",
    category: "পুরানো",
  },
  {
    id: 8,
    title: "ছিঁড়ে যাওয়া ৫ টাকার কয়েন",
    price: "অমূল্য",
    img: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?q=80&w=400",
    desc: "কয়েন কীভাবে ছিঁড়লো তা একটি রহস্য।",
    category: "ছিঁড়া",
  },
  {
    id: 9,
    title: "পুরানো ১০ টাকার বান্ডিল",
    price: "২০০০ টাকা",
    img: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?q=80&w=400",
    desc: "উইপোকার আক্রমণে ঝাঝরা হয়ে যাওয়া আস্ত বান্ডিল।",
    category: "ইঁদুরে খাওয়া",
  },
  {
    id: 10,
    title: "রং মাখা ২০ টাকা",
    price: "৪০ টাকা",
    img: "https://images.unsplash.com/photo-1594913366159-1832ffef8511?q=80&w=400",
    desc: "হোলি খেলার সময় পকেটে থাকা রঙিন স্মৃতির নোট।",
    category: "ছিঁড়া",
  },
];

const gridContainer = document.getElementById("collection-grid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayCollections(filteredData = collections) {
  if (!gridContainer) return;

  if (filteredData.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full text-center py-20">
        <p class="text-gray-500 text-lg">দুঃখিত! এই নামে বা ক্যাটাগরিতে কোনো নোট খুঁজে পাওয়া যায়নি। 😢</p>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filteredData
    .map(
      (item) => `
        <div class="glass-card group rounded-2xl overflow-hidden transition-all duration-500">
            <div class="relative h-60 overflow-hidden">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span class="absolute top-4 right-4 bg-orange-600 text-[10px] uppercase font-bold px-3 py-1.5 rounded-full shadow-lg">
                    ${item.price}
                </span>
            </div>

            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors text-white">${item.title}</h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">${item.desc}</p>
                <button class="w-full py-3 bg-orange-500/10 border border-orange-500/30 text-orange-500 text-sm font-bold rounded-xl hover:bg-orange-500 hover:text-black transition-all duration-300">
                    বিস্তারিত দেখুন
                </button>
            </div>
        </div>
    `,
    )
    .join("");
}

function filterCollections() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = collections.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm);
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  displayCollections(filtered);
}

searchInput?.addEventListener("input", filterCollections);
categoryFilter?.addEventListener("change", filterCollections);

displayCollections();
