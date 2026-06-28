(() => {
  const main=document.querySelector('main'); if(!main) return;
  const make=(tag,text)=>{const el=document.createElement(tag);el.textContent=text;return el;};
  const section=(title,titleZh)=>{const s=document.createElement('section');s.className='section';const h=make('h2',title);h.dataset.en=title;h.dataset.zh=titleZh;s.append(h);return s;};

  if(typeof currentPositions!=='undefined'){
    const s=section('Current positions','当前职位');
    const grid=document.createElement('div');grid.className='grid three';
    currentPositions.slice(0,4).forEach(item=>{const c=document.createElement('article');c.className='card';c.append(make('h3',item.title),make('p',item.organization),make('p',item.department));grid.append(c);});
    s.append(grid);main.append(s);
  }

  if(typeof publications!=='undefined'){
    const s=section('Selected publications','精选成果');
    const grid=document.createElement('div');grid.className='grid three';
    const pace={title:'PacePal: A Geo-Aware Retrieval-Augmented Chatbot Agent for Walking Engagement and Well-Being',authors:'Somyajit Chakraborty; Muhammad Shoaib; Rosane Minghim; Mujahid Tabassum',journal:'ICHCAI 2026'};
    [pace,...publications.journals.slice(0,2),...publications.underReview.slice(0,1)].forEach(item=>{const c=document.createElement('article');c.className='card';c.append(make('h3',item.title),make('p',item.authors),make('p',item.journal||item.conference||''));grid.append(c);});
    s.append(grid);const row=document.createElement('div');row.className='link-row';const a=document.createElement('a');a.className='button';a.href='/publications/';a.textContent='All publications';a.dataset.en='All publications';a.dataset.zh='全部成果';row.append(a);s.append(row);main.append(s);
  }

  if(typeof projects!=='undefined'){
    const s=section('More projects','更多项目');
    const grid=document.createElement('div');grid.className='grid three';
    projects.slice(0,6).forEach(item=>{const c=document.createElement('article');c.className='card';c.append(make('h3',item.title),make('p',item.description));grid.append(c);});
    s.append(grid);main.append(s);
  }
})();