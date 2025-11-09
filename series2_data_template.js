// --- DATA SETUP: SERIES GROUP 2 (30 SERIES TEMPLATE) ---
// Template for Series Group 2 - Complete with 30 series

// Helper function to generate placeholders
const createPlaceholders = (start, count, seriesTitle) => {
    const episodes = [];
    const details = [];
    for (let i = start; i < start + count; i++) {
        // Placeholder ID for missing Rumble links
        episodes.push(`placeholder_e${i}`);
        details.push(`الحلقة ${i}: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل ${seriesTitle}.`);
    }
    return { episodes, details };
};

// Series Data - Series Group 2 (30 series)
// أضف 30 مسلسل هنا
const series2Data = [
    // Example: 
    // {
    //     id: 25,
    //     title: "مسلسل جديد 1",
    //     titleEn: "Yeni Dizi 1",
    //     image: "https://placeholder.com/image/series1.jpg",
    //     description: "وصف المسلسل الجديد",
    //     year: 2025,
    //     trailerId: "example1",
    //     isNew: true
    // },
    // ... باقي 29 مسلسل
];

// Export for global use
window.series2Data = series2Data;
window.createPlaceholders = createPlaceholders;

/* 
===== INSTRUCTIONS FOR ADDING NEW SERIES =====
لتضيف مسلسل جديد في المجموعة الثانية:

1. أضف object جديد في array series2Data
2. استخدم id بدءاً من 25 (لأن المجموعة الأولى انتهت بـ 24)
3. تأكد من أن البيانات مكتملة: title, titleEn, image, description, year, trailerId, isNew
4. تأكد من أن image URLs تعمل
5. أضف episodes و episodeDetails في ملف series2_descriptions.js
6. أضف embed URLs في ملفات series2_player1_embeds.js و series2_player2_embeds.js

مثال:
{
    id: 25,                              // ID فريد
    title: "عودة الناجي",                 // العنوان بالعربية
    titleEn: "Kahramanın Dönüşü",       // العنوان بالتركية
    image: "https://example.com/image.jpg", // رابط الصورة
    description: "قصة مؤثرة عن شخص نجح في التغلب على التحديات...", // الوصف
    year: 2025,                          // سنة الإنتاج
    trailerId: "example123",            // معرف التريلر
    isNew: true                          // جديد أم لا
}

===== DATA STRUCTURE GUIDE =====
- series2Data: البيانات الأساسية للمسلسلات (30 مسلسل)
- series2_descriptions.js: أوصاف الحلقات وأرقام الحلقات
- series2_player1_embeds.js: أكواد التضمين للمشغل الأول
- series2_player2_embeds.js: أكواد التضمين للمشغل الثاني

===== PAGINATION SYSTEM =====
- كل ملف seriesX_data.js يحتوي على 30 مسلسل كحد أقصى
- في نهاية كل 30 مسلسل، يظهر زر "المزيد من المسلسلات"
- عند النقر، يتم الانتقال لملف series(X+1)_data.js في صفحة منفصلة

===== LOCATION STRUCTURE =====
المجموعة 1: series1_data.js (index.html)
المجموعة 2: series2_data.js (series2.html)  
المجموعة 3: series3_data.js (series3.html)
... وهكذا

===== DEVELOPER NOTES =====
- IDs في series2 يجب أن تكون مستمرة من 25 إلى 54 (لـ 30 مسلسل)
- تأكد من أن كل مسلسل له episodes محددة في series2_descriptions.js
- تأكد من وجود embed URLs للمشغلين في الملفات المقابلة
- استخدم نفس structure للـ placeholder system
*/