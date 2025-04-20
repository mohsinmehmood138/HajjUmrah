export type DuaItem = {
  id: number;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  description: string;
  additionalInfo: string;
};
export const DUA_DATA: DuaItem[] = [
  {
    id: 1,
    title: 'Dua for drinking Zamzam',
    arabic: 'اللهم إني أسألك علماً نافعاً، ورزقاً طيباً، وعملاً متقبلاً',
    transliteration:
      "Allahumma inni as'aluka ilman naafi'an, wa rizqan tayyiban, wa 'amalan mutaqabbalan.",
    translation:
      '"O Allah, I ask You for beneficial knowledge, pure sustenance, and accepted deeds."',
    description: 'Seeking Purity and Blessings',
    additionalInfo:
      'Drinking Zamzam water with a sincere intention allows believers to seek spiritual elevation, knowledge, and physical well-being, as it is known for its healing properties.',
  },
  {
    id: 2,
    title: 'During tawaf',
    arabic: 'اللهم اجعل هذا البيت آمناً مطمئناً وسائر بلاد المسلمين',
    transliteration:
      "Allahumma aj'al hadha al-bayta aamanan mutma'innan wa saair bilaadil-muslimeen.",
    translation:
      '"O Allah, make this House a place of security and peace, and grant the same for all Muslim lands."',
    description: 'Prayer for Protection',
    additionalInfo:
      'This dua is often recited while performing Tawaf, asking Allah to maintain the sanctity and security of the Kaaba and grant peace to the entire Muslim Ummah.',
  },
  {
    id: 3,
    title: 'Dua for Repentance',
    arabic: 'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ',
    transliteration: 'Rabbi ighfir li wa tub alayya innaka anta at-tawwab ar-raheem.',
    translation:
      '"My Lord, forgive me and accept my repentance. Indeed, You are the Accepting of Repentance, the Merciful."',
    description: 'Seeking Forgiveness',
    additionalInfo:
      'This powerful supplication allows one to repent sincerely and seek Allah’s mercy, as He is the Most Forgiving and Most Merciful.',
  },
  {
    id: 4,
    title: 'Dua for Anxiety & Stress',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan.",
    translation: '"O Allah, I seek refuge in You from anxiety and grief."',
    description: 'Relief from Worries',
    additionalInfo:
      'This dua is a powerful means of seeking relief from stress, anxiety, and sadness by placing trust in Allah’s wisdom and mercy.',
  },
  {
    id: 5,
    title: 'Dua Before Starting a Journey',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ',
    transliteration: 'Subhanalladhi sakhkhara lana hadha wama kunna lahu muqrineen.',
    translation:
      '"Glory be to the One who has placed this (transport) at our service, and we were not capable of doing so (ourselves)."',
    description: 'Travel Supplication',
    additionalInfo:
      'This supplication is recited before embarking on a journey to seek Allah’s protection and ease during travel.',
  },
  {
    id: 6,
    title: 'Duas for Ramadan & Laylatul Qadr',
    arabic: 'اللهم إنك عفو كريم تحب العفو فاعف عني',
    transliteration: 'Allahumma innaka ‘afuwwun kareemun tuhibbul ‘afwa fa‘fu ‘anni.',
    translation: '"O Allah, You are Most Forgiving, Generous, and love to forgive, so forgive me."',
    description: 'Prayer for Forgiveness in Ramadan',
    additionalInfo:
      'This dua is highly recommended during the last ten nights of Ramadan, especially on Laylatul Qadr, as a means to seek Allah’s pardon and mercy.',
  },
  {
    id: 7,
    title: 'Duas for Stoning (Ramy al-Jamarat)',
    arabic: 'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar, Allahu Akbar, Allahu Akbar.',
    translation: '"Allah is the Greatest, Allah is the Greatest, Allah is the Greatest."',
    description: 'Supplication during Stoning',
    additionalInfo:
      'This is recited while performing Ramy al-Jamarat during Hajj, symbolizing rejection of evil and submission to Allah.',
  },
  {
    id: 8,
    title: 'Seeking Forgiveness (Istighfar)',
    arabic: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
    transliteration: 'Astaghfirullaha wa atubu ilayh.',
    translation: '"I seek forgiveness from Allah and turn to Him in repentance."',
    description: 'Continuous Repentance',
    additionalInfo:
      'This simple but powerful dua should be recited frequently, as seeking forgiveness brings peace and closeness to Allah.',
  },
  {
    id: 9,
    title: "Dua for Allah's Mercy & Guidance",
    arabic: 'رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ',
    transliteration: 'Rabbi inni lima anzalta ilayya min khayrin faqir.',
    translation: '"My Lord, indeed I am in need of whatever good You bestow upon me."',
    description: 'Seeking Allah’s Mercy',
    additionalInfo:
      'This dua was recited by Prophet Musa (AS) when he was in need, teaching us to turn to Allah in moments of distress.',
  },
  {
    id: 10,
    title: 'Dua for Safety While Traveling',
    arabic: 'اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى',
    transliteration: "Allahumma inna nas'aluka fi safarina hadha al-birra wat-taqwa.",
    translation: '"O Allah, we ask You for righteousness and piety in this journey."',
    description: 'Travel Protection Prayer',
    additionalInfo:
      'This dua is recited before travel, asking for safety, protection, and a blessed journey.',
  },
  {
    id: 11,
    title: 'Dua for Halal Provision & Wealth',
    arabic: 'اللهم ارزقني رزقاً حلالاً طيباً',
    transliteration: 'Allahumma urzuqni rizqan halalan tayyiban.',
    translation: '"O Allah, grant me lawful and pure sustenance."',
    description: 'Supplication for Sustenance',
    additionalInfo:
      'Reciting this dua consistently can bring blessings and increase in halal provisions by the will of Allah.',
  },
];

