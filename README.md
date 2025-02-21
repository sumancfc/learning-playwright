# Learning Playwright

## Installation
```shell
   npm init playwright@latest
```

## Installed Files and Folders
```shell
   playwright.config.ts
   package.json
   package-lock.json
   tests/
      example.spec.ts
   tests-examples/
      demo-todo-app.spec.ts
```

## Run the Test
```shell
   npx playwright test
```

## HTML Test Report
```shell
   npx playwright show-report
```

## Running the example test in UI Mode
```shell
   npx playwright test --ui
```

## Updating Playwright
```shell
   npm install -D @playwright/test@latest
   # Also download new browser binaries and their dependencies:
   npx playwright install --with-deps
```

## Check version
```shell
   npx playwright --version
```