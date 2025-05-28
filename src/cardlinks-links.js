// Link database for all Carrd.co tools
const carrdLinks = [
    // === KOLUMNA 1: EDYTORY I KOD ===
    // Row 1
    {
        id: "code-editor",
        title: "CODE EDITOR",
        url: "https://editornue.carrd.co/",
        icon: "fas fa-code",
        iconClass: "icon-code",
        category: "editors",
        subcategory: "code",
    },
    {
        id: "live-code",
        title: "LIVE CODE",
        url: "https://livecode.carrd.co/",
        icon: "fas fa-code",
        iconClass: "icon-livecode",
        category: "editors",
        subcategory: "code",
    },
    {
        id: "md-code",
        title: "MD CODE",
        url: "https://mdcode.carrd.co/",
        icon: "fas fa-file-code",
        iconClass: "icon-md",
        category: "code",
        subcategory: "markdown",
    },

    // Row 2
    {
        id: "edytor",
        title: "EDYTOR",
        url: "https://edytortxt.carrd.co/",
        icon: "fas fa-edit",
        iconClass: "icon-editor",
        category: "editors",
        subcategory: "text",
    },
    {
        id: "edytor-alt",
        title: "EDYTOR",
        url: "https://edytor.carrd.co/",
        icon: "fas fa-edit",
        iconClass: "icon-editor",
        category: "editors",
        subcategory: "text",
    },
    {
        id: "w5-editor",
        title: "W5 EDITOR",
        url: "https://texteditor.carrd.co/",
        icon: "fas fa-file-alt",
        iconClass: "icon-text",
        category: "editors",
        subcategory: "text",
    },

    // Row 3
    {
        id: "text-editor",
        title: "TEXT EDITOR",
        url: "https://texteditor.carrd.co/",
        icon: "fas fa-file-alt",
        iconClass: "icon-text",
        category: "editors",
        subcategory: "text",
    },
    {
        id: "text-pro",
        title: "TEXT PRO",
        url: "https://txtpro.carrd.co/",
        icon: "fas fa-font",
        iconClass: "icon-text",
        category: "editors",
        subcategory: "text",
    },
    {
        id: "codenote",
        title: "CODENOTE",
        url: "https://codenote.carrd.co/",
        icon: "fas fa-search",
        iconClass: "icon-codenote",
        category: "code",
        subcategory: "notes",
    },

    // === KOLUMNA 2: NARZĘDZIA I UTILITIES ===
    // Row 1
    {
        id: "tools-dev",
        title: "TOOLS DEV",
        url: "https://toolsdev.carrd.co/",
        icon: "fas fa-tools",
        iconClass: "icon-tools",
        category: "tools",
        subcategory: "development",
    },
    {
        id: "tools-nue-dev",
        title: "TOOLS NUE DEV",
        url: "https://toolsnuedev.carrd.co/",
        icon: "fas fa-cogs",
        iconClass: "icon-tools",
        category: "tools",
        subcategory: "development",
    },
    {
        id: "tools-nue",
        title: "TOOLS NUE",
        url: "https://toolsnue.carrd.co/",
        icon: "fas fa-wrench",
        iconClass: "icon-tools",
        category: "tools",
        subcategory: "utility",
    },

    // Row 2
    {
        id: "modifier",
        title: "MODIFIER",
        url: "https://modifier.carrd.co/",
        icon: "fas fa-sliders-h",
        iconClass: "icon-modifier",
        category: "tools",
        subcategory: "utility",
    },
    {
        id: "uniwersal-play",
        title: "UNIWERSAL PLAY",
        url: "https://uniwersalplay.carrd.co/",
        icon: "fas fa-play",
        iconClass: "icon-play",
        category: "tools",
        subcategory: "utility",
    },
    {
        id: "os-tools",
        title: "OS TOOLS",
        url: "https://ostools.carrd.co/",
        icon: "fas fa-desktop",
        iconClass: "icon-os",
        category: "tools",
        subcategory: "utility",
    },

    // Row 3
    {
        id: "os-pro",
        title: "OS PRO",
        url: "https://ospro.carrd.co/",
        icon: "fas fa-laptop",
        iconClass: "icon-ospro",
        category: "tools",
        subcategory: "utility",
    },
    {
        id: "logowanie",
        title: "LOGOWANIE",
        url: "https://logowanie.carrd.co/",
        icon: "fas fa-sign-in-alt",
        iconClass: "icon-login",
        category: "tools",
        subcategory: "utility",
    },
    {
        id: "w5ui",
        title: "W5UI",
        url: "https://w5ui.carrd.co/",
        icon: "fas fa-palette",
        iconClass: "icon-w5ui",
        category: "tools",
        subcategory: "ui",
    },

    // === KOLUMNA 3: DANE, OBRAZY I WEB ===
    // Row 1
    {
        id: "arkusz",
        title: "ARKUSZ",
        url: "https://arkusz.carrd.co/",
        icon: "fas fa-table",
        iconClass: "icon-table",
        category: "data",
        subcategory: "spreadsheet",
    },
    {
        id: "csv-dev",
        title: "CSV DEV",
        url: "https://csvdev.carrd.co/",
        icon: "fas fa-table",
        iconClass: "icon-csv",
        category: "data",
        subcategory: "csv",
    },
    {
        id: "csv-dev-alt",
        title: "CSV DEV",
        url: "https://csvdev.carrd.co/",
        icon: "fas fa-file-csv",
        iconClass: "icon-csv",
        category: "data",
        subcategory: "csv",
    },

    // Row 2
    {
        id: "md-table",
        title: "MD TABLE",
        url: "https://mdtable.carrd.co/",
        icon: "fas fa-table",
        iconClass: "icon-md",
        category: "data",
        subcategory: "markdown",
    },
    {
        id: "image-tools",
        title: "IMAGE TOOLS",
        url: "https://imgpro.carrd.co/",
        icon: "fas fa-image",
        iconClass: "icon-image",
        category: "tools",
        subcategory: "image",
    },
    {
        id: "text-to-image",
        title: "TEXT TO IMAGE",
        url: "https://textimg.carrd.co/",
        icon: "fas fa-images",
        iconClass: "icon-image",
        category: "tools",
        subcategory: "image",
    },

    // Row 3
    {
        id: "web-tools",
        title: "COLORBETA",
        url: "https://colorbeta.com/",
        icon: "fas fa-globe",
        iconClass: "icon-web",
        category: "tools",
        subcategory: "web",
    },
    {
        id: "sites-w5",
        title: "SITES W5",
        url: "https://sitesw5.carrd.co/",
        icon: "fas fa-globe",
        iconClass: "icon-sites",
        category: "tools",
        subcategory: "web",
    },
    {
        id: "project-dev",
        title: "PROJECT DEV",
        url: "https://projectdev.carrd.co/",
        icon: "fas fa-project-diagram",
        iconClass: "icon-project",
        category: "tools",
        subcategory: "project",
    },

    // === DODATKOWE NARZĘDZIA ===
    // Row 4
    {
        id: "zoomframe",
        title: "ZOOMFRAME",
        url: "https://zoomframe.carrd.co/",
        icon: "fas fa-mobile-alt",
        iconClass: "icon-zoomframe",
        category: "tools",
        subcategory: "display",
    },
    {
        id: "task-day",
        title: "TASK DAY",
        url: "https://taskday.carrd.co/",
        icon: "fas fa-tasks",
        iconClass: "icon-task",
        category: "tools",
        subcategory: "tasks",
    },
    {
        id: "tools-link",
        title: "TOOLS LINK",
        url: "https://toolslinki.carrd.co/",
        icon: "fas fa-link",
        iconClass: "icon-link",
        category: "tools",
        subcategory: "links",
    },

    // Row 5
    {
        id: "tools-link-alt",
        title: "TOOLS LINK",
        url: "https://toolslink.carrd.co/",
        icon: "fas fa-link",
        iconClass: "icon-toolslink",
        category: "tools",
        subcategory: "links",
    },
];

