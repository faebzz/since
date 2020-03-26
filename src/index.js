import { validLocale, locale } from './locale/index'
import defaultOptions from './options';

const since = (from, lang, options) => {
	if(typeof options == 'undefined') {
		options=defaultOptions;
	} else {
		options = { ...defaultOptions, options };
	}
	if(typeof from != 'number') {
		from = from.getTime() || 0;
	}
	if(from > Date.now()) {
		return '';
	}
	if(validLocale.indexOf(lang) < 0 ) {
		lang = 'en';
	}


	const nowDay = Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
	const now = Date.now();
	const nowDate = new Date(nowDay);
	const fromDay = Date.UTC(new Date(from).getFullYear(), new Date(from).getMonth(), new Date(from).getDate());
	const fromDate = new Date(from);
	const fromDay = Date.UTC(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
	const nowDay = Date.UTC(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());
	const fromDayDate = new Date(fromDay);
	const nowDayDate = new Date(nowDay);
	const secondsDay = (nowDay/1000) - (fromDay/1000);
	const diffDays = Math.ceil(secondsDay / (3600 * 24));
	const isSameYear =  nowDayDate.getFullYear() == fromDayDate.getFullYear();
	const isSameMonth =  nowDayDate.getMonth() == fromDayDate.getMonth() && isSameYear;
	const isSameDay =  nowDayDate.getDate() == fromDayDate.getDate() && isSameMonth && isSameYear;

	if(seconds < 60 && isSameDay && !options.skipToFullDay)
		return locale[lang].justNow;
	if(seconds > 60 && seconds < 120 && isSameDay && !options.skipToFullDay)
		return locale[lang].minuteAgo;
	if(seconds > 120 && seconds < 3600 && isSameDay && !options.skipToFullDay)
		return getText(seconds, lang, 'm');
	if(seconds > 3600 && seconds < 7200 && isSameDay && !options.skipToFullDay)
		return locale[lang].hourAgo;
	if(seconds > 7200 && seconds < 86400 && isSameDay && !options.skipToFullDay)
		return getText(seconds, lang, 'h');
	if(isSameDay && options.skipToFullDay)
		return locale[lang].today;
	if(from >= (nowDay - (1000*60*60*24)) && !isSameDay)
		return  locale[lang].yesterday;
	if(seconds > (2 * 86400) && seconds < (7 * 86400))
		return  getText(secondsDay, lang, 'd');
	if(seconds > (7 * 86400) && seconds < (14 * 86400))
		return locale[lang].lastWeek;
	if(secondsDay > (14 * 86400) && secondsDay < (28 * 86400))
		return getText(secondsDay, lang, 'w');
	if(isSameYear && (nowDayDate.getMonth() - 1) === fromDayDate.getMonth())
		return locale[lang].lastMonth;
	if(isSameYear && nowDayDate.getMonth() !== fromDayDate.getMonth())
		return getText(seconds, lang, 'M');
	if(nowDayDate.getFullYear() - fromDayDate.getFullYear() == 1)
		return locale[lang].lastYear;
	if(fromDayDate.getFullYear() !== nowDayDate.getFullYear())
		return getText(seconds, lang, 'y');
	return new Date(from);
}

const getText = (seconds, lang, format) => {
	const today = new Date(Date.now());
	const monthDiff = today.getMonth() - new Date(Date.now()-seconds*1000).getMonth();
	const yearDiff = today.getFullYear() - new Date(Date.now()-seconds*1000).getFullYear();
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
