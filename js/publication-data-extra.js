(() => {
  if (typeof publications === 'undefined') return;

  const pacePal = {
    id: 12,
    title: 'PacePal: A Geo-Aware Retrieval-Augmented Chatbot Agent for Walking Engagement and Well-Being',
    authors: 'Chakraborty, S., Shoaib, M., Minghim, R. and Tabassum, M.',
    year: 2026,
    conference: 'ICHCAI 2026, Halden, Norway',
    publisher: 'IEEE Xplore',
    dates: '27–28 May 2026',
    status: 'Accepted subject to revisions and publication checks'
  };

  const fourierWavelet = {
    id: 13,
    title: 'A Physics-Informed Fourier-Wavelet Transformer for Multiscale Computational Fluid Dynamics Surrogate Modeling',
    authors: 'Chakraborty, S., Pan, M. and Chen, X.',
    year: 2026,
    journal: 'arXiv preprint arXiv:2606.24696',
    url: 'https://arxiv.org/abs/2606.24696',
    status: 'Submitted to Engineering Applications of Artificial Intelligence'
  };

  if (!publications.conferences.some((item) => item.title === pacePal.title)) publications.conferences.unshift(pacePal);
  if (!publications.preprints.some((item) => item.title === fourierWavelet.title)) publications.preprints.unshift(fourierWavelet);
})();
