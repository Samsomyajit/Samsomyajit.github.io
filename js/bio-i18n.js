(() => {
  'use strict';

  const chineseDirectParagraphs = [
    '我目前就读于<strong>上海交通大学（SJTU）</strong>化学化工学院，攻读博士学位，并在<strong>陈锡忠教授</strong>指导下开展<strong>科学仿真人工智能、物理智能与计算建模</strong>研究。我的长期研究愿景是开发下一代物理智能与智能系统，利用机器学习加速复杂物理与工业系统中的科学仿真（尤其是计算流体力学）、代理建模、设计、优化与科学发现。',
    '在攻读博士学位之前，我在<strong>科克大学（University College Cork）</strong>完成硕士学习，师从<strong>Rosane Minghim 教授</strong>。她是视觉分析、数据可视化与科学数据分析领域备受尊敬的研究者。我还拥有<strong>Techno India University 计算机科学与工程专业工学学士（B.Tech.）</strong>学位。我的学术与研究经历涵盖人工智能、科学机器学习、计算物理、生成式建模、复杂网络与数据驱动科学发现。',
    '我目前的研究兴趣包括：',
    '我愿意与来自<strong>欧洲大陆、中国、新加坡和美国</strong>的研究人员及技术团队开展合作。若您的研究方向涉及科学智能、物理学、科学发现，或面向真实系统的先进机器学习，欢迎与我联系。'
  ];

  const chineseInterestParagraphs = [
    '<strong>（1）面向物理科学与工程的人工智能：</strong>构建用于计算流体力学、偏微分方程代理建模、多尺度科学仿真、过程优化与科学计算的物理信息和数据驱动人工智能系统。总体目标是实现更加可靠、高效的仿真辅助工程。',
    '<strong>（2）计算流体力学优化：</strong>利用人工智能、量子计算与 GPU 辅助高性能计算，提高 CFD 求解器的计算速度与优化能力。重点探索 CFD–DEM 耦合、有限元法、非定常流动与湍流建模等方向。',
    '<strong>（3）应用数学：</strong>研究科学计算与物理信息学习的数学基础，重点关注计算网格、流体力学中的欧拉–拉格朗日耦合、微分拓扑与几何拓扑、流形、谱分析、傅里叶与小波方法、图论、偏微分方程、反问题、数值优化以及多尺度动力系统。',
    '<strong>（4）材料科学与制药研究中的人工智能：</strong>探索人工智能驱动的自动化、面向外科与医疗任务的微纳机器人、基于物理智能的药物与胶囊设计、DEM–FEM 耦合、制药制造，以及医疗与药物递送系统中的数字孪生。'
  ];

  let initialized = false;
  let appliedLanguage = null;
  let directParagraphs = [];
  let interestParagraphs = [];
  const originalHtml = new Map();

  function language() {
    return document.documentElement.lang === 'zh-CN' ? 'zh-CN' : 'en';
  }

  function restoreEnglish() {
    [...directParagraphs, ...interestParagraphs].forEach((element) => {
      const original = originalHtml.get(element);
      if (typeof original === 'string' && element.innerHTML !== original) {
        element.innerHTML = original;
      }
    });
  }

  function applyChinese() {
    directParagraphs.forEach((element, index) => {
      const translated = chineseDirectParagraphs[index];
      if (translated && element.innerHTML !== translated) element.innerHTML = translated;
    });

    interestParagraphs.forEach((element, index) => {
      const translated = chineseInterestParagraphs[index];
      if (translated && element.innerHTML !== translated) element.innerHTML = translated;
    });
  }

  function applyBiographyLanguage() {
    if (!initialized) return;
    const nextLanguage = language();
    if (nextLanguage === appliedLanguage) return;

    if (nextLanguage === 'zh-CN') applyChinese();
    else restoreEnglish();

    appliedLanguage = nextLanguage;
  }

  function initializeBiographyTranslation() {
    if (initialized) return;

    const welcome = document.querySelector('#page-home .welcome-section');
    if (!welcome) return;

    directParagraphs = [...welcome.querySelectorAll(':scope > .welcome-text')];
    interestParagraphs = [...welcome.querySelectorAll('.welcome-interests > .welcome-text')];

    if (directParagraphs.length < 4 || interestParagraphs.length < 4) return;

    [...directParagraphs, ...interestParagraphs].forEach((element) => {
      originalHtml.set(element, element.innerHTML);
    });

    initialized = true;
    applyBiographyLanguage();

    const observer = new MutationObserver(() => applyBiographyLanguage());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeBiographyTranslation, { once: true });
  } else {
    initializeBiographyTranslation();
  }
})();
