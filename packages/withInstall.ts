import { App } from "vue/dist/vue";

type EventShim = {
  new(...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void;
    };
  };
};

export type Index<T> = T & {
  install(app: App): void;
} & EventShim;

const camelizeRE = /-(\w)/g;

export function withInstall<T>(options: T) {
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options as unknown as { name: string };
    //@ts-ignore
    app.component(`-${name}`.replace(camelizeRE, (_, c) => c.toUpperCase()), options);
  };
  return options as Index<T>;
}
