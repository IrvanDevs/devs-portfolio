// logo
import html from '../assets/logo/html5.webp'
import css from '../assets/logo/css.webp'
import react from '../assets/logo/reactjs.webp'
import tailwindcss from '../assets/logo/tailwindcss.webp'
import bootstrap from '../assets/logo/bootstrap.webp'
import git from '../assets/logo/git.webp'
import vite from '../assets/logo/vite.webp'
import vscode from '../assets/logo/vscode.webp'
import photoshop from '../assets/logo/photoshop.webp'
import figma from '../assets/logo/figma.webp'
import shopify from '../assets/logo/shopify.webp'



export const skills = {
    title: 'WHAT I WORK WITH',
    categories: [
        // frontend development
        {
            skillCategory: 'FRONTEND DEVELOPMENT',
            skillBox: [
                { logo: html, skillTitle: 'HTML5' },
                { logo: css, skillTitle: 'CSS' },
                { logo: react, skillTitle: 'ReactJS' },
                { logo: tailwindcss, skillTitle: 'TailwindCSS' },
                { logo: bootstrap, skillTitle: 'Bootstrap 5' }
            ]
        },
        // development tools
        {
            skillCategory: 'DEVELOPMENT TOOLS',
            skillBox: [
                { logo: git, skillTitle: 'GIT' },
                { logo: vite, skillTitle: 'Vite' },
                { logo: vscode, skillTitle: 'VS Code' },
            ]
        },
        // design and platform
        {
            skillCategory: 'DESIGN & PLATFORM',
            skillBox: [
                { logo: photoshop, skillTitle: 'Photoshop' },
                { logo: figma, skillTitle: 'Figma' },
                { logo: shopify, skillTitle: 'Shopify' },
            ]
        },
    ]
};