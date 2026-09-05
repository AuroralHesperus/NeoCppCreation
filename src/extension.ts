import * as vscode from 'vscode';

const cppTemplate = `#include<bits/stdc++.h>
using namespace std;

int main() {
    return 0;
}
`;

async function createCppFile(): Promise<void> {
    const document = await vscode.workspace.openTextDocument({
        language: 'cpp',
        content: cppTemplate,
    });
    await vscode.window.showTextDocument(document);
}

export function activate(context: vscode.ExtensionContext): void {
    context.subscriptions.push(
        vscode.commands.registerCommand('newcpp', createCppFile)
    );
}

export function deactivate(): void {}
