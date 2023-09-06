import { request } from "@octokit/request";

/**
 * Retrieves the latest pushed GitHub repositories of a specified user,
 * along with their associated topics.
 *
 * @returns {Promise<Array>} An array of objects representing the latest pushed projects,
 *                          each containing properties like id, name, html_url, description,
 *                          pushed_at, and topics.
 */

export async function getGithubData() {
  const username = "andrepbo";

  // List of all repositories
  const userRepoList = await request("GET /users/{username}/repos", {
    username,
  });

  // Destructuring properties of the repo object
  const userRepos = userRepoList.data.map(
    ({ id, name, html_url, description, pushed_at }) => ({
      id,
      name,
      html_url,
      description,
      pushed_at,
    })
  );

  // Sort repositories by last push in descending order
  userRepos.sort(
    (a: any, b: any) =>
      new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
  );

  // Filtering last 5 projects
  const latestPushedProjects = userRepos
    .filter((userRepo: any) => userRepo.name !== "portfolio")
    .slice(0, 5);

  // Including the topics
  const latestPushedProjectsWithTopics = await Promise.all(
    latestPushedProjects.map(async (project) => {
      try {
        const topicsResponse = await request(
          `GET /repos/{owner}/{repo}/topics`,
          { owner: username, repo: project.name }
        );
        const topics: string[] = topicsResponse.data.names;
        return { ...project, topics };
      } catch (error) {
        console.error(`Error fetching topics for ${project.name}:`, error);
        return { ...project, topics: [] };
      }
    })
  );

  return latestPushedProjectsWithTopics;
}
