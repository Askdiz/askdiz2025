// --- PLAYER 1: AŞKDİZ MAIN PLAYER EMBEDS ---

// Player 1 specific functions
const Player1Embeds = {
    // Play main AşkDiz player
    playMainPlayer: function(videoInfo) {
        const series = videoInfo.series;
        const videoPlayerContainer = document.getElementById('video_player_container');
        const videoPlayer = document.getElementById('videoPlayer');
        const currentEpisodeDescription = document.getElementById('episodeDescriptionBox');
        const prevBtn = document.getElementById('prevEpisodeBtn');
        const nextBtn = document.getElementById('nextEpisodeBtn');
        
        // Clear previous player
        videoPlayerContainer.innerHTML = '';
        
        // Check navigation buttons
        prevBtn.disabled = videoInfo.episodeNum <= 1; // 1 is first episode, 0 is trailer
        nextBtn.disabled = videoInfo.episodeNum >= series.episodes.length;

        // Build new embed URL
        const embedUrl = getMainEmbedUrl(videoInfo.videoId);

        // Display episode description
        const descriptionHTML = generateEpisodeDescription(series, videoInfo.episodeNum);
        currentEpisodeDescription.innerHTML = descriptionHTML;

        // Create and append iframe
        const iframe = createMainPlayerIframe(videoInfo.videoId);
        videoPlayerContainer.appendChild(iframe);
        
        // Show player
        videoPlayer.style.display = 'flex';
        setTimeout(() => videoPlayer.classList.add('active'), 10);
    },

    // Get player 1 configuration
    getPlayerConfig: function() {
        return {
            name: 'المشغل الأول',
            nameEn: 'Main Player',
            icon: 'fas fa-video',
            description: 'مشغل AşkDiz الرئيسي - جودة عالية وسرعة في التحميل',
            color: '#E60023',
            baseUrl: 'https://askdiz-video-vault-23702.lovable.app/embed/'
        };
    },

    // Validate video ID for player 1
    validateVideoId: function(videoId) {
        // Basic validation for AşkDiz video IDs
        if (!videoId || typeof videoId !== 'string') {
            return false;
        }
        // AşkDiz IDs are typically alphanumeric
        return /^[a-zA-Z0-9]+$/.test(videoId);
    },

    // Get supported video formats for player 1
    getSupportedFormats: function() {
        return ['mp4', 'webm', 'ogg'];
    },

    // Get player 1 features
    getPlayerFeatures: function() {
        return {
            qualityControl: true,
            speedControl: true,
            fullscreen: true,
            autoplay: false,
            subtitles: true,
            theaterMode: false,
            pictureInPicture: true
        };
    }
};

// Create iframe for player 1 with enhanced features
function createPlayer1IframeEnhanced(videoId, options = {}) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('class', 'askdiz-player player1-embed');
    iframe.setAttribute('src', getMainEmbedUrl(videoId));
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    
    // Enhanced permissions
    const permissions = [
        'accelerometer',
        'autoplay', 
        'encrypted-media',
        'gyroscope',
        'picture-in-picture',
        'fullscreen',
        'clipboard-write'
    ];
    
    if (options.allowMicrophone) {
        permissions.push('microphone');
    }
    
    iframe.setAttribute('allow', permissions.join('; '));
    
    // Responsive styling
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'absolute';
    iframe.style.borderRadius = '8px';
    iframe.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    
    return iframe;
}

// Player 1 specific event handlers
const Player1Events = {
    onPlayerReady: function() {
        console.log('Player 1 is ready');
    },
    
    onPlayerError: function(error) {
        console.error('Player 1 error:', error);
        // Show user-friendly error message
        const errorMsg = document.getElementById('playerErrorMessage') || this.createErrorMessage();
        if (errorMsg) {
            errorMsg.textContent = 'عذراً، حدث خطأ في تحميل المشغل. يرجى المحاولة مرة أخرى.';
            errorMsg.style.display = 'block';
        }
    },
    
    createErrorMessage: function() {
        const container = document.getElementById('video_player_container');
        if (container) {
            const errorDiv = document.createElement('div');
            errorDiv.id = 'playerErrorMessage';
            errorDiv.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
                text-align: center;
                font-size: 18px;
                background: rgba(230, 0, 35, 0.8);
                padding: 20px;
                border-radius: 8px;
                display: none;
            `;
            container.appendChild(errorDiv);
            return errorDiv;
        }
        return null;
    }
};

// Export Player 1 specific functions
window.Player1Embeds = Player1Embeds;
window.Player1Events = Player1Events;
window.createPlayer1IframeEnhanced = createPlayer1IframeEnhanced;