// Additional tools not shown in current grid
const extraTools = [
    {
        id: "in-csv-dev",
        title: "IN CSV DEV",
        url: "https://incsvdev.carrd.co/",
        icon: "fas fa-file-csv",
        iconClass: "icon-csv",
        category: "data",
        subcategory: "csv",
    },
    {
        id: "web-tools-dev",
        title: "WEB TOOLS DEV",
        url: "https://webtoolsdev.carrd.co/",
        icon: "fas fa-globe",
        iconClass: "icon-web",
        category: "tools",
        subcategory: "web",
    },
    {
        id: "txt-pro",
        title: "TXT PRO",
        url: "https://txtpro.carrd.co",
        icon: "fas fa-font",
        iconClass: "icon-text",
        category: "editors",
        subcategory: "text",
    },
    {
        id: "text-img",
        title: "TABLE ORG",
        url: "https://tableorg.carrd.co/",
        icon: "fas fa-table",
        iconClass: "icon-table",
        category: "tools",
        subcategory: "table",
    },
];

// Define category structure
const categoryStructure = {
    editors: {
        name: "Editors",
        subcategories: {
            text: "Text Editors",
            code: "Code Editors",
        },
    },
    tools: {
        name: "Tools",
        subcategories: {
            image: "Image Tools",
            utility: "Utility Tools",
            development: "Development Tools",
            ui: "UI Tools",
            display: "Display Tools",
            project: "Project Tools",
            web: "Web Tools",
            links: "Link Tools",
            tasks: "Task Tools",
            table: "Table Tools",
        },
    },
    data: {
        name: "Data",
        subcategories: {
            spreadsheet: "Spreadsheets",
            csv: "CSV Tools",
            markdown: "Markdown Data",
        },
    },
    code: {
        name: "Code",
        subcategories: {
            markdown: "Markdown",
            notes: "Code Notes",
        },
    },
};

