(() => {
  'use strict';

  const title = 'Machine learning assisted inverse design of low resistivity In–Ga–Sn–Zn oxide sputtering targets';
  const thumbnail = 'assets/FlowSputRes.png';
  const publishedRecord = {
    id: 6,
    title,
    authors: 'Cheng, N., Chakraborty, S., Liu, X., Zhang, W., Liang, X., Zhao, H., Bi, W., Zhang, M., Sun, B., He, J. and Liu, Y.',
    year: 2026,
    journal: 'Journal of the American Ceramic Society',
    articleId: 'JACE71067',
    internalArticleId: '100636828',
    doi: '10.1111/jace.71067',
    url: 'https://doi.org/10.1111/jace.71067',
    thumbnail
  };

  const synchronizeData = () => {
    if (typeof publications === 'undefined') return;

    const staleIndex = publications.underReview?.findIndex((item) => item.title === title) ?? -1;
    if (staleIndex >= 0) publications.underReview.splice(staleIndex, 1);

    const current = publications.journals?.find((item) => item.title === title);
    if (current) {
      Object.assign(current, publishedRecord);
    } else if (Array.isArray(publications.journals)) {
      publications.journals.unshift({ ...publishedRecord });
    }
  };

  const separator = () => {
    const element = document.createElement('span');
    element.className = 'pub-compact-meta-sep';
    element.textContent = '·';
    return element;
  };

  const patchPublicationCard = () => {
    const titleElement = [...document.querySelectorAll('.pub-compact-title')]
      .find((element) => element.textContent.trim() === title);
    if (!titleElement) return;

    const card = titleElement.closest('.pub-compact-card');
    if (!card) return;

    card.classList.add('has-thumbnail');

    if (!card.querySelector('img')) {
      const image = document.createElement('img');
      image.className = 'pub-thumbnail';
      image.src = thumbnail;
      image.alt = 'Inverse design of In–Ga–Sn–Zn oxide sputtering targets publication thumbnail';
      const badge = card.querySelector('.pub-compact-badge');
      badge?.insertAdjacentElement('afterend', image);
    }

    const meta = card.querySelector('.pub-compact-meta');
    if (meta && !meta.textContent.includes('100636828')) {
      const doiLink = meta.querySelector('a[href*="10.1111/jace.71067"]');
      const internalId = document.createElement('span');
      internalId.textContent = 'Internal ID: 100636828';

      if (doiLink?.previousElementSibling?.classList.contains('pub-compact-meta-sep')) {
        const doiSeparator = doiLink.previousElementSibling;
        meta.insertBefore(separator(), doiSeparator);
        meta.insertBefore(internalId, doiSeparator);
      } else {
        meta.append(separator(), internalId);
      }
    }
  };

  synchronizeData();
  patchPublicationCard();
  window.addEventListener('publication-data-ready', patchPublicationCard);
  window.addEventListener('hashchange', patchPublicationCard);
})();
