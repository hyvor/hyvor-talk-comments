import { h, render} from 'preact'
import App from "./App";
import {componentsDefinitionType} from "./stores/configStore";
// @ts-ignore
import mainStyles from './styles.scss';

class HyvorTalkComments extends HTMLElement {

    private readonly root: HTMLDivElement;

    translations: object | null = null;
    components: componentsDefinitionType = {};

    constructor() {
        super();

        let shadow = this.attachShadow({ mode: 'open' })

        const root = document.createElement("div")
        root.id = 'root';
        shadow.append(root)

        this.addStyle(mainStyles);

        this.root = root;
    }

    addStyle(css: string) {
        const sheet = document.createElement("style");
        sheet.textContent = css
        this.shadowRoot?.append(sheet)
    }

    render() {

        const style = document.createElement("style");
        console.log(this.getAttribute('mode'))
        const bg = this.getAttribute('mode') === 'light' ? 'beige' : 'black';
        style.textContent = `
            :host::part(app) {background-color: ${bg}}

            :host {
                --ht-color-accent: #000000;
                --ht-color-accent-text: #ffffff;
                --ht-color-box: #ffffff;
                --ht-color-box-text: #111111;
                --ht-color-box-text-light: #7b7b7b;
                --ht-color-box-secondary: #fafafa;
                --ht-color-box-secondary-text: #484848;
                --ht-color-background-text: #111111;
                
                --ht-box-shadow: 5px 5px 0px rgba(0,0,0,0.05);
                --ht-box-shadow: 0 0 15px 4px rgba(0,0,0,0.05);
                --ht-box-radius: 10px;
                --ht-box-border: 0px solid transparent;
                --ht-button-radius: 10px;
            }
        `
        this.shadowRoot?.append(style)

        const ssoUser = this.getAttribute('sso-user');
        const ssoHash = this.getAttribute('sso-hash');

        render(<App

            website={{
                id: Number(this.getAttribute('website-id'))
            }}

            page={{
                identifier: this.getAttribute('page-id'),
                url: this.getAttribute('page-url'),
                title: this.getAttribute('page-title'),
                language: this.getAttribute('page-language'),
                author: this.getAttribute('page-author'),
            }}

            sso={
                ssoUser && ssoHash ? {
                    user: ssoUser,
                    hash: ssoHash,
                    login: this.getAttribute('sso-login'),
                    signup: this.getAttribute('sso-signup')
                } : null
            }

            colorMode={this.getAttribute('color-mode')}

            translations={this.translations}
            components={this.components}

            htDomain={this.getAttribute('ht-domain')}

        />, this.root);
    }

    attributeChangedCallback(name: string, oldVal: string, newVal: string) {
        // console.log(name, oldVal, newVal)
    }

    static get observedAttributes() { return ['mode']; }

}


customElements.define('hyvor-talk-comments', HyvorTalkComments)
