---
"@e2e-dev/core": patch
"e2e": patch
"@e2e-dev/web": patch
"@e2e-dev/mobile": patch
---

Accept in-memory file payloads in `locator.setInputFiles({ name, mimeType, buffer })`, including payload arrays. File paths and empty-array clearing keep working. Engines opt in to payload uploads with `filePayloads: true` and the `setInputFilePayloads` action; path-only engines reject payloads as unsupported.
