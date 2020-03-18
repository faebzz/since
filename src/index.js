import { validLocale, locale } from './locale/index'
const since = (from, lang) => {
	if(from > Date.now()) {
		return false;
	}
	if(validLocale.indexOf(lang) < 0 ) {
		lang = 'en';
	}
	const seconds = Date.now() - from;
	
	if(seconds < 60)
		return locale[lang].justNow;
	if(seconds > 60 && seconds < 120)
		return locale[lang].minuteAgo;
}

export default since;