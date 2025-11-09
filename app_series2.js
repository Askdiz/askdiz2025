// === صفحة المسلسلات الثانية - App Logic ===
// محملة ببيانات series2_data.js عند توفرها

// --- GLOBAL STATE للصفحة الثانية ---
let currentPlayingSeriesId = null;
let currentPlayingEpisode = null;
let waitTimer = null;
let currentSeriesPage = 0;
const SERIES_PER_PAGE = 30;
let currentSeriesGroup = 2; // المجموعة الثانية

// --- TITLE ANIMATION LOGIC ---
const wordAsk = document.getElementById('word-ask');
const wordDiz = document.getElementById('word-diz');
const clickableHeart = document.getElementById('clickable-heart');
const titleFrame = document.getElementById('title-frame');
const clickableArea = document.getElementById('clickable-area');
const mainTitleContainer = document.getElementById('mainTitleContainer');

function initializeTitle() {
    // تهيئة العنوان
    const titleElement = document.querySelector('.site-title');
    if (titleElement) {
        titleElement.innerHTML = 'المجموعة الثانية - المسلسلات الجديدة';
    }
}

// دالة للعودة للصفحة الرئيسية
function goBack() {
    window.location.href = 'index.html';
}

// دالة لعرض المزيد من المسلسلات
function loadMoreSeries2() {
    // في المستقبل، هذا سيؤدي لصفحة series3.html
    alert('سيتم إضافة المجموعة الثالثة قريباً!');
}

// --- SERIES RENDERING FUNCTIONS ---

