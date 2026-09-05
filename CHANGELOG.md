# Changelog

All notable changes to this project will be documented in this file.

## [1.0.2] - 2026-09-05

### Changed

- Keep only the `newcpp` command entry.
- Open a new unsaved C++ editor using VS Code's default behavior.
- Remove custom save dialog language settings and command alias configuration.

## [1.0.0] - 2026-09-05

### Added

- Create C++ source files from the VS Code Command Palette.
- Support `.cpp`, `.cc`, and `.cxx` file extensions.
- Generate a basic C++ `main` function template.
- Automatically open newly created files.
- Support English, Simplified Chinese, Traditional Chinese, Russian, Spanish, and French.
- Configure the extension language through `neoCppCreation.language`.
- Configure the command alias through `neoCppCreation.commandName`.
- Package the extension as a `.vsix` file with `vsce`.

### Build

- Add TypeScript compilation through `npm run compile`.
- Add VS Code extension packaging through `npx vsce package`.
