// --- GLOBAL STATE --- //
let currentPlayingSeriesId = null;
let currentPlayingEpisode = null;
let waitTimer = null;
let currentState = 0; // 0: Aşk (red), 1: Clicked Aşk (diz fading), 2: Frame (Aşk diz white)
let currentSeriesPage = 0;
const SERIES_PER_PAGE = 30;
let allSeriesData = []; // لجمع جميع بيانات المسلسلات من الملفات المختلفة
let currentSeriesGroup = 1; // رقم المجموعة الحالية (1, 2, 3...)

// --- TITLE ANIMATION LOGIC --- //
const wordAsk = document.getElementById('word-ask');
const wordDiz = document.getElementById('word-diz');
const clickableHeart = document.getElementById('clickable-heart');
const titleFrame = document.getElementById('title-frame');
const clickableArea = document.getElementById('clickable-area');
const mainTitleContainer = document.getElementById('mainTitleContainer');

function initializeTitle() {
    wordDiz.classList.add('hidden');
    wordAsk.classList.add('color-primary-red');
    if (clickableArea) {
        clickableArea.onclick = handleAskClick;
    }
}

// دالة جديدة للتعامل مع النقر على الشعار في الشريط العلوي
function handleLogoClick() {
    window.location.href = 'https://askdiz-video-vault-23702.lovable.app/';
}

function handleAskClick() {
    if (currentState !== 0) return;
    wordAsk.classList.remove('color-primary-red');
    wordAsk.classList.add('color-white');
    
    // Position diz exactly where Ask is
    wordDiz.style.position = 'absolute';
    wordDiz.style.left = wordAsk.offsetLeft + 'px';
    wordDiz.style.top = wordAsk.offsetTop + 'px';
    
    wordDiz.classList.remove('hidden');
    clickableHeart.classList.remove('hidden');
    
    // Move Ask
    wordAsk.style.transform = 'translateX(-70px) scale(0.9)';
    wordAsk.style.opacity = '0';
    
    // Move diz
    wordDiz.style.transform = 'translateX(20px) scale(1.1)';
    wordDiz.style.opacity = '1';

    clickableArea.onclick = null; // Disable click during transition

    setTimeout(() => {
        // Reset positions after transition
        wordAsk.style.position = 'static';
        wordAsk.style.transform = 'none';
        wordAsk.style.opacity = '1';
        wordDiz.style.position = 'static';
        wordDiz.style.transform = 'none';
        wordDiz.style.opacity = '1';
        
        // Hide Ask, show diz with proper spacing
        wordAsk.classList.add('hidden');
        
        clickableArea.onclick = handleHeartClick; // Next step click
        currentState = 1;
    }, 500);
}

function handleHeartClick() {
    if (currentState !== 1) return;
    
    // Move Ask back to initial state (hidden) and align it
    wordAsk.classList.remove('hidden');
    wordAsk.classList.remove('color-white');
    wordAsk.classList.add('color-primary-red');
    wordAsk.style.opacity = '0';

    // Measure the final desired position
    const padding = 15;
    const areaRect = clickableArea.getBoundingClientRect();
    const containerRect = mainTitleContainer.getBoundingClientRect();

    // Calculate frame size and position based on clickable-area
    const frameWidth = areaRect.width + padding * 2;
    const frameHeight = areaRect.height + padding * 2;
    const frameCenterX = areaRect.left + areaRect.width / 2 - containerRect.left;
    const frameCenterY = areaRect.top + areaRect.height / 2 - containerRect.top;

    titleFrame.style.width = `${frameWidth}px`;
    titleFrame.style.height = `${frameHeight}px`;
    titleFrame.style.left = `${frameCenterX - frameWidth / 2}px`;
    titleFrame.style.top = `${frameCenterY - frameHeight / 2}px`;
    
    titleFrame.style.transform = 'scale(1)';
    titleFrame.style.opacity = '1';
    
    wordAsk.classList.remove('color-primary-red');
    wordAsk.classList.add('color-white');

    currentState = 2;
    clickableArea.onclick = handleFrameClick;
}

function handleFrameClick() {
    if (currentState !== 2) return;
    
    titleFrame.style.transform = 'scale(0)';
    titleFrame.style.opacity = '0';
    
    wordDiz.classList.add('hidden');
    clickableHeart.classList.add('hidden');
    
    wordAsk.classList.remove('color-white');
    wordAsk.classList.add('color-primary-red');
    
    currentState = 0;
    clickableArea.onclick = handleAskClick;
}

