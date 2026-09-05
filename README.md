# Neo C++ Creation

A lightweight VS Code extension for quickly creating C++ source files with a basic `main` function template.

## Features

- Quickly create C++ source files from the Command Palette
- Supports `.cpp`, `.cc`, and `.cxx` file extensions
- Automatically opens the newly created file
- Includes `#include<bits/stdc++.h>`, `using namespace std`, and an empty `main` function

## Usage

1. In VS Code, press `Ctrl+Shift+P` to open the Command Palette.
2. Run `newcpp` from the Command Palette.
3. The extension opens a new unsaved C++ editor with the template.

## Generated Template

```cpp
#include<bits/stdc++.h>
using namespace std;

int main() {
    return 0;
}
```

---

# Neo C++ Creation

一个轻量的 VS Code 扩展，用于快速创建带基础 `main` 函数模板的 C++ 源文件。

## 功能

- 通过命令面板快速创建 C++ 源文件
- 支持 `.cpp`、`.cc` 和 `.cxx` 扩展名
- 创建后自动打开新文件
- 提供 `#include<bits/stdc++.h>`、`using namespace std` 和空的 `main` 函数

## 使用

1. 在 VS Code 中按 `Ctrl+Shift+P` 打开命令面板。
2. 在命令面板中运行“newcpp”。
3. 扩展会使用 VS Cod 默认方式打开一个未保存的 C++ 编辑器，并填入模板。

## 生成模板

```cpp
#include<bits/stdc++.h>
using namespace std;

int main() {
    return 0;
}
```
