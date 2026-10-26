let poems = [
  { language: 'zh', period: '1600', text: '人生若只如初見，\n何事秋風悲畫扇。', author: '納蘭性德', title: '〈木蘭花·擬古決絕詞〉', year: '1685' },
  { language: 'zh', period: '1700', text: '滿紙荒唐言，\n一把辛酸淚。', author: '曹雪芹', title: '〈題紅樓夢〉', year: 'c. 1760' },
  { language: 'zh', period: '1800', text: '我勸天公重抖擻，\n不拘一格降人才。', author: '龔自珍', title: '〈己亥雜詩〉', year: '1839' },
  { language: 'zh', period: '1800', text: '落紅不是無情物，\n化作春泥更護花。', author: '龔自珍', title: '〈己亥雜詩〉', year: '1839' },
  { language: 'zh', period: '1800', text: '我手寫我口，\n古豈能拘牽？', author: '黃遵憲', title: '〈雜感〉', year: '1897' },
  { language: 'zh', period: '1900', text: '悄悄的我走了，\n正如我悄悄的來；\n我揮一揮衣袖，\n不帶走一片雲彩。', author: '徐志摩', title: '〈再別康橋〉', year: '1928' },
  { language: 'zh', period: '1900', text: '黑夜給了我黑色的眼睛，\n我卻用它尋找光明。', author: '顧城', title: '〈一代人〉', year: '1979' },
  { language: 'zh', period: '1900', text: '卑微的夢想持續燃燒，\n也能成就一片星光。', author: '汪國真', title: '〈熱愛生命〉', year: '1980s' },
  { language: 'zh', period: '2000', text: '把今天折成一隻小船，\n放進明天尚未命名的海。', author: '詩歌盲盒', title: '〈給未知〉', year: '2026' },
  { language: 'en', period: '1600', text: 'Shall I compare thee to a summer’s day?\nThou art more lovely and more temperate.', author: 'William Shakespeare', title: 'Sonnet 18', year: '1609' },
  { language: 'en', period: '1700', text: 'To see a World in a Grain of Sand\nAnd a Heaven in a Wild Flower', author: 'William Blake', title: 'Auguries of Innocence', year: 'c. 1803' },
  { language: 'en', period: '1800', text: 'Hope is the thing with feathers\nThat perches in the soul,\nAnd sings the tune without the words,\nAnd never stops at all.', author: 'Emily Dickinson', title: '“Hope” is the thing with feathers', year: 'c. 1861' },
  { language: 'en', period: '1800', text: 'I wandered lonely as a cloud\nThat floats on high o’er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils;', author: 'William Wordsworth', title: 'I Wandered Lonely as a Cloud', year: '1807' },
  { language: 'en', period: '1800', text: 'If you can meet with Triumph and Disaster\nAnd treat those two impostors just the same;', author: 'Rudyard Kipling', title: 'If—', year: '1895' },
  { language: 'en', period: '1900', text: 'The woods are lovely, dark and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd miles to go before I sleep.', author: 'Robert Frost', title: 'Stopping by Woods on a Snowy Evening', year: '1923' },
  { language: 'en', period: '1900', text: 'I have measured out my life\nwith coffee spoons;', author: 'T. S. Eliot', title: 'The Love Song of J. Alfred Prufrock', year: '1915' },
  { language: 'en', period: '1900', text: 'Tell me, what is it you plan to do\nwith your one wild and precious life?', author: 'Mary Oliver', title: 'The Summer Day', year: '1990' },
  { language: 'en', period: '2000', text: 'Let the small, good things\nfind a home in you.', author: 'Poetry Box', title: 'For Today', year: '2026' }
];
poems.push(
  {language:'zh',period:'pre-qin-nanbei',style:'classical',text:'關關雎鳩，\n在河之洲。\n窈窕淑女，\n君子好逑。',author:'佚名',title:'〈關雎〉',year:'春秋時期'},
  {language:'zh',period:'pre-qin-nanbei',style:'classical',text:'青青河畔草，\n鬱鬱園中柳。\n盈盈樓上女，\n皎皎當窗牖。',author:'佚名',title:'〈古詩十九首〉',year:'東漢'},
  {language:'zh',period:'pre-qin-nanbei',style:'classical',text:'江南可採蓮，\n蓮葉何田田。\n魚戲蓮葉間。',author:'佚名',title:'〈江南〉',year:'漢樂府'},
  {language:'zh',period:'sui-tang',style:'classical',text:'海上生明月，\n天涯共此時。\n情人怨遙夜，\n竟夕起相思。',author:'張九齡',title:'〈望月懷遠〉',year:'唐'},
  {language:'zh',period:'sui-tang',style:'classical',text:'大漠孤煙直，\n長河落日圓。',author:'王維',title:'〈使至塞上〉',year:'唐'},
  {language:'zh',period:'sui-tang',style:'classical',text:'會當凌絕頂，\n一覽眾山小。',author:'杜甫',title:'〈望嶽〉',year:'唐'},
  {language:'zh',period:'song-yuan-ming-qing',style:'classical',text:'大江東去，浪淘盡，\n千古風流人物。',author:'蘇軾',title:'〈念奴嬌·赤壁懷古〉',year:'宋'},
  {language:'zh',period:'song-yuan-ming-qing',style:'classical',text:'山重水複疑無路，\n柳暗花明又一村。',author:'陸游',title:'〈遊山西村〉',year:'宋'},
  {language:'zh',period:'song-yuan-ming-qing',style:'classical',text:'我見青山多嫵媚，\n料青山見我應如是。',author:'辛棄疾',title:'〈賀新郎〉',year:'宋'}
);
poems.forEach(poem => { poem.style = Number(poem.period) >= 1900 ? 'modern' : 'classical'; });
// Online deployments load the maintainable database. Opening index.html directly still works with the built-in fallback above.
fetch('data/poems.json').then(response => response.ok ? response.json() : Promise.reject()).then(data => { poems = data; }).catch(() => {});

