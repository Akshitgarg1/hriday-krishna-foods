export interface FAQItem {
  id: string;
  category: "Products" | "Orders" | "Shipping" | "Payments" | "Returns" | "General";
  question: string;
  answer: string;
  questionHi?: string;
  answerHi?: string;
}

export const CATEGORY_LABELS: Record<string, { en: string; hi: string }> = {
  All: { en: "All", hi: "सभी" },
  Products: { en: "Products", hi: "उत्पाद" },
  Orders: { en: "Orders", hi: "ऑर्डर" },
  Shipping: { en: "Shipping", hi: "डिलीवरी व शिपिंग" },
  Payments: { en: "Payments", hi: "भुगतान" },
  Returns: { en: "Returns", hi: "वापसी व रिफंड" },
  General: { en: "General", hi: "सामान्य" },
};

export const FAQS: FAQItem[] = [
  // Products
  {
    id: "faq-p1",
    category: "Products",
    question: "What does '5+ Sut' grade mean?",
    questionHi: "'5+ सूत' ग्रेड का क्या अर्थ है?",
    answer:
      "'Sut' is the traditional indigenous Indian grading standard for fox nuts (makhana). A '5+ Sut' grade denotes jumbo, premium-expanded lotus seeds measuring 1/2 inch or larger in diameter. These seeds are hand-sorted to ensure uniform size, superior puffiness, and minimum hard kernel residues.",
    answerHi:
      "'सूत' मखाना छंटाई का पारंपरिक भारतीय पैमाना है। '5+ सूत' ग्रेड का अर्थ है जंबो आकार के बड़े, अच्छी तरह फूले हुए मखाने (1/2 इंच या उससे बड़े)। इन्हें हाथ से छांटकर एक समान आकार, सर्वोत्तम कुरकुरापन और न्यूनतम कठोर छिलका अवशेष सुनिश्चित किया जाता है।",
  },
  {
    id: "faq-p2",
    category: "Products",
    question: "Is Hriday Krishna Makhana chemically bleached or polished?",
    questionHi: "क्या ह्रदय कृष्णा मखाने में ब्लीच या केमिकल पॉलिश की जाती है?",
    answer:
      "Never. We follow a strict zero-chemical philosophy. Our fox nuts are popped traditionally over earthen firewood ovens and sun-dried naturally. No sulfur dioxide, artificial whiteners, or polishing agents are ever used.",
    answerHi:
      "बिल्कुल नहीं। हम पूर्णतः रसायन-मुक्त नीति का पालन करते हैं। हमारे मखाने मिट्टी की भट्टी पर पारंपरिक रूप से भुने और धूप में प्राकृतिक रूप से सुखाए जाते हैं। इसमें सल्फर डाइऑक्साइड, कृत्रिम सफेदी या पॉलिशिंग एजेंट कभी नहीं मिलाए जाते।",
  },
  {
    id: "faq-p3",
    category: "Products",
    question: "Where is this makhana sourced from?",
    questionHi: "यह मखाना कहां से मंगाया जाता है?",
    answer:
      "All our raw makhana is sourced directly from certified wetland cultivators in Runnisaidpur and surrounding wetland ponds of Sitamarhi, Bihar — the heartland of India's GI-recognized fox nut heritage.",
    answerHi:
      "हमारा संपूर्ण कच्चा मखाना सीधे बिहार के सीतामढ़ी ज़िले (रुन्नीसैदपुर) के प्राकृतिक तालाबों व पारंपरिक किसानों से सीधे प्राप्त किया जाता है, जो भारत के प्रसिद्ध जीआई-विरासत क्षेत्र का केंद्र है।",
  },
  {
    id: "faq-p4",
    category: "Products",
    question: "What is the shelf life of Raw Makhana?",
    questionHi: "कच्चे मखाने की शेल्फ लाइफ (ताज़गी) कितनी होती है?",
    answer:
      "When stored in a cool, dry place away from moisture and direct sunlight in our airtight resealable pouch, our raw makhana maintains peak freshness for up to 12 months from the date of packing.",
    answerHi:
      "हवा और नमी से बचाकर ठंडी, सूखी जगह में हमारे एयरटाइट ज़िपलॉक पाउच में रखने पर, हमारा मखाना पैकिंग तिथि से 12 महीने तक पूरी तरह कुरकुरा और ताज़ा बना रहता है।",
  },

  // Orders & Shipping
  {
    id: "faq-o1",
    category: "Orders",
    question: "What pack sizes are available?",
    questionHi: "मखाने के कौन-कौन से पैक साइज़ उपलब्ध हैं?",
    answer:
      "We offer 5 flexible sizes to suit your needs: 100g (trial pack), 200g, 250g (most popular), 500g (best value), and 1kg (mega saver value pack).",
    answerHi:
      "हम आपकी सुविधा के लिए 5 पैक साइज़ उपलब्ध कराते हैं: 100 ग्राम (ट्रायल पैक), 200 ग्राम, 250 ग्राम (सर्वाधिक लोकप्रिय), 500 ग्राम (बेस्ट वैल्यू) और 1 किग्रा (मेगा सेवर पैक)।",
  },
  {
    id: "faq-s1",
    category: "Shipping",
    question: "How long does delivery take across India?",
    questionHi: "भारत भर में डिलीवरी में कितना समय लगता है?",
    answer:
      "Orders are typically dispatched within 24 hours. Metro cities receive deliveries within 2 to 4 business days, while non-metro and regional locations take 3 to 6 business days via trusted courier partners.",
    answerHi:
      "ऑर्डर मिलने के 24 घंटे के भीतर डिस्पैच किया जाता है। मेट्रो शहरों में डिलीवरी 2 से 4 कार्य दिवसों में और अन्य क्षेत्रों में 3 से 6 कार्य दिवसों में सुरक्षित कूरियर से हो जाती है।",
  },
  {
    id: "faq-s2",
    category: "Shipping",
    question: "Are there any shipping charges?",
    questionHi: "क्या कोई डिलीवरी/शिपिंग शुल्क लगता है?",
    answer:
      "We provide FREE standard shipping on all prepaid orders of ₹499 and above. For orders below ₹499, a nominal shipping charge of ₹49 is applied.",
    answerHi:
      "₹499 और उससे अधिक के सभी ऑर्डर पर संपूर्ण भारत में मुफ़्त (FREE) डिलीवरी दी जाती है। ₹499 से कम के ऑर्डर पर ₹49 का सामान्य शिपिंग शुल्क लगता है।",
  },

  // Payments
  {
    id: "faq-pay1",
    category: "Payments",
    question: "What payment methods do you accept?",
    questionHi: "भुगतान के कौन-से तरीके स्वीकार किए जाते हैं?",
    answer:
      "We accept all major UPI apps (Google Pay, PhonePe, Paytm), Credit/Debit Cards (Visa, Mastercard, RuPay), Net Banking, and Cash on Delivery (COD) for eligible pincodes.",
    answerHi:
      "हम सभी प्रमुख यूपीआई ऐप्स (Google Pay, PhonePe, Paytm), क्रेडिट/डेबिट कार्ड (Visa, Mastercard, RuPay), नेट बैंकिंग और अधिकांश पिनकोडों पर कैश ऑन डिलीवरी (COD) स्वीकार करते हैं।",
  },
  {
    id: "faq-pay2",
    category: "Payments",
    question: "Do you offer Cash on Delivery (COD)?",
    questionHi: "क्या कैश ऑन डिलीवरी (COD) की सुविधा उपलब्ध है?",
    answer:
      "Yes! Cash on Delivery is available across major pincodes in India for orders up to ₹2,500.",
    answerHi:
      "हाँ! भारत के अधिकांश प्रमुख पिनकोडों पर ₹2,500 तक के ऑर्डर के लिए कैश ऑन डिलीवरी (COD) उपलब्ध है।",
  },

  // Returns & Refunds
  {
    id: "faq-r1",
    category: "Returns",
    question: "What is your return and refund policy?",
    questionHi: "वापसी और रिफंड की क्या नीति है?",
    answer:
      "Because makhana is a food item, we cannot accept returns once opened. However, if your package arrives damaged, tampered with, or defective, contact our customer helpline (+91 7654007494) within 7 days of delivery for an immediate, hassle-free replacement or full refund.",
    answerHi:
      "खाद्य उत्पाद होने के कारण पैकेट खुलने के बाद वापसी स्वीकार नहीं होती। लेकिन यदि पैकेट क्षतिग्रस्त, सील टूटी या ख़राब स्थिति में मिले, तो 7 दिनों के भीतर हमारी हेल्पलाइन (+91 7654007494) पर संपर्क करें; बिना किसी परेशानी के नया पैकेट या पूरा रिफंड दिया जाएगा।",
  },

  // General
  {
    id: "faq-g1",
    category: "General",
    question: "Do you handle bulk and wholesale B2B inquiries?",
    questionHi: "क्या आप थोक (होलसेल) और बल्क B2B ऑर्डर लेते हैं?",
    answer:
      "Yes! We supply commercial 10kg, 25kg, and 50kg sacks directly from our processing facility in Sitamarhi to retailers, sweet shops, hotels, and distributors across India. Please contact us directly at +91 7654007494 or care@hridaykrishnafoods.com for bulk pricing.",
    answerHi:
      "हाँ! हम सीतामढ़ी से 10 किग्रा, 25 किग्रा और 50 किग्रा की बोरियों में पूरे भारत के रिटेलर्स, मिष्ठान्न भंडार, होटल और वितरकों को थोक आपूर्ति करते हैं। थोक दरों के लिए +91 7654007494 या care@hridaykrishnafoods.com पर संपर्क करें।",
  },
];
