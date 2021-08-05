import { KeyCode } from 'mo/monaco';

export const KeyCodeString: Partial<{ [key in KeyCode]: string }> = {
    [KeyCode.Unknown]: '',
    [KeyCode.Backspace]: '⌫',
    [KeyCode.Tab]: '⇥',
    [KeyCode.Enter]: '↩︎',
    [KeyCode.PageUp]: '↑',
    [KeyCode.PageDown]: '↓',
    [KeyCode.KEY_0]: '0',
    [KeyCode.KEY_1]: '1',
    [KeyCode.KEY_2]: '2',
    [KeyCode.KEY_3]: '3',
    [KeyCode.KEY_4]: '4',
    [KeyCode.KEY_5]: '5',
    [KeyCode.KEY_6]: '6',
    [KeyCode.KEY_7]: '7',
    [KeyCode.KEY_8]: '8',
    [KeyCode.KEY_9]: '9',
    [KeyCode.KEY_A]: 'A',
    [KeyCode.KEY_B]: 'B',
    [KeyCode.KEY_C]: 'C',
    [KeyCode.KEY_D]: 'D',
    [KeyCode.KEY_E]: 'E',
    [KeyCode.KEY_F]: 'F',
    [KeyCode.KEY_G]: 'G',
    [KeyCode.KEY_H]: 'H',
    [KeyCode.KEY_I]: 'I',
    [KeyCode.KEY_J]: 'J',
    [KeyCode.KEY_K]: 'K',
    [KeyCode.KEY_L]: 'L',
    [KeyCode.KEY_M]: 'M',
    [KeyCode.KEY_N]: 'N',
    [KeyCode.KEY_O]: 'O',
    [KeyCode.KEY_P]: 'P',
    [KeyCode.KEY_Q]: 'Q',
    [KeyCode.KEY_R]: 'R',
    [KeyCode.KEY_S]: 'S',
    [KeyCode.KEY_T]: 'T',
    [KeyCode.KEY_U]: 'U',
    [KeyCode.KEY_V]: 'V',
    [KeyCode.KEY_W]: 'W',
    [KeyCode.KEY_X]: 'X',
    [KeyCode.KEY_Y]: 'Y',
    [KeyCode.KEY_Z]: 'Z',
    [KeyCode.US_SEMICOLON]: ';',
    [KeyCode.US_EQUAL]: '+',
    [KeyCode.US_COMMA]: ',',
    [KeyCode.US_MINUS]: '-',
    [KeyCode.US_DOT]: '.',
    [KeyCode.US_SLASH]: '/',
    [KeyCode.US_BACKTICK]: '~',
    [KeyCode.US_OPEN_SQUARE_BRACKET]: '[',
    [KeyCode.US_BACKSLASH]: '\\',
    [KeyCode.US_CLOSE_SQUARE_BRACKET]: ']',
    [KeyCode.US_QUOTE]: '"',
};

export interface ISimpleKeybinding {
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    metaKey: boolean;
    keyCode: KeyCode;
}

export const ACTION_QUICK_COMMAND = 'editor.action.quickCommand';
export const ACTION_QUICK_SELECT_ALL = 'editor.action.quickSelectAll';
export const ACTION_QUICK_COPY_LINE_UP = 'editor.action.copyLinesUpAction';
export const ACTION_QUICK_UNDO = 'editor.action.undo';
export const ACTION_QUICK_REDO = 'editor.action.redo';

export const ACTION_QUICK_CREATE_FILE = 'workbench.action.quickCreateFile';
export const ACTION_QUICK_CREATE_FOLDER = 'workbench.action.quickCreateFolder';
export const ACTION_QUICK_ACCESS_SETTINGS =
    'workbench.action.quickAccessSettings';
export const ACTION_SELECT_THEME = 'workbench.action.selectTheme';
export const ACTION_SELECT_LOCALE = 'workbench.action.selectLocale';
