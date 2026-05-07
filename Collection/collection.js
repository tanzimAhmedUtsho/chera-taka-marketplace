// নোটের ডাটা সেট
const collectionData = [
  {
    id: 1,
    title: "৫০০ টাকার রেয়ার নোট",
    category: "rare",
    price: "৬৫০ ৳",
    image:
      "https://images.unsplash.com/photo-1627137818987-99528d99c922?q=80&w=400",
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
const filterDropdown = document.getElementById("filterDropdown");

// ফিল্টার ড্রপডাউন ইভেন্ট লিসেনার
if (filterDropdown) {
  filterDropdown.addEventListener("change", (e) => {
    filterItems(e.target.value, container);
  });
}

// কার্ড রেন্ডার ফাংশন
function displayItems(items, targetContainer) {
  const target = targetContainer || container;
  if (!target) return;
  target.innerHTML = items
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
function filterItems(category, targetContainer) {
  if (category === "all") {
    displayItems(collectionData, targetContainer);
  } else {
    const filtered = collectionData.filter(
      (item) => item.category === category,
    );
    displayItems(filtered, targetContainer);
  }
}

// সার্চ ফাংশন
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const searched = collectionData.filter((item) =>
      item.title.toLowerCase().includes(term),
    );
    displayItems(searched, container);
  });
}

// শুরুতে সব আইটেম দেখাবে
displayItems(collectionData, container);
updateCartUI();

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

// বাংলা সংখ্যাকে ইংরেজিতে রূপান্তরের ফাংশন (হিসাব করার জন্য)
function bnToEn(str) {
  const bn = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return str.replace(/[০-৯]/g, (s) => bn.indexOf(s));
}

// ইংরেজি সংখ্যাকে বাংলায় রূপান্তরের ফাংশন (প্রদর্শনের জন্য)
function enToBn(str) {
  const bn = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return str.toString().replace(/\d/g, (s) => bn[s]);
}

function updateCartUI() {
  // কার্ট কাউন্ট আপডেট
  const countElements = document.querySelectorAll(".cart-count");
  countElements.forEach((el) => {
    el.innerText = cart.length;
    el.onclick = openMiniCart; // কাউন্টে ক্লিক করলে মিনি কার্ট খুলবে
    el.style.cursor = "pointer";
  });

  // ক্যালকুলেশন প্যানেল আপডেট
  const calcContainer = document.getElementById("cart-calculation");
  const miniCartContent = document.getElementById("mini-cart-content");

  // কমন ক্যালকুলেশন লজিক
  const totalPrice = cart.reduce((sum, item) => {
    const priceEn = bnToEn(item.price.replace(/[^\d০-৯]/g, ""));
    return sum + (parseInt(priceEn) || 0);
  }, 0);

  const totalDamage = cart.reduce((sum, item) => {
    const damageEn = bnToEn(item.status.replace(/[^\d০-৯]/g, ""));
    return sum + (parseInt(damageEn) || 0);
  }, 0);

  const tapeNeeded = Math.ceil(totalDamage / 5);

  // সাইড ক্যালকুলেশন রেন্ডার
  if (calcContainer) {
    if (cart.length === 0) {
      calcContainer.innerHTML = generateCalculationHTML(totalPrice, tapeNeeded);
    } else {
      const sideItemsListHTML = `
        <div class="mb-6 space-y-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar animate-in fade-in slide-in-from-right duration-500">
            <h4 class="text-white font-bold text-sm flex items-center gap-2 mb-4">
                📂 আপনার সংগৃহীত আবর্জনা সমূহ:
            </h4>
            ${cart
              .map(
                (item, index) => `
                <div class="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 group hover:border-yellow-500/30 transition-all">
                    <img src="${item.image}" class="w-10 h-10 object-cover rounded-lg" />
                    <div class="flex-1 min-w-0">
                        <p class="text-white text-xs font-bold truncate">${item.title}</p>
                        <p class="text-yellow-500 text-[10px] font-bold">${item.price}</p>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-gray-500 hover:text-red-500 transition text-lg">&times;</button>
                </div>
            `,
              )
              .join("")}
        </div>
      `;
      calcContainer.innerHTML =
        sideItemsListHTML + generateCalculationHTML(totalPrice, tapeNeeded);
    }
  }

  // মিনি কার্ট পপআপ রেন্ডার
  if (miniCartContent) {
    if (cart.length === 0) {
      miniCartContent.innerHTML = `<p class="text-center text-gray-500 py-10 italic">আপনার থলেতে কোনো ছেঁড়া টাকা নেই! কিছু তো কিনুন...</p>`;
    } else {
      miniCartContent.innerHTML = `
        <div class="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          ${cart
            .map(
              (item, index) => `
            <div class="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
              <img src="${item.image}" class="w-12 h-12 object-cover rounded-lg" />
              <div class="flex-1">
                <h4 class="text-white text-sm font-bold truncate">${item.title}</h4>
                <p class="text-yellow-500 text-xs">${item.price}</p>
              </div>
              <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-400 text-lg">&times;</button>
            </div>
          `,
            )
            .join("")}
        </div>
        <div class="mt-6 pt-6 border-t border-white/10">
          ${generateCalculationHTML(totalPrice, tapeNeeded)}
          <button onclick="buyNowAll()" class="w-full mt-4 bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-600 transition">সবগুলো একসাথে কিনুন</button>
        </div>
      `;
    }
  }
}

