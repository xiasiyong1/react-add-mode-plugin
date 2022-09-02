const { override, addWebpackResolve } = require("customize-cra");
const path = require("path");
const AddModePlugin = require("./webpack/plugins/AddModePlugin");
module.exports = override(
  addWebpackResolve({
    alias: {
      components: path.resolve(__dirname, "src/components"),
    },
    plugins: [
      new AddModePlugin(
        "before-file",
        process.env.mode,
        {
          include: () => true,
        },
        "file"
      ),
    ],
  })
);
