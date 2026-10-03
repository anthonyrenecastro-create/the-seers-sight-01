# the-singularity-point-store
My new social media persona shopify store. 
# TheM0deYeseer Shopify Store

This repository houses the Shopify theme code for **them0deyeseer.com**. Previously a standalone site hosted on GitHub, the platform has been fully reconstructed as a Shopify storefront leveraging Shopify Online Store 2.0 architecture to support scalable e-commerce, custom product variants, and streamlined checkout.

## 🛠 Tech Stack

*   **Platform:** Shopify Plus / Advanced
*   **Theme Architecture:** Shopify Online Store 2.0 (JSON templates)
*   **Templating:** Liquid, HTML5, CSS3, JavaScript (ES6+)
*   **CLI:** Shopify CLI 3.x
*   **Version Control:** GitHub with Shopify GitHub Integration

## 📋 Prerequisites

To work on this theme locally, ensure you have the following installed:

1.  [Node.js](https://nodejs.org/) (version 16.x or higher)
2.  [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (version 3.0 or higher)
3.  [Shopify CLI](https://shopify.dev/docs/themes/tools/cli)

You must also request a **Staff Account** or **Collaborator Access** to the them0deyeseer Shopify admin panel.

## 🚀 Local Development Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-org/them0deyeseer-shopify.git](https://github.com/your-org/them0deyeseer-shopify.git)
    cd them0deyeseer-shopify
    ```

2.  **Authenticate with Shopify:**
    ```bash
    shopify auth login
    ```

3.  **Start the local development server:**
    ```bash
    shopify theme dev --store them0deyeseer.myshopify.com
    ```
    *This will create a temporary, hidden theme on the store and provide a local URL (usually `http://127.0.0.1:9292`) where you can preview your changes with hot-reloading.*

## 📂 Directory Structure

The repository follows standard Shopify OS 2.0 conventions:

*   `/assets` - CSS, JS, and image files used across the theme.
*   `/config` - `settings_data.json` and `settings_schema.json` for the theme editor.
*   `/layout` - Master layout files (e.g., `theme.liquid`).
*   `/locales` - JSON files providing language translations.
*   `/sections` - Reusable Liquid components that can be customized in the Theme Editor.
*   `/snippets` - Smaller, modular Liquid chunks (e.g., icons, product cards) included in sections.
*   `/templates` - JSON templates mapping sections to pages (e.g., `product.json`, `index.json`).

## 🔄 Deployment & Workflow

This repository is connected directly to the Shopify admin via **Shopify GitHub Integration**.

*   **`main` branch:** Protected. Merging to `main` automatically updates the **Live Theme** on them0deyeseer.com.
*   **`staging` branch:** Merging to `staging` updates the unpublished **Staging Theme** for QA testing.
*   **Feature Branches:** Create a new branch for any feature (e.g., `feat/new-product-page`). Push it to GitHub, and Shopify will automatically generate an unpublished preview theme for testing.

To manually deploy a branch from the CLI:
```bash
shopify theme push