function generateCalculationHTML(totalPrice, tapeNeeded) {
  if (cart.length === 0) {
    return `
      <div class="text-center p-6 border-2 border-dashed border-white/10 rounded-2xl">
        <p class="text-gray-500 italic text-sm">কার্ট খালি! কিছু আবর্জনা যোগ করুন।</p>
      </div>
    `;
  }

  return `
    <div class="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-2xl space-y-4 animate-in slide-in-from-right duration-500">
        <h3 class="text-xl font-bold text-yellow-500 flex items-center gap-2">
            📊 আপনার আবর্জনার হিসাব
        </h3>
        <div class="space-y-2 text-sm">
            <div class="flex justify-between">
                <span class="text-gray-400">মোট আইটেম:</span>
                <span class="text-white font-bold">${enToBn(cart.length)} টি</span>
            </div>
            <div class="flex justify-between">
                <span class="text-gray-400">উৎস ভাইয়ের লাভ:</span>
                <span class="text-white font-bold">${enToBn(totalPrice)} ৳</span>
            </div>
            <div class="flex justify-between border-t border-white/10 pt-2">
                <span class="text-gray-400">প্রয়োজনীয় কস্টেপ:</span>
                <span class="text-blue-400 font-bold">${tapeNeeded} ইঞ্চি (প্রায়)</span>
            </div>
        </div>
        <p class="text-[10px] text-gray-500 italic mt-4">* কস্টেপ এবং আঠা নিজ দায়িত্বে কিনে নিতে হবে। উৎস ভাই শুধু নোট দেবেন।</p>
        <button onclick="clearCart()" class="w-full py-2 text-xs text-red-400 hover:text-red-300 transition">সব ডিলিট করুন</button>
    </div>
  `;
}

window.openMiniCart = function () {
  let miniCart = document.getElementById("mini-cart-modal");
  if (!miniCart) {
    miniCart = document.createElement("div");
    miniCart.id = "mini-cart-modal";
    miniCart.className = "fixed inset-0 z-[150] flex justify-end hidden";
    miniCart.innerHTML = `
      <div onclick="closeMiniCart()" class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div class="relative w-full max-w-sm bg-[#0f0f0f] border-l border-white/10 p-6 h-full shadow-2xl animate-in slide-in-from-right duration-300">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-white">🛍️ আবর্জনার থলি</h2>
          <button onclick="closeMiniCart()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>
        <div id="mini-cart-content"></div>
      </div>
    `;
    document.body.appendChild(miniCart);
  }
  miniCart.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  updateCartUI();
};

window.closeMiniCart = function () {
  const miniCart = document.getElementById("mini-cart-modal");
  if (miniCart) miniCart.classList.add("hidden");
  document.body.style.overflow = "auto";
};

window.removeFromCart = function (index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
};

window.buyNowAll = function () {
  alert(
    "উৎস ভাই খবর পাঠিয়েছেন: এতগুলো ছেঁড়া টাকা একসাথে পকেটে নিলে আপনার প্যান্ট ছিঁড়ে যেতে পারে! সাবধানে অর্ডার করুন।",
  );
  closeMiniCart();
};

window.addToCart = function (id) {
  const item = collectionData.find((i) => i.id === id);
  if (item) {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();

    // একটি ছোট ফানি এলার্ট
    const toast = document.createElement("div");
    toast.className =
      "fixed bottom-5 right-5 bg-yellow-500 text-black px-6 py-3 rounded-full font-bold z-[200] animate-bounce";
    toast.innerText = "সাবাস! আরও একটি ছেঁড়া টাকা পকেটে ভরলেন!";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
};

window.clearCart = function () {
  cart = [];
  localStorage.removeItem("cart");
  updateCartUI();
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
updateCartUI();
