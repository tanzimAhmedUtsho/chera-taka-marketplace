// নোটের ডাটা সেট
const collectionData = [
  {
    id: 1,
    title: "৫০০ টাকার রেয়ার নোট",
    category: "rare",
    price: "৬৫০ ৳",
    image:
      "https://images.unsplash.com/photo-1627137818987-99528d99c922?q=80&w=400", // ডামি ইমেজ
    status: "ভালো",
  },
  {
    id: 2,
    title: "১০০০ টাকার ছেঁড়া নোট",
    category: "damaged",
    price: "৮০০ ৳",
    image:
      "https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=400",
    status: "৩০% ড্যামেজ",
  },
  {
    id: 3,
    title: "পুরাতন ২ টাকার নোট",
    category: "rare",
    price: "১০০ ৳",
    image:
      "https://images.unsplash.com/photo-1610450949065-2f2297343053?q=80&w=400",
    status: "সংগ্রহযোগ্য",
  },
  {
    id: 4,
    title: "৫ টাকার স্মারক নোট",
    category: "rare",
    price: "২৫০ ৳",
    image:
      "https://images.unsplash.com/photo-1622322062691-88439366df42?q=80&w=400",
    status: "নতুন মতো",
  },
  {
    id: 5,
    title: "১০০ টাকার স্টার মার্ক নোট",
    category: "rare",
    price: "১৫০০ ৳",
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=400",
    status: "অরিজিনাল",
  },
  {
    id: 6,
    title: "২০ টাকার পচা ও ভেজা নোট",
    category: "damaged",
    price: "১৫ ৳",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400",
    status: "৪০% ড্যামেজ",
  },
  {
    id: 7,
    title: "৫০ টাকার সুবর্ণজয়ন্তী নোট",
    category: "rare",
    price: "২০০ ৳",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9039e2d?q=80&w=400",
    status: "আনসার্কুলেটেড",
  },
  {
    id: 8,
    title: "৫০০ টাকার ৩ টুকরো নোট",
    category: "damaged",
    price: "৩০০ ৳",
    image:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=400",
    status: "কস্টেপ লাগানো",
  },
  {
    id: 9,
    title: "ব্রিটিশ ইন্ডিয়া ১০ টাকার নোট",
    category: "rare",
    price: "৫০০০ ৳",
    image:
      "https://images.unsplash.com/photo-1625225233840-695456021cde?q=80&w=400",
    status: "অতি দুর্লভ",
  },
  {
    id: 10,
    title: "১০০০ টাকার পুড়ে যাওয়া নোট",
    category: "damaged",
    price: "৫০০ ৳",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400",
    status: "৬০% পোড়া",
  },
  {
    id: 11,
    title: "২ টাকার পুরাতন বাঘ মার্কা",
    category: "rare",
    price: "১৫০ ৳",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=400",
    status: "ভেরি ফাইন",
  },
  {
    id: 12,
    title: "৫ টাকার দোয়েল পাখি নোট",
    category: "rare",
    price: "৮০ ৳",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400",
    status: "কালেক্টেবল",
  },
];

const container = document.getElementById("collection-container");
const searchInput = document.getElementById("searchInput");

// কার্ড রেন্ডার ফাংশন
function displayItems(items) {
  container.innerHTML = items
    .map(
      (item) => `
        <div class="glass-morphism rounded-2xl overflow-hidden card-hover transition-all duration-300 group">
            <div class="h-48 overflow-hidden relative">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                <span class="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                    ${item.category === "rare" ? "রেয়ার" : "কালেকশন"}
                </span>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-gray-400 text-sm">অবস্থা: ${item.status}</span>
                    <span class="text-yellow-500 font-bold text-lg">${item.price}</span>
                </div>
                <button class="w-full py-3 border border-yellow-500 text-yellow-500 rounded-lg font-bold hover:bg-yellow-500 hover:text-black transition duration-300">
                    বিস্তারিত দেখুন
                </button>
            </div>
        </div>
    `,
    )
    .join("");
}

// ফিল্টার ফাংশন
function filterItems(category) {
  if (category === "all") {
    displayItems(collectionData);
  } else {
    const filtered = collectionData.filter(
      (item) => item.category === category,
    );
    displayItems(filtered);
  }
}

// সার্চ ফাংশন
searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const searched = collectionData.filter((item) =>
    item.title.toLowerCase().includes(term),
  );
  displayItems(searched);
});

// শুরুতে সব আইটেম দেখাবে
displayItems(collectionData);
