import * as vscode from 'vscode';

type Language = 'en' | 'zh-CN' | 'zh-TW' | 'ru' | 'es' | 'fr';

interface Messages {
    createFile: string;
    fileFilter: string;
    saveLabel: string;
}

const messages: Record<Language, Messages> = {
    en: { createFile: 'Create C++ file', fileFilter: 'C++ source', saveLabel: 'Create C++ file' },
    'zh-CN': { createFile: '快速新建 C++ 文件', fileFilter: 'C++ 源文件', saveLabel: '创建 C++ 文件' },
    'zh-TW': { createFile: '快速新增 C++ 檔案', fileFilter: 'C++ 原始檔', saveLabel: '建立 C++ 檔案' },
    ru: { createFile: 'Создать файл C++', fileFilter: 'Исходный код C++', saveLabel: 'Создать файл C++' },
    es: { createFile: 'Crear archivo C++', fileFilter: 'Código fuente C++', saveLabel: 'Crear archivo C++' },
    fr: { createFile: 'Créer un fichier C++', fileFilter: 'Code source C++', saveLabel: 'Créer un fichier C++' },
};

const cppTemplate = `#include<bits/stdc++.h>
using namespace std;

int main() {
    return 0;
}
`;

function getLanguage(): Language {
    const configuredLanguage = vscode.workspace
        .getConfiguration('neoCppCreation')
        .get<string>('language', 'zh-CN');

    return configuredLanguage in messages ? configuredLanguage as Language : 'zh-CN';
}

async function createCppFile(): Promise<void> {
    const localizedMessages = messages[getLanguage()];
    const targetUri = await vscode.window.showSaveDialog({
        defaultUri: vscode.Uri.file('main.cpp'),
        filters: {
            [localizedMessages.fileFilter]: ['cpp', 'cc', 'cxx'],
        },
        saveLabel: localizedMessages.saveLabel,
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
