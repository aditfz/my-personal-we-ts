import en_us from './en';
import fa_ir from './fa';

type langType = 'en' | 'fa';
type directionsType = 'ltr' | 'rtl' ;
const lang: langType = localStorage.getItem('lang') === 'fa' ? 'fa' : 'en';

export { lang };
type directionType = {
  fa: directionsType;
  en: directionsType;
};
const direction: directionType = {
  fa: 'rtl',
  en: 'ltr',
};
type getDirectionType = () => directionsType;

const getDirection: getDirectionType = () => {
  return direction[lang];
};
export { getDirection };
const fonts = {
  en: 'Muli',
  fa: 'IRANSans',
};
const getFont = () => {
  return fonts[lang];
};
export { getFont };

const translates = {
  en: en_us,
  fa: fa_ir,
};
const getTranslate = () => {
  return translates[lang];
};
export { getTranslate };

const changeLanguage = (newLang: langType) => {
  if (newLang === lang) {
    return;
  }
  localStorage.setItem('lang', newLang);
  window.location.reload();
};
export { changeLanguage };
