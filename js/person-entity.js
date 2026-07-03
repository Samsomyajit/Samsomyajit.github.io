(() => {
  'use strict';

  function installPersonEntity() {
    document.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
      try {
        const value = JSON.parse(script.textContent || '{}');
        if (value['@type'] === 'ProfilePage') script.remove();
      } catch (_) {
        // Preserve unrelated structured data.
      }
    });

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': 'https://samchakraborty.me/#profile',
      url: 'https://samchakraborty.me/',
      name: 'Somyajit Chakraborty | Doctoral Researcher at Shanghai Jiao Tong University',
      description: 'Academic profile of Somyajit Chakraborty, also known as Sam Chakraborty and 叶一明.',
      mainEntity: {
        '@type': 'Person',
        '@id': 'https://samchakraborty.me/#person',
        name: 'Somyajit Chakraborty',
        alternateName: ['Sam Chakraborty', 'Yiming Ye', 'Ye Yiming', '叶一明'],
        url: 'https://samchakraborty.me/',
        image: {
          '@type': 'ImageObject',
          url: 'https://samchakraborty.me/Profile1.png'
        },
        jobTitle: 'Doctoral Researcher at Shanghai Jiao Tong University',
        affiliation: {
          '@type': 'CollegeOrUniversity',
          name: 'Shanghai Jiao Tong University',
          url: 'https://www.sjtu.edu.cn/'
        },
        alumniOf: [
          {'@type': 'CollegeOrUniversity', name: 'University College Cork', url: 'https://www.ucc.ie/'},
          {'@type': 'CollegeOrUniversity', name: 'Techno India University', url: 'https://technoindiauniversity.ac.in/'}
        ],
        identifier: [
          {'@type': 'PropertyValue', propertyID: 'ORCID', value: '0000-0002-2038-5169', url: 'https://orcid.org/0000-0002-2038-5169'},
          {'@type': 'PropertyValue', propertyID: 'Google Scholar', value: 'R9Wr3yQAAAAJ', url: 'https://scholar.google.com/citations?user=R9Wr3yQAAAAJ'},
          {'@type': 'PropertyValue', propertyID: 'Web of Science', value: 'POV-3975-2026', url: 'https://www.webofscience.com/wos/author/record/POV-3975-2026'}
        ],
        sameAs: [
          'https://www.wikidata.org/wiki/Q140420332',
          'https://orcid.org/0000-0002-2038-5169',
          'https://scholar.google.com/citations?user=R9Wr3yQAAAAJ',
          'https://github.com/Samsomyajit',
          'https://www.linkedin.com/in/somyajit-sam-chakraborty/',
          'https://www.researchgate.net/profile/Somyajit-Chakraborty',
          'https://sjtu.academia.edu/SomyajitChakraborty',
          'https://www.webofscience.com/wos/author/record/POV-3975-2026',
          'https://faculty.sjtu.edu.cn/chenxizhong/en/xsxx/630387/content/279020.htm'
        ],
        subjectOf: {
          '@type': 'WebPage',
          name: 'Official Shanghai Jiao Tong University profile',
          url: 'https://faculty.sjtu.edu.cn/chenxizhong/en/xsxx/630387/content/279020.htm'
        },
        knowsAbout: [
          'Physical AI',
          'Scientific Machine Learning',
          'Computational Fluid Dynamics',
          'Physics-Informed Machine Learning',
          'Applied Mathematics',
          'Partial Differential Equations',
          'Fourier and Wavelet Methods',
          'Complex Networks',
          'Large Language Models',
          'AI for Science'
        ]
      }
    });
    document.head.appendChild(schema);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', installPersonEntity, {once: true});
  } else {
    installPersonEntity();
  }
})();
