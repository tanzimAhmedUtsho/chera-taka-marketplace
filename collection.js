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
    history:
      "এই নোটটি উৎস ভাইয়ের আব্বার ৭১তম ব্যবসার উদ্বোধনের দিন ড্রয়ারে চাপা পড়েছিল। এটি এখন ত্যাগের প্রতীক।",
    fact: "এটি পকেটে থাকলে উৎস ভাইয়ের হেলিকপ্টারের শব্দ শোনা যায় (সম্ভবত আপনার কানে সমস্যা)।",
  },
  {
    id: 2,
    title: "ইঁদুরে খাওয়া ২ টাকা",
    price: "আলোচনা সাপেক্ষে",
    numericPrice: 0, // Negotiable treated as baseline
    img: "https://images.unsplash.com/photo-1589758438368-213672e39892?q=80&w=400",
    desc: "ঐতিহাসিক ইঁদুরে খাওয়া ডিজাইন, দুর্লভ সংগ্রহ।",
    category: "ইঁদুরে খাওয়া",
    history:
      "এটি একটি লাইব্রেরির কোণায় পড়ে ছিল। ইঁদুর বাবাজি তার ডিনার হিসেবে এর ৬০% সাবাড় করেছেন।",
    fact: "বাকি ৪০% দিয়ে আপনি এখনো ১টা চকলেট কেনার সাহস করতে পারেন (যদি দোকানদার পরিচিত হয়)।",
  },
  {
    id: 3,
    title: "পুরানো ১ টাকার কয়েন",
    price: "৫০০ টাকা",
    numericPrice: 500,
    img: "https://images.unsplash.com/photo-1625217527288-93919c99650a?q=80&w=400",
    desc: "১৯৯০ সালের অরিজিনাল স্টিল কয়েন।",
    category: "পুরানো",
    history:
      "১৯৯০ সালের এই কয়েনটি একবার সাগরে পড়ে গিয়েছিল। এক মাছ ধরার জালে এটি উঠে আসে।",
    fact: "এতে এখনো সাগরের লোনা পানির গন্ধ পাওয়া যায় (হয়তো আপনার কল্পনা)।",
  },
  {
    id: 4,
    title: "১০ টাকার ময়লা নোট",
    price: "১১০ টাকা",
    numericPrice: 110,
    img: "https://images.unsplash.com/photo-1594913366159-1832ffef8511?q=80&w=400",
    desc: "সম্পূর্ণ কালো হয়ে যাওয়া ১০০% খাঁটি ময়লা নোট।",
    category: "ছিঁড়া",
    history:
      "এটি একটি মানিব্যাগে টানা ৫ বছর বন্দি ছিল। আলোর মুখ না দেখে এটি কালো হয়ে গিয়েছে।",
    fact: "এর ময়লা দিয়ে ছোটখাটো একটি বাগান করা সম্ভব।",
  },
  {
    id: 5,
    title: "পুড়ে যাওয়া ১০০ টাকা",
    price: "৩০০ টাকা",
    numericPrice: 300,
    img: "https://images.unsplash.com/photo-1633158829585-23bb8f628932?q=80&w=400",
    desc: "আগুনের ছোঁয়ায় শৈল্পিক রূপ পাওয়া নোট।",
    category: "ছিঁড়া",
    history: "রান্নাঘরে গ্যাসের চুলার পাশে এটি অসাবধানতাবশত পড়ে গিয়েছিল।",
    fact: "এটি স্পর্শ করলে এখনো হালকা গরম অনুভূত হয় (হিটার বন্ধ করুন)।",
  },
  {
    id: 6,
    title: "ধোলাই করা ৫০০ টাকা",
    price: "৫৫০ টাকা",
    numericPrice: 550,
    img: "https://images.unsplash.com/photo-1580519324649-c50de8176c5c?q=80&w=400",
    desc: "প্যান্টের পকেটে রেখে ওয়াশিং মেশিনে ধোয়া ধবধবে সাদা নোট।",
    category: "ছিঁড়া",
    history:
      "লন্ড্রি থেকে আসার পর এই নোটটি তার সব রং হারিয়ে সাদা ধবধবে হয়ে গেছে।",
    fact: "এটি এখন এত পরিষ্কার যে এতে নিজের মুখ দেখা যায়।",
  },
  {
    id: 7,
    title: "নাম লেখা ১০ টাকার নোট",
    price: "১০০ টাকা",
    numericPrice: 100,
    img: "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?q=80&w=400",
    desc: "কারো হৃদয়ের নাম লেখা, প্রেমের এক অনন্য নিদর্শন।",
    category: "পুরানো",
    history: "কারো প্রিয়তমার নাম লেখা এই নোটটি বিরহের এক জীবন্ত দলিল।",
    fact: "নোটটির দিকে তাকালে মন খারাপ হওয়ার সম্ভাবনা ১০০%।",
  },
  {
    id: 8,
    title: "ছিঁড়ে যাওয়া ৫ টাকার কয়েন",
    price: "অমূল্য",
    numericPrice: 1000000,
    img: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?q=80&w=400",
    desc: "কয়েন কীভাবে ছিঁড়লো তা একটি রহস্য।",
    category: "ছিঁড়া",
    history:
      "উৎস ভাই এটি কুড়িয়ে পেয়েছিলেন। কয়েন কীভাবে ছিঁড়তে পারে, তা নিয়ে তিনি এখনো গবেষণা করছেন।",
    fact: "এটি নাড়াচাড়া করলে অদ্ভুত এক ধাতব শব্দ পাওয়া যায়।",
  },
  {
    id: 9,
    title: "পুরানো ১০ টাকার বান্ডিল",
    price: "২০০০ টাকা",
    numericPrice: 2000,
    img: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?q=80&w=400",
    desc: "উইপোকার আক্রমণে ঝাঝরা হয়ে যাওয়া আস্ত বান্ডিল।",
    category: "ইঁদুরে খাওয়া",
    history:
      "একটি ড্রয়ারে ৩ বছর পড়ে থাকার পর উইপোকা এর পুরো স্বাদ আস্বাদন করেছে।",
    fact: "এটি এখন জাফরি কাটা নকশার মত দেখায়।",
  },
  {
    id: 10,
    title: "রং মাখা ২০ টাকা",
    price: "৪০ টাকা",
    numericPrice: 40,
    img: "https://images.unsplash.com/photo-1594913366159-1832ffef8511?q=80&w=400",
    desc: "হোলি খেলার সময় পকেটে থাকা রঙিন স্মৃতির নোট।",
    category: "ছিঁড়া",
    history:
      "উৎস ভাই হোলি খেলার সময় এই নোটটি পকেটে ছিল। রঙের ছোঁয়ায় এটি রঙিন হয়েছে।",
    fact: "এটি আপনার পকেটে থাকলে আপনার মানিব্যাগও রঙিন হয়ে যাবে।",
  },
  {
    id: 11,
    title: "লন্ডনের চা-দাগ লাগা ৫ পাউন্ড",
    price: "১৮০০ টাকা",
    numericPrice: 1800,
    img: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=400",
    desc: "ব্রিটিশ চায়ের কাপে ডুবে আন্তর্জাতিক মর্যাদা পাওয়া এক ক্লান্ত নোট।",
    category: "ইন্টারন্যাশনাল",
    history:
      "নোটটি নাকি এক লন্ডন ক্যাফেতে বিল দিতে গিয়ে চায়ের কাপে পড়ে যায়। তারপর থেকে এটি নিজেকে 'Royal Milk Tea Edition' বলে পরিচয় দেয়।",
    fact: "এটি শুকালে হালকা বিস্কুটের গন্ধ আসে, কিন্তু কাস্টমস অফিসার সেটাকে ঐতিহ্য বলেছেন।",
  },
  {
    id: 12,
    title: "দুবাইয়ের বালু ঢোকা ১ দিরহাম",
    price: "৭৫০ টাকা",
    numericPrice: 750,
    img: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?q=80&w=400",
    desc: "মরুভূমি-স্বাক্ষরিত কয়েন, ঝাঁকালেই পর্যটকের আত্মবিশ্বাস শোনা যায়।",
    category: "ইন্টারন্যাশনাল",
    history:
      "এক পর্যটক সেলফি তুলতে গিয়ে কয়েনটি বালিতে হারিয়ে ফেলেন। তিন দিন পর এটি উদ্ধার হয় এবং এখন নিজেকে 'Desert VIP' ভাবে।",
    fact: "কয়েনটি হাতে নিলে মনে হবে বাজেট কম, কিন্তু ভibe আন্তর্জাতিক।",
  },
  {
    id: 13,
    title: "নিউইয়র্ক সাবওয়ে-চাপা ১ ডলার",
    price: "আলোচনা সাপেক্ষে",
    numericPrice: 0,
    img: "https://images.unsplash.com/photo-1565373677928-90e963765eac?q=80&w=400",
    desc: "সাবওয়ের দরজায় চাপা পড়ে ফ্ল্যাট হয়ে যাওয়া এক সাহসী ডলার।",
    category: "ইন্টারন্যাশনাল",
    history:
      "টাইমস স্কয়ারে টিপ হিসেবে যাওয়ার কথা ছিল, কিন্তু সাবওয়ে দরজা তাকে আধুনিক আর্ট বানিয়ে দেয়। এখন সে নিজেকে ওয়াল স্ট্রিটের আহত সৈনিক বলে।",
    fact: "এটি এত ফ্ল্যাট যে মানিব্যাগে রাখলে অন্য নোটগুলোও সোজা হয়ে বসে।",
  },
  {
    id: 14,
    title: "জাপানের ভেন্ডিং-মেশিনে আটকে যাওয়া ইয়েন",
    price: "অমূল্য",
    numericPrice: 1000000,
    img: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=400",
    desc: "মেশিন তাকে নেয়নি, ফেরতও দেয়নি; তাই এখন সে দার্শনিক।",
    category: "ইন্টারন্যাশনাল",
    history:
      "টোকিওর এক ভেন্ডিং মেশিনে কয়েনটি আটকে ছিল ৪২ মিনিট। এরপর থেকে এটি যেকোনো সিদ্ধান্ত নেওয়ার আগে 'processing...' বলে।",
    fact: "এটির আন্তর্জাতিক সার্টিফিকেটে লেখা আছে: 'Rejected by machine, accepted by museum.'",
  },
];