// Function to generate card HTML
function generateCardHTML(link) {
    return `
    <div class="card" data-id="${link.id}" data-category="${link.category}" data-subcategory="${link.subcategory}" onclick="openLink('${link.url}')">
        <div class="card-icon icon ${link.iconClass}">
            <i class="${link.icon}"></i>
        </div>
        <div class="card-title">${link.title}</div>
    </div>
    `;
}

// Function to generate category header HTML
function generateCategoryHeaderHTML(categoryName) {
    return `
    <div class="category-header">
        <div class="category-title">
            <i class="fas fa-folder-open"></i>
            <span>${categoryName}</span>
        </div>
        <div class="category-divider"></div>
    </div>
    `;
}

// Function to generate category footer HTML
function generateCategoryFooterHTML() {
    return `
    <div class="category-footer">
        
    </div>
    `;
}

// Function to generate subcategory header HTML
function generateSubcategoryHeaderHTML(subcategoryName) {
    return `
    <div class="subcategory-header">
        <div class="subcategory-title">
            <i class="fas fa-folder"></i>
            <span>${subcategoryName}</span>
        </div>
        <div class="subcategory-divider"></div>
    </div>
    `;
}

// Function to generate subcategory footer HTML
function generateSubcategoryFooterHTML() {
    return `
    <div class="subcategory-footer">
        
    </div>
    `;
}

