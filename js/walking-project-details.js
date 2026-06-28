(() => {
  const main=document.querySelector('main'); if(!main) return;
  const zh=document.documentElement.lang==='zh-CN';
  const bi=(tag,en,cn)=>{const el=document.createElement(tag);el.dataset.en=en;el.dataset.zh=cn;el.textContent=zh?cn:en;return el;};
  const details=document.createElement('section');
  const heading=bi('h2','Authors and publication status','作者与出版状态');
  const authors=document.createElement('p');
  authors.textContent='Somyajit Chakraborty, Muhammad Shoaib, Rosane Minghim, and Mujahid Tabassum.';
  const status=bi('p','Accepted for presentation at ICHCAI 2026 in Halden, Norway, and for IEEE Xplore publication subject to revisions and publication checks.','已获 ICHCAI 2026 会议报告及 IEEE Xplore 出版录用，须完成修改与出版检查。');
  const citationHeading=bi('h2','Recommended citation','推荐引用');
  const citation=document.createElement('p');
  citation.textContent='Chakraborty, S., Shoaib, M., Minghim, R., and Tabassum, M. PacePal: A Geo-Aware Retrieval-Augmented Chatbot Agent for Walking Engagement and Well-Being. ICHCAI 2026.';
  details.append(heading,authors,status,citationHeading,citation); main.append(details);
})();