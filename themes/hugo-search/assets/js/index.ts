// console.log('Hello Typescript with Hugo!');

import Generator from 're_expand';

const generator = new Generator();
const qHugo = 'Hugo|hugo';
const qGnerator = '(ジェネレーター|ジェネレータ)';
const qTailwindCSS = '(TailwindCSS|tailwindcss)';
generator.add(`(${qHugo})`, 'Hugoとは');
generator.add(`静的サイト`, '静的サイトとは');
generator.add(`静的サイト${qGnerator}`, '静的サイトジェネレータ');
generator.add(`(${qHugo})で(ブログ|サイト)(作成|構築)`, 'Hugoでブログ作成');
generator.add(`(ブログ|サイト)(作成|構築)`, 'Hugoでブログ作成');
generator.add(`(${qHugo})CSS`, 'HugoでCSS');
generator.add(`(${qHugo})で${qTailwindCSS}を使う`, 'HugoでTailwindCSSを使う');
generator.add(`${qTailwindCSS}を${qHugo}で使う`, 'HugoでTailwindCSSを使う');

let urlList = new Set<string>();

const f = (a:string, url:string) => {
    if (url) {
        urlList.add(url);
    }
    console.log(`${a} => ${url}`);
}

const searchBox = document.getElementById('searchbox') as HTMLTextAreaElement;

if (searchBox) {
    searchBox.addEventListener('input', (event) => {
        const target = event.target as HTMLTextAreaElement;
        const result = document.getElementById('result') as HTMLDivElement;
        urlList = new Set<string>();
        result!.innerHTML = '';
        const qstr = target?.value;
        generator.filter(qstr, f, 2);

        if (urlList.size > 0) {
            let html = '<ul>';
            for (const url of urlList) {
                html = html + `<li><a href='${url}'>${url}</a></li>\n`;
            }
            html = html + '</ul>';
            result!.innerHTML = html;
        }
    });
} else {
    console.log('no searchbox');
}