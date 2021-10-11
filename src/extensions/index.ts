import { ExtendsStatusBar } from './statusBar';
import { ExtendsEditor } from './editor';
import { ExtendsFolderTree } from './folderTree';
import { ExtendsMenuBar } from './menuBar';
import { ExtendsActivityBar } from './activityBar';
import { ExtendsPanel } from './panel';
import { ExtendsExplorer } from './explorer';
import { ExtendsEditorTree } from './editorTree';
import { ExtendsKeybinding } from './keybinding';

import { defaultColorThemeExtension } from './theme-defaults';
import { monokaiColorThemeExtension } from './theme-monokai';
import { paleNightColorThemeExtension } from './vscode-palenight-theme';
import { webStormIntelliJExtension } from './vscode-intellij-darcula-theme-master';
import { githubPlusExtension } from './github-plus-theme-master';

/**
 * Default extensions
 */
export const defaultExtensions = [
    ExtendsPanel,
    ExtendsActivityBar,
    ExtendsEditor,
    ExtendsMenuBar,
    ExtendsStatusBar,
    ExtendsExplorer,
    ExtendsEditorTree,
    defaultColorThemeExtension,
    monokaiColorThemeExtension,
    paleNightColorThemeExtension,
    webStormIntelliJExtension,
    githubPlusExtension,
    ExtendsFolderTree,
    ExtendsKeybinding,
];