let selectedLanguage = 'zh';
let selectedPeriod = '1800';
let selectedStyle = 'all';
let selectedLength = 'excerpt';
let previousIndex = -1;
let currentPoem = null;
const languageLabels = { zh: '中文詩歌', en: 'ENGLISH POETRY' };
const periodLabels = { 'pre-qin-nanbei':'春秋至南北朝', 'sui-tang':'隋唐', 'song-yuan-ming-qing':'宋元明清' };
const periodLabel = period => periodLabels[period] || `${period}s`;
const storage = { favourites: 'poetry-box-favourites', reflections: 'poetry-box-reflections', history: 'poetry-box-history', theme: 'poetry-box-theme' };
const readStore = key => JSON.parse(localStorage.getItem(key) || '[]');
const writeStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const poemKey = poem => `${poem.language}-${poem.period}-${poem.author}-${poem.title}`;

function selectChoice(group, key, value) {
  document.querySelectorAll(`#${group} .choice`).forEach(button => button.classList.toggle('active', button.dataset[key] === value));
}

document.getElementById('languageChoices').addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  selectedLanguage = button.dataset.language;
  selectChoice('languageChoices', 'language', selectedLanguage);
});

document.getElementById('periodChoices').addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  selectedPeriod = button.dataset.period;
  selectChoice('periodChoices', 'period', selectedPeriod);
});
document.getElementById('styleChoices').addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  selectedStyle = button.dataset.style;
  selectChoice('styleChoices', 'style', selectedStyle);
});
document.getElementById('lengthChoices').addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  selectedLength = button.dataset.length;
  selectChoice('lengthChoices', 'length', selectedLength);
});

function drawPoem(available, isRandom = false) {
  if (!available.length) { alert('這個組合暫時未有詩歌，請選擇另一個年代或「不限」。'); return; }
  let index = Math.floor(Math.random() * available.length);
  if (available.length > 1 && available[index] === poems[previousIndex]) index = (index + 1) % available.length;
  const poem = available[index];
  currentPoem = poem;
  previousIndex = poems.indexOf(poem);
  if (isRandom) {
    selectedLanguage = poem.language; selectedPeriod = poem.period; selectedStyle = poem.style;
    selectChoice('languageChoices', 'language', selectedLanguage); selectChoice('periodChoices', 'period', selectedPeriod); selectChoice('styleChoices', 'style', selectedStyle);
  }
  const card = document.getElementById('poemCard');
  const displayText = selectedLength === 'full' ? (poem.fullText || poem.text) : (poem.excerpt || poem.text);
  document.getElementById('cardLanguage').textContent = languageLabels[poem.language];
  document.getElementById('cardLength').textContent = selectedLength === 'full' ? '全首' : '詩選';
  document.getElementById('cardPeriod').textContent = periodLabel(poem.period);
  document.getElementById('poemContent').innerHTML = `<p class="poem-text ${poem.language === 'en' ? 'en' : ''}">${displayText}</p>`;
  document.getElementById('poemCredit').innerHTML = `<span><strong>${poem.author}</strong> · ${poem.title}</span><span>${poem.year}</span>`;
  document.getElementById('favouriteButton').hidden = false; document.getElementById('reflectionHint').textContent = `寫給〈${poem.title}〉`;
  card.classList.remove('is-empty', 'reveal'); void card.offsetWidth; card.classList.add('reveal'); card.scrollIntoView({ behavior: 'smooth', block: 'center' }); updateFavouriteButton(); saveHistory(poem);
}

document.getElementById('drawButton').addEventListener('click', () => {
  const available = poems.filter(poem => poem.language === selectedLanguage && poem.period === selectedPeriod && (selectedStyle === 'all' || poem.style === selectedStyle));
  drawPoem(available);
});
document.getElementById('randomButton').addEventListener('click', () => drawPoem(poems, true));

