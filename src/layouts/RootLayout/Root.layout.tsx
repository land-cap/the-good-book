import { cookies } from 'next/headers'
import { type ReactNode } from 'react'
import { cx } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { SafeAreaBottom } from '~/components'
import {
	fontClean,
	fontCondensed,
	fontDyslexic,
	fontMono,
	fontOldStyle,
	fontSans,
} from '~/layouts/RootLayout/fonts'
import { SetUpPersistedState } from '~/organisms'
import {
	ENABLE_NON_ORIGINAL_TEXT_COOKIE,
	ENABLE_RED_LETTERS_COOKIE,
	ENABLE_VERSE_DETAILS_COOKIE,
	enableNonOriginalTextDefaultValue,
	enableRedLettersDefaultValue,
	enableVerseDetailsDefaultValue,
	FONT_COOKIE,
	FONT_SIZE_OFFSET_COOKIE,
	fontDefaultValue,
	fontSizeOffsetDefaultValue,
	JUSTIFY_TEXT_COOKIE,
	justifyTextDefaultValue,
	LEADING_COOKIE,
	leadingDefaultValue,
	type TFont,
	type TFontSizeOffset,
	type THEME,
	THEME_COOKIE,
	themeDefaultValue,
	type TLeading,
	VERSE_BREAKS_LINE_COOKIE,
	verseBreaksLineDefaultValue,
} from '~/state'

import { GlobalBackdrop } from './GlobalBackdrop'
import { RootProviders } from './RootProviders'
import { UseLockBodyScroll } from './UseLockBodyScroll'

const getBooleanCookieValue = (
	cookieValue: string | undefined,
	fallback: boolean,
) => (cookieValue ? cookieValue === 'true' : fallback)

