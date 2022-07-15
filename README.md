# Examples of how to test Stencil Components using Jest and Puppeteer

![example workflow](https://github.com/jagreehal/stencil-how-to-test-components/actions/workflows/main/badge.svg)

Examples of how to test [Stencil](https://stenciljs.com) components... both what works and doesn't!

## [EventEmitter](https://stenciljs.com/docs/events)

✅ can assert events have been raised

## [Methods](https://stenciljs.com/docs/decorators)

✅ can call methods on elements

## [Props](https://stenciljs.com/docs/decorators)

✅ can set props on element

✅ can change prop value

## Snapshots

📷 can use snapshots

## Added bonus!

For VSCode users checkout [launch.json](.vscode/launch.json) for debugging tests

```js
{
    "version": "0.2.0",
    "configurations": [{
            "type": "node",
            "request": "launch",
            "name": "E2E Test Current File",
            "cwd": "${workspaceFolder}",
            "program": "${workspaceFolder}/node_modules/.bin/stencil",
            "args": ["test", "--e2e", "${relativeFile}"],
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen",
            "disableOptimisticBPs": true,
            "skipFiles": [
                "${workspaceFolder}/node_modules/**/*.js",
                "<node_internals>/**/*.js"
            ]
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Spec Test Current File",
            "cwd": "${workspaceFolder}",
            "program": "${workspaceFolder}/node_modules/.bin/stencil",
            "args": ["test", "--spec", "${relativeFile}"],
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen",
            "disableOptimisticBPs": true,
            "skipFiles": [
                "${workspaceFolder}/node_modules/**/*.js",
                "<node_internals>/**/*.js"
            ]
        }
    ]
}
```
