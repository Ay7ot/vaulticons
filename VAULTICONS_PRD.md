# **Product Requirements Document (PRD)**

**Product Name:**
*VaultIcons* (placeholder name)

**Prepared by:**
Ayomide Ibiteye

**Date:**
May 3, 2025

---

## 1. **Objective**

Create a **React-based icon library** focused on fintech and crypto products, delivering high-quality, customizable SVG icons as React components. The library should help developers quickly integrate icons that are relevant to payments, crypto, DeFi, trading, security, and Web3 use cases, with minimal setup.

---

## 2. **Goals & Success Criteria**

**Goals:**

*   Provide ~100–150 high-quality icons covering the full fintech & crypto ecosystem.
*   Offer icons that are **lightweight**, **customizable**, and **developer-friendly.**
*   Support key React props: `size`, `color`, `className`, `style`, and `aria-label`.
*   Ensure tree-shaking for minimal bundle size.
*   Deliver clean documentation and a preview gallery for browsing icons.

**Success Criteria:**

*   First release: 100+ icons, available via npm.
*   Icons support deep imports & ESModule/CJS builds.
*   Icons render crisply across screen sizes (mobile, tablet, desktop).
*   Published demo (via Storybook or Next.js site) for developers to browse/test.
*   1,000+ downloads within 3 months of launch (stretch goal).

---

## 3. **Scope**

### 3.1. **Icon Categories & Counts**

Here's a detailed breakdown of the target icons for the library:

1.  **Currencies & Tokens (~40–60 icons)**
    *   Crypto: Bitcoin, Ethereum, Solana, USDT, BNB, XRP, Cardano, Polygon, etc. (top ~30 tokens)
    *   Fiat: USD, EUR, GBP, NGN, JPY, etc.
    *   Generic coin/token icons
    *   Stablecoin icons
    *   Coin stack / pile

2.  **Wallets & Accounts (~10–15 icons)**
    *   Wallet
    *   Hardware wallet (e.g., Ledger)
    *   Multi-sig wallet
    *   Wallet connect
    *   New wallet
    *   Wallet backup
    *   Identity verification (KYC)
    *   Profile/account
    *   Address book

3.  **Payments & Transactions (~15–20 icons)**
    *   Send/Receive
    *   Swap
    *   Deposit/Withdraw
    *   Payment gateway
    *   Payment success/failure
    *   Invoice
    *   QR code payment
    *   Transfer history
    *   Transaction pending
    *   Fee / Gas fee
    *   Card payment (Visa/Mastercard)
    *   On-chain / Off-chain

4.  **DeFi & Staking (~10–15 icons)**
    *   Liquidity pool
    *   Farm/yield farming
    *   Stake/unstake
    *   Vault
    *   Borrow/Lend
    *   APY
    *   DAO / governance
    *   Smart contract
    *   Token lock/vesting
    *   Protocol

5.  **Trading & Charts (~10–15 icons)**
    *   Candlestick chart
    *   Line chart
    *   Bar chart
    *   Trend up/down
    *   Buy/sell
    *   Order book
    *   Market cap
    *   Volume
    *   RSI, MACD indicators
    *   Stop-loss
    *   Portfolio

6.  **Security & Compliance (~10–12 icons)**
    *   Encryption
    *   Lock/unlock
    *   Shield (security)
    *   Privacy
    *   Compliance/KYC
    *   Risk
    *   Recovery phrase
    *   Hacked/breach
    *   Safe mode
    *   Two-factor auth

7.  **Blockchain & Network (~10–15 icons)**
    *   Blockchain network
    *   Decentralized network
    *   Node
    *   Validator
    *   Gas/staking fees
    *   Mining
    *   Proof of stake
    *   Proof of work
    *   Layer 1, Layer 2
    *   Chain bridge

8.  **UI/UX Common (~10–15 icons)**
    *   Dashboard
    *   Notifications
    *   Settings
    *   Filter
    *   Search
    *   Download/upload
    *   Refresh/sync
    *   Plus/minus
    *   *(Note: These should be customized for a fintech aesthetic)*

9.  **NFT & Web3 (~7–10 icons)**
    *   NFT icon
    *   NFT minting
    *   NFT marketplace
    *   Wallet connect (Web3)
    *   DApp browser
    *   Metaverse / VR
    *   Avatar/PFP

