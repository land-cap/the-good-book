'use client'

import { useHotkeys } from '@mantine/hooks'
import { useAtomValue, useSetAtom } from 'jotai'
import { useRouter } from 'next/navigation'

import {
	fontSizeOffsetAtom,
	fontSizeOffsetDefaultValue,
	isFirstChapterAtom,
	isLastChapterAtom,
	leadingAtom,
	leadingDefaultValue,
	nextChapterURLAtom,
	prevChapterURLAtom,
	type TFontSizeOffset,
	type TLeading,
} from '~/state'

export const UseReaderHotKeys = () => {
	const setFontSizeOffset = useSetAtom(fontSizeOffsetAtom)

	const decreaseFontSize = () =>
		setFontSizeOffset((prev) => {
			const newValue = prev - 1
			return newValue >= -3 ? (newValue as TFontSizeOffset) : prev
		})

	const increaseFontSize = () =>
		setFontSizeOffset((prev) => {
			const newValue = prev + 1
			return newValue < 8 ? (newValue as TFontSizeOffset) : prev
		})

	const resetFontSize = () => setFontSizeOffset(fontSizeOffsetDefaultValue)

	const setLeading = useSetAtom(leadingAtom)

	const decreaseLeading = () => {
		setLeading((prev) => {
			const newValue = prev - 0.25
			return newValue >= 1.25 ? (newValue as TLeading) : prev
		})
	}

	const increaseLeading = () =>
		setLeading((prev) => {
			const newValue = prev + 0.25
			return newValue <= 3 ? (newValue as TLeading) : prev
		})

	const resetLeading = () => setLeading(leadingDefaultValue)

	const router = useRouter()

	const prevChapterURL = useAtomValue(prevChapterURLAtom)
	const isFirstChapter = useAtomValue(isFirstChapterAtom)
	const goToPrevChapter = () => !isFirstChapter && router.push(prevChapterURL)

	const nextChapterURL = useAtomValue(nextChapterURLAtom)
	const isLastChapter = useAtomValue(isLastChapterAtom)
	const goToNextChapter = () => !isLastChapter && router.push(nextChapterURL)

	useHotkeys([
		['mod+-', decreaseFontSize],
		['mod+=', increaseFontSize],
		['mod+0', resetFontSize],
		['shift+mod+-', decreaseLeading],
		['shift+mod+=', increaseLeading],
		['shift+mod+0', resetLeading],
		['ArrowLeft', goToPrevChapter],
		['ArrowRight', goToNextChapter],
	])

	return null
}
