import { validLocale, locale } from './locale/index'
const since = (from, lang) => {
	if(from > Date.now()) {
		return '';
	}
	if(validLocale.indexOf(lang) < 0 ) {
		lang = 'en';
	}
	const now = Date.now();
	const seconds = now - from;
	const fromDate = new Date(from);
	const nowDate = new Date(now);
	
	if(seconds < 60)
		return locale[lang].justNow;
	if(seconds > 60 && seconds < 120)
		return locale[lang].minuteAgo;
	if(seconds > 120 && seconds < 3600)
		return getText(seconds, lang, 'm');
	if(seconds > 3600 && seconds < 7200)
		return locale[lang].hourAgo;
	if(seconds > 7200 && seconds < 86400)
		return getText(seconds, lang, 'h');
	if(seconds > 86400 && seconds < (2 * 86400))
		return  locale[lang].yesterday;
	if(seconds > (2 * 86400) && seconds < (7 * 86400))
		return  getText(seconds, lang, 'd');
	if(seconds > (7 * 86400) && seconds < (14 * 86400))
		return locale[lang].lastWeek;
	if(seconds > (14 * 86400) && seconds < (28 * 86400))
		return getText(seconds, lang, 'w');
	if(fromDate.getFullYear() == nowDate.getFullYear() && (nowDate.getMonth() - 1) === fromDate.getMonth())
		return locale[lang].lastMonth;
	if(fromDate.getFullYear() == nowDate.getFullYear() && nowDate.getMonth() !== fromDate.getMonth())
		return getText(seconds, lang, 'M');
	if(nowDate.getFullYear() - from.getFullYear() == 1)
		return locale[lang].lastYear;
	if(fromDate.getFullYear() !== nowDate.getFullYear())
		return getText(seconds, lang, 'y');
	return from;
}

const getText = (seconds, lang, format) => {
	const today = new Date(Date.now());
	const monthDiff = today.getMonth() - new Date(Date.now()-seconds).getMonth();
	const yearDiff = today.getFullYear() - new Date(Date.now()-seconds).getFullYear();
	if (format === 'm')
		return locale[lang].minutesAgo.replace('$', getNumber((seconds / 60).toFixed(0), lang));
	if (format === 'h')
		return locale[lang].hoursAgo.replace('$', getNumber((seconds / 60 / 60).toFixed(0), lang));
	if (format === 'd')
		return locale[lang].daysAgo.replace('$', getNumber((seconds / 60 / 60 / 24).toFixed(0), lang));
	if (format === 'w')
		return locale[lang].weeksAgo.replace('$', getNumber((seconds / 60 / 60 / 24 / 7).toFixed(0), lang));
	if (format === 'M')
		return locale[lang].monthsAgo.replace('$', getNumber(monthDiff.toString(), lang));
	if (format === 'y')
		return locale[lang].yearsAgo.replace('$', getNumber(yearDiff.toString(), lang));
}

const getNumber = (number, lang) => {
	switch(number) {
		case '1':
			return locale[lang].one;
		case '2':
			return locale[lang].two;
		case '3':
			return locale[lang].three;
		case '4':
			return locale[lang].four;
		case '5':
			return locale[lang].five;
		case '6':
			return locale[lang].six;
		case '7':
			return locale[lang].seven;
		case '8':
			return locale[lang].eight;
		case '9':
			return locale[lang].nine;
		default:
			return number;
	}
}

export default since;