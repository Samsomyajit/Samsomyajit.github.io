import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

export function useGitHub(username = 'Samsomyajit') {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const { data } = await octokit.repos.listForUser({
          username,
          sort: 'updated',
          per_page: 30,
        });
        
        // Fetch additional details for each repo including images
        const reposWithImages = await Promise.all(
          data.map(async (repo) => {
            let imageUrl = null;
            try {
              // Try to get README for potential image
              const { data: readme } = await octokit.repos.getReadme({
                owner: username,
                repo: repo.name,
              });
              const content = atob(readme.content);
              // Look for image patterns in README
              const imgMatch = content.match(/!\[.*?\]\((.*?)\)/);
              if (imgMatch) {
                imageUrl = imgMatch[1];
                if (!imageUrl.startsWith('http')) {
                  imageUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/main/${imageUrl}`;
                }
              }
            } catch {
              // No README or image found
            }
            
            return {
              ...repo,
              imageUrl: imageUrl || `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
            };
          })
        );
        
        setRepos(reposWithImages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
}
