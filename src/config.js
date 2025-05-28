// Cardlinks Library Configuration
const CardlinksConfig = {
    // Ustawienia ogólne
    title: "CARRD.CO LINKS",
    language: "pl",

    // Ustawienia motywu
    theme: {
        default: "dark", // "dark" lub "light"
        allowToggle: true
    },

    // Ustawienia animacji
    animations: {
        enabled: true,
        duration: 300,
        easing: "easeOutQuart"
    },

    // Ustawienia zegara
    clock: {
        enabled: true,
        format24h: true,
        showSeconds: true,
        showDate: true,
        dateFormat: "long" // "short", "long", "numeric"
    },

    // Ustawienia siatki
    grid: {
        columns: {
            desktop: 4,
            tablet: 3,
            mobile: 2
        },
        gap: "20px"
    },

    // Ustawienia kategorii
    categories: {
        all: {
            title: "All",
            icon: "fas fa-th-large",
            enabled: true
        },
        editors: {
            title: "Edytory",
            icon: "fas fa-edit",
            enabled: true
        },
        tools: {
            title: "Narzędzia",
            icon: "fas fa-tools",
            enabled: true
        },
        data: {
            title: "Dane",
            icon: "fas fa-database",
            enabled: true
        }
    },

    // Ustawienia kart
    cards: {
        showIcons: true,
        showDescriptions: false,
        openInNewTab: true,
        hoverEffects: true
    },

    // Ustawienia responsywności
    responsive: {
        breakpoints: {
            mobile: "768px",
            tablet: "1024px"
        }
    },

    // Kolory motywu (opcjonalne nadpisanie)
    colors: {
        dark: {
            primary: "#00ff88",
            secondary: "#ff0080",
            background: "#0a0a0a",
            surface: "#1a1a1a",
            text: "#ffffff"
        },
        light: {
            primary: "#007acc",
            secondary: "#cc0066",
            background: "#ffffff",
            surface: "#f5f5f5",
            text: "#333333"
        }
    }
};

// Eksportuj konfigurację
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CardlinksConfig;
} 