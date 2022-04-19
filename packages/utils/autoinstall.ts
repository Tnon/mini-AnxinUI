import type { App, Plugin } from "vue";
export type SFC_Plugin<T> = T & Plugin;
export const AutoInstall = <T>(component: T) => {
  (component as SFC_Plugin<T>).install = (app: App) => {
    app.component((component as any).name, component);
  };
  return component as SFC_Plugin<T>;
};
