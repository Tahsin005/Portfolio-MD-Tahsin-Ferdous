import RepoCard from "./RepoCard";
import ActivityCalendar from "react-github-calendar";
import GitHubCalendar from 'react-github-calendar';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { getUser } from "../../services/apiGithub";
import { useLoaderData } from "react-router";
import styles from '../../styles/Github.module.css';

function Github() {
  const [user, repos] = useLoaderData();
  const theme = {
    dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>MD. Tahsin Ferdous | Tahsin</title>
      </Helmet>

      <div className={`${styles.user} text-white`}>
        <div>
          <img
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={`tahsin005`}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
      {/* Featured Video Section */}
      <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-textColor">
            Featured Video
          </h2>
          <div className="relative w-5/6 max-w-4xl overflow-hidden rounded-2xl aspect-video shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Vt_WnXsNwOw?si=d--DtGRoEhyoAWlQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
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


