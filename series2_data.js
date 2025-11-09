// --- DATA SETUP: SERIES GROUP 2 (6 SERIES EXAMPLE) ---
// Example implementation for Series Group 2 - 6 series for testing

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

// Series Data - Series Group 2 (6 example series for testing)
const series2Data = [
    {
        id: 25,
        title: "عشق أخير",
        titleEn: "Son Aşk",
        image: "https://placeholder.com/image/sonask.jpg",
        description: "دراما رومانسية مؤثرة تحكي قصة حب أخيرة بين شخصين التقيا في اللحظة المناسبة. قصة مليئة بالشغف والفراق واللقاءات المثيرة.",
        year: 2025,
        trailerId: "sonA001",
        isNew: true
    },
    {
        id: 26,
        title: "رحلة العمر",
        titleEn: "Hayatın Yolculuğu",
        image: "https://placeholder.com/image/yolculuk.jpg",
        description: "مسلسل أكشن ومغامرة يتبع مغامر شاب في رحلة عبر تركيا يبحث عن كنز قديم. رحلة مليئة بالمخاطر والاكتشافات.",
        year: 2025,
        trailerId: "yolA001",
        isNew: true
    },
    {
        id: 27,
        title: "مدينة الأحلام",
        titleEn: "Hayaller Şehri",
        image: "https://placeholder.com/image/hayaller.jpg",
        description: "كوميديا رومانسية في مدينة إسطنبول، حيث يسعى ثلاثة أصدقاء لتحقيق أحلامهم في عالم الفن والموسيقى. مزيج من الكوميديا والموسيقى والرومانسية.",
        year: 2025,
        trailerId: "hayA001",
        isNew: true
    },
    {
        id: 28,
        title: "البحث عن الحقيقة",
        titleEn: "Gerçeğin İzinde",
        image: "https://placeholder.com/image/gercek.jpg",
        description: "دراما تحقيق تحكي عن صحفية شجاعة تكتشف فساداً كبيراً في إحدى الشركات الكبرى. قصة مليئة بالغموض والإثارة والصراع بين الخير والشر.",
        year: 2025,
        trailerId: "gerA001",
        isNew: true
    },
    {
        id: 29,
        title: "عودة البطل",
        titleEn: "Kahramanın Dönüşü",
        image: "https://placeholder.com/image/kahraman.jpg",
        description: "مسلسل أكشن يتبع جندي退役 يعود لبلدته ليكتشف أن عائلته في خطر. معركة ملحمية بين الخير والشر في المجتمع الريفي.",
        year: 2025,
        trailerId: "kahrA001",
        isNew: true
    },
    {
        id: 30,
        title: "قصص الحب",
        titleEn: "Aşk Hikayeleri",
        image: "https://placeholder.com/image/askhikaye.jpg",
        description: "مجموعة من القصص الرومانسية المترابطة تدور في مدينة أنطاليا الساحلية. كل حلقة تحكي قصة حب مختلفة بظروفها الخاصة.",
        year: 2025,
        trailerId: "askH001",
        isNew: true
    }
];

// Export for global use
window.series2Data = series2Data;
window.createPlaceholders = createPlaceholders;