// --- DATA SETUP: SERIES 1 (24 SERIES) --- //

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

// Series Data - Series Group 1 (24 series)
const series1Data = [
    {
        id: 1,
        title: "حلم اشرف",
        titleEn: "Eşref'in rüyası",
        image: "https://3esk.onl/wp-content/uploads/2025/09/esref-ruya-2.jpg",
        description: "انضم أشرف إلى المافيا وأصبح أحد أقوى رجالها، بينما يواصل بحثه لسنوات عن فتاة حلم بها وأسماها رؤيا. يقع في حب نيسان، دون أن يدرك أنها هي نفسها رؤيا، وأنها تعمل سراً كمخبرة للشرطة، ليجد نفسه عالقًا بين الحب والخيانة والصراع...",
        year: 2024,
        trailerId: "AE7PZDK1",
        isNew: true
    },
    {
        id: 2,
        title: "الحب لا يفهم الكلام",
        titleEn: "Aşk Laftan Anlamaz",
        image: "https://3esk.onl/wp-content/uploads/2025/09/ask-laftan-anlamaz-poster.jpg",
        description: "القصة تدور حول حياة، فتاة جميلة ومرحة تنتقل من الريف إلى اسطنبول وتبحث عن عمل في أقل من 24 ساعة لكي لا تجبرها عائلتها على العودة إلى القرية. وخلال بحثها تجد نفسها في صراع مع رئيسها (مراد) الوسيم لكنهما يقعان في الحب وتتوالى الأحداث الشيقة.",
        year: 2016,
        trailerId: "v3l924k",
        isNew: false
    },
    {
        id: 3,
        title: "ورود ودنوب",
        titleEn: "Güller ve günahlar",
        image: "https://3esk.onl/wp-content/uploads/2025/09/guller-ve-gunahlar-1.jpg",
        description: "القصة تدور حول الفتاة الجميلة صانم (ديميت أوزديمير) التي تعمل في متجر بقالة والدها وتضطر للبحث عن عمل بعدما وضع والدها حداً لعملها في البقالة، لتعمل في وكالة إعلانات حيث تلتقي بـ جان (جان يامان) المصور المشهور والمتهور، ويقعان في علاقة حب كوميدية مليئة بالمغامرات.",
        year: 2018,
        trailerId: "v3l98v6",
        isNew: false
    },
    {
        id: 4,
        title: "المحتالون",
        titleEn: "dolandırıcılar",
        image: "https://3esk.onl/wp-content/uploads/2025/10/Muhtaloun-long-isimsiz.jpg",
        description: "مسلسل تاريخي تركي يروي قصة الغازي أرطغرل، والد عثمان الأول مؤسس الدولة العثمانية. يعرض المسلسل رحلة أرطغرل في البحث عن وطن لقبيلته، ويصوّر صراعه مع الخونة والصليبيين والمغول. ملحمة تاريخية ضخمة تظهر قيم الشجاعة والعدالة...",
        year: 2014,
        trailerId: "v3la1i8",
        isNew: false
    },
    {
        id: 5,
        title: "الخليفة: نداء الجذور",
        titleEn: "Halef: Köklerin Çağrısı",
        image: "https://placeholder.com/image/halef.jpg",
        description: "مسلسل درامي تركي عُرض لأول مرة في سبتمبر 2025، من بطولة إلهان شان وأيبوكي بوسات وبيران داملا يلماز.",
        year: 2025,
        trailerId: "v3lB1T1",
        isNew: true
    },
    {
        id: 6,
        title: "الغرفة المزدوجة",
        titleEn: "Çifte Oda",
        image: "https://placeholder.com/image/cifteoda.jpg",
        description: "مسلسل صيفي رومانسي كوميدي مقتبس عن المسلسل الكوري 'كينج ذا لاند'، يجمع بين الرومانسية والكوميديا.",
        year: 2025,
        trailerId: "v3lC2T1",
        isNew: true
    },
    {
        id: 7,
        title: "ميرا وسليم",
        titleEn: "Meyra ve Selim",
        image: "https://placeholder.com/image/meyraselim.jpg",
        description: "مسلسل درامي رومانسي، وهو نسخة تركية من الدراما الكورية الشهيرة 'ملكة الدموع'. يحكي قصة وريثة غنية تعمل متخفية وتقع في حب محامٍ.",
        year: 2025,
        trailerId: "v3lD3T1",
        isNew: true
    },
    {
        id: 8,
        title: "الغريب الذي في المرآة",
        titleEn: "Aynadaki Yabancı",
        image: "https://placeholder.com/image/aynadakiyabanci.jpg",
        description: "دراما تحكي عن رجل غامض يدخل حياة امرأة وتتقاطع مصائرهما بطريقة تغير حياتها، وتكشف جوانب مظلمة في ماضيها.",
        year: 2025,
        trailerId: "v3lE4T1",
        isNew: true
    },
    {
        id: 9,
        title: "الاراضي الغاضبة",
        titleEn: "Kızgın Topraklar",
        image: "https://placeholder.com/image/kizgintopraklar.jpg",
        description: "دراما تدور حول 'أيلول' التي تخلت عن أحلامها من أجل الحب، و 'رأس' الذي حارب عائلته لأجلها، ويواجهان قوى قاسية من الماضي.",
        year: 2025,
        trailerId: "v3lF5T1",
        isNew: true
    },
    {
        id: 10,
        title: "كان يا مكان في إسطنبول",
        titleEn: "Bir Zamanlar İstanbul",
        image: "https://placeholder.com/image/birzamanlar.jpg",
        description: "قصة تتقاطع فيها طرق بطل يسعى للعدالة مع صحفية شجاعة. يدور العمل حول تساؤل: هل المجتمع أم الاختيار الشخصي هو ما يدفع الإنسان للجريمة؟",
        year: 2025,
        trailerId: "v3lG6T1",
        isNew: true
    },
    {
        id: 11,
        title: "الزوجة الأخرى",
        titleEn: "Diğer Eş",
        image: "https://placeholder.com/image/digeres.jpg",
        description: "دراما اجتماعية عن صراعات عائلية معقدة.",
        year: 2025,
        trailerId: "v3lH7T1",
        isNew: true
    },
    {
        id: 12,
        title: "الكذبة",
        titleEn: "Yalan",
        image: "https://placeholder.com/image/yalan.jpg",
        description: "مسلسل درامي عن مليكة، امرأة تسجن ظلمًا لمدة 20 عامًا، وتكتشف بعد خروجها كذبة كبيرة تخص ابنتها ستغير كل شيء.",
        year: 2025,
        trailerId: "v3lI8T1",
        isNew: true
    },
    {
        id: 13,
        title: "لا تبكي إسطنبول",
        titleEn: "Sen Ağlama İstanbul",
        image: "https://placeholder.com/image/senaglama.jpg",
        description: "دراما شائقة تدور أحداثها بين الحب والصراعات.",
        year: 2025,
        trailerId: "v3lJ9T1",
        isNew: true
    },
    {
        id: 14,
        title: "ألف ليلة وليلة (مسلسل)",
        titleEn: "Binbir Gece Masalları",
        image: "https://placeholder.com/image/binbirgece.jpg",
        description: "من المتوقع أن يكون من أكثر المسلسلات ترقبًا، يحكي عن شهريار الذي يلتقي بشهرزاد، التي تُحدث تحولاً في حياته من خلال قصصها المليئة بالحكمة.",
        year: 2025,
        trailerId: "v3lK10T1",
        isNew: true
    },
    {
        id: 15,
        title: "قطرات الثلج",
        titleEn: "Kardelenler",
        image: "https://placeholder.com/image/kardelenler.jpg",
        description: "مسلسل درامي جديد يترقبه الجمهور.",
        year: 2025,
        trailerId: "v3lL11T1",
        isNew: true
    },
    {
        id: 16,
        title: "المال القديم",
        titleEn: "Eski Para",
        image: "https://placeholder.com/image/eskipara.jpg",
        description: "مسلسل درامي جديد يركز على قضايا المال والسلطة.",
        year: 2025,
        trailerId: "v3lM12T1",
        isNew: true
    },
    {
        id: 17,
        title: "المدينة المخفية",
        titleEn: "Gizli Şehir",
        image: "https://placeholder.com/image/gidis.jpg",
        description: "دراما إثارة وغموض حول مدينة تبدو مثالية ولكنها تخفي أسراراً مرعبة.",
        year: 2025,
        trailerId: "v3lN13T1",
        isNew: true
    },
    {
        id: 18,
        title: "أطفال الجنة",
        titleEn: "Cennetin Çocukları",
        image: "https://placeholder.com/image/ocak.jpg",
        description: "دراما اجتماعية مؤثرة عن قصة أطفال واجهوا صعوبات الحياة.",
        year: 2025,
        trailerId: "v3lO14T1",
        isNew: true
    },
    {
        id: 19,
        title: "الظل والنور",
        titleEn: "Gölge ve Işık",
        image: "https://placeholder.com/image/golge.jpg",
        description: "قصة حب معقدة بين شخصيتين متناقضتين تماماً يجمعهما القدر.",
        year: 2025,
        trailerId: "v3lP15T1",
        isNew: true
    },
    {
        id: 20,
        title: "طريق الذئاب",
        titleEn: "Kurtların Yolu",
        image: "https://placeholder.com/image/kurtlar.jpg",
        description: "مسلسل أكشن وإثارة حول عالم المافيا والصراعات على السلطة.",
        year: 2025,
        trailerId: "v3lQ16T1",
        isNew: true
    },
    {
        id: 21,
        title: "الرحلة الأخيرة",
        titleEn: "Son Yolculuk",
        image: "https://placeholder.com/image/son.jpg",
        description: "دراما نفسية تتناول قصة أشخاص في رحلة مصيرية لا عودة منها.",
        year: 2025,
        trailerId: "v3lR17T1",
        isNew: true
    },
    {
        id: 22,
        title: "قلعة الأسرار",
        titleEn: "Sırların Kalesi",
        image: "https://placeholder.com/image/sir.jpg",
        description: "مسلسل تاريخي يروي قصصاً من القرون الوسطى المليئة بالمكائد والحب.",
        year: 2025,
        trailerId: "v3lS18T1",
        isNew: true
    },
    {
        id: 23,
        title: "العهد المنسي",
        titleEn: "Unutulmuş Söz",
        image: "https://placeholder.com/image/unut.jpg",
        description: "دراما رومانسية عن عهد قديم بين عائلتين يعود ليلاحق الجيل الجديد.",
        year: 2025,
        trailerId: "v3lT19T1",
        isNew: true
    },
    {
        id: 24,
        title: "إيقاع الحياة",
        titleEn: "Hayatın Ritmi",
        image: "https://placeholder.com/image/hayat.jpg",
        description: "قصة ملهمة حول موسيقيين شباب يسعون لتحقيق أحلامهم في إسطنبول.",
        year: 2025,
        trailerId: "v3lU20T1",
        isNew: true
    }
];

// Export for global use
window.series1Data = series1Data;
window.createPlaceholders = createPlaceholders;