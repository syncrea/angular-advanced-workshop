import {strings} from '@angular-devkit/core';
import {
  apply,
  applyTemplates,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicsException,
  Tree,
  url
} from '@angular-devkit/schematics';
import {parseName} from '@schematics/angular/utility/parse-name';
import {
  buildDefaultPath,
  getProject
} from '@schematics/angular/utility/project';

export interface UnionOptions {
  name: string;
  discriminator: string;
  path: string;
  project: string;
}

export default function (options: UnionOptions): Rule {
  return (host: Tree) => {
    if (!options.project) {
      throw new SchematicsException('Option (project) is required.');
    }
    const project = getProject(host, options.project);

    if (options.path === undefined) {
      options.path = buildDefaultPath(project);
    }

    const parsedPath = parseName(options.path, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;

    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...strings,
        ...options
      }),
      move(parsedPath.path),
    ]);

    return chain([
      branchAndMerge(chain([
        mergeWith(templateSource),
      ]))
    ]);
  };
}
