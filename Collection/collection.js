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
                <div class="flex flex-col gap-2">
                    <button class="w-full py-2 border border-yellow-500 text-yellow-500 rounded-lg font-bold hover:bg-yellow-500 hover:text-black transition duration-300 text-sm">
                        বিস্তারিত দেখুন
                    </button>
                    <div class="flex gap-2">
                        <button onclick="addToCart(${item.id})" class="flex-1 py-2 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition text-[10px] sm:text-xs">🛒 কার্টে যোগ করুন</button>
                        <button onclick="buyNow(${item.id})" class="flex-1 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition text-[10px] sm:text-xs">এখনই কিনুন</button>
                    </div>
                </div>
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

// ডার্ক ও লাইট মোড টগল করার লজিক
const themeToggleBtn = document.getElementById("theme-toggle");

// পেজ লোড হওয়ার সময় লোকাল স্টোরেজ থেকে থিম চেক করা
const savedTheme = localStorage.getItem("theme") || "dark";
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
}

if (themeToggleBtn) {
  // বাটন টেক্সট ইনিশিয়ালাইজ করা
  themeToggleBtn.innerText =
    savedTheme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";

  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");
    const theme = isLight ? "light" : "dark";

    // থিম স্টোর করা যাতে রিফ্রেশ দিলেও সেটিংস না হারায়
    localStorage.setItem("theme", theme);

    // ইউজারকে বোঝানোর জন্য বাটনের টেক্সট এবং আইকন আপডেট
    themeToggleBtn.innerText = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";
  });
}

// --- সিম্পল কার্ট সিস্টেম লজিক ---
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.innerText = cart.length;
  }
}

window.addToCart = function (id) {
  const item = collectionData.find((i) => i.id === id);
  if (item) {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`"${item.title}" কার্টে যোগ করা হয়েছে!`);
  }
};

window.buyNow = function (id) {
  const item = collectionData.find((i) => i.id === id);
  if (!item) return;

  // চেকআউট মডাল তৈরি বা সিলেক্ট করা
  let modal = document.getElementById("checkout-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "checkout-modal";
    modal.className =
      "fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 hidden";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="bg-[#1a1a1a] border border-white/10 p-8 rounded-3xl max-w-md w-full relative animate-in fade-in zoom-in duration-300">
        <button onclick="closeCheckoutModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl transition">&times;</button>
        <h2 class="text-2xl font-bold text-white mb-4">অর্ডার কনফার্ম করুন</h2>
        <div class="flex items-center gap-4 mb-6 p-4 bg-white/5 rounded-2xl border border-white/5">
            <img src="${item.image}" class="w-16 h-16 object-cover rounded-xl" />
            <div>
                <h4 class="text-white font-bold">${item.title}</h4>
                <p class="text-yellow-500 font-bold">${item.price}</p>
            </div>
        </div>
        <form onsubmit="handleCheckout(event, '${item.title}')" class="space-y-4">
            <div>
                <label class="block text-sm text-gray-400 mb-1">আপনার নাম</label>
                <input type="text" required placeholder="নাম লিখুন" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition">
            </div>
            <div>
                <label class="block text-sm text-gray-400 mb-1">ফোন নম্বর</label>
                <input type="tel" required placeholder="017xxxxxxxx" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition">
            </div>
            <button type="submit" class="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-600 transition mt-4">অর্ডার সম্পন্ন করুন</button>
        </form>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

window.closeCheckoutModal = function () {
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "auto";
};

window.handleCheckout = function (event, itemTitle) {
  event.preventDefault();
  alert(
    `ধন্যবাদ! "${itemTitle}" এর অর্ডারটি গ্রহণ করা হয়েছে। তানজীম আহমেদ উৎস ভাই কিছুক্ষণের মধ্যেই আপনার সাথে যোগাযোগ করবেন। (আব্বাকে নিয়ে তিনি হেলিকপ্টারে করে আসতে পারেন!)`,
  );
  closeCheckoutModal();
};

// শুরুতে কার্ট কাউন্ট আপডেট করা
updateCartCount();
