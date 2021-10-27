import { ReporterProfile } from "../types";

/**
 * converter
 *
 * Makes data provided by API into a ReporterProfile type.
 * This is used for frontend components.
 */

// TODO: Do this step in API before sending

export const converter = (apiResp: any): ReporterProfile => {
  const works = [];
  for (const work of apiResp.work) {
    const publisher: string = (work.link as string)
      .replace("https://", "")
      .split("/")[0];
    const elm = {
      publisher: publisher,
      article: work.title,
      link: work.link,
    };
    works.push(elm);
  }
  const res: ReporterProfile = {
    name: apiResp.name,
    works: works,
  };
  return res;
};
