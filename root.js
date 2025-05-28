/**
 * Cardlinks Library - Root Configuration
 * Main entry point and initialization file
 * Version: 1.0.0
 */

// Global namespace for Cardlinks Library
window.Cardlinks = window.Cardlinks || {};

// Root configuration and initialization
(function (global) {
    'use strict';

    // Library metadata
    const LIBRARY_INFO = {
        name: 'Cardlinks Library',
        version: '1.0.0',
        author: 'Cardlinks Team',
        description: 'Nowoczesna biblioteka do tworzenia interaktywnych kart z linkami',
        repository: 'https://github.com/yourusername/cardlinks-library'
    };

    // Default root configuration
    const DEFAULT_CONFIG = {
        // Ścieżki do plików biblioteki
        paths: {
            rootCSS: 'root.css',
            css: 'src/cardlinks.css',
            js: 'src/cardlinks.js',
            links: 'src/cardlinks-links.js',
            config: 'src/config.js'
        },

        // Ustawienia inicjalizacji
        init: {
            autoStart: true,
            loadDependencies: false, // Wyłączone - pliki już załadowane w HTML
            enableDebug: false,
            enableAnalytics: false
        },

        // Zewnętrzne zależności
        dependencies: {
            fontAwesome: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
            googleFonts: 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap',
            animeJs: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js'
        },

        // Ustawienia środowiska
        environment: {
            production: false,
            baseUrl: './',
            assetsPath: 'assets/',
            cacheBusting: true
        },

        // Callbacks i eventy
        callbacks: {
            onInit: null,
            onReady: null,
            onError: null,
            onThemeChange: null,
            onCardClick: null
        }
    };

    // Root class dla biblioteki
    class CardlinksRoot {
        constructor(userConfig = {}) {
            this.config = this.mergeConfig(DEFAULT_CONFIG, userConfig);
            this.isInitialized = false;
            this.isReady = false;
            this.dependencies = new Map();
            this.modules = new Map();

            // Bind methods
            this.init = this.init.bind(this);
            this.ready = this.ready.bind(this);

            // Auto-initialize if enabled
            if (this.config.init.autoStart) {
                this.init();
            }
        }

        // Merge user config with defaults
        mergeConfig(defaultConfig, userConfig) {
            const merged = JSON.parse(JSON.stringify(defaultConfig));

            function deepMerge(target, source) {
                for (const key in source) {
                    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                        target[key] = target[key] || {};
                        deepMerge(target[key], source[key]);
                    } else {
                        target[key] = source[key];
                    }
                }
                return target;
            }

            return deepMerge(merged, userConfig);
        }

        // Initialize the library
        async init() {
            if (this.isInitialized) {
                this.log('warn', 'Cardlinks already initialized');
                return;
            }

            this.log('info', 'Initializing Cardlinks Library...');

            try {
                // Execute init callback
                if (this.config.callbacks.onInit) {
                    await this.config.callbacks.onInit();
                }

                // Load dependencies if enabled
                if (this.config.init.loadDependencies) {
                    await this.loadDependencies();
                }

                // Load core modules (only if not already loaded)
                if (this.config.init.loadDependencies) {
                    await this.loadCoreModules();
                }

                // Mark as initialized
                this.isInitialized = true;

                // Dispatch init event
                this.dispatchEvent('cardlinks:init', { config: this.config });

                this.log('success', 'Cardlinks Library initialized successfully');

                // Auto-ready if DOM is loaded
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', this.ready);
                } else {
                    this.ready();
                }

            } catch (error) {
                this.handleError('Initialization failed', error);
            }
        }

        // Load external dependencies
        async loadDependencies() {
            const deps = this.config.dependencies;
            const paths = this.config.paths;
            const baseUrl = this.config.environment.baseUrl;
            const promises = [];

            // Load CSS dependencies
            if (deps.fontAwesome) {
                promises.push(this.loadCSS('fontAwesome', deps.fontAwesome));
            }
            if (deps.googleFonts) {
                promises.push(this.loadCSS('googleFonts', deps.googleFonts));
            }

            // Load root CSS first (always)
            if (paths.rootCSS) {
                promises.push(this.loadCSS('rootCSS', baseUrl + paths.rootCSS));
            }

            // Load local CSS if in standalone mode
            if (paths.css) {
                promises.push(this.loadCSS('cardlinksCSS', baseUrl + paths.css));
            }

            // Load JS dependencies
            if (deps.animeJs) {
                promises.push(this.loadScript('animeJs', deps.animeJs));
            }

            await Promise.all(promises);
            this.log('info', 'Dependencies loaded');
        }

        // Load core library modules
        async loadCoreModules() {
            const paths = this.config.paths;
            const baseUrl = this.config.environment.baseUrl;

            // Load in specific order
            const modules = [
                { name: 'config', path: paths.config },
                { name: 'core', path: paths.js },
                { name: 'links', path: paths.links }
            ];

            for (const module of modules) {
                await this.loadScript(module.name, baseUrl + module.path);
            }

            this.log('info', 'Core modules loaded');
        }

        // Mark library as ready
        ready() {
            if (this.isReady) return;

            this.log('info', 'Cardlinks Library ready');
            this.isReady = true;

            // Initialize theme system
            this.initializeTheme();

            // Check if core functions exist and integrate
            this.integrateWithExistingLibrary();

            // Execute ready callback
            if (this.config.callbacks.onReady) {
                this.config.callbacks.onReady();
            }

            // Dispatch ready event
            this.dispatchEvent('cardlinks:ready', {
                version: LIBRARY_INFO.version,
                config: this.config,
                theme: this.getCurrentTheme()
            });
        }

        // Integrate with existing library functions
        integrateWithExistingLibrary() {
            // Check if setupCardHandlers exists and call it
            if (typeof window.setupCardHandlers === 'function') {
                window.setupCardHandlers();
                this.log('info', 'Integrated with existing card handlers');
            }

            // Check if CardlinksConfig exists and merge it
            if (typeof window.CardlinksConfig !== 'undefined') {
                this.updateConfig(window.CardlinksConfig);
                this.log('info', 'Merged with existing CardlinksConfig');
            }

            // Expose API methods globally
            this.exposeGlobalAPI();
        }

        // Expose API methods globally for easy access
        exposeGlobalAPI() {
            window.CardlinksAPI = {
                // Theme management
                setTheme: (theme) => {
                    this.setTheme(theme);
                },

                toggleTheme: () => {
                    this.toggleTheme();
                },

                getCurrentTheme: () => {
                    return this.getCurrentTheme();
                },

                // Navigation
                setCategory: (category) => {
                    const buttons = document.querySelectorAll('.nav-button');
                    buttons.forEach(btn => {
                        if (btn.getAttribute('data-target') === category + '-section') {
                            btn.click();
                        }
                    });
                },

                // Link management
                addLink: (linkData) => {
                    this.dispatchEvent('cardlinks:addLink', { linkData });
                },

                removeLink: (linkTitle) => {
                    this.dispatchEvent('cardlinks:removeLink', { linkTitle });
                },

                // Utility
                refresh: () => {
                    location.reload();
                },

                getConfig: () => this.getConfig(),
                updateConfig: (newConfig) => this.updateConfig(newConfig),
                getInstance: () => this
            };

            this.log('info', 'Global API exposed as CardlinksAPI');
        }

        // Theme management methods
        setTheme(theme) {
            const validThemes = ['light', 'dark'];
            if (!validThemes.includes(theme)) {
                this.log('warn', `Invalid theme: ${theme}. Valid themes: ${validThemes.join(', ')}`);
                return;
            }

            const root = document.documentElement;

            // Remove existing theme classes
            root.classList.remove('light-theme', 'dark');

            // Apply new theme
            if (theme === 'light') {
                root.classList.add('light-theme');
                root.setAttribute('data-theme', 'light');
            } else {
                root.setAttribute('data-theme', 'dark');
                root.classList.add('dark');
            }

            // Save preference
            localStorage.setItem('cardlinks-theme', theme);

            // Update config
            this.config.theme = theme;

            // Dispatch events
            this.dispatchEvent('cardlinks:themeChanged', {
                theme,
                previousTheme: this.getCurrentTheme()
            });

            // Execute callback if provided
            if (this.config.callbacks.onThemeChange) {
                this.config.callbacks.onThemeChange(theme);
            }

            this.log('info', `Theme changed to: ${theme}`);
        }

        toggleTheme() {
            const currentTheme = this.getCurrentTheme();
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            this.setTheme(newTheme);
        }

        getCurrentTheme() {
            const root = document.documentElement;
            if (root.classList.contains('light-theme')) {
                return 'light';
            }
            return 'dark';
        }

        initializeTheme() {
            // Get saved theme or default to dark
            const savedTheme = localStorage.getItem('cardlinks-theme') || 'dark';
            this.setTheme(savedTheme);
        }

        // Load CSS file
        loadCSS(name, url) {
            return new Promise((resolve, reject) => {
                if (this.dependencies.has(name)) {
                    resolve();
                    return;
                }

                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = this.addCacheBusting(url);
                link.onload = () => {
                    this.dependencies.set(name, { type: 'css', url, element: link });
                    resolve();
                };
                link.onerror = () => reject(new Error(`Failed to load CSS: ${url}`));

                document.head.appendChild(link);
            });
        }

        // Load JavaScript file
        loadScript(name, url) {
            return new Promise((resolve, reject) => {
                if (this.dependencies.has(name)) {
                    resolve();
                    return;
                }

                const script = document.createElement('script');
                script.src = this.addCacheBusting(url);
                script.onload = () => {
                    this.dependencies.set(name, { type: 'js', url, element: script });
                    resolve();
                };
                script.onerror = () => reject(new Error(`Failed to load script: ${url}`));

                document.head.appendChild(script);
            });
        }

        // Add cache busting parameter
        addCacheBusting(url) {
            if (!this.config.environment.cacheBusting) return url;

            const separator = url.includes('?') ? '&' : '?';
            return `${url}${separator}v=${LIBRARY_INFO.version}&t=${Date.now()}`;
        }

        // Dispatch custom event
        dispatchEvent(eventName, detail = {}) {
            const event = new CustomEvent(eventName, {
                detail: { ...detail, timestamp: Date.now() }
            });
            document.dispatchEvent(event);
        }

        // Logging utility
        log(level, message, data = null) {
            if (!this.config.init.enableDebug && level === 'debug') return;

            const styles = {
                info: 'color: #2196F3',
                success: 'color: #4CAF50',
                warn: 'color: #FF9800',
                error: 'color: #F44336',
                debug: 'color: #9E9E9E'
            };

            const prefix = `[Cardlinks ${LIBRARY_INFO.version}]`;
            console.log(`%c${prefix} ${message}`, styles[level] || '', data || '');
        }

        // Error handler
        handleError(message, error) {
            this.log('error', message, error);

            if (this.config.callbacks.onError) {
                this.config.callbacks.onError(error, message);
            }

            this.dispatchEvent('cardlinks:error', { message, error: error.message });
        }

        // Get library info
        getInfo() {
            return { ...LIBRARY_INFO };
        }

        // Get current config
        getConfig() {
            return { ...this.config };
        }

        // Update config
        updateConfig(newConfig) {
            this.config = this.mergeConfig(this.config, newConfig);
            this.dispatchEvent('cardlinks:configUpdated', { config: this.config });
        }

        // Check if library is ready
        isLibraryReady() {
            return this.isReady;
        }

        // Destroy library instance
        destroy() {
            // Remove event listeners
            document.removeEventListener('DOMContentLoaded', this.ready);

            // Remove loaded dependencies
            this.dependencies.forEach(dep => {
                if (dep.element && dep.element.parentNode) {
                    dep.element.parentNode.removeChild(dep.element);
                }
            });

            // Clear maps
            this.dependencies.clear();
            this.modules.clear();

            // Reset flags
            this.isInitialized = false;
            this.isReady = false;

            this.dispatchEvent('cardlinks:destroyed');
            this.log('info', 'Cardlinks Library destroyed');
        }
    }

    // Create global API
    global.Cardlinks = {
        // Library info
        version: LIBRARY_INFO.version,
        name: LIBRARY_INFO.name,

        // Main class
        Root: CardlinksRoot,

        // Create new instance
        create: function (config) {
            return new CardlinksRoot(config);
        },

        // Quick initialization
        init: function (config) {
            if (!global.Cardlinks.instance) {
                global.Cardlinks.instance = new CardlinksRoot(config);
            }
            return global.Cardlinks.instance;
        },

        // Get current instance
        getInstance: function () {
            return global.Cardlinks.instance || null;
        },

        // Utilities
        utils: {
            mergeConfig: function (target, source) {
                const instance = new CardlinksRoot();
                return instance.mergeConfig(target, source);
            },

            loadCSS: function (url) {
                const instance = global.Cardlinks.getInstance();
                if (instance) {
                    return instance.loadCSS('external', url);
                }
            },

            loadScript: function (url) {
                const instance = global.Cardlinks.getInstance();
                if (instance) {
                    return instance.loadScript('external', url);
                }
            }
        }
    };

    // Auto-initialize with appropriate config
    let initConfig = {};

    // Check for standalone config first
    if (typeof window.CardlinksStandaloneConfig !== 'undefined') {
        initConfig = window.CardlinksStandaloneConfig;
    }
    // Then check for regular config
    else if (typeof CardlinksConfig !== 'undefined') {
        initConfig = CardlinksConfig;
    }

    global.Cardlinks.init(initConfig);

    // Export for module systems
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = global.Cardlinks;
    }

})(window);

// Console welcome message
console.log(`
%c╔══════════════════════════════════════╗
║           CARDLINKS LIBRARY          ║
║              Version 1.0.0           ║
║                                      ║
║     Nowoczesna biblioteka linków     ║
╚══════════════════════════════════════╝`,
    'color: #00ff88; font-family: monospace; font-size: 12px;'
); 