let gridContainer, searchInput, categoryFilter, sortOrder, resultsCount;
let cartItemsContainer, cartCountLabel, cartTotalLabel, navTotalLabel;

function initElements() {
  gridContainer = document.getElementById("collection-grid");
  searchInput = document.getElementById("searchInput");
  categoryFilter = document.getElementById("categoryFilter");
  sortOrder = document.getElementById("sortOrder");
  resultsCount = document.getElementById("results-count");
  cartItemsContainer = document.getElementById("cart-items");
  cartCountLabel = document.getElementById("cart-count");
  cartTotalLabel = document.getElementById("cart-total");
  navTotalLabel = document.getElementById("nav-total");
}

let cart = [];
let currentHaggleItem = null;

function isNegotiableItem(item) {
  return item && (item.numericPrice === 0 || item.numericPrice >= 1000000);
}

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
                <div class="flex gap-2">
                   <button onclick="showDetails(${item.id})" class="flex-1 py-3 bg-white/5 border border-white/10 text-white text-xs font-bold rounded-xl hover:bg-white/10 transition-all">বিস্তারিত</button>
                   <button onclick="addToCart(${item.id})" class="flex-[2] py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 text-orange-500 text-sm font-bold rounded-xl hover:from-orange-500 hover:to-red-600 hover:text-black hover:border-transparent transition-all duration-500 shadow-lg shadow-orange-500/5 flex items-center justify-center gap-2">
                      <span>🛒</span> কার্টে ভরুন
                   </button>
                </div>
                <button onclick="openHaggleModal(${item.id})" class="mt-3 w-full py-3 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-black rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                  <span>&#129309;</span> &#2470;&#2494;&#2478;&#2494;&#2470;&#2494;&#2478;&#2495; &#2453;&#2480;&#2497;&#2472;
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

