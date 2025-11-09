// --- PLAYER 2: RUMBLE PLAYER EMBEDS ---

// Player 2 specific functions
const Player2Embeds = {
    // Play Rumble player
    playRumblePlayer: function(videoInfo) {
        const series = videoInfo.series;
        const videoPlayerContainer = document.getElementById('video_player_container');
        const videoPlayer = document.getElementById('videoPlayer');
        const currentEpisodeDescription = document.getElementById('episodeDescriptionBox');
        const prevBtn = document.getElementById('prevEpisodeBtn');
        const nextBtn = document.getElementById('nextEpisodeBtn');
        
        // Clear previous player
        videoPlayerContainer.innerHTML = '';
        
        // Check navigation buttons
        prevBtn.disabled = videoInfo.episodeNum <= 1;
        nextBtn.disabled = videoInfo.episodeNum >= series.episodes.length;

        // Display episode description
        const descriptionHTML = generateEpisodeDescription(series, videoInfo.episodeNum);
        currentEpisodeDescription.innerHTML = descriptionHTML;

        // Use rumbe video ID (second player episodes)
        const rumbleVideoId = getRumbleVideoId(series, videoInfo.episodeNum);
        
        // Create and append iframe
        const iframe = createRumblePlayerIframe(rumbleVideoId);
        videoPlayerContainer.appendChild(iframe);
        
        // Show player
        videoPlayer.style.display = 'flex';
        setTimeout(() => videoPlayer.classList.add('active'), 10);
    },

    // Get player 2 configuration
    getPlayerConfig: function() {
        return {
            name: 'مشغل Rumble',
            nameEn: 'Rumble Player',
            icon: 'fab fa-youtube',
            description: 'مشغل Rumble البديل - خيارات إضافية وجودة ممتازة',
            color: '#FF0000',
            baseUrl: 'https://rumble.com/embed/'
        };
    },

    // Validate video ID for player 2 (Rumble)
    validateVideoId: function(videoId) {
        // Rumble video IDs are typically alphanumeric strings
        if (!videoId || typeof videoId !== 'string') {
            return false;
        }
        return /^[a-zA-Z0-9]+$/.test(videoId);
    },

    // Get supported video formats for player 2
    getSupportedFormats: function() {
        return ['mp4', 'webm', 'hls'];
    },

    // Get player 2 features
    getPlayerFeatures: function() {
        return {
            qualityControl: true,
            speedControl: true,
            fullscreen: true,
            autoplay: true,
            subtitles: false,
            theaterMode: true,
            pictureInPicture: true,
            chat: true,
            liveStreaming: true
        };
    },

    // Get Rumble-specific embed parameters
    getRumbleEmbedParams: function(videoId, options = {}) {
        const params = new URLSearchParams();
        
        // Basic parameters
        params.append('video', videoId);
        
        // Optional parameters
        if (options.mute !== undefined) {
            params.append('mute', options.mute ? '1' : '0');
        }
        
        if (options.autoplay !== undefined) {
            params.append('autoplay', options.autoplay ? '1' : '0');
        }
        
        if (options.fullscreen !== undefined) {
            params.append('allowfullscreen', options.fullscreen ? '1' : '0');
        }
        
        if (options.hideThumbnail !== undefined) {
            params.append('hide_thumbnail', options.hideThumbnail ? '1' : '0');
        }
        
        return params.toString();
    }
};

// Create enhanced iframe for player 2 (Rumble)
function createPlayer2IframeEnhanced(videoId, options = {}) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('class', 'askdiz-player player2-embed');
    
    // Build Rumble URL with parameters
    const baseUrl = 'https://rumble.com/embed/';
    const embedUrl = baseUrl + videoId;
    
    // Add query parameters
    const queryParams = Player2Embeds.getRumbleEmbedParams(videoId, options);
    const fullUrl = queryParams ? `${embedUrl}?${queryParams}` : embedUrl;
    
    iframe.setAttribute('src', fullUrl);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    
    // Enhanced permissions for Rumble
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
    
    if (options.allowCamera) {
        permissions.push('camera');
    }
    
    iframe.setAttribute('allow', permissions.join('; '));
    
    // Responsive styling
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'absolute';
    iframe.style.borderRadius = '8px';
    iframe.style.boxShadow = '0 4px 20px rgba(255, 0, 0, 0.3)';
    
    return iframe;
}

// Player 2 specific event handlers
const Player2Events = {
    onPlayerReady: function() {
        console.log('Player 2 (Rumble) is ready');
    },
    
    onPlayerError: function(error) {
        console.error('Player 2 (Rumble) error:', error);
        // Show user-friendly error message
        const errorMsg = document.getElementById('player2ErrorMessage') || this.createErrorMessage();
        if (errorMsg) {
            errorMsg.textContent = 'عذراً، حدث خطأ في تحميل مشغل Rumble. يرجى المحاولة مرة أخرى أو اختيار مشغل آخر.';
            errorMsg.style.display = 'block';
        }
    },
    
    createErrorMessage: function() {
        const container = document.getElementById('video_player_container');
        if (container) {
            const errorDiv = document.createElement('div');
            errorDiv.id = 'player2ErrorMessage';
            errorDiv.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
                text-align: center;
                font-size: 18px;
                background: rgba(255, 0, 0, 0.8);
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

// Rumble-specific utilities
const RumbleUtils = {
    // Check if video is live
    isLiveVideo: function(videoId) {
        // Rumble live videos typically have specific patterns
        return videoId.startsWith('live_') || videoId.includes('livestream');
    },
    
    // Get video quality options
    getQualityOptions: function() {
        return [
            { value: 'auto', label: 'تلقائي' },
            { value: '1080p', label: '1080p - جودة عالية' },
            { value: '720p', label: '720p - جودة متوسطة' },
            { value: '480p', label: '480p - جودة منخفضة' }
        ];
    },
    
    // Parse Rumble video info
    parseVideoInfo: function(videoId) {
        // Basic parsing for Rumble video information
        return {
            id: videoId,
            platform: 'rumble',
            isLive: this.isLiveVideo(videoId),
            supportedQualities: this.getQualityOptions()
        };
    }
};

// Export Player 2 specific functions
window.Player2Embeds = Player2Embeds;
window.Player2Events = Player2Events;
window.RumbleUtils = RumbleUtils;
window.createPlayer2IframeEnhanced = createPlayer2IframeEnhanced;