export interface Theme {
  colors: {
    [key: string]: string;
  };
  fontSizes: {
    [key: string]: { [key: string]: number };
  };
}
