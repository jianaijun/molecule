export const data = [
    {
        title: 'folder',
        key: 'folder',
        type: 'folder',
        id: 'abc',
        children: [
            {
                // id: 'abc',
                title: 'abccccccccc',
                key: 'abccccccccc',
                contextMenu: [
                    {
                        id: 'CommandPalette',
                        name: 'Command Palette...',
                        title: 'Command Palette',
                    },
                    {
                        id: 'Settings',
                        name: 'Settings',
                        title: 'Settings',
                    },
                    {
                        id: 'ColorTheme',
                        name: 'Color Theme',
                        title: 'Color Theme',
                    },
                ],
                children: [
                    {
                        title: 'test.txt',
                        key: 'test.txt',
                        type: 'file',
                        icon: 'symbol-file',
                    },
                    {
                        title: 'test.js',
                        key: 'test.js',
                        type: 'file',
                        icon: 'file-binary',
                    },
                    {
                        title: 'test.html',
                        key: 'test.html',
                        type: 'file',
                        icon: 'file-code',
                    },
                ],
            },
            {
                title: 'xyz',
                key: 'xyz',
                type: 'folder',
                children: [
                    {
                        title: 'test.pdf',
                        key: 'test.pdf',
                        type: 'file',
                        icon: 'file-pdf',
                    },
                    {
                        title: 'test.media',
                        key: 'test.media',
                        type: 'file',
                        icon: 'file-media',
                    },
                    {
                        title: 'test.zip',
                        key: 'test.zip',
                        type: 'file',
                        icon: 'file-zip',
                    },
                ],
            },
            {
                title: 'file.yaml',
                key: 'file.yaml',
                type: 'file',
            },
        ],
    },
];
