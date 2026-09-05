# Neo C++ Creation

一个轻量的 VS Code 扩展，用于快速创建带基础 `main` 函数模板的 C++ 源文件。

## 功能

- 通过命令面板快速创建 C++ 源文件
- 支持 `.cpp`、`.cc` 和 `.cxx` 扩展名
- 创建后自动打开新文件
- 提供 `#include<bits/stdc++.h>`、`using namespace std` 和空的 `main` 函数

## 使用

1. 在 VS Code 中按 `Ctrl+Shift+P` 打开命令面板。
2. 运行 `快速新建 C++ 文件` 或 `newcpp`。
3. 选择保存位置并输入文件名，扩展会创建并打开文件。

默认文件名为 `main.cpp`。

## 生成模板

```cpp
#include<bits/stdc++.h>
using namespace std;

int main() {
    return 0;
}
```
