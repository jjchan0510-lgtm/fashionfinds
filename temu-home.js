// Clothing recommendation database with real images
const clothingDatabase = [
    // Casual Wear
    { id: 1, name: 'Casual T-Shirt', category: 'casual', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', colors: ['blue', 'white', 'black'], skinTones: ['fair', 'medium', 'dark'], bodyType: 'any', season: 'all', style: 'casual', rating: 4.6 },
    { id: 2, name: 'Trendy Hoodie', category: 'casual', image: 'https://images.unsplash.com/photo-1556821552-3f29a0bbf31e?w=300&h=300&fit=crop', colors: ['gray', 'navy', 'black'], skinTones: ['fair', 'medium', 'dark'], bodyType: 'any', season: 'winter', style: 'casual', rating: 4.8 },
    { id: 3, name: 'Comfortable Jeans', category: 'casual', image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=300&fit=crop', colors: ['blue', 'black', 'gray'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'casual', rating: 4.7 },
    { id: 4, name: 'Polo Shirt', category: 'casual', image: 'https://images.unsplash.com/photo-1618183479302-1abc8d78ea50?w=300&h=300&fit=crop', colors: ['red', 'green', 'navy'], skinTones: ['fair', 'medium'], bodyType: 'athletic', season: 'spring', style: 'casual', rating: 4.5 },
    
    // Formal Wear
    { id: 5, name: 'Formal Blazer', category: 'formal', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop', colors: ['black', 'navy', 'gray'], skinTones: ['fair', 'medium', 'dark'], bodyType: 'athletic', season: 'all', style: 'formal', rating: 4.9 },
    { id: 6, name: 'Dress Pants', category: 'formal', image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=300&fit=crop', colors: ['black', 'gray', 'navy'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'formal', rating: 4.8 },
    { id: 7, name: 'Formal Dress', category: 'formal', image: 'https://images.unsplash.com/photo-1595777707802-221b3bed854d?w=300&h=300&fit=crop', colors: ['black', 'navy', 'burgundy'], skinTones: ['fair', 'medium', 'dark'], bodyType: 'any', season: 'all', style: 'formal', rating: 4.9 },
    { id: 8, name: 'Silk Blouse', category: 'formal', image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=300&h=300&fit=crop', colors: ['white', 'cream', 'gold'], skinTones: ['fair', 'medium'], bodyType: 'any', season: 'all', style: 'formal', rating: 4.7 },
    
    // Sporty
    { id: 9, name: 'Athletic Shorts', category: 'sporty', image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop', colors: ['black', 'blue', 'neon'], skinTones: ['any'], bodyType: 'athletic', season: 'summer', style: 'sporty', rating: 4.6 },
    { id: 10, name: 'Sports Tank', category: 'sporty', image: 'https://images.unsplash.com/photo-1522075782050-dbb8a36ba58d?w=300&h=300&fit=crop', colors: ['neon', 'black', 'white'], skinTones: ['dark', 'medium'], bodyType: 'athletic', season: 'summer', style: 'sporty', rating: 4.7 },
    { id: 11, name: 'Gym Jacket', category: 'sporty', image: 'https://images.unsplash.com/photo-1556821552-3f29a0bbf31e?w=300&h=300&fit=crop', colors: ['black', 'blue', 'gray'], skinTones: ['any'], bodyType: 'athletic', season: 'all', style: 'sporty', rating: 4.8 },
    { id: 12, name: 'Running Tights', category: 'sporty', image: 'https://images.unsplash.com/photo-1506629082632-401d5e49ab0e?w=300&h=300&fit=crop', colors: ['black', 'navy'], skinTones: ['any'], bodyType: 'athletic', season: 'winter', style: 'sporty', rating: 4.5 },
    
    // Evening Wear
    { id: 13, name: 'Elegant Gown', category: 'evening', image: 'https://images.unsplash.com/photo-1595777707802-221b3bed854d?w=300&h=300&fit=crop', colors: ['gold', 'silver', 'black'], skinTones: ['fair', 'medium', 'dark'], bodyType: 'any', season: 'all', style: 'elegant', rating: 4.9 },
    { id: 14, name: 'Evening Dress', category: 'evening', image: 'https://images.unsplash.com/photo-1545148e16d5-c5d688e6e441?w=300&h=300&fit=crop', colors: ['red', 'purple', 'emerald'], skinTones: ['fair', 'medium', 'dark'], bodyType: 'any', season: 'all', style: 'elegant', rating: 4.8 },
    { id: 15, name: 'Cocktail Top', category: 'evening', image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=300&h=300&fit=crop', colors: ['black', 'silver', 'gold'], skinTones: ['fair', 'medium'], bodyType: 'any', season: 'all', style: 'elegant', rating: 4.7 },
    { id: 16, name: 'Sequin Jacket', category: 'evening', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop', colors: ['gold', 'silver', 'black'], skinTones: ['dark', 'medium'], bodyType: 'any', season: 'all', style: 'elegant', rating: 4.8 },
    
    // Accessories
    { id: 17, name: 'Classic Scarf', category: 'accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', colors: ['all'], skinTones: ['any'], bodyType: 'any', season: 'winter', style: 'any', rating: 4.6 },
    { id: 18, name: 'Leather Belt', category: 'accessories', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop', colors: ['black', 'brown', 'tan'], skinTones: ['any'], bodyType: 'any', season: 'all', style: 'any', rating: 4.7 },
    { id: 19, name: 'Statement Necklace', category: 'accessories', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop', colors: ['gold', 'silver'], skinTones: ['fair', 'medium'], bodyType: 'any', season: 'all', style: 'elegant', rating: 4.8 },
    { id: 20, name: 'Casual Cap', category: 'accessories', image: 'https://images.unsplash.com/photo-1621293954387-db3e15a37e72?w=300&h=300&fit=crop', colors: ['black', 'navy', 'tan'], skinTones: ['any'], bodyType: 'any', season: 'summer', style: 'casual', rating: 4.5 },
];

let userProfile = null;
let recommendedItems = [];
let currentCategory = 'all';
let userPhotoData = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('StyleMatch initialized');
});

// Camera Functions
function openCamera() {
    const modal = document.getElementById('cameraModal');
    modal.classList.add('active');
    
    const video = document.getElementById('cameraVideo');
    navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' },
        audio: false 
    }).then(function(stream) {
        video.srcObject = stream;
        video.play();
    }).catch(function(err) {
        alert('Unable to access camera: ' + err.message);
    });
}

function closeCamera() {
    const modal = document.getElementById('cameraModal');
    modal.classList.remove('active');
    
    const video = document.getElementById('cameraVideo');
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }
}

function capturePhoto() {
    const video = document.getElementById('cameraVideo');
    const canvas = document.getElementById('captureCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    
    const photoData = canvas.toDataURL('image/jpeg');
    userPhotoData = photoData;
    
    // Stop video
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }
    
    closeCamera();
    analyzePhoto(photoData);
}

function analyzePhoto(photoData) {
    // Display the captured photo
    const img = new Image();
    img.src = photoData;
    img.onload = function() {
        // Extract detailed color analysis from the photo
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        // Analyze the photo to determine skin tone and detailed features
        const userStyle = analyzeUserStyleDetailed(canvas);
        userProfile = userStyle;
        
        // Show analysis modal with detailed info
        showAnalysisDetailed(photoData, userStyle);
    };
}

function analyzeUserStyleDetailed(canvas) {
    // Detailed analysis based on image characteristics
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    let avgR = 0, avgG = 0, avgB = 0;
    let pixelCount = data.length / 4;
    
    // Focus on upper region (likely face area)
    const upperRegionData = ctx.getImageData(0, 0, canvas.width, canvas.height / 2);
    const upperData = upperRegionData.data;
    let faceAvgR = 0, faceAvgG = 0, faceAvgB = 0;
    
    for (let i = 0; i < upperData.length; i += 4) {
        faceAvgR += upperData[i];
        faceAvgG += upperData[i + 1];
        faceAvgB += upperData[i + 2];
    }
    
    faceAvgR /= (upperData.length / 4);
    faceAvgG /= (upperData.length / 4);
    faceAvgB /= (upperData.length / 4);
    
    // Overall brightness
    for (let i = 0; i < data.length; i += 4) {
        avgR += data[i];
        avgG += data[i + 1];
        avgB += data[i + 2];
    }
    
    avgR /= pixelCount;
    avgG /= pixelCount;
    avgB /= pixelCount;
    
    // Determine detailed skin tone
    let skinTone = 'medium';
    let skinToneDescription = 'Medium complexion';
    let skinUndertone = 'neutral';
    let brightness = (faceAvgR + faceAvgG + faceAvgB) / 3;
    let overallBrightness = (avgR + avgG + avgB) / 3;
    
    // Skin tone classification with undertone
    if (brightness > 200) {
        skinTone = 'fair';
        skinToneDescription = 'Fair complexion';
        if (faceAvgR > faceAvgG && faceAvgR > faceAvgB) {
            skinUndertone = 'warm';
        } else if (faceAvgB > faceAvgR && faceAvgB > faceAvgG) {
            skinUndertone = 'cool';
        } else {
            skinUndertone = 'neutral';
        }
    } else if (brightness > 150) {
        skinTone = 'medium';
        skinToneDescription = 'Medium complexion';
        if (faceAvgR - faceAvgG > 10) {
            skinUndertone = 'warm';
        } else if (faceAvgG - faceAvgR > 10) {
            skinUndertone = 'cool';
        } else {
            skinUndertone = 'neutral';
        }
    } else {
        skinTone = 'dark';
        skinToneDescription = 'Deep complexion';
        if (faceAvgR > faceAvgG) {
            skinUndertone = 'warm';
        } else {
            skinUndertone = 'cool';
        }
    }
    
    // Detect lighting condition
    let lighting = 'natural';
    if (overallBrightness > 200) {
        lighting = 'bright';
    } else if (overallBrightness < 100) {
        lighting = 'low';
    }
    
    // Detect dress code from overall colors
    let dressCode = overallBrightness > 180 ? 'formal' : 'casual';
    
    // Determine color harmony
    let colorHarmony = getColorHarmony(faceAvgR, faceAvgG, faceAvgB);
    
    return {
        skinTone: skinTone,
        skinToneDescription: skinToneDescription,
        skinUndertone: skinUndertone,
        brightness: brightness,
        overallBrightness: overallBrightness,
        dressCode: dressCode,
        lighting: lighting,
        bodyType: 'any',
        season: getSeason(),
        colorPalette: getColorPalette(brightness),
        colorHarmony: colorHarmony,
        faceAvgR: Math.round(faceAvgR),
        faceAvgG: Math.round(faceAvgG),
        faceAvgB: Math.round(faceAvgB)
    };
}

function getColorHarmony(r, g, b) {
    const hues = [];
    
    // Simple color harmony detection
    if (r > g && r > b) {
        return 'warm tones'; // Red/warm dominant
    } else if (b > r && b > g) {
        return 'cool tones'; // Blue/cool dominant
    } else if (g > r && g > b) {
        return 'earthy tones'; // Green/earth dominant
    } else {
        return 'balanced tones';
    }
}

function getSeason() {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'fall';
    return 'winter';
}

function getColorPalette(brightness) {
    if (brightness > 180) {
        return ['white', 'cream', 'light colors'];
    } else if (brightness > 150) {
        return ['neutral', 'pastels', 'earth tones'];
    } else {
        return ['bold', 'dark', 'rich colors'];
    }
}

function showAnalysisDetailed(photoData, userStyle) {
    const modal = document.getElementById('analysisModal');
    document.getElementById('capturedPhoto').src = photoData;
    
    const profileDetails = document.getElementById('profileDetails');
    profileDetails.innerHTML = `
        <div class="detail-item">
            <span class="detail-label">Skin Tone</span>
            <span class="detail-value">${userStyle.skinTone}</span>
            <span class="detail-description">${userStyle.skinToneDescription}</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Undertone</span>
            <span class="detail-value">${userStyle.skinUndertone}</span>
            <span class="detail-description">Color warmth characteristic</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Lighting</span>
            <span class="detail-value">${userStyle.lighting}</span>
            <span class="detail-description">Photo lighting condition</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Dress Code</span>
            <span class="detail-value">${userStyle.dressCode}</span>
            <span class="detail-description">Style preference detected</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Color Harmony</span>
            <span class="detail-value">${userStyle.colorHarmony}</span>
            <span class="detail-description">Your color profile</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Season</span>
            <span class="detail-value">${userStyle.season}</span>
            <span class="detail-description">Current season</span>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeAnalysis() {
    const modal = document.getElementById('analysisModal');
    modal.classList.remove('active');
}

function generateRecommendations() {
    if (!userProfile) {
        alert('Please take a photo first');
        return;
    }
    
    closeAnalysis();
    
    // Show loading state
    document.getElementById('loadingIndicator').style.display = 'block';
    document.getElementById('productsGrid').style.display = 'none';
    document.getElementById('recommendationsSection').style.display = 'none';
    
    // Simulate API call
    setTimeout(() => {
        recommendedItems = getRecommendations(userProfile);
        displayRecommendations();
        document.getElementById('loadingIndicator').style.display = 'none';
        document.getElementById('productsGrid').style.display = 'grid';
    }, 1500);
}

function getRecommendations(userProfile) {
    const recommendations = clothingDatabase.map(item => {
        let score = 0;
        
        // Skin tone compatibility
        if (item.skinTones.includes(userProfile.skinTone) || item.skinTones.includes('any')) {
            score += 30;
        }
        
        // Dress code compatibility
        if (item.style === userProfile.dressCode || item.style === 'casual') {
            score += 25;
        }
        
        // Season compatibility
        if (item.season === userProfile.season || item.season === 'all') {
            score += 20;
        }
        
        // Color palette compatibility
        if (item.colors.includes('all') || userProfile.colorPalette.some(c => 
            item.colors.some(color => color.toLowerCase().includes(c.toLowerCase())))) {
            score += 15;
        }
        
        // Base item rating
        score += item.rating * 2;
        
        return { ...item, matchScore: Math.round(score) };
    });
    
    // Sort by match score and return top 12
    return recommendations.sort((a, b) => b.matchScore - a.matchScore).slice(0, 12);
}

function displayRecommendations() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    recommendedItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <div class="try-on-container">
                    <img src="${userPhotoData}" alt="Your photo" class="try-on-background">
                    <img src="${item.image}" alt="${item.name}" class="try-on-clothing">
                </div>
                <div class="recommendation-badge">✓ RECOMMENDED</div>
            </div>
            <div class="product-info">
                <div class="product-name">${item.name}</div>
                <div class="product-rating">⭐ ${item.rating} ✓ Match ${item.matchScore}%</div>
                <div class="match-score">Perfect for your style!</div>
                <div style="margin-top: 8px; font-size: 11px; color: #999;">
                    ${item.category.charAt(0).toUpperCase() + item.category.slice(1)} • ${item.season}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter recommendations by category
    const filtered = category === 'all' 
        ? recommendedItems 
        : recommendedItems.filter(item => item.category === category);
    
    displayFilteredRecommendations(filtered);
}

function displayFilteredRecommendations(items) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    if (items.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 30px; color: #999;">No recommendations in this category</div>';
        return;
    }
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <div class="try-on-container">
                    <img src="${userPhotoData}" alt="Your photo" class="try-on-background">
                    <img src="${item.image}" alt="${item.name}" class="try-on-clothing">
                </div>
                <div class="recommendation-badge">✓ RECOMMENDED</div>
            </div>
            <div class="product-info">
                <div class="product-name">${item.name}</div>
                <div class="product-rating">⭐ ${item.rating} ✓ Match ${item.matchScore}%</div>
                <div class="match-score">Perfect for your style!</div>
                <div style="margin-top: 8px; font-size: 11px; color: #999;">
                    ${item.category.charAt(0).toUpperCase() + item.category.slice(1)} • ${item.season}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.closest('.tab').classList.add('active');
    
    if (tab === 'camera') {
        openCamera();
    } else if (tab === 'tips') {
        alert('Style Tips:\n\n• Wear colors that complement your skin tone\n• Match formal occasions with dress codes\n• Consider the weather when choosing outfits\n• Mix and match with accessories');
    } else if (tab === 'account') {
        alert('Account Features (Coming Soon)\n\n• Save favorite recommendations\n• View your style history\n• Get weekly style suggestions');
    }
}

function showAbout() {
    alert('StyleMatch - Your Personal Style Advisor\n\n📷 Take a selfie\n🔍 Get analyzed\n👔 Receive recommendations\n\nNo purchases needed - just style advice!');
}