// --- COLOR THEME LOGIC ---
const colorThemes = {
    'default': '#E60023', 'blue': '#1E90FF', 'green': '#3CB371', 'purple': '#9370DB', 'orange': '#FF8C00',
    'pink': '#FF69B4', 'cyan': '#00CED1', 'gold': '#FFD700', 'brown': '#A0522D', 'teal': '#008080',
    'red-wine': '#800020', 'deep-sky-blue': '#00BFFF', 'lime-green': '#32CD32', 'indigo': '#4B0082',
    'dark-orange': '#FF8C00', 'hot-pink': '#FF69B4', 'turquoise': '#40E0D0', 'sienna': '#A0522D',
    'olive': '#808000', 'maroon': '#800000', 'navy': '#000080', 'forest-green': '#228B22',
    'crimson': '#DC143C', 'slate-blue': '#6A5ACD', 'dark-goldenrod': '#B8860B', 'medium-violet-red': '#C71585',
    'dark-cyan': '#008B8B', 'firebrick': '#B22222', 'peru': '#CD853F', 'steel-blue': '#4682B4'
};

// دالة تحديث الألوان في القائمة الجانبية
function updateColorPickerGrid() {
    const grid = document.getElementById('colorPickerGrid');
    if (!grid) return;
    grid.innerHTML = ''; // مسح الأزرار القديمة

    for (const [themeName, colorCode] of Object.entries(colorThemes)) {
        const themeClass = `theme-${themeName}`;
        const button = document.createElement('button');
        button.className = 'color-picker-button';
        button.style.backgroundColor = colorCode;
        button.dataset.theme = themeClass;
        button.onclick = () => changeTheme(themeClass);
        
        const icon = document.createElement('i');
        icon.className = 'fas fa-check';
        button.appendChild(icon);

        grid.appendChild(button);
    }
    updateActiveColorButton();
}

function initializeColorPicker() {
    updateColorPickerGrid();
}

function changeTheme(themeClass) {
    document.body.className = themeClass;
    localStorage.setItem('selectedTheme', themeClass);
    updateActiveColorButton();
}

function loadTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'theme-default';
    changeTheme(savedTheme);
}

