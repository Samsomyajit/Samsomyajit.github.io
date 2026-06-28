(() => {
  const root=document.querySelector('[data-list-page]'); if(!root) return;
  const kind=root.dataset.listPage;
  const set=(el,en,zh)=>{if(!el)return;el.dataset.en=en;el.dataset.zh=zh;el.textContent=en;};
  const pageNames={education:['Education','教育经历'],experience:['Experience','工作经历'],projects:['Projects','研究项目'],blog:['Blog','博客'],publications:['Publications','出版成果']};
  set(root.querySelector('h1'),...(pageNames[kind]||[kind,kind]));
  if(kind==='publications'){
    const headings=[...root.querySelectorAll(':scope > h2')];
    const labels=[['Journal articles','期刊论文'],['Under review','审稿中'],['Conference papers','会议论文'],['Preprints','预印本']];
    headings.forEach((h,i)=>{if(labels[i])set(h,...labels[i]);});
    const status=root.querySelector('.card .meta');
    set(status,'Accepted for ICHCAI 2026 and IEEE Xplore publication, subject to revisions and publication checks.','已获 ICHCAI 2026 会议报告及 IEEE Xplore 出版录用，须完成修改与出版检查。');
  }
  root.querySelectorAll('a').forEach(a=>{
    if(a.textContent==='Research page')set(a,'Research page','研究页面');
    if(a.textContent==='Paper')set(a,'Paper','论文');
    if(a.textContent==='Read source')set(a,'Read source','阅读原文');
    if(a.textContent==='Project page')set(a,'Project page','项目页面');
  });
})();