// Function to render cards in columns like the example
function renderCards(
    container,
    links,
    showCategoryMarkers = false,
    showSubcategoryMarkers = false
) {
    const gridContainer = document.querySelector(container);
    if (!gridContainer) return;

    // Group links by category
    const categorizedLinks = {};
    links.forEach((link) => {
        if (!categorizedLinks[link.category]) {
            categorizedLinks[link.category] = [];
        }
        categorizedLinks[link.category].push(link);
    });

    let columnsHTML = "";

    // Create columns for each subcategory
    const allSubcategories = [];
    const categoryOrder = ["tools", "editors", "data", "code"];

    categoryOrder.forEach((category) => {
        if (!categorizedLinks[category]) return;
        const categoryLinks = categorizedLinks[category];

        // Group by subcategory within this category
        const subcategorizedLinks = {};
        categoryLinks.forEach((link) => {
            if (!subcategorizedLinks[link.subcategory]) {
                subcategorizedLinks[link.subcategory] = [];
            }
            subcategorizedLinks[link.subcategory].push(link);
        });

        // Add each subcategory as a separate column
        Object.entries(subcategorizedLinks).forEach(
            ([subcategory, subcategoryLinks]) => {
                const subcategoryName =
                    categoryStructure[category] &&
                        categoryStructure[category].subcategories[subcategory]
                        ? categoryStructure[category].subcategories[subcategory]
                        : subcategory.charAt(0).toUpperCase() + subcategory.slice(1);

                // Create column for this subcategory
                columnsHTML += `<div class="subcategory-column">`;
                columnsHTML += `<div class="subcategory-header">${subcategoryName}</div>`;

                subcategoryLinks.forEach((link) => {
                    columnsHTML += generateCardHTML(link);
                });

                columnsHTML += `</div>`;
            }
        );
    });

    gridContainer.innerHTML = columnsHTML;

    // Call the setupCardHandlers function from cardlinks.js
    if (window.setupCardHandlers) {
        window.setupCardHandlers();
    }
}

// Function to open a link
function openLink(url) {
    // Create iframe container if it doesn't exist
    if (!document.querySelector(".iframe-container")) {
        const iframeContainer = document.createElement("div");
        iframeContainer.className = "iframe-container";
        iframeContainer.innerHTML = `
            <div class="iframe-header">
                <div class="iframe-title">Loading...</div>
                <div class="iframe-controls">
                    <button class="iframe-button-refresh" id="iframe-refresh"><i class="fas fa-sync-alt"></i></button>
                    <button class="iframe-button-external" id="iframe-external"><i class="fas fa-external-link-alt"></i></button>
                    <button class="iframe-button-close" id="iframe-close"><i class="fas fa-times"></i></button>
                </div>
            </div>
            <iframe id="content-iframe" src="" frameborder="0" allowfullscreen></iframe>
        `;
        document.body.appendChild(iframeContainer);

        // Set up event listeners for iframe controls
        document.getElementById("iframe-close").addEventListener("click", () => {
            document.querySelector(".iframe-container").classList.remove("active");
            document.getElementById("content-iframe").src = "";
        });

        document.getElementById("iframe-refresh").addEventListener("click", () => {
            const iframe = document.getElementById("content-iframe");
            iframe.src = iframe.src;
        });

        document.getElementById("iframe-external").addEventListener("click", () => {
            const iframe = document.getElementById("content-iframe");
            window.open(iframe.src, "_blank");
        });
    }

    // Update iframe content
    const iframe = document.getElementById("content-iframe");
    const container = document.querySelector(".iframe-container");
    const titleElement = document.querySelector(".iframe-title");

    // Set the title to the URL being loaded
    titleElement.textContent = url;

    // Load the URL in the iframe
    iframe.src = url;

    // Show the iframe container
    container.classList.add("active");
}

// Function to filter links by category and subcategory
function filterLinks(category, subcategory = null) {
    const allLinks = [...carrdLinks, ...extraTools];

    if (category === "all") {
        return carrdLinks; // Return original layout
    }

    if (subcategory) {
        return allLinks.filter(
            (link) => link.category === category && link.subcategory === subcategory
        );
    } else {
        return allLinks.filter((link) => link.category === category);
    }
}

// Function to search links
function searchLinks(query) {
    const allLinks = [...carrdLinks, ...extraTools];
    query = query.toLowerCase();

    return allLinks.filter(
        (link) =>
            link.title.toLowerCase().includes(query) ||
            link.category.toLowerCase().includes(query) ||
            link.subcategory.toLowerCase().includes(query)
    );
}

// Function to get all subcategories for a category
function getSubcategories(category) {
    if (!categoryStructure[category]) {
        return [];
    }

    return Object.keys(categoryStructure[category].subcategories);
}

