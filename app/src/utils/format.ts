import { default as dayjs } from 'dayjs'
import ja from 'dayjs/locale/ja'
import customParseFormat from 'dayjs/plugin/customParseFormat'
// var advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.locale(ja)
dayjs.extend(customParseFormat)


export const formatDate = (date: number) => dayjs(date, 'X').format('YYYY年 MM月 D日 HH:mm')

export const formatGender = (data:number) => {
	switch (data) {
		case 1:
			return '男性'
		case 2:
			return '女性'
		default:
			return 'その他'
	}
}


export const formatPrefecture = (data:number) => {
	switch (data) {
		case 1:
			return '北海道'
		case 47:
			return '沖縄'
		default:
			return '海外'
	}
}
