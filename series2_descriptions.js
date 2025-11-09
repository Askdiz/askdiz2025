// --- SERIES GROUP 2 EPISODES AND DESCRIPTIONS (6 SERIES) ---

// Episodes data for each series in group 2
const series2Episodes = {
    25: { // عشق أخير
        episodes: [
            "sonA101",
            "sonA102", 
            "sonA103",
            "sonA104"
        ],
        rumbleEpisodes: [
            "rumble_sonA101",      // للمشغل الثاني
            "rumble_sonA102",
            "rumble_sonA103", 
            "rumble_sonA104"
        ],
        episodeDetails: [
            "الحلقة 1: اللقاء الأول. تقابل ليلى مع أحمد في مقهى صغير في وسط المدينة، وتبدأ قصة حب لن ينتهي.",
            "الحلقة 2: ذكريات الماضي. يكتشف كلاهما أنهما التقيا من قبل، ويبدأان في استعادة ذكرياتهما.",
            "الحلقة 3: المواجهة. تظهر المشاكل من عائلة أحمد وتهديدات من الماضي القديم.",
            "الحلقة 4: الحب أقوى من كل شيء. المعركة الأخيرة بين الحب والظروف، والقرار الصعب.",
        ]
    },
    26: { // رحلة العمر
        episodes: [
            "yolA101",
            "yolA102",
            "yolA103"
        ],
        episodeDetails: [
            "الحلقة 1: البداية. ينطلق أرسلان في رحلة البحث عن الكنز المفقود، ويكتشف خريطة قديمة في مكتبة جده.",
            "الحلقة 2: المغامرة الأولى. يواجه أرسلان لصوص في الصحراء، ويجد صديقاً جديداً في رحلته.",
            "الحلقة 3: الاكتشاف العظيم. يصل أرسلان للكنز، لكن يكتشف أن الكنز الحقيقي كان الرحلة نفسها.",
        ]
    },
    27: { // مدينة الأحلام
        episodes: [
            "hayA101",
            "hayA102"
        ],
        episodeDetails: [
            "الحلقة 1: بداية الحلم. يصل ثلاثة أصدقاء جدد لأسطنبول لتحقيق أحلامهم في الفن والموسيقى، ويواجهون تحديات كثيرة.",
            "الحلقة 2: النجاح الأول. يحقق الأصدقاء أول نجاح لهم في حفلة صغيرة، ويبدأون في بناء مستقبلهم الفني.",
        ]
    },
    28: { // البحث عن الحقيقة
        episodes: [
            "gerA101",
            "gerA102"
        ],
        episodeDetails: [
            "الحلقة 1: الكشف الأول. تكتشف الصحفية زينب فساداً في شركة كبيرة، وتبدأ في جمع الأدلة بحذر.",
            "الحلقة 2: الخطر يقترب. تتعرض زينب للتهديدات، لكن تصميمها على كشف الحقيقة يزداد.",
        ]
    },
    29: { // عودة البطل
        episodes: [
            "kahrA101"
        ],
        episodeDetails: [
            "الحلقة 1: العودة. يعود الجندي退役 عمر لبلدته ليكتشف أن عائلته في خطر، ويبدأ في المقاومة.",
        ]
    },
    30: { // قصص الحب
        episodes: [
            "askH101",
            "askH102"
        ],
        episodeDetails: [
            "الحلقة 1: قصة السياح. يلتقي سائح أجنبي بفتاة تركية في أنطاليا، وتبدأ قصة حب جميلة رغم حاجز اللغة.",
            "الحلقة 2: قصة الصياد. يحب صياد صغير ابنة رجل أعمال ثري، ويواجهون صعوبات في قبول عائلتها له.",
        ]
    }
};

// Function to add placeholder episodes for series with more episodes
function addPlaceholderEpisodesSeries2() {
    if (typeof series2Data !== 'undefined' && typeof createPlaceholders === 'function') {
        // إضافة 36 حلقة وهمية للمسلسل الأخير (قصص الحب - id: 30)
        const placeholderData = createPlaceholders(3, 36, series2Data[5].title);
        if (series2Data[5].episodes) {
            series2Data[5].episodes.push(...placeholderData.episodes);
            series2Data[5].episodeDetails.push(...placeholderData.details);
        } else {
            series2Data[5].episodes = placeholderData.episodes;
            series2Data[5].episodeDetails = placeholderData.details;
        }

        // إضافة حلقات وهمية للمسلسل رقم 29 (عودة البطل)
        const placeholderData29 = createPlaceholders(2, 8, series2Data[4].title);
        if (series2Data[4].episodes) {
            series2Data[4].episodes.push(...placeholderData29.episodes);
            series2Data[4].episodeDetails.push(...placeholderData29.details);
        } else {
            series2Data[4].episodes = placeholderData29.episodes;
            series2Data[4].episodeDetails = placeholderData29.details;
        }

        // إضافة حلقات وهمية للمسلسل رقم 28 (البحث عن الحقيقة)
        const placeholderData28 = createPlaceholders(3, 5, series2Data[3].title);
        if (series2Data[3].episodes) {
            series2Data[3].episodes.push(...placeholderData28.episodes);
            series2Data[3].episodeDetails.push(...placeholderData28.details);
        } else {
            series2Data[3].episodes = placeholderData28.episodes;
            series2Data[3].episodeDetails = placeholderData28.details;
        }

        // إضافة حلقات وهمية للمسلسل رقم 27 (مدينة الأحلام)
        const placeholderData27 = createPlaceholders(3, 5, series2Data[2].title);
        if (series2Data[2].episodes) {
            series2Data[2].episodes.push(...placeholderData27.episodes);
            series2Data[2].episodeDetails.push(...placeholderData27.details);
        } else {
            series2Data[2].episodes = placeholderData27.episodes;
            series2Data[2].episodeDetails = placeholderData27.details;
        }

        // إضافة حلقات وهمية للمسلسل رقم 26 (رحلة العمر)
        const placeholderData26 = createPlaceholders(4, 4, series2Data[1].title);
        if (series2Data[1].episodes) {
            series2Data[1].episodes.push(...placeholderData26.episodes);
            series2Data[1].episodeDetails.push(...placeholderData26.details);
        } else {
            series2Data[1].episodes = placeholderData26.episodes;
            series2Data[1].episodeDetails = placeholderData26.details;
        }

        // إضافة حلقات وهمية للمسلسل رقم 25 (عشق أخير)
        const placeholderData25 = createPlaceholders(5, 5, series2Data[0].title);
        if (series2Data[0].episodes) {
            series2Data[0].episodes.push(...placeholderData25.episodes);
            series2Data[0].episodeDetails.push(...placeholderData25.details);
        } else {
            series2Data[0].episodes = placeholderData25.episodes;
            series2Data[0].episodeDetails = placeholderData25.details;
        }
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