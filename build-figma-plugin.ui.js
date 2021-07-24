const preactCompatPlugin = {
  name: "preact-compat",
  setup(build) {
    const path = require("path");
    const preact = path.join(
      process.cwd(),
      "node_modules",
      "preact",
      "compat",
      "dist",
      "compat.module.js"
    );

    build.onResolve({ filter: /^(react-dom|react)$/ }, () => {
      return { path: preact };
    });
  },
};
module.exports = function (buildOptions) {
  return {
    ...buildOptions,
    plugins: [...buildOptions?.plugins, preactCompatPlugin],
  };
};
