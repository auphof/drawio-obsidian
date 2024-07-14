import Plugin from "./Plugin";

/**
 * This is the entry point that is loaded into the iframe.
 * It configures global variables and patches the DOM to intercept requests
 *
 * This file is built as an entry point and then the output is included in
 * the obsidian plugin code as a string so it can be injected into the iframe.
 **/
import { mxIsElectron } from './electronUtils';
import { electron } from './electronUtils';

declare global {
    interface Window {
        mxIsElectron: () => boolean;
        electron: () => boolean; 
    }
}

window.mxIsElectron = mxIsElectron;
window.electron = electron;

function app() {
  Menus.prototype.defaultMenuItems = Menus.prototype.defaultMenuItems.filter(
    (menuItem: string) => menuItem !== "help"
  );
  App.main(Plugin.plugin);
}

app();
