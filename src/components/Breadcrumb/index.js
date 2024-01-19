import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const names = ["ppdgs", "cbt", "cex", "osce", "dops", "sip", " str ", "rsgm"];

  let paths = location.pathname.split("/").filter((path) => path);

  paths = paths.map((path, index) => {
    let newPath = paths.slice(0, index + 1).join("/");
    let found = false;

    found = names.find((name) => path.toLowerCase().includes(name));
    if (found) path = path.replace(found, found.toUpperCase());

    return {
      name: path.replace(/-/g, " "),
      path: newPath,
    };
  });

  return (
    <div className="mb-3 flex flex-wrap items-center font-medium capitalize text-accent-gray">
      {paths.map((path, index) => (
        <div key={`${path.name}-${index}`}>
          {index !== paths.length - 1 ? (
            <>
              <span to={`/${path.path}${location.search}`}>{path.name}</span>
              <span className="mx-1">{">"}</span>
            </>
          ) : (
            <span className="font-bold text-primary-yellow">{path.name}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
