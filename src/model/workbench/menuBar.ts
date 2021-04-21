/**
 * The activity bar event definition
 */
export enum MenuBarEvent {
    /**
     * Selected an activity bar
     */
    onClick = 'menuBar.onClick',
}

export interface IMenuBarItem {
    id?: string;
    name?: string;
    icon?: string;
    data?: any;
    iconName?: string;
    render?: () => React.ReactNode | JSX.Element;
}
export interface IMenuBar {
    data?: IMenuBarItem[];
    hidden?: boolean;
}

export const MENU_FILE_UNDO = 'undo';
export const MENU_FILE_REDO = 'redo';
export const MENU_VIEW_MENUBAR = 'workbench.action.showMenuBar';
export const MENU_VIEW_SIDEBAR = 'workbench.action.showSideBar';
export const MENU_VIEW_ACTIVITYBAR = 'workbench.action.showActivityBar';
export const MENU_VIEW_STATUSBAR = 'workbench.action.showStatusBar';

export const builtInMenuData = [
    {
        id: 'File',
        name: 'File',
        data: [
            {
                id: 'New File',
                name: 'New File',
            },
            {
                id: 'OpenFile',
                name: 'Open',
            },
        ],
    },
    {
        id: 'Edit',
        name: 'Edit',
        data: [
            {
                id: MENU_FILE_UNDO,
                name: 'Undo',
            },
            {
                id: MENU_FILE_REDO,
                name: 'Redo',
            },
        ],
    },
    {
        id: 'Selection',
        name: 'Selection',
        data: [
            {
                id: 'SelectAll',
                name: 'Select All',
            },
            {
                id: 'CopyLineUp',
                name: 'Copy Line Up',
            },
        ],
    },
    {
        id: 'View',
        name: 'View',
        data: [
            {
                id: 'Command Palette',
                name: 'Command Palette',
            },
            {
                id: 'OpenView',
                name: 'Open View',
            },
            {
                id: 'Appearance',
                name: 'Appearance',
                data: [
                    {
                        icon: 'check',
                        id: MENU_VIEW_MENUBAR,
                        name: 'Show Menu Bar',
                    },
                    {
                        icon: 'check',
                        id: MENU_VIEW_SIDEBAR,
                        name: 'Show Side Bar',
                    },
                    {
                        icon: 'check',
                        id: MENU_VIEW_STATUSBAR,
                        name: 'Show Status Bar',
                    },
                    {
                        icon: 'check',
                        id: MENU_VIEW_ACTIVITYBAR,
                        name: 'Show Activity Bar',
                    },
                ],
            },
        ],
    },
    {
        id: 'Run',
        name: 'Run',
        data: [
            {
                id: 'RunTask',
                name: 'Run Task',
            },
        ],
    },
    {
        id: 'Help',
        name: 'Help',
        data: [
            {
                id: 'About',
                name: 'About',
            },
        ],
    },
];

export const undoRedoMenu = [
    {
        id: MENU_FILE_UNDO,
        label: 'Undo',
    },
    {
        id: MENU_FILE_REDO,
        label: 'Redo',
    },
];
export class MenuBarModel implements IMenuBar {
    public data: IMenuBarItem[];
    public hidden = false;

    constructor(data: IMenuBarItem[] = builtInMenuData, hidden = false) {
        this.data = data;
        this.hidden = hidden;
    }
}
