/* eslint-disable react/prop-types */
function ArticleCard({ url, image, title, desc }) {
  return (
    <a
      href={url}
      className="flex max-w-xs flex-col overflow-hidden rounded-2xl bg-articleBg shadow-md transition"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={image}
        className="h-[160px] w-full object-cover"
        alt={`${title} thumbnail`}
      />

      <div className="flex flex-col gap-y-4 p-4">
        <h2 className="text-2xl font-bold text-accentColor">{title}</h2>
        <p className="text-base leading-relaxed text-gray-400">{desc}</p>
      </div>
    </a>
  );
}

export default ArticleCard;
