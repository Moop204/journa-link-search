/** Describes the journalist.
 * @property {string} name - name of journalist.
 * @property {string} works - list of published works from this journalist.
 */
export interface ReporterProfile {
  name: string;
  works: PublishedWork[];
}

/** Describes the article itself.
 * @property {string} article - name of article.
 * @property {string} link - link to article.
 */
export interface Article {
  article: string;
  link: string;
}

/** Describes an article published by an organisation. */
export interface PublishedWork extends Article {
  publisher: string;
}