10. **Other/Misc (~8–10 icons)**
    *   Rewards
    *   Cashback
    *   Loyalty
    *   Credit score
    *   Tax report
    *   Escrow
    *   Affiliate/Referral

**Total Estimate:** ~130–190 icons across all categories.

**MVP Target:** Aim for ~100 essential icons covering all categories for the initial v1 launch.

### 3.2. **Features**

*   **React Components:**
    *   Icons exposed as functional React components.
    *   Default props:
        *   `size`: (default: 24)
        *   `color`: (default: `currentColor`)
        *   `strokeWidth`: (for outline icons)
        *   `className`, `style`, `aria-label`
*   **Customization:**
    *   Props should override SVG attributes cleanly.
    *   Support inline styles + external CSS (via `className`).
*   **Import Options:**
    *   Named imports: `import { WalletIcon } from 'fincrypto-icons'`
    *   Deep imports: `import WalletIcon from 'fincrypto-icons/icons/WalletIcon'`
*   **Documentation:**
    *   Live preview gallery (Storybook or a Next.js-powered site).
    *   Usage examples.
    *   Props reference.
*   **Accessibility:**
    *   `aria-label` support for screen readers.
*   **Tech:**
    *   TypeScript-based components.
    *   ESModule + CJS bundles (via Rollup).
*   **Icon Design:** The creation and design of the ~120 SVG icons are included in the scope of this project.

---

## 4. **Non-Goals**

*   No **animated icons** in v1.
*   No **non-React (vanilla SVG) version** in v1.
*   No **multi-color icons** (v1 focuses on monochrome SVGs).

---

## 5. **User Stories**

*   **As a fintech app developer,** I want to easily add crypto-specific icons that are fully customizable so I can match my brand styling.
*   **As a designer/developer,** I want to preview and search the full icon set so I can quickly pick the right icons.
*   **As a frontend engineer,** I want to import only the icons I need so my bundle size stays small.

---

## 6. **Design Requirements**

*   Icons designed on a **24x24 grid.**
*   Styles:
    *   Start with **outline** style (optionally expand to solid in v2).
    *   Maintain consistency in line weight & visual style across icons (~1.5–2px stroke weight).
    *   Clean, minimalist aesthetic in line with popular libraries (Feather, Heroicons).
    *   Establish a consistent visual language and adhere to strict design guidelines from the start.

---

## 7. **Tech Stack**

*   **Framework:** React (TypeScript)
*   **Bundler:** Rollup
*   **SVG to React:** SVGR
*   **Documentation:** Storybook or Next.js + MDX
*   **Testing:** Jest + React Testing Library (snapshot tests)
*   **CI/CD:** GitHub Actions (for tests & publishing)
*   **Package:** npm/yarn (public registry)

---

## 8. **Milestones & Timeline (Estimates)**

| **Milestone**                                     | **Target Date**   |
| ------------------------------------------------- | ----------------- |
| Project Setup, Tooling & Initial Design Guidelines | Week 1            |
| Design Phase 1 (Core Set - ~40 Icons)             | Week 2-3          |
| Implement Phase 1 Icons (React Wrappers)          | Week 4            |
| Design Phase 2 (Remaining Icons - ~80 Icons)      | Week 5-6          |
| Implement Phase 2 Icons                           | Week 7            |
| Docs Site / Storybook                             | Week 8            |
| Testing + CI Setup                                | Week 9            |
| Final QA & Polish                                 | Week 10           |
| v1 Launch (npm + docs)                            | End of Week 10    |

---

## 9. **Risks & Mitigation**

*   **Icon consistency issues:**
    *   *Mitigation:* Establish clear design guidelines upfront (grid, stroke width, padding).
*   **Tooling conflicts (Rollup/ESM/CJS):**
    *   *Mitigation:* Follow patterns from proven libraries (e.g., Heroicons, Lucide).
*   **Icon design challenges:**
    *   *Risk:* Designing ~120 unique yet consistent icons takes longer than estimated.
    *   *Mitigation:* Establish strict design guidelines early, use a shared design system/template if possible, batch icons by category for focused work and review.
*   **Adoption may be slow initially:**
    *   *Mitigation:* Target fintech communities on Twitter, Product Hunt, and forums early.

---

## 10. **Future Considerations**

*   Add **animated icons** for micro-interactions.
*   Expand to **multi-color icons**.
*   Add **solid/duotone variants.**
*   Build **React Native support.**
*   Offer **Figma plugin / assets** for designers.

---

---

**End of PRD**

--- 