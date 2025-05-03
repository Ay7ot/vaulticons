# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Initial project setup.
- Created Product Requirements Document (`VAULTICONS_PRD.md`).
- Created icon tracking document (`ICON_TRACKING.md`).
- Created this `CHANGELOG.md` file.
- Set up monorepo structure using npm workspaces.
- Initialized the core library package (`packages/core`).
- Configured TypeScript for the core package.
- Set up Rollup build system for the core package (generating CJS and ESM bundles).
- Created `svgs` directory for source SVG files.
- Added SVGR CLI (`@svgr/cli`) for SVG-to-React component conversion.
- Implemented `generate:icons` script to automate component generation.
- Created Node.js script (`scripts/generate-icon-index.js`) to auto-generate icon index file.
- Implemented `generate:index` script.
- Updated `build` script to include icon and index generation steps.
- Implemented `createIcon` wrapper component in core package to handle `size` and `color` props and `vertical-align`.
- Initialized the docs site package (`packages/docs`) using Vite + React + TS.
- Configured docs site to import components from the core package.
- Implemented basic icon display page structure in docs site (`App.tsx`, `index.css`) with search placeholder and icon grid.

[Unreleased]: https://github.com/your-username/vaulticons/compare/v0.0.0...HEAD 