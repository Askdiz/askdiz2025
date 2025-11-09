// --- SERIES GROUP 2 - PLAYER 1 EMBEDS (30 SERIES) ---
// Template for Series Group 2 - AşkDiz Player embeds

const series2Player1Embeds = {
    // 25: { // Example series
    //     e1: "https://3esk.onl/embed/example1",
    //     e2: "https://3esk.onl/embed/example2",
    //     e3: "https://3esk.onl/embed/example3"
    // },
    // 26: {
    //     e1: "https://3esk.onl/embed/example4",
    //     e2: "https://3esk.onl/embed/example5"
    // },
    // ... باقي 28 مسلسل (من 25 إلى 54)
};

// Export for global use
window.series2Player1Embeds = series2Player1Embeds;

/*
===== INSTRUCTIONS FOR PLAYER 1 EMBEDS =====

1. لكل مسلسل في المجموعة الثانية (ID 25-54)
2. استخدم معرف المسلسل كـ key في object
3. لكل episode، أضف:
   e1: URL للمشغل الأول
   e2: URL للمشغل الأول  
   e3: URL للمشغل الأول
   ... وهكذا

4. مثال كامل:
   const series2Player1Embeds = {
       25: {
           e1: "https://3esk.onl/embed/v3lA101",  // الحلقة 1
           e2: "https://3esk.onl/embed/v3lA102",  // الحلقة 2
           e3: "https://3esk.onl/embed/v3lA103"   // الحلقة 3
       },
       26: {
           e1: "https://3esk.onl/embed/v3lA201",
           e2: "https://3esk.onl/embed/v3lA202"
       }
   };

5. الملف المقابل للمشغل الثاني: series2_player2_embeds.js
   - نفس structure لكن URLs مختلفة (Rumble)

===== ID RANGE FOR SERIES 2 =====
- Series 2 IDs: 25, 26, 27, ... 54 (30 series total)
- Each series needs e1, e2, e3, ... up to number of episodes

===== URL PATTERNS =====
- AşkDiz Player: https://3esk.onl/embed/{episodeId}
- Rumble Player: https://rumble.com/embed/{episodeId}

===== EPISODE ID CONVENTIONS =====
استخدم نظام consistent:
- Series 2: v3lA1xx (A1 = series 2)
- Series 3: v3lB1xx (B1 = series 3)
- Series 4: v3lC1xx (C1 = series 4)

أو استخدم:
- s2e001, s2e002, s2e003 (s2 = series 2)
- s3e001, s3e002, s3e003 (s3 = series 3)

===== VALIDATION =====
- تأكد من أن كل episode له URL صحيح
- URLs يجب أن تكون accessible
- اختبر كل URL قبل إضافته
- تأكد من أن episode count يطابق series2_descriptions.js

===== PLACES TO UPDATE =====
1. series1_player1_embeds.js - Series 1 (Done)
2. series2_player1_embeds.js - Series 2 (This file)
3. series3_player1_embeds.js - Series 3 (Future)
4. series4_player1_embeds.js - Series 4 (Future)
... وهكذا

===== PARTNER FILE =====
series2_player2_embeds.js (Rumble Player)
- نفس structure
- URLs مختلفة للمشغل الثاني
- نفس episode numbers
*/