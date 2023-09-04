/**
 * Interface representing the properties for a project displayed in the main section.
 *
 * @interface MainSectionProjectProps
 */
export default interface MainSectionProjectProps {
  description: string | null; // The description of the project (or null if none)
  html_url: string; // The URL of the project's page or repository
  topics: string[]; // An array of topics associated with the project
}
