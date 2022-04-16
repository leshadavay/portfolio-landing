export type IconNameType = string;

export type IconType = {
  iconName: IconNameType;
};

export interface ServiceType extends IconType {
  title: string;
  about: string;
}
