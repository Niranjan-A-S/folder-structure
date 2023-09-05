export interface IEntry {
    name: string;
    nodes?: IEntry[];
    gap?: string;
}

export const files: IEntry = {
    name: 'Folder Structure',
    nodes: [
        {
            name: 'node-modules',
            nodes: [
                {
                    name: 'vite',
                    nodes: [{ name: 'index.js' }]
                }
            ]
        },
        {
            name: 'public',
            nodes: [{ name: 'vite.svg' }]
        },
        {
            name: 'src',
            nodes: [
                {
                    name: 'assets',
                    nodes: [{ name: 'react.svg' }]
                },
                { name: 'App.css' },
                { name: 'App.tsx' },
                { name: 'data.ts' },
                { name: 'index.css' },
                { name: 'main.tsx' },
                { name: 'vite.env.d.ts' },
            ]
        },
        { name: '.eslintrc.cjs' },
        { name: '.gitignore' },
        { name: 'index.html' },
        { name: 'package.json' },
        { name: 'README.md' },
        { name: 'tsconfig.json' },
        { name: 'tsconfig.node.json' },
        { name: 'vite.config.ts' },
        { name: 'yarn.lock' },
    ]
}