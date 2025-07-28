# fabric-mcp-server

## Table of Contents
1. [Introduction](#introduction)
2. [What is Model Context Protocol (MCP)?](#what-is-model-context-protocol-mcp)
3. [Features](#features)
4. [Tools](#tools)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Configuration for Claude Desktop](#configuration-for-claude-desktop)
8. [Configuration for VS Code with Cline](#configuration-for-vs-code-with-cline)
9. [Tips for Using with Different AI Agents](#tips-for-using-with-different-ai-agents)
10. [Troubleshooting](#troubleshooting)
11. [Contributing](#contributing)
12. [License](#license)

## Introduction
The `fabric-mcp-server` is a Model Context Protocol (MCP) server designed to expose [Daniel Miessler's Fabric](https://github.com/danielmiessler/Fabric/tree/main) patterns as tools for integration with AI coding agents and assistants. This integration enhances AI capabilities by leveraging AI-driven pattern execution from the Fabric repository. The server works with various AI platforms including Claude Desktop, Cline, and other MCP-compatible AI agents.

<a href="https://glama.ai/mcp/servers/@adapoet/fabric-mcp-server">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@adapoet/fabric-mcp-server/badge" alt="Fabric Server MCP server" />
</a>

## What is Model Context Protocol (MCP)?
The Model Context Protocol (MCP) is a specification that facilitates communication between AI systems and external tools or resources. It standardizes the way AI models interact with various capabilities such as databases, APIs, and file systems. MCP servers, like `fabric-mcp-server`, implement this protocol to make tools and resources accessible to AI models, thereby expanding their functional scope.

## Features
- **Exposes Fabric Patterns as Tools**: The server makes all Fabric patterns available as individual tools within MCP-compatible AI agents.
- **Pattern Execution**: Users can select and execute Fabric patterns directly within AI assistant tasks.
- **Enhanced Capabilities**: Integrates AI-driven pattern execution to augment AI assistant functionality.
- **Cross-Platform Compatibility**: Works with Claude Desktop, Cline, and other MCP-compatible AI agents.

## Tools
The `fabric-mcp-server` exposes a wide range of Fabric patterns as tools. Some examples include:
- `analyze_claims`
- `summarize`
- `extract_wisdom`
- `create_mermaid_visualization`
- And many more...

To see the full list of available patterns, you can list the directories in the `[fabric/patterns](https://github.com/danielmiessler/Fabric/tree/main/data/patterns)` directory.

## Installation
1. **Clone the Repository**: Clone the `fabric-mcp-server` repository to your local system.
2. **Install Dependencies**: Navigate into the `fabric-mcp-server` directory and run `npm install`.
3. **Build the Project**: Run `npm run build` to compile the TypeScript code.

## Usage
To use the `fabric-mcp-server` with AI agents:
1. Ensure the server is installed and running.
2. Configure the MCP server in your AI agent's settings file.
3. Create a new task or conversation and select a Fabric pattern to use.

The specific configuration steps vary depending on which AI agent you're using. See the sections below for detailed instructions.

## Configuration for Claude Desktop

To use `fabric-mcp-server` with Claude Desktop:

1. **Complete Installation**: Follow the installation steps above to build the project.

2. **Configure Claude Desktop**: Add the MCP server configuration to your Claude Desktop settings. The configuration file is typically located at:
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Linux**: `~/.config/Claude/claude_desktop_config.json`

3. **Add Server Configuration**: Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "fabric-mcp-server": {
      "command": "node",
      "args": [
        "<path-to-fabric-mcp-server>/build/index.js"
      ],
      "env": {}
    }
  }
}
```

Replace `<path-to-fabric-mcp-server>` with the actual path to the `fabric-mcp-server` directory on your system.

4. **Restart Claude Desktop**: Restart Claude Desktop to apply the changes.

## Configuration for VS Code with Cline

To use `fabric-mcp-server` with Cline in VS Code:

1. **Complete Installation**: Follow the installation steps above to build the project.

2. **Configure Cline Settings**: Add the MCP server configuration to your Cline settings file. The file path varies by operating system:
   - **Windows**: `C:\Users\<username>\AppData\Roaming\Code\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`
   - **macOS**: `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
   - **Linux**: `~/.config/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

3. **Add Server Configuration**: Use the following configuration:

```json
{
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
}
```

Replace `<path-to-fabric-mcp-server>` with the actual path to the `fabric-mcp-server` directory on your system. For example:
   - **Windows**: `"C:\\path\\to\\fabric-mcp-server\\build\\index.js"`
   - **macOS/Linux**: `"/path/to/fabric-mcp-server/build/index.js"`

4. **Restart VS Code**: Restart VS Code or reload the Cline extension to apply the changes.

## Tips for Using with Different AI Agents

### For Claude Desktop Users
- Simply mention that you'd like to use a Fabric pattern in your conversation
- Ask Claude to list available patterns if you're unsure which one to use
- The patterns will be automatically available as tools once configured

### For Cline Users
To maximize the benefits of `fabric-mcp-server` with Cline, add `use fabric-mcp-server` at the end of your prompts or consider adding the following rule to your `.clinerules` file:

```markdown
# Fabric MCP Server Rule
1. **List Fabric Patterns**: When a new task is created, list all pattern names from the Fabric repository.
2. **Prompt for Pattern Selection**: Ask the user to select one of the following options:
   a) Enter a pattern name from the list to use the `fabric-mcp-server` tool with the specified pattern.
   b) Choose not to use `fabric-mcp-server` for the task.
```

This rule streamlines the tool selection process for new tasks in Cline.

### For Other MCP-Compatible Agents
- Consult your specific AI agent's documentation for MCP server configuration
- The basic server configuration should be similar to the examples above
- Ensure your agent supports the MCP protocol and tool execution

## Troubleshooting
- Ensure the `fabric-mcp-server` is correctly configured in your AI agent's settings.
- Verify that the server is running and reachable.
- Check the console output for any error messages.
- Make sure the path to the build/index.js file is correct and accessible.
- Verify that Node.js is installed and available in your system PATH.

## Contributing
Contributions to `fabric-mcp-server` are welcome. Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute.

## License
`fabric-mcp-server` is released under the [MIT License](LICENSE).
