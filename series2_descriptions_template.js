// --- SERIES GROUP 2 EPISODES AND DESCRIPTIONS (30 SERIES) ---
// Template for Series Group 2 - Episodes and details

// Episodes data for each series in group 2
// كل مسلسل يحتاج episodes و episodeDetails
// rumleEpisodes للمشغل الثاني (اختياري)

const series2Episodes = {
    // 25: {
    //     episodes: [
    //         "example1",
    //         "example2",
    //         "example3"
    //     ],
    //     rumbleEpisodes: [
    //         "rumble1",      // للمشغل الثاني
    //         "rumble2",
    //         "rumble3"
    //     ],
    //     episodeDetails: [
    //         "الحلقة 1: بداية القصة المؤثرة والمثيرة",
    //         "الحلقة 2: تطوير الأحداث والصراع",
    //         "الحلقة 3: تصاعد التوتر والحبكة",
    //     ]
    // },
    // ... باقي 29 مسلسل (من 25 إلى 54)
};

// Function to add placeholder episodes for series with more episodes
function addPlaceholderEpisodesSeries2() {
    if (typeof series2Data !== 'undefined' && typeof createPlaceholders === 'function') {
        // مثال: إضافة حلقات وهمية للمسلسل رقم 25
        // const placeholderData = createPlaceholders(4, 36, series2Data[0].title);
        // if (series2Data[0].episodes) {
        //     series2Data[0].episodes.push(...placeholderData.episodes);
        //     series2Data[0].episodeDetails.push(...placeholderData.details);
        // } else {
        //     series2Data[0].episodes = placeholderData.episodes;
        //     series2Data[0].episodeDetails = placeholderData.details;
        // }

        // أضف نفس المنطق للمسلسلات الأخرى حسب الحاجة
    }
}

// Function to merge episodes data with series data
function mergeSeries2Data() {
    if (typeof series2Data !== 'undefined' && series2Episodes) {
        series2Data.forEach(series => {
            const episodeData = series2Episodes[series.id];
            if (episodeData) {
                if (episodeData.episodes) {
                    series.episodes = episodeData.episodes;
                }
                if (episodeData.rumbleEpisodes) {
                    series.rumbleEpisodes = episodeData.rumbleEpisodes;
                }
                if (episodeData.episodeDetails) {
                    series.episodeDetails = episodeData.episodeDetails;
                }
            }
        });
        
        // Add placeholder episodes after merging
        addPlaceholderEpisodesSeries2();
    }
}

// Auto-merge when this file loads
mergeSeries2Data();

// Export for global use
window.series2Episodes = series2Episodes;
window.mergeSeries2Data = mergeSeries2Data;
window.addPlaceholderEpisodesSeries2 = addPlaceholderEpisodesSeries2;

/*
===== USAGE INSTRUCTIONS =====

1. أضف data لكل مسلسل في series2Episodes object
2. استخدم معرف المسلسل (ID) كـ key
3. لكل مسلسل، حدد:
   - episodes: array من أرقام الحلقات للمشغل الأول
   - rumbleEpisodes: array من أرقام الحلقات للمشغل الثاني (اختياري)
   - episodeDetails: array من أوصاف الحلقات

4. مثال شامل:
   const series2Episodes = {
       25: {  // معرف المسلسل
           episodes: ["embed1", "embed2", "embed3"],  // للمشغل الأول
           rumbleEpisodes: ["rumble1", "rumble2", "rumble3"],  // للمشغل الثاني
           episodeDetails: [
               "الحلقة 1: بداية القصة",
               "الحلقة 2: تطوير الأحداث", 
               "الحلقة 3: تصاعد الصراع"
           ]
       },
       26: {
           episodes: ["embed4", "embed5"],
           episodeDetails: [
               "الحلقة 1: بداية جديدة",
               "الحلقة 2: التحديات"
           ]
       },
       // ... حتى 54
   };

5. للملفات الإضافية:
   - series3Episodes: للمسلسلات 55-84
   - series4Episodes: للمسلسلات 85-114
   - وهكذا...

===== EMBED URL FORMATS =====
- المشغل الأول: "https://3esk.onl/embed/{episodeId}"
- المشغل الثاني: "https://rumble.com/embed/{episodeId}"

===== EPISODE ID PATTERNS ====
استخدم نظام معرفات واضح:
- series2: s2e1, s2e2, s2e3, ... (s2 = series2, e = episode)
- series3: s3e1, s3e2, s3e3, ...
- أو استخدم numeration: v3lA101, v3lA102, ...

===== VALIDATION =====
- تأكد من أن episodes.length = episodeDetails.length
- rumbleEpisodes اختياري، لكن إذا وُجد يجب أن يكون بنفس طول episodes
- استخدم createPlaceholders() لإنشاء episodes تلقائية
*/