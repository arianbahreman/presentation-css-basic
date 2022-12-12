const esbuild = require("esbuild")

esbuild
.build({
  entryPoints: ["src/index.jsx"],
  mainFields: ["react", "browser", "module", "main"],
  bundle: true,
  minify: true,
  outfile: "./public/main.js",
  plugins: [],
  watch: true
})
.catch(()=>process.exit(1));