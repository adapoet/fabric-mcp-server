#!/usr/bin/env node
/**
 * Fabric MCP Server
 *
 * This MCP server exposes Fabric patterns as tools that can be used in Cline.
 * Each pattern is loaded from the Fabric patterns directory and exposed as a tool.
 */
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema, ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
import { readdirSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
// Path to the Fabric patterns directory
const PATTERNS_DIR = 'C:/Users/adapo/OneDrive/Documents/test2/fabric/patterns';
// Create a new MCP server
const server = new Server({
    name: "fabric-mcp-server",
    version: "0.1.0",
}, {
    capabilities: {
        tools: {},
    },
});
// Load patterns from the Fabric patterns directory
console.error('Loading patterns from:', PATTERNS_DIR);
let patterns = [];
try {
    patterns = readdirSync(PATTERNS_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    console.error('Loaded patterns:', patterns);
}
catch (error) {
    console.error('Error loading patterns:', error);
}
// Handler for listing available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
    console.error('ListToolsRequestSchema handler called');
    const tools = patterns.map(pattern => ({
        name: pattern,
        description: `Execute the ${pattern} Fabric pattern`,
        inputSchema: {
            type: "object",
            properties: {
                input: {
                    type: "string",
                    description: "Input text for the pattern"
                }
            },
            required: ["input"]
        }
    }));
    // Add the recommend_tool
    tools.push({
        name: "recommend_tool",
        description: "Recommends the best Fabric pattern tool for a given task",
        inputSchema: {
            type: "object",
            properties: {
                input: {
                    type: "string",
                    description: "The user's task description"
                }
            },
            required: ["input"]
        }
    });
    console.error('Returning tools:', tools.map(tool => tool.name));
    return { tools };
});
// Handler for calling a tool
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    console.error('CallToolRequestSchema handler called with name:', request.params.name);
    const patternName = request.params.name;
    // Check if the pattern exists
    if (!patterns.includes(patternName)) {
        console.error('Unknown pattern:', patternName);
        throw new McpError(ErrorCode.MethodNotFound, `Unknown pattern: ${patternName}`);
    }
    // Get the pattern content
    const patternPath = join(PATTERNS_DIR, patternName, 'system.md');
    // Check if the system.md file exists
    if (!existsSync(patternPath)) {
        console.error('Pattern file not found:', patternPath);
        throw new McpError(ErrorCode.InternalError, `Pattern file not found: ${patternPath}`);
    }
    // Read the pattern content
    const patternContent = readFileSync(patternPath, 'utf8');
    const input = String(request.params.arguments?.input || '');
    console.error('Executing pattern:', patternName);
    // Return the pattern content with the input
    return {
        content: [{
                type: "text",
                text: `Pattern: ${patternName}\nInput: ${input}\n\n${patternContent}`
            }]
    };
});
// Start the server
async function main() {
    console.error('Starting Fabric MCP server...');
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('Fabric MCP server running on stdio');
}
// Handle errors
main().catch((error) => {
    console.error("Server error:", error);
    process.exit(1);
});
