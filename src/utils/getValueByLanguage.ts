import { languageVars } from "./language";

export const getValueByLanguage = (key: string, lang?: string, ): string => {
    return lang ? languageVars[lang][key] : languageVars["eng"][key];
}