export const UMRAH_CHECKLIST_DATA = [
  {
    id: 1,
    label: 'Travel & Packing Essentials',
    showValue: false,
    items: [
      {
        id: 'pack-1',
        text: 'Valid Passport and Visa',
        description: 'Ensure all travel documents are in order',
        selected: false,
      },
      {
        id: 'pack-2',
        text: 'Flight Tickets & Accommodation',
        description: 'Confirm all bookings for Makkah and Madinah',
        selected: false,
      },
      {
        id: 'pack-3',
        text: 'Ihram Clothing',
        description: 'Two white sheets for men, modest attire for women',
        selected: false,
      },
      {
        id: 'pack-4',
        text: 'Comfortable Footwear',
        description: 'Slip-on sandals for easy walking & wudu',
        selected: false,
      },
      {
        id: 'pack-5',
        text: 'Personal Identification',
        description: 'ID card, emergency contacts, & travel insurance',
        selected: false,
      },
      {
        id: 'pack-6',
        text: 'Essential Medications',
        description: 'First aid, pain relievers, and any prescribed meds',
        selected: false,
      },
      {
        id: 'pack-7',
        text: 'Portable Prayer Mat & Pocket Quran',
        description: 'For ease of worship and spiritual focus',
        selected: false,
      },
      {
        id: 'pack-8',
        text: 'Power Bank & Travel Adapter',
        description: 'Keep devices charged',
        selected: false,
      },
    ],
  },
  {
    id: 2,
    label: 'Spiritual Preparation',
    showValue: false,
    items: [
      {
        id: 'spirit-1',
        text: 'Sincere Intention (Niyyah)',
        description: 'Purify your intention for Umrah',
        selected: false,
      },
      {
        id: 'spirit-2',
        text: 'Learn Umrah Rituals',
        description: 'Study the steps of Umrah and their significance',
        selected: false,
      },
      {
        id: 'spirit-3',
        text: 'Repent & Seek Forgiveness',
        description: 'Mend relationships and seek Allah’s mercy',
        selected: false,
      },
      {
        id: 'spirit-4',
        text: 'Increase Worship & Duas',
        description: 'Prepare a list of supplications for Tawaf and Sa’i',
        selected: false,
      },
    ],
  },
  {
    id: 3,
    label: 'Financial Preparations',
    showValue: false,
    items: [
      {
        id: 'finance-1',
        text: 'Sufficient Funds',
        description: 'Carry enough cash or a travel card',
        selected: false,
      },
      {
        id: 'finance-2',
        text: 'Currency Exchange',
        description: 'Convert money to Saudi Riyals (SAR)',
        selected: false,
      },
      {
        id: 'finance-3',
        text: 'Charity & Zakat',
        description: 'Fulfill your obligatory and voluntary charity',
        selected: false,
      },
    ],
  },
  {
    id: 4,
    label: 'Mental & Emotional Readiness',
    showValue: false,
    items: [
      {
        id: 'mental-1',
        text: 'Practice Patience',
        description: 'Expect long walks, heat, and crowds',
        selected: false,
      },
      {
        id: 'mental-2',
        text: 'Develop a Positive Mindset',
        description: 'Focus on the spiritual rewards of Umrah',
        selected: false,
      },
      {
        id: 'mental-3',
        text: 'Prepare for Physical Endurance',
        description: 'Exercise regularly to build stamina for rituals',
        selected: false,
      },
    ],
  },
];
