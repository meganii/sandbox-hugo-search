const Generator = require('re_expand');

const generator = new Generator();
const qHugo = '(Hugo|hugo)';
const qGnerator = '(ジェネレーター|ジェネレータ)';
generator.add(`${qHugo}`, 'https://www.meganii.com/blog/Hugo');
generator.add(`静的サイト${qGnerator}`, 'https://www.meganii.com/blog/静的サイト');
generator.add(`静的サイト`, 'https://www.meganii.com/blog/静的サイトジェネレータ');
generator.add(`${qHugo}(ブログ|サイト)作成`, 'https://www.meganii.com/blog/ブログ作成');
// generator.add("(Hugo|hugo)で", 'https://www.meganii.com/blog/1');


const f = (a, cmd) => {
    console.log(`${a} => ${cmd}`)
}

generator.filter("hugo ブログ作成", f, 2);