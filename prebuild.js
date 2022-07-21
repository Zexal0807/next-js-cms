const fs = require("fs");

const FILENAME = "./site.json";

const createPage = (details) => {
        let url = "./pages" + (details.url == "/" ? "/index.js" : details.url);
        // TODO: replace /:([a-zA-Z0-9]*)/ con /$1/

        // TODO: Fix import path as dynamic
        let content = `${details.sections.map(
    (s) => `import ${s.section} from "../sections/${s.section}.js";`
  )}
  
export default function ${details.name}Page () {
	
	${details.sections.map(
    (s) =>
      `let ${s.section}Options = JSON.parse('${JSON.stringify(s.option)}');`
  )}

    return (
        <>
            ${details.sections.map(
              (s) => `<${s.section} options={${s.section}Options} />`
            )}
        </>
    );
}`;

  fs.writeFileSync(url, content);
};

const site = JSON.parse(fs.readFileSync(FILENAME));

console.log(site);

site.routes.forEach((route) => {
  createPage(route);
});