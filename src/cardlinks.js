// Main state object
const state = {
    activeSection: 'all-section',
    activeButton: null,
    colorMap: {
        'All': {
            color: '--highlight-orange'
        },
        'Editors': {
            color: '--highlight-blue'
        },
        'Tools': {
            color: '--highlight-green'
        },
        'Data': {
            color: '--highlight-red'
        },
        'Code': {
            color: '--icon-code'
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // Update the current date display
    updateDate();

    // Start the timer with local time
    startTimer();

    // Setup navigation
    setupNavigation();

    // Setup handlers for header icons
    setupHeaderIcons();

    // Setup theme toggle
    setupThemeToggle();

    // Note: Card handlers will now be set up after cards are rendered 
    // by the cardlinks-links.js file
});

// Format and display the current date
function updateDate() {
    const now = new Date();
    const days = ['NIEDZIELA', 'PONIEDZIALEK', 'WTOREK', 'SRODA', 'CZWARTEK', 'PIATEK', 'SOBOTA'];
    const months = ['STYCZNIA', 'LUTEGO', 'MARCA', 'KWIETNIA', 'MAJA', 'CZERWCA', 'LIPCA', 'SIERPNIA', 'WRZESNIA', 'PAZDZIERNIKA', 'LISTOPADA', 'GRUDNIA'];

    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    document.getElementById('current-date').textContent = `${dayName}, ${day} ${month} ${year}`;
}

// Start and update the timer with local time
function startTimer() {
    // Get current local time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Update timer display
    updateTimerDisplay(hours, minutes, seconds);

    // Update timer every second
    setInterval(function () {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
                if (hours >= 24) {
                    hours = 0;
                }
            }
        }

        updateTimerDisplay(hours, minutes, seconds);
    }, 1000);
}

// Update the timer display
function updateTimerDisplay(hours, minutes, seconds) {
    document.getElementById('hours').textContent = padZero(hours);
    document.getElementById('minutes').textContent = padZero(minutes);
    document.getElementById('seconds').textContent = padZero(seconds);
}

// Pad numbers with leading zero if needed
function padZero(num) {
    return num.toString().padStart(2, '0');
}

// Setup navigation functionality
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');

    // Set initial active button
    state.activeButton = document.querySelector('.nav-button.active');

    navButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Skip if already active
            if (this === state.activeButton) return;

            // Remove active class from current active button
            if (state.activeButton) {
                state.activeButton.classList.remove('active');
            }

            // Add active class to clicked button
            this.classList.add('active');

            // Update state
            state.activeButton = this;

            // Switch section
            const targetSection = this.getAttribute('data-target');
            switchSection(targetSection);

            // Handle category filtering for navigation
            const buttonTitle = this.getAttribute('data-title');
            handleCategoryNavigation(buttonTitle, targetSection);

            // Apply style
            updateNavStyle(buttonTitle);

            // Add ripple effect
            addRippleEffect(this);
        });
    });

    // Apply initial nav style
    const initialButton = document.querySelector('.nav-button.active');
    if (initialButton) {
        updateNavStyle(initialButton.getAttribute('data-title'));
        // Initialize with all links for the first button
        handleCategoryNavigation(initialButton.getAttribute('data-title'), initialButton.getAttribute('data-target'));
    }
}

// Handle category navigation and filtering
function handleCategoryNavigation(buttonTitle, targetSection) {
    // Import functions from cardlinks-links.js
    if (typeof window.filterLinks === 'function' && typeof window.renderCards === 'function') {
        let linksToShow = [];
        let showCategoryMarkers = false;

        switch (buttonTitle.toLowerCase()) {
            case 'all':
                // Show all links with category and subcategory markers
                const allLinks = [...(window.carrdLinks || []), ...(window.extraTools || [])];
                linksToShow = allLinks;
                showCategoryMarkers = true;
                break;
            case 'editors':
                // Show only editors with subcategories
                linksToShow = window.filterLinks('editors');
                showCategoryMarkers = true;
                break;
            case 'tools':
                // Show only tools with subcategories
                linksToShow = window.filterLinks('tools');
                showCategoryMarkers = true;
                break;
            case 'data':
                // Show only data with subcategories
                linksToShow = window.filterLinks('data');
                showCategoryMarkers = true;
                break;
            case 'code':
                // Show only code with subcategories
                linksToShow = window.filterLinks('code');
                showCategoryMarkers = true;
                break;
            default:
                // Fallback to all links
                linksToShow = window.carrdLinks || [];
                showCategoryMarkers = true;
        }

        // Find the appropriate container for the target section
        let containerSelector = '.grid-container';
        if (targetSection === 'editors-section') {
            containerSelector = '#editors-grid';
        } else if (targetSection === 'tools-section') {
            containerSelector = '#tools-grid';
        } else if (targetSection === 'data-section') {
            containerSelector = '#data-grid';
        } else if (targetSection === 'code-section') {
            containerSelector = '#code-grid';
        }

        // Render the filtered links with subcategories
        window.renderCards(containerSelector, linksToShow, showCategoryMarkers, true);
    }
}

// Switch section with animation
function switchSection(sectionId) {
    // Skip if already on the same section
    if (state.activeSection === sectionId) return;

    // Get sections
    const previousSection = document.getElementById(state.activeSection);
    const newSection = document.getElementById(sectionId);

    // Use anime.js for smooth section transitions
    anime.timeline({
        easing: 'easeOutExpo'
    })
        .add({
            targets: previousSection,
            opacity: [1, 0],
            translateY: [0, 0],
            duration: 100,
            complete: function () {
                previousSection.classList.remove('active');
                newSection.classList.add('active');
            }
        })
        .add({
            targets: newSection,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 400
        });

    // Update state
    state.activeSection = sectionId;
}

