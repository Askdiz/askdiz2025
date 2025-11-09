// --- SERIES EPISODES AND DESCRIPTIONS ---

// Episodes data for each series
const seriesEpisodes = {
    1: {
        episodes: [
            "AE7PZDK1",
            "AE7PZDK1",
            "v3l9494",
            "v3l94b8"
        ],
        rumbleEpisodes: [
            "v6z5ujg",      // الحلقة 1 - المشغل الثاني (كما طلبت)
            "AE7PZDK1",     // الحلقة 2 - المشغل الثاني (استخدمت المعرف الموجود)
            "v9a2b3c",      // الحلقة 3 - مشغل ثاني
            "v4d5e6f"       // الحلقة 4 - مشغل ثاني
        ],
        episodeDetails: [
            "الحلقة 1: البداية القاسية. يدخل أشرف عالم المافيا ويبدأ حلمه برؤيا.",
            "الحلقة 2: لقاء نيسان. يلتقي أشرف بنيسان دون أن يعرف حقيقتها.",
            "الحلقة 3: الحقيقة المخفية. تبدأ نيسان بجمع المعلومات، ويزداد حب أشرف لها.",
            "الحلقة 4: الخيانة والصراع. يكتشف أشرف حقيقة نيسان وتبدأ المواجهة.",
        ]
    },
    2: {
        episodes: [
            "v3l908a",
            "AE7PZDK1"
        ],
        episodeDetails: [
            "الحلقة 1: حياة في اسطنبول. تبدأ حياة رحلة البحث عن عمل وتصطدم بـ مراد.",
            "الحلقة 2: سوء التفاهم. يتصاعد التوتر بين حياة ومراد بسبب سوء تفاهم كبير.",
        ]
    },
    3: {
        episodes: [
            "v3l97u6",
            "v3l983a",
            "v3l98b4"
        ],
        episodeDetails: [
            "الحلقة 1: بداية المغامرة. تنتقل صانم للعمل في وكالة الإعلانات وتلتقي بجان للمرة الأولى.",
            "الحلقة 2: كذبة صغيرة. تقع صانم في كذبة صغيرة للحفاظ على وظيفتها.",
            "الحلقة 3: ليلة الأوبرا. يقضي جان وصانم ليلة مليئة بالأحداث الغريبة في الأوبرا.",
        ]
    },
    4: {
        episodes: [
            "v3la0a4",
            "v3la0f2",
            "v3la0k8",
            "v3la0q4",
            "v3la0v2"
        ],
        episodeDetails: [
            "الحلقة 1: ميلاد الأسطورة. يواجه أرطغرل تحديات القبيلة الأولى.",
            "الحلقة 2: خيانة القلعة. يكشف أرطغرل أول مؤامرة ضده.",
            "الحلقة 3: السهم القاتل. معركة كبرى تقلب موازين القوى.",
            "الحلقة 4: طريق الهجرة. يبدأ أرطغرل رحلة البحث عن أرض جديدة.",
            "الحلقة 5: المؤسس. يضع أرطغرل اللبنة الأولى للدولة.",
        ]
    },
    5: {
        episodes: ["v3lB101", "v3lB102"],
        episodeDetails: ["الحلقة 1: الانطلاق. تبدأ رحلة كشف الأسرار والجذور.", "الحلقة 2: الماضي يطرق الباب. أولى الصدامات بين الشخصيات."]
    },
    6: {
        episodes: ["v3lC201", "v3lC202"],
        episodeDetails: ["الحلقة 1: أول لقاء. تبدأ المواقف الكوميدية بين البطلين.", "الحلقة 2: سوء تفاهم رومانسي. محاولة فاشلة للتفاهم."]
    },
    7: {
        episodes: ["v3lD301", "v3lD302"],
        episodeDetails: ["الحلقة 1: الهوية المخفية. عودة ميرا من أمريكا وبداية عملها السري.", "الحلقة 2: انجذاب غير متوقع. لقاء ميرا وسليم الأول."]
    },
    8: {
        episodes: ["v3lE401", "v3lE402"],
        episodeDetails: ["الحلقة 1: المدخل الغامض. ظهور الرجل الغريب في حياة البطلة.", "الحلقة 2: تقاطع الطرق. بداية الكشف عن الأسرار المشتركة."]
    },
    9: {
        episodes: ["v3lF501"],
        episodeDetails: ["الحلقة 1: ضريبة الحب. المواجهة الأولى مع ماضي العائلتين."]
    },
    10: {
        episodes: ["v3lG601"],
        episodeDetails: ["الحلقة 1: البحث عن العدالة. لقاء البطل والصحفية وبداية رحلة النضال."]
    },
    11: {
        episodes: ["v3lH701"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل الزوجة الأخرى."]
    },
    12: {
        episodes: ["v3lI801"],
        episodeDetails: ["الحلقة 1: الخروج. خروج مليكة من السجن وبداية مواجهة العالم الجديد."]
    },
    13: {
        episodes: ["v3lJ901"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل لا تبكي إسطنبول."]
    },
    14: {
        episodes: ["v3lK1001"],
        episodeDetails: ["الحلقة 1: البداية. أول لقاء بين شهريار وشهرزاد."]
    },
    15: {
        episodes: ["v3lL1101"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل قطرات الثلج."]
    },
    16: {
        episodes: ["v3lM1201"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل المال القديم."]
    },
    17: {
        episodes: ["v3lN1301"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل المدينة المخفية."]
    },
    18: {
        episodes: ["v3lO1401"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل أطفال الجنة."]
    },
    19: {
        episodes: ["v3lP1501"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل الظل والنور."]
    },
    20: {
        episodes: ["v3lQ1601"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل طريق الذئاب."]
    },
    21: {
        episodes: ["v3lR1701"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل الرحلة الأخيرة."]
    },
    22: {
        episodes: ["v3lS1801"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل قلعة الأسرار."]
    },
    23: {
        episodes: ["v3lT1901"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل العهد المنسي."]
    },
    24: {
        episodes: ["v3lU2001"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل إيقاع الحياة."]
    }
};

// Function to add placeholder episodes for series with more episodes
function addPlaceholderEpisodes() {
    if (typeof seriesData !== 'undefined' && typeof createPlaceholders === 'function') {
        // إضافة 36 حلقة وهمية للمسلسل الأخير
        const placeholderData = createPlaceholders(6, 36, seriesData[3].title);
        seriesData[3].episodes = seriesData[3].episodes || [];
        seriesData[3].episodes.push(...placeholderData.episodes);
        seriesData[3].episodeDetails = seriesData[3].episodeDetails || [];
        seriesData[3].episodeDetails.push(...placeholderData.details);

        // إضافة حلقات وهمية للمسلسل رقم 5
        const placeholderData5 = createPlaceholders(3, 5, seriesData[4].title);
        seriesData[4].episodes = seriesData[4].episodes || [];
        seriesData[4].episodes.push(...placeholderData5.episodes);
        seriesData[4].episodeDetails = seriesData[4].episodeDetails || [];
        seriesData[4].episodeDetails.push(...placeholderData5.details);

        // إضافة حلقات وهمية للمسلسل رقم 6
        const placeholderData6 = createPlaceholders(3, 3, seriesData[5].title);
        seriesData[5].episodes = seriesData[5].episodes || [];
        seriesData[5].episodes.push(...placeholderData6.episodes);
        seriesData[5].episodeDetails = seriesData[5].episodeDetails || [];
        seriesData[5].episodeDetails.push(...placeholderData6.details);

        // إضافة حلقات وهمية للمسلسل رقم 7
        const placeholderData7 = createPlaceholders(3, 5, seriesData[6].title);
        seriesData[6].episodes = seriesData[6].episodes || [];
        seriesData[6].episodes.push(...placeholderData7.episodes);
        seriesData[6].episodeDetails = seriesData[6].episodeDetails || [];
        seriesData[6].episodeDetails.push(...placeholderData7.details);

        // إضافة حلقات وهمية للمسلسل رقم 8
        const placeholderData8 = createPlaceholders(3, 5, seriesData[7].title);
        seriesData[7].episodes = seriesData[7].episodes || [];
        seriesData[7].episodes.push(...placeholderData8.episodes);
        seriesData[7].episodeDetails = seriesData[7].episodeDetails || [];
        seriesData[7].episodeDetails.push(...placeholderData8.details);
    }
}

// Function to merge episodes data with series data
function mergeSeriesData() {
    if (typeof seriesData !== 'undefined' && seriesEpisodes) {
        seriesData.forEach(series => {
            const episodeData = seriesEpisodes[series.id];
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
        addPlaceholderEpisodes();
    }
}

// Auto-merge when this file loads
mergeSeriesData();

// Export for global use
window.seriesEpisodes = seriesEpisodes;
window.mergeSeriesData = mergeSeriesData;
window.addPlaceholderEpisodes = addPlaceholderEpisodes;