'use client'

import { useHotkeys } from '@mantine/hooks'
import { useAtomValue, useSetAtom } from 'jotai'
import { useAtom } from 'jotai/index'
import { useRouter } from 'next/navigation'

import {
	fontSizeOffsetAtom,
	fontSizeOffsetDefaultValue,
	forceShowTopToolbarAtom,
	isFirstChapterAtom,
	isLastChapterAtom,
	nextChapterURLAtom,
	prevChapterURLAtom,
	type TFontSizeOffset,
} from '~/state'

export const UseReaderHotKeys = () => {
	const [forceShowTopToolbar, setForceShowTopToolbar] = useAtom(
		forceShowTopToolbarAtom,
	)

	const disableNextScroll = () => {
		setForceShowTopToolbar(true)
		const scrollHandler = () => {
			setTimeout(() => setForceShowTopToolbar(false), 0)
		}
		window.addEventListener('scroll', scrollHandler, { once: true })
	}

	const setFontSizeOffset = useSetAtom(fontSizeOffsetAtom)

	const decreaseFontSize = () => {
		disableNextScroll()
		setFontSizeOffset((prev) => {
			const newValue = prev - 1
			return newValue >= -2 ? (newValue as TFontSizeOffset) : prev
		})
	}

	const increaseFontSize = () => {
		disableNextScroll()
		setFontSizeOffset((prev) => {
			const newValue = prev + 1
			return newValue < 8 ? (newValue as TFontSizeOffset) : prev
		})
	}

	const resetFontSize = () => setFontSizeOffset(fontSizeOffsetDefaultValue)

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
		['ArrowLeft', goToPrevChapter],
		['ArrowRight', goToNextChapter],
	])

	return null
}
