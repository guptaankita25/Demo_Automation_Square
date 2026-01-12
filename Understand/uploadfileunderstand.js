/* uploading file it can work only in the Works ONLY if Element is <input type="file"> and Input is enabled and File exists on disk
What your function does well
1.✅ Cross-platform handling
You correctly distinguish between:
Windows/Linux → direct setValue(filePath)

macOS (or remote runners) → browser.uploadFile() + setValue(remoteFilePath)

2.✅ Clear logging
The logDataToReports call is gold for debugging test failures later.
3.✅ Path safety
Using path.resolve(file) ensures you’re always passing an absolute path.

4.os.platform() returns values like:
win32    - win
linux
darwin (macOS)

5.✅ Case A: Windows / Linux (local execution)
await $(locator).setValue(filePath);

What happens internally:
--WDIO finds <input type="file">
--It injects the file path
--Browser attaches the file
--Upload is complete
✔ Works because the browser has direct access to your file system.

6.✅ Case B: macOS OR remote execution (Grid, Docker, CI)
const remoteFilePath = await browser.uploadFile(filePath);
await $(locator).setValue(remoteFilePath);

Why this is needed:
--Your test machine has the file
--The browser machine (Grid / Docker / cloud) does NOT

So WDIO:
Uploads the file to the browser’s machine
--Returns a temporary path like:    /tmp/abcd1234/test.pdf

You set that path into the file input
✔ This is why browser.uploadFile() exists.

7. Visual flow (mental model)
Your Test Code
      ↓
Find <input type="file">
      ↓
Convert file path to absolute
      ↓
IF local browser     
   → setValue(localPath)
ELSE remote browser
   → uploadFile()
   → setValue(remotePath)
      ↓
File attached ✔

8. File Upload Flow (Simple Diagram)
┌────────────────────────┐
│   Test Code (WDIO)     │
│ uploadFile(locator,   │
│           filePath)   │
└───────────┬──────────┘
            │
            ▼
┌────────────────────────┐
│ Convert to ABSOLUTE   │
│ path using            │
│ path.resolve()        │
└───────────┬──────────┘
            │
            ▼
┌────────────────────────┐
│ Detect OS / Execution │
│ os.platform()         │
└───────┬─────────┬────┘
        │         │
        │         │
        ▼         ▼
┌─────────────────┐   ┌─────────────────────────┐
│ Windows/Linux   │   │ macOS / Remote Browser  │
│ (Local Browser) │   │ (Grid / CI / Docker)    │
└───────┬─────────┘   └──────────┬──────────────┘
        │                          │
        ▼                          ▼
┌─────────────────┐   ┌─────────────────────────┐
│ setValue(       │   │ browser.uploadFile()    │
│ localFilePath ) │   │ → temp browser path     │
└───────┬─────────┘   └──────────┬──────────────┘
        │                          │
        │                          ▼
        │              ┌─────────────────────────┐
        │              │ setValue(               │
        │              │ remoteFilePath )        │
        │              └──────────┬──────────────┘
        │                          │
        └──────────────┬───────────┘
                       ▼
            ┌────────────────────────┐
            │ <input type="file">   │
            │ receives file path    │
            └───────────┬──────────┘
                        ▼
            ┌────────────────────────┐
            │ File Attached ✔        │
            │ Upload Completed ✔     │
            └────────────────────────┘

🔑 One-line explanation per section

Test Code → calls reusable upload function

Absolute Path → browser only accepts full paths

OS Detection → decides local vs remote logic

Local Browser → file already accessible

Remote Browser → file must be transferred first

setValue() → browser attaches file silently

Upload Done → no OS popup involved

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

understanding the function - changeElementStyleToBlock --- used basically for ile uploads and hidden elements.

Hidden Element (display: none)
        ↓
browser.execute()
        ↓
Change CSS → display: block
        ↓
Element Visible
        ↓
WDIO can interact

Common display values
| Value    | Meaning             |
| -------- | ------------------- |
| `none`   | Element hidden ❌    |
| `block`  | Visible, new line ✅ |
| `inline` | Visible, same line  |
| `flex`   | Flex container      |
| `grid`   | Grid container      |

<input type="file" id="upload" style="display: none;">
<button>Upload File</button>





*/