function updateActiveColorButton() {
    const currentTheme = localStorage.getItem('selectedTheme') || 'theme-default';
    const buttons = document.querySelectorAll('.color-picker-button');
    buttons.forEach(button => {
        if (button.dataset.theme === currentTheme) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function openColorPickerModal() {
    const modal = document.getElementById('colorPickerModalOverlay');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
    }
}

function closeColorPickerModal() {
    const modal = document.getElementById('colorPickerModalOverlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }
}

// --- NEW SERIES LOGIC ---
function renderNewSeries() {
    if (typeof seriesData === 'undefined' || !Array.isArray(seriesData)) {
        console.error('Error: seriesData is not loaded correctly.');
        alert('حدث خطأ: ملف series_data.js غير محمل بشكل صحيح.');
        return;
    }
    const newSeries = seriesData.filter(s => s.isNew === true);
    renderSeries(newSeries, 'seriesGrid');
    switchSection('series');
    closeNav();
}

// --- NEW FUNCTION: SORTING BY RATING ---
function renderMostWatchedSeries() {
    // تتطلب وجود الدالة calculateTotalStars و مصفوفة seriesData
    if (typeof calculateTotalStars !== 'function' || typeof seriesData === 'undefined' || !Array.isArray(seriesData)) {
        console.error('Error: calculateTotalStars function or seriesData is not loaded correctly.');
        alert('حدث خطأ: ملف auth.js أو series_data.js غير محمل بشكل صحيح.');
        return;
    }

    // 1. نسخ المصفوفة لعدم تغيير الترتيب الأصلي
    const sortedSeries = [...seriesData];

    // 2. الفرز بناءً على عدد النجوم (الأعلى أولاً)
    sortedSeries.sort((a, b) => {
        // نستخدم دالة calculateTotalStars من ملف auth.js
        const starsB = calculateTotalStars(b.id);
        const starsA = calculateTotalStars(a.id);
        return starsB - starsA;
    });

    // 3. عرض المسلسلات المرتبة
    renderSeries(sortedSeries, 'seriesGrid');
    
    // 4. التبديل إلى قسم العرض الرئيسي وإغلاق القائمة الجانبية
    switchSection('series');
    closeNav();
}

// --- RENDERING & NAVIGATION --- 

function renderSeries(seriesArray, gridId = 'seriesGrid', isNewPage = false) {
    const seriesGrid = document.getElementById(gridId);
    if (!seriesGrid) return; 
    
    if (!Array.isArray(seriesArray)) {
        console.error('Error: seriesArray is not a valid array.');
        return;
    }

    // دالة مساعدة لإنشاء بطاقة المسلسل
    const createSeriesCard = (series) => {
        // تعتمد على calculateTotalStars من ملف auth.js
        const totalStars = typeof calculateTotalStars === 'function' ? calculateTotalStars(series.id) : 0;
        
        return `
            <div class="series-card" onclick="openDetailsPage(${series.id})">
                <div class="heart-shape-wrapper">
                    <div class="series-image-wrapper">
                        <img src="${series.image}" alt="${series.title}" class="series-image">
                        
                        <span class="series-badge" style="background: var(--primary-light); color: var(--secondary); border: 2px solid var(--primary); font-size: 14px;">
                            <i class="fas fa-star" style="color: var(--primary);"></i> ${totalStars} 
                        </span>
                        
                        <div class="series-overlay">
                            <h3 class="series-title">${series.title}</h3>
                            <p class="series-title-en">${series.titleEn}</p>
                            <div class="series-meta">
                                <span class="meta-item"><i class="fas fa-video"></i> ${series.episodes ? series.episodes.length : 0} حلقة</span>
                                <span class="meta-item"><i class="fas fa-calendar-alt"></i> ${series.year}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

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

    // إظهار/إخفاء زر "تصفح المزيد"
    const loadMoreSection = document.getElementById('loadMoreSection');
    if (loadMoreSection) {
        const totalPages = Math.ceil(seriesArray.length / SERIES_PER_PAGE);
        if (currentSeriesPage < totalPages - 1) {
            loadMoreSection.style.display = 'block';
        } else {
            loadMoreSection.style.display = 'none';
        }
    }
}

function loadMoreSeries() {
    if (typeof seriesData !== 'undefined' && Array.isArray(seriesData)) {
        currentSeriesPage++;
        renderSeries(seriesData, 'seriesGrid', true);
    }
}

function performSearch() {
    const input = document.getElementById('seriesSearchInput').value.toLowerCase().trim();
    if (input.length === 0) return;

    const filteredSeries = seriesData.filter(series => {
        const titleMatch = series.title.toLowerCase().includes(input);
        const titleEnMatch = series.titleEn.toLowerCase().includes(input);
        return titleMatch || titleEnMatch;
    });

    openSearchModal(filteredSeries);
}

function openSearchModal(seriesArray) {
    const modalOverlay = document.getElementById('searchModalOverlay');
    const resultsGrid = document.getElementById('searchResultsGrid');
    const noResultsMsg = document.getElementById('searchNoResultsMessage');
    
    if (seriesArray.length === 0) {
        resultsGrid.innerHTML = '';
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
    const resultsGrid = document.getElementById('searchResultsGrid');
    resultsGrid.innerHTML = seriesArray.map(series => {
        // تعتمد على calculateTotalStars من ملف auth.js
        const totalStars = typeof calculateTotalStars === 'function' ? calculateTotalStars(series.id) : 0;
        return `
            <div class="search-heart-card" onclick="openDetailsPage(${series.id}); closeSearchModal();">
                <div class="search-heart-wrapper">
                    <i class="fas fa-heart search-heart"></i>
                    <div class="search-image-clip">
                        <img src="${series.image}" alt="${series.title}" class="search-image">
                    </div>
                </div>
                <div class="search-heart-info">
                    <h4 class="search-heart-title">${series.title}</h4>
                    <p class="search-heart-rating">(${totalStars} نجمة)</p>
                </div>
            </div>
        `;
    }).join('');
}

function switchSection(sectionId) {
    document.getElementById('series').style.display = 'none';
    document.getElementById('favorites').style.display = 'none';
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    closeNav();
}

// --- DETAILS & PLAYER FUNCTIONS --- 

function openDetailsPage(seriesId) {
    const series = seriesData.find(s => s.id === seriesId);
    if (!series) return;

    const modalOverlay = document.getElementById('detailsModalOverlay');
    
    // 1. Header and Meta Info
    document.getElementById('detailsTitle').textContent = series.title;
    document.getElementById('detailsTitleEn').textContent = series.titleEn;
    document.getElementById('detailsDescription').textContent = series.description;
    
    document.getElementById('detailsBackdrop').style.backgroundImage = `url('${series.image}')`;
    document.getElementById('detailsMeta').innerHTML = `
        <span class="meta-item"><i class="fas fa-calendar-alt"></i> ${series.year}</span>
        <span class="meta-item"> | <i class="fas fa-video"></i> ${series.episodes ? series.episodes.length : 0} حلقة</span>
    `;

    // 2. Star Button (Rating)
    const starButton = document.getElementById('starButton');
    // تعتمد على hasUserRated و calculateTotalStars و toggleStar من ملف auth.js
    const isRated = typeof hasUserRated === 'function' ? hasUserRated(seriesId) : false;
    const totalStars = typeof calculateTotalStars === 'function' ? calculateTotalStars(seriesId) : 0;
    
    starButton.classList.remove('rated');
    if (isRated) {
        starButton.classList.add('rated');
    }
    starButton.onclick = () => toggleStar(seriesId, starButton);
    document.getElementById('starCountDisplay').textContent = `(${totalStars} نجمة)`;

    // 3. Trailer and Favorite Buttons
    document.getElementById('trailerButton').onclick = () => handlePlaybackFlow(seriesId, 0); // Episode 0 for trailer

    const detailsWishlistBtn = document.getElementById('detailsWishlistBtn');
    // تعتمد على isSeriesFavorite و toggleFavorite من ملف auth.js
    const isFav = typeof isSeriesFavorite === 'function' ? isSeriesFavorite(seriesId) : false;
    
    detailsWishlistBtn.onclick = () => toggleFavorite(seriesId, detailsWishlistBtn);

    const favIcon = detailsWishlistBtn.querySelector('i');
    favIcon.classList.remove(isFav ? 'fa-regular' : 'fa-solid');
    favIcon.classList.add(isFav ? 'fa-solid' : 'fa-regular');
    
    if (isFav) {
        detailsWishlistBtn.classList.add('active');
    } else {
        detailsWishlistBtn.classList.remove('active');
    }

    // 4. Episodes Grid (calls the new flow)
    const episodesGrid = document.getElementById('episodesGrid');
    episodesGrid.innerHTML = '';
    if (series.episodes) {
        series.episodes.forEach((url, index) => {
            const episodeNum = index + 1;
            const wrapper = document.createElement('div');
            wrapper.className = 'episode-btn-wrapper';
            
            const heart = document.createElement('i');
            heart.className = 'fas fa-heart episode-heart';
            
            const btn = document.createElement('button');
            btn.className = 'episode-btn';
            btn.textContent = episodeNum;
            
            // NEW: Use the new playback flow
            btn.onclick = () => handlePlaybackFlow(seriesId, episodeNum);
            
            const heartBg = document.createElement('i');
            heartBg.className = 'fas fa-heart episode-heart-bg';
            
            wrapper.appendChild(heartBg);
            wrapper.appendChild(heart);
            wrapper.appendChild(btn);
            episodesGrid.appendChild(wrapper);
        });
    }
    
    modalOverlay.style.display = 'flex';
    setTimeout(() => { modalOverlay.classList.add('active'); }, 10);
    document.body.style.overflow = 'hidden';
}

function closeDetailsPage() {
    const modalOverlay = document.getElementById('detailsModalOverlay');
    modalOverlay.classList.remove('active');
    setTimeout(() => {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 500);
}

function handlePlaybackFlow(seriesId, episodeNum) {
    closeDetailsPage();
    setTimeout(() => {
        showWaitAndPlay(seriesId, episodeNum);
    }, 500);
}

function clearWaitTimer() {
    if (waitTimer) {
        clearInterval(waitTimer);
        waitTimer = null;
    }
}

function showWaitAndPlay(seriesId, episodeNum) {
    const waitModal = document.getElementById('waitModal');
    const countdownTimer = document.getElementById('countdownTimer');
    const watchButton = document.getElementById('watchButton');
    const waitTitle = document.getElementById('waitTitle');
    
    clearWaitTimer();
    
    waitTitle.textContent = 'جارٍ التحضير... يرجى الانتظار 5 ثواني';
    watchButton.classList.remove('visible');
    countdownTimer.style.display = 'flex';
    
    let count = 5;
    countdownTimer.textContent = count;
    
    waitModal.style.display = 'flex';
    setTimeout(() => { waitModal.classList.add('active'); }, 10);
    document.body.style.overflow = 'hidden';
    
    waitTimer = setInterval(() => {
        count--;
        countdownTimer.textContent = count;
        
        if (count <= 0) {
            clearInterval(waitTimer);
            countdownTimer.style.display = 'none';
            waitTitle.textContent = 'المشغل جاهز الآن!';
            watchButton.classList.add('visible');
            
            // Set up the final click action
            watchButton.onclick = () => {
                waitModal.classList.remove('active');
                setTimeout(() => {
                    waitModal.style.display = 'none';
                    playVideo(seriesId, episodeNum);
                }, 500);
            };
        }
    }, 1000);
}

function playVideo(seriesId, episodeNum) {
    const series = seriesData.find(s => s.id === seriesId);
    if (!series) return;

    currentPlayingSeriesId = seriesId;
    currentPlayingEpisode = episodeNum;
    
    // حفظ معلومات الحلقة للمشغلين
    window.currentVideoInfo = createVideoInfo(seriesId, episodeNum);
    
    // إظهار نافذة اختيار المشغل
    showPlayerSelection();
}

function showPlayerSelection() {
    const overlay = document.getElementById('playerSelectionOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
        setTimeout(() => overlay.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
    }
}

function closePlayerSelection() {
    const overlay = document.getElementById('playerSelectionOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 400);
    }
}

function selectPlayer(playerType) {
    closePlayerSelection();
    
    if (playerType === 'main') {
        if (typeof Player1Embeds !== 'undefined' && Player1Embeds.playMainPlayer) {
            Player1Embeds.playMainPlayer(window.currentVideoInfo);
        } else {
            playMainPlayer(); // Fallback to old function
        }
    } else if (playerType === 'rumble') {
        if (typeof Player2Embeds !== 'undefined' && Player2Embeds.playRumblePlayer) {
            Player2Embeds.playRumblePlayer(window.currentVideoInfo);
        } else {
            playRumblePlayer(); // Fallback to old function
        }
    }
}

// Legacy functions for backward compatibility
function playMainPlayer() {
    const videoInfo = window.currentVideoInfo;
    if (!videoInfo) return;
    
    if (typeof Player1Embeds !== 'undefined' && Player1Embeds.playMainPlayer) {
        Player1Embeds.playMainPlayer(videoInfo);
    }
}

function playRumblePlayer() {
    const videoInfo = window.currentVideoInfo;
    if (!videoInfo) return;
    
    if (typeof Player2Embeds !== 'undefined' && Player2Embeds.playRumblePlayer) {
        Player2Embeds.playRumblePlayer(videoInfo);
    }
}

function navigateEpisode(direction) {
    if (currentPlayingSeriesId !== null && currentPlayingEpisode !== null) {
        const series = seriesData.find(s => s.id === currentPlayingSeriesId);
        if (!series) return;
        
        let newEpisodeNum = currentPlayingEpisode + direction;

        // Check bounds (Trailer is 0, Episodes 1 to N)
        if (newEpisodeNum >= 0 && newEpisodeNum <= series.episodes.length) {
            // Close the player instantly
            const videoPlayer = document.getElementById('videoPlayer');
            videoPlayer.classList.remove('active');
            
            // Clear the player to stop playback
            document.getElementById('video_player_container').innerHTML = '';
            
            // Re-open the flow for the new episode
            setTimeout(() => {
                showWaitAndPlay(currentPlayingSeriesId, newEpisodeNum);
            }, 100); 
        }
    }
}

// MODIFIED: Close player to return to details page
function closeVideoPlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoPlayerContainer = document.getElementById('video_player_container');
    
    videoPlayerContainer.innerHTML = '';
    
    videoPlayer.classList.remove('active');
    
    // Check if we should return to the details page
    if (currentPlayingSeriesId !== null) {
        const seriesIdToReopen = currentPlayingSeriesId;
        
        // Reset tracking variables *before* closing entirely
        currentPlayingSeriesId = null;
        currentPlayingEpisode = null;
        
        // Close player visuals
        setTimeout(() => {
            videoPlayer.style.display = 'none';
            document.body.style.overflow = 'auto'; 
            // Open the details page after the player is closed
            if (typeof openDetailsPage === 'function') {
                openDetailsPage(seriesIdToReopen);
            }
        }, 500); 

    } else {
         // Normal closing if no series was playing 
        setTimeout(() => {
            videoPlayer.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        }, 500);
    }
}

// --- NAVIGATION FUNCTIONS ---
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // منع التمرير عند فتح القائمة
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeNav() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    const btn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// --- EXPORT NEW FUNCTIONS FOR GLOBAL ACCESS ---
window.loadMoreSeries = loadMoreSeries;
window.showPlayerSelection = showPlayerSelection;
window.closePlayerSelection = closePlayerSelection;
window.selectPlayer = selectPlayer;
window.playMainPlayer = playMainPlayer;
window.playRumblePlayer = playRumblePlayer;

function initializeEventListeners() {
    // Navigation Links
    document.getElementById('navHome').onclick = () => switchSection('series');
    document.getElementById('navSeries').onclick = () => switchSection('series');
    document.getElementById('navNewSeries').onclick = renderNewSeries;
    document.getElementById('navMostWatched').onclick = renderMostWatchedSeries;
    document.getElementById('navColorPicker').onclick = openColorPickerModal;
    
    // Auth and Favorites
    const favoritesNavBtn = document.getElementById('favoritesNavBtn');
    if (favoritesNavBtn) {
        favoritesNavBtn.onclick = checkAuthAndRenderFavorites;
    }

    // Search
    const searchInput = document.getElementById('seriesSearchInput');
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.onclick = performSearch;
    }
    if (searchInput) {
        searchInput.onkeyup = (event) => {
            if(event.key === 'Enter') performSearch();
        };
    }
    
    // Title Clickable Area
    if (clickableArea) {
        clickableArea.onclick = handleAskClick;
    }
}

// التحقق من تحميل DOM قبل التهيئة
document.addEventListener('DOMContentLoaded', function() {
    try {
        loadTheme();
        initializeTitle();
        initializeColorPicker();
        initializeEventListeners();
        
        // تعتمد على دالة updateAuthLink في ملف auth.js
        if (typeof updateAuthLink === 'function') {
            updateAuthLink();
        }
        
        // عرض جميع المسلسلات بشكل افتراضي (غير مرتبة)
        // استخدام الدالة المحسنة لدعم الملفات المتعددة
        const currentGroup = getCurrentSeriesGroup();
        const seriesData = getSeriesDataByGroup(currentGroup);
        
        if (typeof seriesData !== 'undefined' && Array.isArray(seriesData)) {
            renderSeries(seriesData);
        } else {
            console.error(`series${currentGroup}Data is not defined or not an array. Check loading.`);
        }
        
        console.log('✅ تم تهيئة الموقع بنجاح');
    } catch (error) {
        console.error('❌ خطأ في تهيئة الموقع:', error);
    }
});

// التأكد من إغلاق القائمة عند تغيير حجم الشاشة من موبايل إلى ديسكتوب
window.addEventListener('resize', () => {
    // إذا كان العرض أكبر من 1024 بكسل، تأكد من إغلاق القائمة الجانبية وإزالة فئة active
    if (window.innerWidth > 1024) {
        closeNav();
    }
});

// === دوال إدارة ملفات البيانات المتعددة ===

// دالة لجمع جميع بيانات المسلسلات من الملفات المختلفة
function combineAllSeriesData() {
    allSeriesData = [];
    
    // إضافة بيانات المجموعة الأولى إذا كانت متوفرة
    if (typeof series1Data !== 'undefined' && Array.isArray(series1Data)) {
        allSeriesData = allSeriesData.concat(series1Data);
    }
    
    // إضافة بيانات المجموعة الثانية إذا كانت متوفرة
    if (typeof series2Data !== 'undefined' && Array.isArray(series2Data)) {
        allSeriesData = allSeriesData.concat(series2Data);
    }
    
    return allSeriesData;
}

// دالة للحصول على بيانات مجموعة معينة
function getSeriesDataByGroup(groupNumber) {
    switch(groupNumber) {
        case 1:
            return typeof series1Data !== 'undefined' ? series1Data : [];
        case 2:
            return typeof series2Data !== 'undefined' ? series2Data : [];
        case 3:
            return typeof series3Data !== 'undefined' ? series3Data : [];
        default:
            return [];
    }
}

// دالة للحصول على وصف حلقات مجموعة معينة
function getSeriesEpisodesByGroup(groupNumber) {
    switch(groupNumber) {
        case 1:
            return typeof series1Episodes !== 'undefined' ? series1Episodes : {};
        case 2:
            return typeof series2Episodes !== 'undefined' ? series2Episodes : {};
        case 3:
            return typeof series3Episodes !== 'undefined' ? series3Episodes : {};
        default:
            return {};
    }
}

// دالة للحصول على embed codes مجموعة معينة
function getSeriesEmbedsByGroup(groupNumber, playerNumber) {
    switch(groupNumber) {
        case 1:
            if (playerNumber === 1) {
                return typeof series1Player1Embeds !== 'undefined' ? series1Player1Embeds : {};
            } else if (playerNumber === 2) {
                return typeof series1Player2Embeds !== 'undefined' ? series1Player2Embeds : {};
            }
            break;
        case 2:
            if (playerNumber === 1) {
                return typeof series2Player1Embeds !== 'undefined' ? series2Player1Embeds : {};
            } else if (playerNumber === 2) {
                return typeof series2Player2Embeds !== 'undefined' ? series2Player2Embeds : {};
            }
            break;
        case 3:
            if (playerNumber === 1) {
                return typeof series3Player1Embeds !== 'undefined' ? series3Player1Embeds : {};
            } else if (playerNumber === 2) {
                return typeof series3Player2Embeds !== 'undefined' ? series3Player2Embeds : {};
            }
            break;
        default:
            return {};
    }
}

// دالة لعرض زر "المزيد من المسلسلات" مع إمكانية الانتقال للمجموعة التالية
function updateLoadMoreSection(groupNumber, totalSeries) {
    const loadMoreSection = document.getElementById('loadMoreSection');
    if (loadMoreSection) {
        if (totalSeries >= 30) {
            // إذا كان لدينا 30 مسلسل أو أكثر، نعرض زر الانتقال للمجموعة التالية
            loadMoreSection.style.display = 'block';
            loadMoreSection.innerHTML = `
                <div class="load-more-content">
                    <div class="load-more-text">
                        <h3>هنالك المزيد من المسلسلات!</h3>
                        <p>انقر لاستكشاف المجموعة ${groupNumber + 1} من المسلسلات الرائعة</p>
                    </div>
                    <button class="load-more-btn" onclick="goToNextSeriesGroup(${groupNumber + 1})">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                        تصفح المجموعة ${groupNumber + 1}
                    </button>
                </div>
            `;
        } else {
            loadMoreSection.style.display = 'none';
        }
    }
}

// دالة للانتقال للمجموعة التالية من المسلسلات
function goToNextSeriesGroup(groupNumber) {
    // حفظ المجموعة الحالية في sessionStorage
    sessionStorage.setItem('currentSeriesGroup', groupNumber.toString());
    
    // الانتقال لصفحة المجموعة الجديدة
    if (groupNumber === 2) {
        window.location.href = 'series2.html';
    } else {
        // يمكن إضافة المزيد من المجموعات لاحقاً
        alert(`المجموعة ${groupNumber} ستكون متاحة قريباً!`);
    }
}

// دالة للعودة للمجموعة الأولى
function goToFirstSeriesGroup() {
    sessionStorage.removeItem('currentSeriesGroup');
    window.location.href = 'index.html';
}

// دالة للحصول على مجموعة المسلسلات الحالية
function getCurrentSeriesGroup() {
    // التحقق من sessionStorage أولاً
    const savedGroup = sessionStorage.getItem('currentSeriesGroup');
    if (savedGroup) {
        return parseInt(savedGroup);
    }
    return currentSeriesGroup;
}

// تحديث دالة renderSeries لدعم الملفات المتعددة
function renderSeriesAdvanced(seriesArray, gridId = 'seriesGrid', isNewPage = false) {
    const seriesGrid = document.getElementById(gridId);
    if (!seriesGrid) return; 
    
    if (!Array.isArray(seriesArray)) {
        console.error('Error: seriesArray is not a valid array.');
        return;
    }

    // دالة مساعدة لإنشاء بطاقة المسلسل
    const createSeriesCard = (series) => {
        // تعتمد على calculateTotalStars من ملف auth.js
        const totalStars = typeof calculateTotalStars === 'function' ? calculateTotalStars(series.id) : 0;
        
        return `
            <div class="series-card" onclick="openDetailsPage(${series.id})">
                <div class="heart-shape-wrapper">
                    <div class="series-image-wrapper">
                        <img src="${series.image}" alt="${series.title}" class="series-image">
                        
                        <span class="series-badge" style="background: var(--primary-light); color: var(--secondary); border: 2px solid var(--primary); font-size: 14px;">
                            <i class="fas fa-star" style="color: var(--primary);"></i> ${totalStars} 
                        </span>
                        
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
    };

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
    const currentGroup = getCurrentSeriesGroup();
    updateLoadMoreSection(currentGroup, seriesArray.length);
}

// دالة محسنة لعرض المسلسلات تدعم الملفات المتعددة
function renderSeries(seriesArray, gridId = 'seriesGrid', isNewPage = false) {
    // استخدام الدالة المحسنة للملفات المتعددة
    renderSeriesAdvanced(seriesArray, gridId, isNewPage);
}

// دالة محسنة للبحث تدعم الملفات المتعددة
function performSearch() {
    const input = document.getElementById('seriesSearchInput').value.toLowerCase().trim();
    if (input.length === 0) return;

    // جمع البيانات من جميع الملفات
    const allData = combineAllSeriesData();
    
    const filteredSeries = allData.filter(series => {
        const titleMatch = series.title.toLowerCase().includes(input);
        const titleEnMatch = series.titleEn.toLowerCase().includes(input);
        return titleMatch || titleEnMatch;
    });

    openSearchModal(filteredSeries);
}

// دالة محسنة لتحميل المزيد من المسلسلات
function loadMoreSeries() {
    const currentGroup = getCurrentSeriesGroup();
    const seriesData = getSeriesDataByGroup(currentGroup);
    
    if (typeof seriesData !== 'undefined' && Array.isArray(seriesData)) {
        currentSeriesPage++;
        renderSeries(seriesData, 'seriesGrid', true);
    }
}

// دالة للحصول على embed URL يدعم الملفات المتعددة
function getEmbedURL(seriesId, episodeIndex, playerIndex) {
    const currentGroup = getCurrentSeriesGroup();
    const currentGroupData = getSeriesDataByGroup(currentGroup);
    const embedData = getSeriesEmbedsByGroup(currentGroup, playerIndex);
    
    // البحث عن المسلسل في البيانات الحالية
    const series = currentGroupData.find(s => s.id === seriesId);
    if (!series) {
        console.error(`Series with ID ${seriesId} not found in group ${currentGroup}`);
        return null;
    }
    
    // الحصول على embed code
    const seriesEmbeds = embedData[seriesId];
    if (!seriesEmbeds) {
        console.error(`Embed data for series ${seriesId} not found`);
        return null;
    }
    
    const episodeKey = `e${episodeIndex + 1}`;
    const embedURL = seriesEmbeds[episodeKey];
    
    if (!embedURL) {
        console.error(`Episode ${episodeIndex + 1} for series ${seriesId} not found`);
        return null;
    }
    
    return embedURL;
}

// دالة للحصول على معرف Episode via ID supports multiple files
function getPlayerEmbedById(embedId, playerId) {
    const currentGroup = getCurrentSeriesGroup();
    const embedData = getSeriesEmbedsByGroup(currentGroup, playerId);
    
    // البحث في جميع مسلسلات المجموعة
    for (const seriesId in embedData) {
        for (const episodeKey in embedData[seriesId]) {
            if (embedData[seriesId][episodeKey] === embedId) {
                return embedData[seriesId][episodeKey];
            }
        }
    }
    
    return null;
}

// Export functions for global access
window.combineAllSeriesData = combineAllSeriesData;
window.getSeriesDataByGroup = getSeriesDataByGroup;
window.getSeriesEpisodesByGroup = getSeriesEpisodesByGroup;
window.getSeriesEmbedsByGroup = getSeriesEmbedsByGroup;
window.updateLoadMoreSection = updateLoadMoreSection;
window.goToNextSeriesGroup = goToNextSeriesGroup;
window.goToFirstSeriesGroup = goToFirstSeriesGroup;
window.getCurrentSeriesGroup = getCurrentSeriesGroup;
window.renderSeriesAdvanced = renderSeriesAdvanced;
window.loadMoreSeries = loadMoreSeries;
window.performSearch = performSearch;
window.getEmbedURL = getEmbedURL;
window.getPlayerEmbedById = getPlayerEmbedById;