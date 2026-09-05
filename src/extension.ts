import * as vscode from 'vscode';

const cppTemplate = `#include<bits/stdc++.h>
using namespace std;

int main() {
    return 0;
}
`;

async function createCppFile(): Promise<void> {
    const targetUri = await vscode.window.showSaveDialog({
        defaultUri: vscode.Uri.file('main.cpp'),
        filters: {
            'C++ source': ['cpp', 'cc', 'cxx'],
        },
        saveLabel: '创建 C++ 文件',
    });

    if (!targetUri) {
        return;
    }

    await vscode.workspace.fs.writeFile(
        targetUri,
        Buffer.from(cppTemplate, 'utf8')
    );

    const document = await vscode.workspace.openTextDocument(targetUri);
    await vscode.window.showTextDocument(document);
}

export function activate(context: vscode.ExtensionContext): void {
    const createFileCommand = vscode.commands.registerCommand(
        'neoCppCreation.createFile',
        createCppFile
    );
    const newFileAliasCommand = vscode.commands.registerCommand(
        'neoCppCreation.newFileAlias',
        createCppFile
    );

    context.subscriptions.push(createFileCommand, newFileAliasCommand);
}

export function deactivate(): void {}