// Update navigation style based on active button
function updateNavStyle(buttonTitle) {
    const nav = document.querySelector('.nav');
    const colorInfo = state.colorMap[buttonTitle];

    if (!colorInfo) return;



}

// Add ripple effect to element
function addRippleEffect(element) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    // Position in center of button
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `calc(50% - ${size / 2}px)`;
    ripple.style.top = `calc(50% - ${size / 2}px)`;

    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Setup handlers for all the card elements
function setupCardHandlers() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // We don't need the hover handlers anymore as we're handling this with CSS
        // Add click ripple effect
        card.addEventListener('click', function (e) {
            // Create ripple element
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            const ripple = document.createElement('div');
            ripple.classList.add('ripple-effect');
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            // Add to the card
            this.appendChild(ripple);

            // Remove after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Setup handlers for header icons
function setupHeaderIcons() {
    const icons = document.querySelectorAll('.header-icon');

    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Add click animation
            this.classList.add('clicked');

            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);

            // Handle specific actions based on icon type
            if (this.classList.contains('settings')) {
                alert('Settings panel would open here');
            } else if (this.classList.contains('lock')) {
                alert('Lock/unlock functionality would trigger here');
            } else if (this.classList.contains('folder')) {
                alert('File browser would open here');
            } else if (this.classList.contains('warning')) {
                alert('Warning or notification panel would display here');
            }
        });
    });
}

// Setup theme toggle functionality
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('i');
    const rootElement = document.documentElement;

    // Initialize theme on first load
    initializeTheme();

    // Add click event listener for theme toggle
    themeToggle.addEventListener('click', function () {
        toggleTheme();
        // Add ripple animation effect
        addRippleEffect(themeToggle);
    });

    // Helper function to toggle between themes
    function toggleTheme() {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        applyTheme(newTheme);
        updateThemeIcon(newTheme);
        saveThemePreference(newTheme);

        // Dispatch custom event for theme change
        document.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { theme: newTheme }
        }));
    }

    // Helper function to apply theme
    function applyTheme(theme) {
        if (theme === 'light') {
            rootElement.classList.add('light-theme');
            rootElement.setAttribute('data-theme', 'light');
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark');
        } else {
            rootElement.classList.remove('light-theme');
            rootElement.setAttribute('data-theme', 'dark');
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark');
        }

        updateCSSVariables(theme);
    }

    // Helper function to update theme icon
    function updateThemeIcon(theme) {
        if (!icon) return;

        if (theme === 'light') {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    // Helper function to get current theme
    function getCurrentTheme() {
        return rootElement.classList.contains('light-theme') ? 'light' : 'dark';
    }

    // Helper function to save theme preference
    function saveThemePreference(theme) {
        localStorage.setItem('cardlinks-theme', theme);
    }

    // Helper function to update CSS variables based on theme
    function updateCSSVariables(theme) {
        // Remove any inline styles to let CSS variables take precedence
        const propertiesToClear = [
            '--highlight-orange', '--highlight-blue', '--highlight-green', '--highlight-red',
            '--color-bg-primary', '--bg-primary', '--bg-secondary', '--text-primary',
            '--text-secondary', '--border-color', '--shadow-color', '--primary-green',
            '--primary-pink', '--primary-blue', '--primary-purple', '--bg-tertiary',
            '--bg-card', '--bg-overlay', '--text-muted', '--text-accent', '--shadow-glow'
        ];

        propertiesToClear.forEach(prop => {
            rootElement.style.removeProperty(prop);
        });

        // Let CSS handle the theme variables automatically
        // The CSS :root selectors will apply the correct variables

        // Trigger a reflow to ensure CSS variables are updated
        rootElement.offsetHeight;

        // Dispatch event for any components that need to react to theme changes
        const themeEvent = new CustomEvent('cardlinks:themeChanged', {
            detail: {
                theme: theme,
                timestamp: Date.now(),
                variables: getThemeVariables(theme)
            }
        });
        document.dispatchEvent(themeEvent);
    }

    // Helper function to get current theme variables
    function getThemeVariables(theme) {
        const computedStyle = getComputedStyle(rootElement);
        return {
            primaryGreen: computedStyle.getPropertyValue('--primary-green').trim(),
            primaryBlue: computedStyle.getPropertyValue('--primary-blue').trim(),
            bgPrimary: computedStyle.getPropertyValue('--bg-primary').trim(),
            textPrimary: computedStyle.getPropertyValue('--text-primary').trim(),
            borderColor: computedStyle.getPropertyValue('--border-color').trim()
        };
    }

    // Initialize theme on page load
    function initializeTheme() {
        const savedTheme = localStorage.getItem('cardlinks-theme') || 'dark';
        applyTheme(savedTheme);
        updateThemeIcon(savedTheme);
    }
}

// Expose the setupCardHandlers function globally
window.setupCardHandlers = setupCardHandlers;

// Add CSS for ripple effect and theme transitions
document.head.insertAdjacentHTML('beforeend', `
<style>
.ripple-effect {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.073);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.header-icon.clicked, .theme-toggle.clicked {
    transform: scale(0.9);
    opacity: 0.8;
}



#theme-toggle:active i {
    transform: rotate(180deg);
}

/* Light theme specific styles */
.light-theme {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f5;
    --text-primary: #333333;
    --text-secondary: #666666;
    --border-color: #e0e0e0;
    --shadow-color: rgba(0, 0, 0, 0.1);
    --color-bg-primary: 15, 20, 25;
}

/* Dark theme specific styles */
:root:not(.light-theme) {
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --border-color: #404040;
    --shadow-color: rgba(255, 255, 255, 0.1);
    --color-bg-primary: 0, 0, 0;
}
</style>
`);


