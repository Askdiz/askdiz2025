// --- PLAYER EMBEDDING SYSTEM ---

// Base URLs for different players
const PLAYER_BASE_URLS = {
    main: "https://askdiz-video-vault-23702.lovable.app/embed/",
    rumble: "https://rumble.com/embed/"
};

// Get embed URL for main player
function getMainEmbedUrl(videoId) {
    return `${PLAYER_BASE_URLS.main}${videoId}`;
}

// Get embed URL for rumble player  
function getRumbleEmbedUrl(videoId) {
    return `${PLAYER_BASE_URLS.rumble}${videoId}`;
}

// Create iframe element for main player
function createMainPlayerIframe(videoId) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('class', 'askdiz-player');
    iframe.setAttribute('src', getMainEmbedUrl(videoId));
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'absolute';
    return iframe;
}

// Create iframe element for rumble player
function createRumblePlayerIframe(videoId) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('class', 'askdiz-player');
    iframe.setAttribute('src', getRumbleEmbedUrl(videoId));
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'absolute';
    return iframe;
}

// Get video ID based on series and episode
function getVideoId(series, episodeNum) {
    if (episodeNum === 0) {
        return series.trailerId;
    } else {
        if (series.episodes && series.episodes[episodeNum - 1]) {
            return series.episodes[episodeNum - 1];
        } else {
            console.error(`Video ID not found for series ${series.id}, episode ${episodeNum}`);
            return 'v3l908a'; // معرّف افتراضي
        }
    }
}

// Get rumble video ID for second player
function getRumbleVideoId(series, episodeNum) {
    if (episodeNum === 0) {
        return series.trailerId; // Use trailer for episode 0
    } else {
        if (series.rumbleEpisodes && series.rumbleEpisodes[episodeNum - 1]) {
            return series.rumbleEpisodes[episodeNum - 1];
        } else {
            // Fallback to main episodes if rumble episodes not available
            if (series.episodes && series.episodes[episodeNum - 1]) {
                return series.episodes[episodeNum - 1];
            } else {
                console.error(`Rumble Video ID not found for series ${series.id}, episode ${episodeNum}`);
                return 'v3l908a'; // معرّف افتراضي
            }
        }
    }
}

// Get episode name for display
function getEpisodeName(series, episodeNum) {
    if (episodeNum === 0) {
        return 'التريلر';
    } else {
        return `الحلقة ${episodeNum}`;
    }
}

// Generate episode description
function generateEpisodeDescription(series, episodeNum) {
    let descriptionHTML = '';
    if (episodeNum > 0 && series.episodeDetails && series.episodeDetails[episodeNum - 1]) {
        descriptionHTML = `<h4>${series.title} - ${getEpisodeName(series, episodeNum)}:</h4><p>${series.episodeDetails[episodeNum - 1]}</p>`;
    } else if (episodeNum === 0) {
        descriptionHTML = `<h4>${series.title} - ${getEpisodeName(series, episodeNum)}:</h4><p>شاهد العرض التشويقي الرسمي للمسلسل.</p>`;
    } else {
        descriptionHTML = `<h4>${series.title} - ${getEpisodeName(series, episodeNum)}:</h4><p>لا يتوفر وصف لهذه الحلقة.</p>`;
    }
    return descriptionHTML;
}

// Video info object structure
function createVideoInfo(seriesId, episodeNum) {
    const series = seriesData.find(s => s.id === seriesId);
    if (!series) return null;

    return {
        seriesId: seriesId,
        episodeNum: episodeNum,
        videoId: getVideoId(series, episodeNum),
        rumbleVideoId: getRumbleVideoId(series, episodeNum),
        episodeName: getEpisodeName(series, episodeNum),
        series: series
    };
}

// Export all functions for global use
window.getMainEmbedUrl = getMainEmbedUrl;
window.getRumbleEmbedUrl = getRumbleEmbedUrl;
window.createMainPlayerIframe = createMainPlayerIframe;
window.createRumblePlayerIframe = createRumblePlayerIframe;
window.getVideoId = getVideoId;
window.getRumbleVideoId = getRumbleVideoId;
window.getEpisodeName = getEpisodeName;
window.generateEpisodeDescription = generateEpisodeDescription;
window.createVideoInfo = createVideoInfo;