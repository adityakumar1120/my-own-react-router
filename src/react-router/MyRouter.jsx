import React, { useEffect, useState } from "react";
import { usePath } from "./MyBrowserRouter";

export default function MyRouter({ children }) {
  const { currentPath, setCurrentPath, setParams } = usePath();
  const handlePop = () => {};
  useEffect(() => {
    //what is popstate event
    //this event is fired when user uses browser back and forward btn to navigate or by code when we navigate the user

    //why using popstate
    //in popstate we are updating a state so when user navigates the  state is changed and so the component will re-render

    //without popstate when the user navigates via browser btns the component doesn't re-render and so the page is not changed
    window.addEventListener("popstate", (e) => {
      setCurrentPath(window.location.pathname);
    });
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  useEffect(() => {
    React.Children.forEach(children, (route) => {
      const path = route.props.path;
      if (!path.includes(":")) return;
      const baseRoute = path.split(":")[0];
      const paramName = path.split(":")[1];
      if (currentPath !== "/" && currentPath.startsWith(baseRoute)) {
        setParams({
          [paramName]: currentPath.split(
            path.split(":")[0] === "/"
              ? path.split(":")[0]
              : `${path.split(":")[0]}/`
          )[1],
        });
      }
    });
  }, [currentPath, children, setParams]);

  let showError;
  if (children.length > 0) {
    showError = children.some((route) => {
      const path = route.props.path;
      console.log(path);
      return (
        path === currentPath ||
        (currentPath !== "/" &&
          path.includes(":") &&
          currentPath.startsWith(path.split(":")[0]))
      );
    });
  } else {
    showError =
      children.props.path === currentPath ||
      (children.props.path.includes(":") &&
        currentPath.startsWith(children.props.path.split(":")[0]));
  }

  return (
    <>
      {React.Children.map(children, (route, i) => {
        const path = route.props.path;
        const isMatch = route.props.path === currentPath;
        const isErrorPage = path === "*" && !showError;

        const baseRoute =
          path.split(":")[0] === "/"
            ? path.split(":")[0]
            : `${path.split(":")[0]}/`;
        const isDynamic =
          currentPath !== "/" &&
          path.includes(":") &&
          currentPath.startsWith(baseRoute);
        route.key || i;
        if (isMatch) {
          return <React.Fragment key={i}>{route.props.element}</React.Fragment>;
        } else if (isDynamic) {
          return <React.Fragment key={i}>{route.props.element}</React.Fragment>;
        } else if (isErrorPage) {
          return <React.Fragment key={i}>{route.props.element}</React.Fragment>;
        }
      })}
    </>
  );
}