function showDetails(id) {
  const item = collections.find((c) => c.id === Number(id));
  const modal = document.getElementById("details-modal");
  const content = document.getElementById("details-content");
  const addBtn = document.getElementById("modal-add-btn");

  if (content)
    content.innerHTML = `
    <img src="${item.img}" class="w-full h-64 object-cover rounded-2xl mb-6 shadow-xl border border-white/10">
    <h2 class="text-2xl font-bold text-white mb-4">${item.title}</h2>
    <div class="text-left space-y-4">
       <p class="text-gray-300 text-base leading-relaxed p-4 bg-white/5 rounded-xl border border-white/5"><span class="text-orange-500 font-bold block mb-1 text-lg">📜 এই নোটের করুণ ইতিহাস:</span> ${item.history || item.desc}</p>
       <p class="text-gray-300 text-base leading-relaxed p-4 bg-white/5 rounded-xl border border-white/5"><span class="text-yellow-500 font-bold block mb-1 text-lg">✨ আপনি কি জানেন?</span> ${item.fact || "এটি একটি অত্যন্ত দুর্লভ নোট যা দেখলে চোখ জুড়িয়ে যায়!"}</p>
    </div>
    ${
      item.price === "অমূল্য" || item.price === "আলোচনা সাপেক্ষে"
        ? `
      <div id="haggle-trigger" class="mt-6 p-5 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-2xl text-center animate-pulse hover:animate-none transition">
        <p class="text-yellow-500 text-sm font-bold mb-3">🤝 উৎস ভাই এটি সহজে ছাড়বেন না! একটু দামাদামি করবেন?</p>
        <button onclick="openHaggleModal(${item.id})" class="px-8 py-2 bg-yellow-500 text-black text-xs font-black rounded-full hover:bg-yellow-400 transition shadow-lg uppercase">উৎস ভাইয়ের সাথে ডিল করুন</button>
      </div>
    `
        : ""
    }
  `;

  if (addBtn)
    addBtn.onclick = () => {
      addToCart(id);
      closeDetailsModal();
    };
  if (modal) modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeDetailsModal() {
  document.getElementById("details-modal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function addToCart(id) {
  const item = collections.find((c) => c.id === Number(id));
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

  const formattedTotal = total > 0 ? `৳ ${total}` : "অমূল্য!";
  if (cartTotalLabel) cartTotalLabel.innerText = formattedTotal;
  if (navTotalLabel) navTotalLabel.innerText = formattedTotal;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function openHaggleModal(id) {
  const item = collections.find((c) => c.id === Number(id));
  if (!item) {
    return;
  }
  currentHaggleItem = item;
  const detailsModal = document.getElementById("details-modal");
  if (detailsModal && !detailsModal.classList.contains("hidden")) {
    closeDetailsModal();
  }

  const modal = document.getElementById("haggle-modal");
  const chat = document.getElementById("haggle-chat");
  const offerInput = document.getElementById("haggle-offer");

  if (modal && chat) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    modal.setAttribute("aria-hidden", "false");
    chat.innerHTML = `<p class="text-orange-400 font-bold">উৎস ভাই: "${item.title}" এর জন্য কী অফার দিচ্ছ ছোট ভাই? মনে রাইখো, আব্বার ৭১ টা ব্যবসা কিন্তু এর ওপরই খাড়া!</p>`;
    if (offerInput) {
      offerInput.value = "";
      setTimeout(() => offerInput.focus(), 80);
    }
    document.body.style.overflow = "hidden";
  }
}

function closeHaggleModal() {
  const modal = document.getElementById("haggle-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    modal.setAttribute("aria-hidden", "true");
  }
  document.body.style.overflow = "auto";
  const offerInput = document.getElementById("haggle-offer");
  if (offerInput) offerInput.value = "";
}

function submitHaggle() {
  const offerInput = document.getElementById("haggle-offer");
  const chat = document.getElementById("haggle-chat");

  if (!chat) {
    return;
  }

  const offerValue = offerInput ? Number(offerInput.value) : 0;

  if (isNaN(offerValue) || offerValue <= 0) {
    chat.innerHTML += `<p class="text-red-400">সিস্টেম: ফাইজলামি বন্ধ করেন, একটা আসল দাম বলেন!</p>`;
    chat.scrollTop = chat.scrollHeight;
    return;
  }

  const responses = [
    `উৎস ভাই: ${offerValue} টাকা? হা হা! এই টাকায় আমার হেলিকপটারে তেলও হয় না। ৫ কোটি নিয়ে এসো, কথা হবে।`,
    `উৎস ভাই: আব্বাকে বললাম, তিনি হাসতে হাসতে ৭২ নম্বর ব্যবসা খোলার প্ল্যান ক্যানসেল করে দিলেন। আরও বেশি লাগবে!`,
    `উৎস ভাই: ডিল সম্ভব না। তবে তুমি চাইলে কস্টেপটা ${offerValue} টাকায় কিনতে পারো। নোটটা আমিই রাখছি।`,
    `উৎস ভাই: তোমার অফার শুনে উৎস ভাই হেলিকপটারে উঠে পড়েছেন। পালানোর জায়গা খুঁজো! 🚁`,
    `উৎস ভাই: এই নোট টা স্পেশাল। ${offerValue} টাকা দিয়ে তুমি শুধু এর ডেসক্রিপশনটা পড়তে পারবা। 🤣`,
  ];

  const randomResponse =
    responses[Math.floor(Math.random() * responses.length)];
  chat.innerHTML += `<div class="text-right"><span class="bg-white/5 px-3 py-1 rounded-lg text-white inline-block">আপনি: ${offerValue} ৳</span></div>`;
  chat.innerHTML += `<p class="text-orange-400 font-bold">${randomResponse}</p>`;

  chat.scrollTop = chat.scrollHeight;
  if (offerInput) {
    offerInput.value = "";
    offerInput.focus();
  }
}

function openCheckoutModal() {
  document.getElementById("checkout-modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function submitCheckoutForm(e) {
  e.preventDefault();
  const funnyResponses = [
    "অর্ডার কনফার্ম! উৎস ভাই এখনই ৭১ নম্বর ব্যবসা থেকে হেলিকপ্টার বের করছেন। কফি রেডি রাখেন!",
    "আপনার অর্ডারটি উৎস ভাইয়ের আব্বা স্বয়ং এপ্রুভ করেছেন। হেলিপ্যাডে সিগন্যাল দিতে থাকুন!",
    "কস্টেপ লাগানো নোট দিয়ে পেমেন্ট করার জন্য আপনাকে 'বছরের সেরা মিতব্যয়ী' উপাধি দেওয়া হলো। 🏅",
    "অর্ডার সফল! আপনার পেমেন্ট গেটওয়েতে কস্টেপ শনাক্ত হয়েছে, উৎস ভাই খুব খুশি!",
  ];
  alert(funnyResponses[Math.floor(Math.random() * funnyResponses.length)]);
  cart = [];
  updateCartUI();
  closeCheckoutModal();
  toggleCart();
}

function checkoutCart() {
  if (cart.length === 0) {
    alert(
      "আরে ভাই! খালি থলি নিয়ে চেকআউট? উৎস ভাই জানলে হেলিকপ্টার নিয়ে এসে আপনার মানিব্যাগ চেক করবেন। আগে কয়েকটা ছেঁড়া নোট কার্টে ভরুন!",
    );
    return;
  }
  openCheckoutModal();
}

function filterCollections() {
  if (!searchInput) initElements();
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const selectedCategory = categoryFilter ? categoryFilter.value : "all";
  const selectedSort = sortOrder ? sortOrder.value : "default";

  let filtered = collections.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm) ||
      item.desc.toLowerCase().includes(searchTerm);
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

// Live Chat Logic
function toggleLiveChat() {
  const chatWindow = document.getElementById("live-chat-window");
  if (chatWindow) {
    chatWindow.classList.toggle("hidden");
    if (!chatWindow.classList.contains("hidden")) {
      document.getElementById("live-chat-input")?.focus();
    }
  }
}

function sendLiveChatMessage() {
  const input = document.getElementById("live-chat-input");
  const chatMessages = document.getElementById("live-chat-messages");
  if (!input || !chatMessages) return;

  const msg = input.value.trim();
  if (!msg) return;

  // User Message
  chatMessages.innerHTML += `
    <div class="flex justify-end">
      <div class="bg-orange-500 text-black rounded-2xl rounded-tr-none p-3 max-w-[85%] font-medium">
        ${msg}
      </div>
    </div>
  `;

  input.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Show Typing status
  const typingId = "typing-" + Date.now();
  chatMessages.innerHTML += `
    <div id="${typingId}" class="flex justify-start">
      <div class="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 text-gray-500 italic">
        উৎস ভাই টাইপ করছেন...
      </div>
    </div>
  `;
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Funny Replies from Utsho Bhai with local & trendy humor
  const funnyReplies = [
    "আরে ভাই, একটু ওয়েট করেন। আব্বা নতুন একটা ব্যবসা খুলল, রিবন কাটতে যাচ্ছি। ✂️",
    "আপনার মেসেজটা এতই ভারী যে আমার হেলিকপ্টারে তেল শেষ হয়ে গেছে! 🚁",
    "কস্টেপ লাগানো নোট কি আপনার কাছে আছে? থাকলে বিকাশে ছবি পাঠান! 😂",
    "আমি এখন দুবাইয়ের বুর্জ খলিফার ওপর বসে টাকা শুকাইতেছি। পরে কথা হবে। 🏜️",
    "সালামের উত্তর নিয়েছি, এখন ৫০০ টাকার একটা ছেঁড়া নোট কুরিয়ার করেন।",
    "আপনার সাথে কথা বলতে বলতে আব্বা ৭২ নম্বর ব্যবসার প্ল্যান পাস করে দিলেন! 📈",
    "ভাই, ইঁদুরে খাওয়া নোটের কথা বললে মেসেজ দেন, নয়তো হেলিকপ্টারের আওয়াজে কিছু শুনতেছি না!",
    "আপনার নোটের অবস্থা তো আমার এক্সের হার্টের চেয়েও বেশি ভাঙাচোরা! 💔",
    "আব্বাকে বললাম আপনার কথা, উনি খুশিতে ৭২ নম্বর ব্যবসার নাম আপনার নামে রাখতে চাইলেন! 🏢",
    "এতক্ষণ পর একটা জুতসই মেসেজ দিলেন! উৎস ভাই এখন হেলিকপ্টার নিয়ে আপনার ছাদে ল্যান্ড করতেছে। 🚁",
    "ভাই, এই ছেঁড়া নোট নিয়ে বাজারে গেলে তো গণধোলাই কনফার্ম! তার চেয়ে উৎস ভাইকে দিয়ে দেন। 🤕",
    "আপনার নোটটা নাকি ইলন মাস্ক কিনতে চাইছে, কস্টেপটা একটু ভালো দেখে লাগান! 🛰️",
    "আপনার অফার শুনে আমার পোষা বিড়ালটাও হাসতে হাসতে ৭৩ নম্বর ব্যবসার বুদ্ধি দিচ্ছে। 🐱",
    "ভাই, আমি এখন দুবাই থেকে সোনার কস্টেপ কিনতেছি আপনার নোটের জন্য। একটু লাইনে থাকেন। 🇦🇪",
    "আপনার মেসেজ সিন করতে করতে আব্বা আরও দুইটা নতুন কোম্পানি খুলে ফেললেন! টাইম ইজ মানি ব্রো! ⏳",
    "ভাই, এই নোট দিয়ে তো এখন আর বাদামও পাওয়া যাবে না, উৎস ভাই থাকতে ভয় কি? 🥜",
    "আপনার চ্যাট দেখে মনে হচ্ছে আপনিও আমার মত বড় ব্যবসায়ী হতে চান। কিন্তু আব্বার পারমিশন লাগবে! 💼",
    "আপনার নোটের কন্ডিশন তো আমার হেলিকপটারের এসির চেয়েও ঠান্ডা! ❄️",
    "উৎস ভাইয়ের সাথে চ্যাট করতেছেন, ভাবটাই আলাদা! আব্বা শুনলে খুশিই হবে। 😎",
    "এই ছেঁড়া নোটের বাজারে আপনিই তো আসল 'ভাইব'! ডিল হবে হেলিকপ্টারে। 🤙",
  ];

  setTimeout(() => {
    const typingElem = document.getElementById(typingId);
    if (typingElem) typingElem.remove();

    const randomReply =
      funnyReplies[Math.floor(Math.random() * funnyReplies.length)];
    chatMessages.innerHTML += `
      <div class="flex justify-start">
        <div class="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 text-gray-300 max-w-[85%]">
          ${randomReply}
        </div>
      </div>
    `;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1500);
}

document.addEventListener("DOMContentLoaded", () => {
  initElements();
  searchInput?.addEventListener("input", filterCollections);
  categoryFilter?.addEventListener("change", filterCollections);
  sortOrder?.addEventListener("change", filterCollections);

  // Live Chat Enter Key Listener
  document
    .getElementById("live-chat-input")
    ?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        sendLiveChatMessage();
      }
    });

  document.getElementById("haggle-offer")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitHaggle();
    }
  });
  displayCollections();
});
