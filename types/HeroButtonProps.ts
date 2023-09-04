/**
 * Interface representing the properties for a HeroButton component.
 *
 * @interface HeroButtonProps
 */
export default interface HeroButtonProps {
  href: string; // The URL the button links to
  icon: React.ReactNode; // The icon element displayed within the button
  children: React.ReactNode; // The content displayed within the button
}
