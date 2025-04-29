# fabric-mcp-server

## Table of Contents
1. [Introduction](#introduction)
2. [What is Model Context Protocol (MCP)?](#what-is-model-context-protocol-mcp)
3. [Features](#features)
4. [Tools](#tools)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Configuration for Usage with VS Code](#configuration-for-usage-with-vs-code)
8. [Tips for Using it with Cline](#tips-for-using-it-with-cline)
9. [Troubleshooting](#troubleshooting)
10. [Contributing](#contributing)
11. [License](#license)

## Introduction
The `fabric-mcp-server` is a Model Context Protocol (MCP) server designed to expose Fabric patterns as tools for integration with Cline. This integration enhances Cline's capabilities by leveraging AI-driven pattern execution from the Fabric repository.

## What is Model Context Protocol (MCP)?
The Model Context Protocol (MCP) is a specification that facilitates communication between AI systems and external tools or resources. It standardizes the way AI models interact with various capabilities such as databases, APIs, and file systems. MCP servers, like `fabric-mcp-server`, implement this protocol to make tools and resources accessible to AI models, thereby expanding their functional scope.

## Features
- **Exposes Fabric Patterns as Tools**: The server makes all Fabric patterns available as individual tools within Cline.
- **Pattern Execution**: Users can select and execute Fabric patterns directly within Cline tasks.
- **Enhanced Capabilities**: Integrates AI-driven pattern execution to augment Cline's functionality.

## Tools
The `fabric-mcp-server` exposes a wide range of Fabric patterns as tools. Some examples include:
- `analyze_claims`
- `summarize`
- `extract_wisdom`
- `create_mermaid_visualization`
- And many more...

To see the full list of available patterns, you can list the directories in the `fabric/patterns` directory.

## Installation
1. **Clone the Repository**: Clone the `fabric-mcp-server` repository to your local system.
2. **Install Dependencies**: Navigate into the `fabric-mcp-server` directory and run `npm install`.
3. **Build the Project**: Run `npm run build` to compile the TypeScript code.

## Usage
To use the `fabric-mcp-server` with Cline:
1. Ensure the server is installed and running.
2. Configure the MCP server in your Cline settings file.
3. Create a new task in Cline and select a Fabric pattern to use.

## Configuration for Usage with VS Code
1. **Clone the Repository**: Clone the `fabric-mcp-server` repository to your local system.
2. **Install Dependencies**: Navigate into the `fabric-mcp-server` directory and run `npm install`.
3. **Build the Project**: Run `npm run build`.
4. **Configure Cline Settings**: Add the MCP server configuration to your Cline settings file. The file path varies by operating system:
   - **Windows**: `C:\Users\<username>\AppData\Roaming\Code\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`
   - **macOS**: `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
   - **Linux**: `~/.config/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

   Use the following configuration:
```json
"fabric-mcp-server": {
  "command": "node",
  "args": [
    "<path-to-fabric-mcp-server>/build/index.js"
  ],
  "env": {},
  "disabled": false,
  "autoApprove": [],
  "transportType": "stdio",
  "timeout": 60
}
```
Replace `<path-to-fabric-mcp-server>` with the actual path to the `fabric-mcp-server` directory on your system. For example:
   - **Windows**: `"C:\\path\\to\\fabric-mcp-server\\build\\index.js"`
   - **macOS/Linux**: `"/path/to/fabric-mcp-server/build/index.js"`
5. **Restart VSCode**: Restart VSCode or reload the Cline extension to apply the changes.

## Tips for Using it with Cline
To maximize the benefits of `fabric-mcp-server` with Cline, consider adding the following rule to your `.clinerules` file:
```markdown
# Fabric MCP Server Rule
1. **List Fabric Patterns**: When a new task is created, list all pattern names from the Fabric repository.
2. **Prompt for Pattern Selection**: Ask the user to select one of the following options:
   a) Enter a pattern name from the list to use the `fabric-mcp-server` tool with the specified pattern.
   b) Choose not to use `fabric-mcp-server` for the task.
```
This rule streamlines the tool selection process for new tasks in Cline.

## Troubleshooting
- Ensure the `fabric-mcp-server` is correctly configured in your Cline settings.
- Verify that the server is running and reachable.
- Check the console output for any error messages.

## Contributing
Contributions to `fabric-mcp-server` are welcome. Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute.

## License
`fabric-mcp-server` is released under the [MIT License](LICENSE).