// دالة لإنشاء بطاقة مسلسل
function createSeriesCard(series) {
    return `
        <div class="series-card" onclick="openDetailsPage(${series.id})">
            <div class="heart-shape-wrapper">
                <div class="series-image-wrapper">
                    <img src="${series.image}" alt="${series.title}" class="series-image">
                    
                    <div class="series-overlay">
                        <h3 class="series-title">${series.title}</h3>
                        <p class="series-title-en">${series.titleEn}</p>
                        <div class="series-meta">
                            <span class="meta-item"><i class="fas fa-video"></i> ${series.episodes ? series.episodes.length : 0} حلقة</span>
                            <span class="meta-item"><i class="fas fa-calendar-alt"></i> ${series.year}</span>
                        </div>
                        <p class="series-description">${series.description.length > 100 ? series.description.substring(0, 100) + '...' : series.description}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// دالة لعرض المسلسلات
function renderSeries(seriesArray, gridId = 'seriesGrid', isNewPage = false) {
    const seriesGrid = document.getElementById(gridId);
    if (!seriesGrid) return; 
    
    if (!Array.isArray(seriesArray)) {
        console.error('Error: seriesArray is not a valid array.');
        return;
    }

    if (isNewPage) {
        // إضافة مسلسلات جديدة للصفحة الحالية
        const startIndex = currentSeriesPage * SERIES_PER_PAGE;
        const endIndex = startIndex + SERIES_PER_PAGE;
        const pageSeries = seriesArray.slice(startIndex, endIndex);
        seriesGrid.innerHTML += pageSeries.map(createSeriesCard).join('');
    } else {
        // عرض الصفحة الأولى
        currentSeriesPage = 0;
        const firstPageSeries = seriesArray.slice(0, SERIES_PER_PAGE);
        seriesGrid.innerHTML = firstPageSeries.map(createSeriesCard).join('');
    }

    // تحديث زر "المزيد من المسلسلات"
    updateLoadMoreSection(seriesArray.length);
}

// دالة لتحديث قسم "المزيد من المسلسلات"
function updateLoadMoreSection(totalSeries) {
    const loadMoreSection = document.getElementById('loadMoreSection');
    if (loadMoreSection) {
        if (totalSeries >= 30) {
            loadMoreSection.style.display = 'block';
        } else {
            loadMoreSection.style.display = 'none';
        }
    }
}

// دالة لعرض المزيد من المسلسلات
function loadMoreSeries() {
    if (typeof series2Data !== 'undefined' && Array.isArray(series2Data)) {
        currentSeriesPage++;
        renderSeries(series2Data, 'seriesGrid', true);
    }
}

// --- SEARCH FUNCTIONS ---

function performSearch() {
    const input = document.getElementById('seriesSearchInput').value.toLowerCase().trim();
    if (input.length === 0) return;

    // البحث في البيانات الحالية
    const filteredSeries = series2Data.filter(series => {
        const titleMatch = series.title.toLowerCase().includes(input);
        const titleEnMatch = series.titleEn.toLowerCase().includes(input);
        return titleMatch || titleEnMatch;
    });

    openSearchModal(filteredSeries);
}

function openSearchModal(seriesArray) {
    const modalOverlay = document.getElementById('searchModalOverlay');
    const resultsContainer = document.getElementById('searchResults');
    const noResultsMsg = document.getElementById('searchNoResultsMessage');
    
    if (seriesArray.length === 0) {
        resultsContainer.innerHTML = '';
        noResultsMsg.style.display = 'block';
    } else {
        noResultsMsg.style.display = 'none';
        renderSearchResults(seriesArray);
    }
    
    modalOverlay.style.display = 'flex';
    setTimeout(() => { modalOverlay.classList.add('active'); }, 10);
    document.body.style.overflow = 'hidden';
}

function closeSearchModal() {
    const modalOverlay = document.getElementById('searchModalOverlay');
    modalOverlay.classList.remove('active');
    setTimeout(() => { 
        modalOverlay.style.display = 'none'; 
        document.body.style.overflow = 'auto'; 
    }, 500);
}

function renderSearchResults(seriesArray) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = seriesArray.map(series => `
        <div class="search-result-card" onclick="openDetailsPage(${series.id})">
            <img src="${series.image}" alt="${series.title}" class="search-result-image">
            <div class="search-result-info">
                <h3>${series.title}</h3>
                <p class="search-result-year">${series.year}</p>
                <p class="search-result-desc">${series.description.length > 80 ? series.description.substring(0, 80) + '...' : series.description}</p>
            </div>
        </div>
    `).join('');
}

// --- MODAL FUNCTIONS ---

function openDetailsPage(seriesId) {
    const series = series2Data.find(s => s.id === seriesId);
    if (!series) return;

    const modal = document.getElementById('seriesModalOverlay');
    const title = document.getElementById('modalTitle');
    const year = document.getElementById('modalYear');
    const image = document.getElementById('modalImage');
    const description = document.getElementById('modalDescription');
    const episodesList = document.getElementById('episodesList');

    title.textContent = series.title;
    year.textContent = `السنة: ${series.year}`;
    image.src = series.image;
    image.alt = series.title;
    description.textContent = series.description;

    // عرض الحلقات
    if (series.episodes && series.episodes.length > 0) {
        episodesList.innerHTML = series.episodes.map((episode, index) => `
            <div class="episode-item" onclick="playEpisode(${series.id}, ${index})">
                <span class="episode-number">الحلقة ${index + 1}</span>
                <span class="episode-desc">${series.episodeDetails ? series.episodeDetails[index] : 'وصف غير متوفر'}</span>
            </div>
        `).join('');
    }

    modal.style.display = 'flex';
    setTimeout(() => { modal.classList.add('active'); }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('seriesModalOverlay');
    modal.classList.remove('active');
    setTimeout(() => { 
        modal.style.display = 'none'; 
        document.body.style.overflow = 'auto'; 
    }, 500);
}

// --- PLAYER FUNCTIONS ---

function openPlayer() {
    const playerModal = document.getElementById('playerModalOverlay');
    playerModal.style.display = 'flex';
    setTimeout(() => { playerModal.classList.add('active'); }, 10);
}

function closePlayer() {
    const playerModal = document.getElementById('playerModalOverlay');
    playerModal.classList.remove('active');
    setTimeout(() => { 
        playerModal.style.display = 'none'; 
        document.body.style.overflow = 'auto'; 
    }, 500);
}

function playEpisode(seriesId, episodeIndex) {
    currentPlayingSeriesId = seriesId;
    currentPlayingEpisode = episodeIndex;
    
    // عرض modal المشغل
    openPlayer();
    
    // تشغيل الحلقة افتراضياً في المشغل الأول
    switchPlayer(1);
}

function switchPlayer(playerNumber) {
    // تحديث حالة الأزرار
    const player1Btn = document.getElementById('player1Btn');
    const player2Btn = document.getElementById('player2Btn');
    
    if (playerNumber === 1) {
        player1Btn.classList.add('active');
        player2Btn.classList.remove('active');
    } else {
        player2Btn.classList.add('active');
        player1Btn.classList.remove('active');
    }
    
    // تحديث المشغل
    if (currentPlayingSeriesId !== null && currentPlayingEpisode !== null) {
        updateVideoPlayer(playerNumber);
    }
}

function updateVideoPlayer(playerNumber) {
    const iframe = document.getElementById('videoPlayer');
    
    // بناء URL المشغل
    let embedUrl = '';
    
    if (playerNumber === 1) {
        // المشغل الأول
        const seriesId = currentPlayingSeriesId;
        const episodeKey = `e${currentPlayingEpisode + 1}`;
        if (typeof series2Player1Embeds !== 'undefined' && series2Player1Embeds[seriesId]) {
            embedUrl = series2Player1Embeds[seriesId][episodeKey] || '';
        }
    } else {
        // المشغل الثاني
        const seriesId = currentPlayingSeriesId;
        const episodeKey = `e${currentPlayingEpisode + 1}`;
        if (typeof series2Player2Embeds !== 'undefined' && series2Player2Embeds[seriesId]) {
            embedUrl = series2Player2Embeds[seriesId][episodeKey] || '';
        }
    }
    
    if (embedUrl) {
        iframe.src = embedUrl;
    }
}

function watchTrailer() {
    // مشاهدة التريلر
    const trailerId = document.getElementById('modalTitle').textContent;
    // يمكن إضافة منطق التريلر هنا
    alert('سيتم تشغيل التريلر قريباً!');
}

// --- EVENT LISTENERS ---

function initializeEventListeners() {
    // البحث
    const searchInput = document.getElementById('seriesSearchInput');
    if (searchInput) {
        searchInput.onkeyup = (event) => {
            if(event.key === 'Enter') performSearch();
        };
    }
    
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.onclick = performSearch;
    }
}

// --- INITIALIZATION ---

// التحقق من تحميل DOM قبل التهيئة
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeTitle();
        initializeEventListeners();
        
        // عرض المسلسلات
        if (typeof series2Data !== 'undefined' && Array.isArray(series2Data)) {
            renderSeries(series2Data);
        } else {
            console.error('series2Data is not defined or not an array. Check series2_data.js loading.');
        }
        
        console.log('✅ تم تهيئة صفحة المسلسلات الثانية بنجاح');
    } catch (error) {
        console.error('❌ خطأ في تهيئة صفحة المسلسلات الثانية:', error);
    }
});

// التأكد من إغلاق القائمة عند تغيير حجم الشاشة من موبايل إلى ديسكتوب
window.addEventListener('resize', () => {
    // أي logic إضافي للتأقلم مع تغيير حجم الشاشة
    console.log('تم تغيير حجم الشاشة في صفحة المسلسلات الثانية');
});

// Global function exports
window.goBack = goBack;
window.loadMoreSeries2 = loadMoreSeries2;
window.renderSeries = renderSeries;
window.performSearch = performSearch;
window.openSearchModal = openSearchModal;
window.closeSearchModal = closeSearchModal;
window.openDetailsPage = openDetailsPage;
window.closeModal = closeModal;
window.openPlayer = openPlayer;
window.closePlayer = closePlayer;
window.playEpisode = playEpisode;
window.switchPlayer = switchPlayer;
window.updateVideoPlayer = updateVideoPlayer;
window.watchTrailer = watchTrailer;