// Function to generate category menu HTML
function generateCategoryMenu() {
    let menuHTML = '<div class="category-menu">';
    menuHTML += '<div class="category-item" data-category="all">All Tools</div>';

    Object.keys(categoryStructure).forEach((category) => {
        const catInfo = categoryStructure[category];
        menuHTML += `<div class="category-group">`;
        menuHTML += `<div class="category-item" data-category="${category}">${catInfo.name}</div>`;
        menuHTML += `<div class="subcategory-container" id="${category}-subcategories">`;

        Object.entries(catInfo.subcategories).forEach(([subId, subName]) => {
            menuHTML += `<div class="subcategory-item" data-category="${category}" data-subcategory="${subId}">${subName}</div>`;
        });

        menuHTML += `</div></div>`;
    });

    menuHTML += "</div>";
    return menuHTML;
}

// Initialize cards when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Add CSS for column layout - using original card styles
    const style = document.createElement("style");
    style.textContent = `
                 .grid-container {
             display: grid;
             gap: 1.5rem;
             padding: 2rem;
             
             
            
                    }
         
         .subcategory-column {
             
             border: 2px solid var(--border-color);
             border-radius: var(--border-radius);
             box-shadow: var(--box-shadow);
             backdrop-filter: blur(25px);
             padding: 1.5rem;
             display: flex;
             flex-direction: column;
             gap: 1rem;
             min-height: 100px;
             
         }
         
         .subcategory-header {
             font-size: 1.2rem;
             font-weight: 700;
             text-transform: uppercase;
             letter-spacing: 1px;
             
             padding: 0.7rem 1rem;
             background: var(--card-bg);
             text-shadow: 0 2px 3px rgba(0,0,0,0.2);
             text-align: left;
             border-bottom: 2px solid var(--icon-web);
             box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
             
         }
         
         .subcategory-column .card {
             background: linear-gradient(135deg, var(--card-bg), rgba(255, 255, 255, 0.05));
             border: 2px solid var(--border-color);
             border-radius: var(--border-radius);
             box-shadow: var(--box-shadow);
             backdrop-filter: blur(25px);
             padding: 1rem;
             display: flex;
             align-items: center;
             gap: 1rem;
             cursor: pointer;
             
             
         }
         .subcategory-column .card-title {
             color: var(--text-color);
             font-size: 1.2rem;
             font-weight: 700;
             text-transform: uppercase;
             letter-spacing: 0.5px;
         }
       
    `;
    document.head.appendChild(style);

    // Render all cards in column layout
    const allLinks = [...carrdLinks, ...extraTools];
    renderCards(".grid-container", allLinks, true, true);

    // Expose functions and data globally
    window.openLink = openLink;
    window.filterLinks = filterLinks;
    window.renderCards = renderCards;
    window.carrdLinks = carrdLinks;
    window.extraTools = extraTools;
    window.searchLinks = function (query) {
        if (!query || query.trim() === "") {
            renderCards(".grid-container", carrdLinks, true);
            return;
        }

        const foundLinks = searchLinks(query);
        renderCards(".grid-container", foundLinks, true);
    };
});

// Render cards for all sections
function renderAllSections() {
    // All links section - show ALL links with category and subcategory markers
    const allLinks = [...carrdLinks, ...extraTools];
    renderCards(".grid-container", allLinks, true, true);

    // Editors section - show only editors category with subcategories
    const editorsLinks = filterLinks("editors");
    renderCards("#editors-grid", editorsLinks, true, true);

    // Tools section - show only tools category with subcategories
    const toolsLinks = filterLinks("tools");
    renderCards("#tools-grid", toolsLinks, true, true);

    // Data section - show only data category with subcategories
    const dataLinks = filterLinks("data");
    renderCards("#data-grid", dataLinks, true, true);

    // Code section - show only code category with subcategories
    const codeLinks = filterLinks("code");
    renderCards("#code-grid", codeLinks, true, true);
}
