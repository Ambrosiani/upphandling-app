import axios from 'axios'
// return issues for a repo
export const getIssues = async (owner, repo) => {
  console.log('owner', owner, 'repo', repo)
  const { data } = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    headers: {
      //Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json'
    },
  })
  return data
}
