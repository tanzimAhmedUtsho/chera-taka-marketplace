// Sample Product Injection
const products = [
  {
    name: "৫০০ টাকার অর্ধেক",
    price: "৳ ২৫০",
    condition: "মুমূর্ষু",
    img: "https://images.unsplash.com/photo-1593672715438-d88a75639fac?q=80&w=400&h=250&auto=format&fit=crop",
    history:
      "এই নোটটি দিয়ে একবার সিংগারা কেনার চেষ্টা করা হয়েছিল। দোকানদার অর্ধেকটা রেখে বাকিটা ফেরত দিয়েছে। এটি এখন ত্যাগের প্রতীক।",
    fact: "এটি পকেটে থাকলে মানিব্যাগ অনেক হালকা লাগে, যা মানসিকভাবে শান্তি দেয়।",
  },
  {
    name: "২ টাকার ঐতিহাসিক ছেঁড়া নোট",
    price: "৳ ৫০",
    condition: "ইঁদুরে খাওয়া",
    img: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?q=80&w=400&h=250&auto=format&fit=crop",
    history:
      "এটি একটি লাইব্রেরির কোণায় পড়ে ছিল। ইঁদুর বাবাজি তার ডিনার হিসেবে এর ৬০% সাবাড় করেছেন। এটি এখন একটি দুর্লভ শিল্পকর্ম।",
    fact: "বাকি ৪০% দিয়ে আপনি এখনো ১টা চকলেট কেনার সাহস করতে পারেন (যদি দোকানদার পরিচিত হয়)।",
  },
  {
    name: "১০০০ টাকার টেপ লাগানো নোট",
    price: "৳ ৮০০",
    condition: "আইসিইউতে", // Corrected typo: "আইসিইউতে" instead of "আইসিইউতে"
    img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=400&h=250&auto=format&fit=crop",
    history:
      "এই নোটটি ১০ বার হাতবদল হয়েছে এবং প্রতিবারই নতুন এক স্তর কস্টেপ যোগ করা হয়েছে। এটি এখন বুলেটপ্রুফ হওয়ার পথে।",
    fact: "এটিতে এখন অরিজিনাল কাগজের চেয়ে প্লাস্টিকের পরিমাণ বেশি।",
  },
];

const productGrid = document.getElementById("product-grid");
if (productGrid) {
  products.forEach((p, index) => {
    productGrid.innerHTML += `
            <div class="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-yellow-500/50 transition group">
                <img src="${p.img}" class="w-full h-48 object-cover rounded-xl mb-4 grayscale group-hover:grayscale-0 transition" />
                <h3 class="text-xl font-bold">${p.name}</h3>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-yellow-500 font-bold">${p.price}</span>
                    <span class="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-md">${p.condition}</span>
                </div>
                <button onclick="openProductModal(${index})" class="w-full mt-4 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition">বিস্তারিত দেখুন</button>
            </div>
        `;
  });
}

// Sample Reviews Injection
const reviews = [
  {
    name: "হাসিব ফাটাকেষ্ট",
    comment:
      "আমার ইঁদুরে খাওয়া নোটগুলো এখানে বিক্রি করে আমি এখন নতুন নোটের মালিক! অবিশ্বাস্য!",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    rating: "⭐⭐⭐⭐⭐",
    isVerified: true,
  },
  {
    name: "পল্লব ক্ষতি ",
    comment:
      "কস্টেপ দিয়ে লাগানো ৫০০ টাকার নোট কেউ নিচ্ছিল না, কিন্তু এখানে ভালো দামে বিক্রি করলাম।",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    rating: "⭐⭐⭐⭐",
    isVerified: false,
  },
  {
    name: "শিরাপন",
    comment:
      "দুর্দান্ত সার্ভিস! ছেঁড়া টাকার এমন কদর আগে কোথাও দেখিনি। নোটের অবস্থা যতোই খারাপ হোক, তারা নেয়!",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    rating: "⭐⭐⭐⭐⭐",
    isVerified: false,
  },
];

const reviewsGrid = document.getElementById("reviews-grid");
if (reviewsGrid) {
  reviews.forEach((r) => {
    reviewsGrid.innerHTML += `
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 transition">
                <div class="flex items-center gap-4 mb-4">
                    <img src="${r.avatar}" class="w-16 h-16 rounded-full bg-yellow-500/20 object-cover" />
                    <div>
                        <h4 class="text-white font-bold flex items-center gap-2">
                            ${r.name}
                            ${r.isVerified ? '<span class="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full border border-blue-400/30 flex items-center gap-1">✓ Verified</span>' : ""}
                        </h4>
                        <div class="text-yellow-500 text-xs">${r.rating}</div>
                    </div>
                </div>
                <p class="text-gray-300 italic">"${r.comment}"</p>
            </div>
        `;
  });
}

// Contact Form Handling
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "আপনার প্রস্তাবটি আমাদের সার্ভারে পৌঁছেছে! এখন আব্বাকে জিজ্ঞেস করে তানজিম আহমেদ উৎসব আপনাকে ফোন দিবেন। (৭১টি ব্যবসা সামলাতে একটু সময় তো লাগবেই!)",
    );
    contactForm.reset();
  });
}

// VIP Modal Logic
const vipModal = document.getElementById("vip-modal");
let businessCounterInterval;

function openVIPModal() {
  vipModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // Start Father's Business Counter
  const counterElement = document.getElementById("business-counter");
  if (counterElement) {
    let current = 0;
    const target = 71;
    counterElement.innerText = current;

    clearInterval(businessCounterInterval);
    businessCounterInterval = setInterval(() => {
      if (current < target) {
        current++;
        counterElement.innerText = current;
      } else {
        clearInterval(businessCounterInterval);
      }
    }, 40);
  }
}

function closeVIPModal() {
  vipModal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Product Modal Logic
const productModal = document.getElementById("product-modal");

function openProductModal(index) {
  const p = products[index];
  const content = document.getElementById("modal-content");
  content.innerHTML = `
      <img src="${p.img}" class="w-full h-48 object-cover rounded-2xl mb-6" />
      <h2 class="text-2xl font-bold text-white mb-2">${p.name}</h2>
      <p class="text-yellow-500 font-bold mb-4">অবস্থা: ${p.condition}</p>
      <div class="text-left space-y-4 text-gray-300">
          <p><strong>ইতিহাস:</strong> ${p.history}</p>
          <p><strong>মজার তথ্য:</strong> ${p.fact}</p>
      </div>
      <button onclick="closeProductModal()" class="mt-8 w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition">ঠিক আছে, অনেক জ্ঞান হলো</button>
  `;
  productModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  productModal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

window.addEventListener("click", (e) => {
  if (e.target === vipModal) closeVIPModal();
  if (e.target === productModal) closeProductModal();
});

function showAlert() {
  alert("আপনার ছেঁড়া নোটের দাম জানতে আগে স্ক্যানার দিয়ে স্ক্যান করুন!");
}
