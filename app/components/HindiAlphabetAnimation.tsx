"use client"
import React, { useEffect, useState } from "react";

const HindiAlphabetAnimation: React.FC = () => {
  // const hindiAlphabet = [
  //   "अ",
  //   "आ",
  //   "इ",
  //   "ई",
  //   "उ",
  //   "ऊ",
  //   "ऋ",
  //   "ए",
  //   "ऐ",
  //   "ओ",
  //   "औ",
  //   "अं",
  //   "अः",
  //   "क",
  //   "ख",
  //   "ग",
  //   "घ",
  //   "ङ",
  //   "च",
  //   "छ",
  //   "ज",
  //   "झ",
  //   "ञ",
  //   "ट",
  //   "ठ",
  //   "ड",
  //   "ढ",
  //   "ण",
  //   "त",
  //   "थ",
  //   "द",
  //   "ध",
  //   "न",
  //   "प",
  //   "फ",
  //   "ब",
  //   "भ",
  //   "म",
  //   "य",
  //   "र",
  //   "ल",
  //   "व",
  //   "श",
  //   "ष",
  //   "स",
  //   "ह",
  //   "क्ष",
  //   "त्र",
  //   "ज्ञ",
  // ];
  const hindiAlphabet = [
    "निरंतर      непрерывный/постоянный",
    "पुनर्जागरण  мр    возрождение/ренессанс",
    "परिप्रेक्ष्य में      в контексте/в перспективе/относительно",
    "स्तुति  жр    хвала",
    "तोड़ना-मरोड़ना      деформировать/извращать/манипулировать",
    "विश्लेषण  мр    анализ",
    "झंडाबरदार      знаменосец",
    "भलीभांति      прямо/откровенно",
    "भयंकरता  жр    опасность",
    "मुख्यतः      в основном/главным образом",
    "विषैला      токсичный/ядовитый",
    "सर्वश्रेष्ठ      главный/важный",
    "सर्वोच्चता  жр    верховенство/первостепенность/превосходство",
    "गुणगान  мр    прославление в песне",
    "कूट-कूट कर भरना      взрывать",
    "दम्भ  мр    тщеславие/лицемерие",
    "चिंतन  мр    рефлексия/размышление",
    "वर्चित      запрещённый",
    "समारोह  мр    церемония",
    "सुभगली      ",
    "अराजकता  жр    анархия",
    "साक्षी  мр    свидетель/свидетельство",
    "वाध्य      обязанный",
    "व्यर्थ      неудачный/тупиковый/бесполезный",
    "मताधिकार  мр    право голоса",
    "अग्रसर      направляющийся/двигающийся",
    "लहराना      развеваться",
    "ध्येय  мр    объект внимания",
    "क़ाबिल-ए-ग़ौर      достойный внимания",
    "दीन-हीन      жалкий/обездоленный",
    "प्रिवी पर्स  мр    выплаты князьям за княжества в 1947 году",
    "मुहिम  жр    тяжёлая работа; война/сражение",
    "उपज  жр    урожай",
    "सिद्धांत  мр    догма/идеология",
    "परम      основной/абсолютный/предельный",
    "व्यक्तिवाद  мр    индивидуализм",
    "वर्गविहीन      безклассовый",
    "बुज़दिली  жр    слабость/безволие",
    "राष्ट्रद्रोह  мр    государственная измена/предательство",
    "कथन  мр    выражение/утверждение/высказывание",
    "सम्मानप्रद      почётный",
    "बपतिस्मा  мр    крещение",
    "सुन्नत  жр    сунна",
    "तत्पश्चात      потом",
    "श्रद्धा  жр    индусский ритуал в честь умерших",
    "जागतिक      глобальный/мировой",
    "अजेय      непобедимый/неодолимый",
    "भौतिक      материальный/физический",
    "आध्यात्मिक      духовный/платонический",
    "तत्व  мр    часть/источник",
    "बिखरना      излучать",
    "संकल्प  мр    решение/резолюция",
    "युग-युगांतर      много сменяющихся эпох",
    "साम्राज्य  мр    империя",
    "श्याम      Сирия",
    "गर्वोक्ति  жр    хвастовство/гордость",
    "श्रेष्ठता  жр    превосходство/величие",
    "विस्तारवाद  мр    экспансионизм",
    "भांति      как",
    "ध्वस्त      разрушенный/обветшалый",
    "मानस पुत्र      одиннадцать сыновей Брахмы",
    "जड़े मज़बूत करना  жр    быть крепким",
    "भरपूर      обильный/щедрый",
    "सेहरा सिर होना  мр    играть самую важную роль",
    "स्वर्णकाल  мр    расцвет",
    "तथाकथित      так называемый",
    "स्वाधीन      независимый/свободный",
    "सत्ताधारी      правящий",
    "संविद      договорной",
    "बिखराव  мр    рассеяние/разброс",
    "फूट  мр    разобщённость",
    "शिथिल      слабый/вялый/рыхлый",
    "निर्णायक      основной/решающий",
    "दक्षिण-पंथी      правые (в политике)",
    "पतन  мр    упадок/гибель/гниение",
    "अभियान  мр    кампания/экспедиция/миссия",
    "धरपकड़  жр    арест/задержание",
    "आंधी  жр    шторм",
    "प्रशस्त      широкий",
    "ठूंसना      запихивать",
    "पारित      принятый (о законе)",
    "त्यागपत्र  мр    заявление об отставке",
    "हुक़ूमत  жр    правительство/юрисдикция",
    "संस्करण  мр    версия/издание",
    "आशय  мр    намерение/планы",
    "मध्यप्रांत  мр    центральные провинции",
    "उग्र      резкий/радикальный/бурный",
    "राष्ट्रवाद  мр    национализм",
    "निराश-हताश      отчаявшийся/разочарованный",
    "शीघ्र      быстро/скоро",
    "हाथियाना      захватить",
    "दृश्यपट      ",
    "परिणति  жр    следствие/результат",
    "चरम      крайний/чрезвычайный/предельный",
    "उदय  мр    рассвет/рост/восхождение",
    "विलोम      противоположный; неблагоприятный",
    "सहिष्णुता  жр    толерантность/терпимость",
    "सनातनी  мр    древние традиции",
    "पुनरुत्थानवाद      возрождение",
    "(पर) हावी (होना)      доминирующий/овладевший",
    "वर्चस्व  мр    господство",
    "शिविर  мр    лагерь/остановка",
    "प्रशिक्षण  мр    обучение/тренировка",
    "संगठनकर्त्ता      организатор",
    "अपमान  мр    оскорбление/позор/унижение",
    "परास्त      побеждённый",
    "अधिवेशन  мр    встреча/сессия",
    "प्रांगण  мр    двор",
    "व्याख्याता  мр    лектор",
    "कनिष्ठ      младший; ничтожный",
    "सरसंघचालक      лидер РСС",
    "शाखा  жр    ветвь/часть",
    "गुरुदक्षिणा  жр    пожертвование гуру",
    "ध्वज  мр    флаг",
    "भगवा      шафрановый",
    "निक्कर  мр    шорты",
    "उन्नयन  мр    повышение/улучшение",
    "व्यायाम  мр    гимнастика/упражнения",
    "अंतर्गत      под-",
    "उमड़ना-घुमड़ना      сплотиться и распространяться",
    "विजयादशमी      праздник победы Рамы над Раваной",
    "विचारधारा  жр    мышление/философия",
    "फ़िरकापरस्त      коммуналистский",
    "सीना ताने  мр    выпятив грудь",
    "गोमास  мр    говядина",
  ];

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex(
        (prevIndex) => (prevIndex + 1) % hindiAlphabet.length
      );
    }, 1800); // Change letter every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <span style={{ fontSize: "2rem" }}>
        {hindiAlphabet[currentLetterIndex]}
      </span>
    </div>
  );
};

export default HindiAlphabetAnimation;