function updateFavouriteButton() {
  const button = document.getElementById('favouriteButton');
  const saved = currentPoem && readStore(storage.favourites).some(p => poemKey(p) === poemKey(currentPoem));
  button.textContent = saved ? '♥ 已收藏' : '♡ 收藏這首詩';
  button.classList.toggle('saved', saved);
}
function renderFavourites() {
  const items = readStore(storage.favourites), target = document.getElementById('favouriteList');
  target.innerHTML = items.length ? items.map((p, i) => `<article class="favourite-item" data-index="${i}"><strong>${p.author}</strong> · ${p.title}<small>${p.text.split('\n')[0]}</small></article>`).join('') : '<p class="empty-state">還未收藏任何詩。<br />遇到喜歡的，按一下 ♡ 吧。</p>';
}
function renderReflections() {
  const items = readStore(storage.reflections), target = document.getElementById('reflectionList');
  target.innerHTML = items.slice(0, 4).map(item => `<article class="reflection-item">${item.note}<small>${item.poem.author} · ${item.poem.title} · ${item.date}</small></article>`).join('');
}
function saveHistory(poem) {
  const items = readStore(storage.history).filter(item => poemKey(item.poem) !== poemKey(poem));
  items.unshift({ poem, date: new Intl.DateTimeFormat('zh-HK',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'}).format(new Date()) });
  writeStore(storage.history, items.slice(0, 20)); renderHistory();
}
function renderHistory() {
  const items = readStore(storage.history), target = document.getElementById('historyList');
  target.innerHTML = items.length ? items.map((item, i) => `<article class="history-item" data-history="${i}"><strong>${item.poem.author}</strong> · ${item.poem.title}<small>${item.poem.text.split('\n')[0]} · ${item.date}</small></article>`).join('') : '<p class="empty-state">你的抽詩足跡會在這裡出現。</p>';
}
document.getElementById('favouriteButton').addEventListener('click', () => {
  if (!currentPoem) return; const items = readStore(storage.favourites), index = items.findIndex(p => poemKey(p) === poemKey(currentPoem));
  index === -1 ? items.unshift(currentPoem) : items.splice(index, 1); writeStore(storage.favourites, items); updateFavouriteButton(); renderFavourites();
});
document.getElementById('favouriteList').addEventListener('click', event => {
  const item = event.target.closest('[data-index]'); if (!item) return; const poem = readStore(storage.favourites)[item.dataset.index];
  currentPoem = poem; selectedLanguage = poem.language; selectedPeriod = poem.period; selectChoice('languageChoices','language',selectedLanguage); selectChoice('periodChoices','period',selectedPeriod);
  document.getElementById('cardLanguage').textContent = languageLabels[poem.language]; document.getElementById('cardPeriod').textContent = poem.period + 's';
  document.getElementById('poemContent').innerHTML = `<p class="poem-text ${poem.language === 'en' ? 'en' : ''}">${poem.text}</p>`; document.getElementById('poemCredit').innerHTML = `<span><strong>${poem.author}</strong> · ${poem.title}</span><span>${poem.year}</span>`; document.getElementById('favouriteButton').hidden = false; updateFavouriteButton();
});
document.getElementById('historyList').addEventListener('click', event => {
  const item = event.target.closest('[data-history]'); if (!item) return; const poem = readStore(storage.history)[item.dataset.history].poem;
  currentPoem = poem; selectedLanguage = poem.language; selectedPeriod = poem.period; selectedStyle = poem.style; selectChoice('languageChoices','language',selectedLanguage); selectChoice('periodChoices','period',selectedPeriod); selectChoice('styleChoices','style',selectedStyle);
  document.getElementById('cardLanguage').textContent = languageLabels[poem.language]; document.getElementById('cardPeriod').textContent = poem.period + 's'; document.getElementById('poemContent').innerHTML = `<p class="poem-text ${poem.language === 'en' ? 'en' : ''}">${poem.text}</p>`; document.getElementById('poemCredit').innerHTML = `<span><strong>${poem.author}</strong> · ${poem.title}</span><span>${poem.year}</span>`; document.getElementById('favouriteButton').hidden = false; updateFavouriteButton();
});
document.getElementById('reflectionForm').addEventListener('submit', event => {
  event.preventDefault(); const input = document.getElementById('reflectionInput'), note = input.value.trim(); if (!currentPoem || !note) return;
  const items = readStore(storage.reflections); items.unshift({ note, poem: currentPoem, date: new Intl.DateTimeFormat('zh-HK',{month:'short',day:'numeric'}).format(new Date()) }); writeStore(storage.reflections, items); input.value = ''; renderReflections();
});
const themeToggle = document.getElementById('themeToggle');
function setTheme(isDark) { document.body.classList.toggle('dark', isDark); themeToggle.innerHTML = isDark ? '☀ <span>淺色</span>' : '☾ <span>深色</span>'; localStorage.setItem(storage.theme, isDark ? 'dark' : 'light'); }
setTheme(localStorage.getItem(storage.theme) === 'dark'); themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));
renderFavourites(); renderReflections(); renderHistory();

