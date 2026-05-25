export type NavItem = {
  title: string;
  href?: string;
  items?: NavItem[];
  disabled?: boolean;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};