export const RootLayout = ({ children }: { children: ReactNode }) => {
	const cookieStore = cookies()

	const savedTheme = cookieStore.get(THEME_COOKIE)?.value ?? themeDefaultValue
	const savedFontSizeOffset =
		cookieStore.get(FONT_SIZE_OFFSET_COOKIE)?.value ??
		fontSizeOffsetDefaultValue
	const savedLeading =
		cookieStore.get(LEADING_COOKIE)?.value ?? leadingDefaultValue
	const savedFont = cookieStore.get(FONT_COOKIE)?.value ?? fontDefaultValue
	const savedVerseBreaksLine = cookieStore.get(VERSE_BREAKS_LINE_COOKIE)?.value
	const savedJustifyText = cookieStore.get(JUSTIFY_TEXT_COOKIE)?.value
	const savedEnableNonOriginalText = cookieStore.get(
		ENABLE_NON_ORIGINAL_TEXT_COOKIE,
	)?.value
	const savedEnableRedLetters = cookieStore.get(ENABLE_RED_LETTERS_COOKIE)
		?.value
	const savedEnableVerseDetailsReferences = cookieStore.get(
		ENABLE_VERSE_DETAILS_COOKIE,
	)?.value

	return (
		<RootProviders>
			<SetUpPersistedState
				savedTheme={savedTheme as THEME}
				savedFontSizeOffset={Number(savedFontSizeOffset) as TFontSizeOffset}
				savedLeading={Number(savedLeading) as TLeading}
				savedFont={savedFont as TFont}
				savedVerseBreaksLine={getBooleanCookieValue(
					savedVerseBreaksLine,
					verseBreaksLineDefaultValue,
				)}
				savedJustifyText={getBooleanCookieValue(
					savedJustifyText,
					justifyTextDefaultValue,
				)}
				savedEnableNonOriginalText={getBooleanCookieValue(
					savedEnableNonOriginalText,
					enableNonOriginalTextDefaultValue,
				)}
				savedEnableRedLetters={getBooleanCookieValue(
					savedEnableRedLetters,
					enableRedLettersDefaultValue,
				)}
				savedEnableVerseDetailsReferences={getBooleanCookieValue(
					savedEnableVerseDetailsReferences,
					enableVerseDetailsDefaultValue,
				)}
			/>
			<UseLockBodyScroll />
			<html
				lang="en"
				className={cx(
					fontSans.variable,
					fontMono.variable,
					fontCondensed.variable,
					fontDyslexic.variable,
					fontOldStyle.variable,
					fontClean.variable,
				)}
			>
				<head>
					<link
						rel="preconnect"
						href="https://dev.visualwebsiteoptimizer.com"
					/>
					<script
						id="vwoCode"
						type="text/javascript"
						dangerouslySetInnerHTML={{
							__html: `
								window._vwo_code || (function() {
								var account_id=961437,
								version=2.1,
								settings_tolerance=2000,
								hide_element='body',
								hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;',
								/* DO NOT EDIT BELOW THIS LINE */
								f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={nonce:v&&v.nonce,use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByName('first-contentful-paint')[0]){return''}return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){if(!f){f=true;var t=d.getElementById('_vis_opt_path_hides');if(t)t.parentNode.removeChild(t);if(e)(new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e}},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript';if(e.src){t.src=e.src}else{t.text=e.text}v&&t.setAttribute('nonce',v.nonce);d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){var n=this.getSettings(),i=d.createElement('script'),r=this;t=t||{};if(n){i.textContent=n;d.getElementsByTagName('head')[0].appendChild(i);if(!w.VWO||VWO.caE){stT.removeItem(cK);r.load(e)}}else{var o=new XMLHttpRequest;o.open('GET',e,true);o.withCredentials=!t.dSC;o.responseType=t.responseType||'text';o.onload=function(){if(t.onloadCb){return t.onloadCb(o,e)}if(o.status===200||o.status===304){w._vwo_code.addScript({text:o.responseText})}else{w._vwo_code.finish('&e=loading_failure:'+e)}};o.onerror=function(){if(t.onerrorCb){return t.onerrorCb(e)}w._vwo_code.finish('&e=loading_failure:'+e)};o.send()}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){w._vwo_code.finish();stT.removeItem(cK)},e);var t;if(this.hide_element()!=='body'){t=d.createElement('style');var n=this.hide_element(),i=n?n+this.hide_element_style():'',r=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');v&&t.setAttribute('nonce',v.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(d.createTextNode(i));r.appendChild(t)}else{t=d.getElementsByTagName('head')[0];var i=d.createElement('div');i.style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;';i.setAttribute('id','_vis_opt_path_hides');i.classList.add('_vis_hide_layer');t.parentNode.insertBefore(i,t.nextSibling)}var o=window._vis_opt_url||d.URL,s='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(o)+'&vn='+version;if(w.location.search.indexOf('_vwo_xhr')!==-1){this.addScript({src:s})}else{this.load(s+'&x=true')}}};w._vwo_code=code;code.init();})();(function(){var i=window;function t(){if(i._vwo_code){var e=t.hidingStyle=document.getElementById('_vis_opt_path_hides')||t.hidingStyle;if(!i._vwo_code.finished()&&!_vwo_code.libExecuted&&(!i.VWO||!VWO.dNR)){if(!document.getElementById('_vis_opt_path_hides')){document.getElementsByTagName('head')[0].appendChild(e)}requestAnimationFrame(t)}}}t()})();
							`,
						}}
					/>
				</head>
				<body
					data-theme={savedTheme}
					className={macrogrid({
						gridTemplateRows: 'min-content 1fr min-content',
						minH: '100dvh',
						overscrollBehavior: 'contain',
						pb: '14',
						fontSize: 'sm',
						color: 'fg',
						background: 'bg.canvas',
						sm: { fontSize: 'md' },
					})}
				>
					{children}
					<SafeAreaBottom css={{ column: 'content' }} />
					<GlobalBackdrop />
				</body>
			</html>
		</RootProviders>
	)
}
