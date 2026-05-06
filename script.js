// Sample Product Injection
const products = [
  {
    name: "৫০০ টাকার অর্ধেক",
    price: "৳ ২৫০",
    condition: "মুমূর্ষু",
    img: "/image/500 tk.png",
  },
  {
    name: "২ টাকার ঐতিহাসিক ছেঁড়া নোট",
    price: "৳ ৫০",
    condition: "ইঁদুরে খাওয়া",
    img: "https://images.unsplash.com/photo-1621932953986-15fcf084da0f?q=80&w=400&h=250&auto=format&fit=crop",
  },
  {
    name: "১০০০ টাকার টেপ লাগানো নোট",
    price: "৳ ৮০০",
    condition: "আইসিইউতে",
    img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=400&h=250&auto=format&fit=crop",
  },
];

const productGrid = document.getElementById("product-grid");
if (productGrid) {
  products.forEach((p) => {
    productGrid.innerHTML += `
            <div class="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-yellow-500/50 transition group">
                <img src="${p.img}" class="w-full h-48 object-cover rounded-xl mb-4 grayscale group-hover:grayscale-0 transition" />
                <h3 class="text-xl font-bold">${p.name}</h3>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-yellow-500 font-bold">${p.price}</span>
                    <span class="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-md">${p.condition}</span>
                </div>
                <button class="w-full mt-4 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition">বিস্তারিত দেখুন</button>
            </div>
        `;
  });
}

// Sample Reviews Injection
const reviews = [
  {
    name: "আবুল কাশেম",
    comment:
      "আমার ইঁদুরে খাওয়া নোটগুলো এখানে বিক্রি করে আমি এখন নতুন নোটের মালিক! অবিশ্বাস্য!",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Kashem",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "জরিনা বেগম",
    comment:
      "কস্টেপ দিয়ে লাগানো ৫০০ টাকার নোট কেউ নিচ্ছিল না, কিন্তু এখানে ভালো দামে বিক্রি করলাম।",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Zorina",
    rating: "⭐⭐⭐⭐",
  },
  {
    name: "করিম মিয়া",
    comment:
      "দুর্দান্ত সার্ভিস! ছেঁড়া টাকার এমন কদর আগে কোথাও দেখিনি। নোটের অবস্থা যতোই খারাপ হোক, তারা নেয়!",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Karim",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const reviewsGrid = document.getElementById("reviews-grid");
if (reviewsGrid) {
  reviews.forEach((r) => {
    reviewsGrid.innerHTML += `
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 transition">
                <div class="flex items-center gap-4 mb-4">
                    <img src="${r.avatar}" class="w-12 h-12 rounded-full bg-yellow-500/20" />
                    <div>
                        <h4 class="text-white font-bold">${r.name}</h4>
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

function openVIPModal() {
  vipModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeVIPModal() {
  vipModal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

window.addEventListener("click", (e) => {
  if (e.target === vipModal) closeVIPModal();
});

function showAlert() {
  alert("আপনার ছেঁড়া নোটের দাম জানতে আগে স্ক্যানার দিয়ে স্ক্যান করুন!");
}
