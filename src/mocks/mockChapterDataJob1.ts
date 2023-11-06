import { type TChapter } from '~/models/bible-data.models'

export const mockChapterDataJob1 = [
	{
		type: 'chapterTitle',
		content: 'Iov 3',
	},
	{
		type: 'sectionTitle',
		content: 'Plângerea lui Iov',
	},
	{
		type: 'body',
		content: [
			{
				type: 'verse',
				verseNumber: 1,
				content: [
					{
						type: 'text',
						content:
							'După aceea, Iov a deschis gura și a blestemat ziua în care s-a născut.',
					},
				],
			},
		],
	},
	{
		type: 'body',
		content: [
			{
				type: 'verse',
				verseNumber: 2,
				content: [
					{
						type: 'text',
						content: 'A luat cuvântul și a zis:',
					},
				],
			},
		],
	},
	{
		type: 'quote',
		verseNumber: 3,
		content: '„Blestemate să fie ziua în care m-am născut',
	},
	{
		type: 'quote',
		content:
			'și noaptea care a zis: ‘S-a zămislit un copil de parte bărbătească!’',
	},
	{
		type: 'quote',
		verseNumber: 4,
		content: 'Prefacă-se în întuneric ziua aceea,',
	},
	{
		type: 'quote',
		content: 'să nu Se îngrijească Dumnezeu de ea din cer',
	},
	{
		type: 'quote',
		content: 'și să nu mai strălucească lumina peste ea!',
	},
	{
		type: 'quote',
		verseNumber: 5,
		content: 'S-o cuprindă întunericul și umbra morții,',
	},
	{
		type: 'quote',
		content: 'nori groși să vină peste ea',
	},
	{
		type: 'quote',
		content: 'și neguri de peste zi s-o înspăimânte!',
	},
	{
		type: 'quote',
		verseNumber: 6,
		content: 'Noaptea aceea! S-o acopere întunericul,',
	},
	{
		type: 'quote',
		content: 'să piară din an,',
	},
	{
		type: 'quote',
		content: 'să nu mai fie numărată între luni!',
	},
	{
		type: 'quote',
		verseNumber: 7,
		content: 'Da, stearpă să fie noaptea aceea, ducă-se veselia din ea!',
	},
	{
		type: 'quote',
		verseNumber: 8,
		content: 'Blestemată să fie de cei ce blestemă zilele,',
	},
	{
		type: 'quote',
		content: 'de cei ce știu să întărâte leviatanul;',
	},
	{
		type: 'quote',
		verseNumber: 9,
		content: 'să se întunece stelele din amurgul ei,',
	},
	{
		type: 'quote',
		content: 'în zadar să aștepte lumina',
	},
	{
		type: 'quote',
		content: 'și să nu mai vadă genele zorilor zilei!',
	},
	{
		type: 'quote',
		verseNumber: 10,
		content: 'Căci n-a închis pântecele care m-a zămislit,',
	},
	{
		type: 'quote',
		content: 'nici n-a ascuns suferința dinaintea ochilor mei.',
	},
	{
		type: 'quote',
		verseNumber: 11,
		content: 'De ce n-am murit în pântecele mamei mele?',
	},
	{
		type: 'quote',
		content: 'De ce nu mi-am dat sufletul la ieșirea din pântecele ei?',
	},
	{
		type: 'quote',
		verseNumber: 12,
		content: 'De ce am găsit genunchi care să mă primească?',
	},
	{
		type: 'quote',
		content: 'Și țâțe care să-mi dea lapte?',
	},
	{
		type: 'quote',
		verseNumber: 13,
		content: 'Acum aș fi culcat, aș fi liniștit,',
	},
	{
		type: 'quote',
		content: 'aș dormi și m-aș odihni',
	},
	{
		type: 'quote',
		verseNumber: 14,
		content: 'cu împărații și cei mari de pe pământ,',
	},
	{
		type: 'quote',
		content: 'care și-au zidit falnice morminte,',
	},
	{
		type: 'quote',
		verseNumber: 15,
		content: 'cu domnitorii care aveau aur',
	},
	{
		type: 'quote',
		content: 'și și-au umplut casele cu argint.',
	},
	{
		type: 'quote',
		verseNumber: 16,
		content: 'Sau n-aș mai fi în viață,',
	},
	{
		type: 'quote',
		content: 'aș fi ca o stârpitură îngropată,',
	},
	{
		type: 'quote',
		content: 'ca niște copii care n-au văzut lumina!',
	},
	{
		type: 'quote',
		verseNumber: 17,
		content: 'Acolo nu te mai necăjesc cei răi,',
	},
	{
		type: 'quote',
		content: 'acolo se odihnesc cei sleiți de puteri.',
	},
	{
		type: 'quote',
		verseNumber: 18,
		content: 'Acolo cei puși în lanțuri sunt lăsați toți în pace,',
	},
	{
		type: 'quote',
		content: 'nu mai aud glasul asupritorului;',
	},
	{
		type: 'quote',
		verseNumber: 19,
		content: 'cel mai mic și cel mare sunt tot una acolo,',
	},
	{
		type: 'quote',
		content: 'și robul scapă de stăpânul său.',
	},
	{
		type: 'quote',
		verseNumber: 20,
		content: 'Pentru ce dă Dumnezeu lumină celui ce suferă',
	},
	{
		type: 'quote',
		content: 'și viață celor amărâți la suflet,',
	},
	{
		type: 'quote',
		verseNumber: 21,
		content: 'care așteaptă moartea, și nu vine,',
	},
	{
		type: 'quote',
		content: 'măcar că o doresc mai mult decât o comoară,',
	},
	{
		type: 'quote',
		verseNumber: 22,
		content: 'care n-ar mai putea de bucurie',
	},
	{
		type: 'quote',
		content: 'și de veselie dacă ar găsi mormântul?',
	},
	{
		type: 'quote',
		verseNumber: 23,
		content:
			'Pentru ce, zic, dă El lumină omului care nu știe încotro să meargă,',
	},
	{
		type: 'quote',
		content: 'pe care îl îngrădește Dumnezeu din toate părțile?',
	},
	{
		type: 'quote',
		verseNumber: 24,
		content: 'Suspinele îmi sunt hrana de toate zilele',
	},
	{
		type: 'quote',
		content: 'și jalea mi se varsă ca apa.',
	},
	{
		type: 'quote',
		verseNumber: 25,
		content: 'De ce mă tem, aceea mi se întâmplă;',
	},
	{
		type: 'quote',
		content: 'de ce mi-e frică, de aceea am parte!',
	},
	{
		type: 'quote',
		verseNumber: 26,
		content: 'N-am nici liniște, nici pace, nici odihnă,',
	},
	{
		type: 'quote',
		content: 'și necazul dă peste mine.”',
	},
] as TChapter
