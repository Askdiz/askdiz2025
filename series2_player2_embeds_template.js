// --- SERIES GROUP 2 - PLAYER 2 EMBEDS (30 SERIES) ---
// Template for Series Group 2 - Rumble Player embeds

const series2Player2Embeds = {
    // 25: { // Example series
    //     e1: "https://rumble.com/embed/rumble1",
    //     e2: "https://rumble.com/embed/rumble2",
    //     e3: "https://rumble.com/embed/rumble3"
    // },
    // 26: {
    //     e1: "https://rumble.com/embed/rumble4",
    //     e2: "https://rumble.com/embed/rumble5"
    // },
    // ... باقي 28 مسلسل (من 25 إلى 54)
};

// Export for global use
window.series2Player2Embeds = series2Player2Embeds;

/*
===== INSTRUCTIONS FOR PLAYER 2 EMBEDS =====

1. لكل مسلسل في المجموعة الثانية (ID 25-54)
2. استخدم معرف المسلسل كـ key في object
3. لكل episode، أضف:
   e1: URL للمشغل الثاني (Rumble)
   e2: URL للمشغل الثاني (Rumble)
   e3: URL للمشغل الثاني (Rumble)
   ... وهكذا

4. مثال كامل:
   const series2Player2Embeds = {
       25: {
           e1: "https://rumble.com/embed/rumbleA101",  // الحلقة 1
           e2: "https://rumble.com/embed/rumbleA102",  // الحلقة 2
           e3: "https://rumble.com/embed/rumbleA103"   // الحلقة 3
       },
       26: {
           e1: "https://rumble.com/embed/rumbleA201",
           e2: "https://rumble.com/embed/rumbleA202"
       }
   };

5. هذا الملف مرتبط مع:
   - series2_player1_embeds.js (AşkDiz Player)
   - series2_descriptions.js (episode details)
   - series2_data.js (series metadata)

===== ID RANGE FOR SERIES 2 =====
- Series 2 IDs: 25, 26, 27, ... 54 (30 series total)
- Each series needs e1, e2, e3, ... up to number of episodes
- IDs يجب أن تطابق series1_player1_embeds.js

===== RUMBLE EMBED FORMAT =====
- Rumble Player: https://rumble.com/embed/{videoId}
- Video ID يمكن أن يكون different عن AşkDiz ID
- يمكن استخدام نفس ID إذا كان متوفر في كلا المشغلين

===== CROSS-REFERENCE WITH PLAYER 1 =====
- episode e1 في player1 يجب أن يطابق e1 في player2
- episode count يجب أن يكون identical
- نفس episode numbering system

===== URL PATTERNS FOR RUMBLE =====
- Base URL: https://rumble.com/embed/{videoId}
- Video ID:rumbleXXX أو Rumble Version من original embed
- يمكن استخدام original embed ID إذا كان متوفر

===== VALIDATION CHECKLIST =====
✓ كل series ID موجود في series2_data.js
✓ كل episode له embed في player1_embeds.js
✓ episode count يطابق series2_descriptions.js
✓ URLs are accessible and valid
✓ video content matches intended episodes

===== PARTNER FILES =====
1. series2_player1_embeds.js - AşkDiz Player
2. series2_player2_embeds.js - Rumble Player (This file)
3. series2_descriptions.js - Episode details
4. series2_data.js - Series metadata

===== DIFFERENT ID TYPES =====
// Example إذا كان لديك different ID systems:
const series2Player2Embeds = {
    25: {
        e1: "https://rumble.com/embed/afvabcd",  // Rumble ID different
        e2: "https://rumble.com/embed/efvghij",  // من AşkDiz ID
        e3: "https://rumble.com/embed/klmnopq"
    }
};

===== FUTURE EXPANSION =====
- series3_player2_embeds.js (IDs 55-84)
- series4_player2_embeds.js (IDs 85-114)
- etc.

===== DEVELOPMENT WORKFLOW =====
1. Add series to series2_data.js
2. Add episode details to series2_descriptions.js
3. Add player1 embeds to series2_player1_embeds.js
4. Add player2 embeds to series2_player2_embeds.js
5. Test in browser
6. Update index.html/series2.html scripts if needed
*/