export type sidebarData = {
  section: string;
  collapsible?: boolean;
  items: items[];
};

export type items = {
  icon: any;
  label: string;
  count?: number | undefined;
  active?: boolean;
};
