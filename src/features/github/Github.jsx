import RepoCard from "./RepoCard";
import ActivityCalendar from "react-github-calendar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { getUser } from "../../services/apiGithub";
import { useLoaderData } from "react-router";

function Github() {
  const [user, repos] = useLoaderData();
  const repoInfo = repos.filter((r) => r.stargazers_count >= 0);
  const theme = {
    dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const filteredRepos = repos;
  console.log(filteredRepos);

  console.log(user);

  return (
    <HelmetProvider>
      <Helmet>
        <title>MD. Tahsin Ferdous | Github</title>
      </Helmet>
      <div className="p-4 space-y-8 bg-mainBg md:p-8">
        <div className="flex items-center justify-center h-24 max-w-full divide-x-2 rounded-lg gap-x-5 divide-accentColor bg-articleBg">
          <div className="flex items-center justify-center divide-x-2 gap-x-2 divide-accentColor ">
            <h2 className="pl-2 text-lg font-medium text-textColor md:text-2xl">
              {user.login}
            </h2>
          </div>
          <div className="pl-2">
            <h2 className="text-lg font-medium text-textColor md:text-2xl">
              {user ? user.public_repos : 20} Repos
            </h2>
          </div>
        </div>
        <div className="pt-2 text-textColor md:block">
          <h2 className="text-xl md:text-2xl">
            {user ? user.bio : "I love writing frontend."}
          </h2>
        </div>
        <div className="w-full h-full text-textColor">
          <ActivityCalendar
            username="tahsin005"
            fontSize={17}
            theme={theme}
            hideColorLegend
            hideMonthLabels
          />
        </div>
        <div>
          {/* YouTube Video */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-textColor">
              Featured Video
            </h2>
            <div className="relative mt-4 w-full lg:w-3/4 overflow-hidden rounded-lg aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Vt_WnXsNwOw?si=d--DtGRoEhyoAWlQ"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export async function loader() {
  const github = getUser();
  return github;
}

export default Github;
