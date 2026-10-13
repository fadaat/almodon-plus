(function(){
const A='https://assets.almodon.com/styles/';
const H=[A+'large_855x485/public/2026-10/image-1790926318.jpg.webp?itok=-OteMv8U',A+'medium_340x195/public/2026-10/image-1790930240.jpeg.webp?itok=W1oQjn2E',A+'medium_340x195/public/2026-10/image-1790881524.jpg.webp?itok=wKRKvDlf',A+'large_570x325/public/2026-10/image-1790935596.jpg.webp?itok=t6UfoQKg',A+'large_465x265/public/2026-10/image-1790932161.jpg.webp?itok=2gpmuGrO',A+'large_465x265/public/2026-09/image-1790266753.jpg.webp?itok=RGujBUmw',A+'medium_340x195/public/2026-10/image-1790878431.webp?h=e5aec6c8&itok=wDOsNgF9',A+'large_465x265/public/2026-10/image-1790856969.jpg.webp?itok=KchNKGLj',A+'medium_340x195/public/2026-10/image-1790874352.png.webp?itok=CXqkrJZ_',A+'medium_340x195/public/7777C89F-0F45-4325-BAE8-955D5E5D5AE0.jpg.webp?itok=iT9kbTP8'];
const V=['2026-09/image-1790246016.png.webp?itok=a9oYdlSM','2026-09/image-1790170921.png.webp?itok=rYKR5Prf','2026-09/image-1790085654.png.webp?itok=ACcVLioi','2026-09/image-1789739431.png.webp?itok=Ug8b9a5K','2026-09/image-1789654054.png.webp?itok=H-PaJ7Q1','2026-09/image-1789558127.png.webp?itok=m0cRaRrq','2026-09/image-1789115287.png.webp?itok=u2SuLWVp','2026-09/image-1788876330.png.webp?itok=yc-wS_8z'].map(s=>A+'medium_234x416/public/'+s);
const __R=window.__resources||{};H.forEach((u,i)=>{if(__R['h'+i])H[i]=__R['h'+i];});V.forEach((u,i)=>{if(__R['v'+i])V[i]=__R['v'+i];});
const shows=[
 {id:'daily',name:'نشرة المدن',type:'نشرة يومية',host:'فريق المدن',schedule:'يومياً · 18:00 بيروت',eps:212,img:H[0],desc:'أبرز أخبار لبنان والمنطقة في أقل من دقيقتين.'},
 {id:'face',name:'وجهًا لوجه',type:'حوار',host:'شيرين موسى وشربل عبود',schedule:'كل خميس · 20:00',eps:64,img:H[3],desc:'حوارات معمّقة مع صنّاع القرار والمحللين حول الملفات الشائكة.'},
 {id:'stories',name:'وجوه وحكايا',type:'تقارير',host:'فريق المدن',schedule:'كل ثلاثاء',eps:41,img:H[4],desc:'حكايات أشخاص وأمكنة من لبنان بعيداً عن السياسة.'},
 {id:'docs',name:'وثائقيات',type:'وثائقي',host:'المدن',schedule:'شهرياً',eps:12,img:H[5],desc:'أفلام وثائقية قصيرة عن التاريخ والذاكرة.'},
 {id:'opinion',name:'شو رأيك؟',type:'استطلاع',host:'فريق المدن',schedule:'كل اثنين',eps:58,img:H[9],desc:'الشارع اللبناني يجيب عن سؤال الأسبوع.'},
 {id:'podcast',name:'بودكاست المدن',type:'بودكاست',host:'المدن',schedule:'كل أحد',eps:27,img:H[7],desc:'نقاشات صوتية مصوّرة في الثقافة والمجتمع.'}
];
const upcoming=[
 {id:'between',name:'بين سطرين',type:'تحليل',host:'منير الربيع',premiere:'يبدأ 15 تشرين الأول',img:H[1],desc:'قراءة أسبوعية لما وراء العناوين السياسية.'},
 {id:'south',name:'خارطة الجنوب',type:'سلسلة وثائقية',host:'فريق المدن',premiere:'يبدأ 1 تشرين الثاني',img:H[6],desc:'ست حلقات من قرى الجنوب بعد الحرب.'}
];
const episodes=[
 {title:'حسن قبلان: "ما بدهم.. لا جيش ولا مقاومة!"',show:'وجهًا لوجه',dur:'37:32',kind:'حلقة كاملة',img:H[3],age:'منذ يومين',p:0.62},
 {title:'تسوية اللحظة الأخيرة هل تنقذ المفتي دريان؟',show:'نشرة المدن',dur:'01:49',kind:'مقطع',img:H[1],age:'منذ 3 ساعات',p:0},
 {title:'الطائفة 18 في لبنان: تعرفوا إليها!',show:'وجوه وحكايا',dur:'06:37',kind:'حلقة كاملة',img:H[4],age:'أمس',p:0.3},
 {title:'من يحكم إسرائيل القادمة؟',show:'وجهًا لوجه',dur:'22:23',kind:'حلقة كاملة',img:H[8],age:'منذ 4 أيام',p:0},
 {title:'هل يصبح اللبناني أقلية في وطنه؟',show:'نشرة المدن',dur:'01:44',kind:'مقطع',img:H[2],age:'أمس',p:0.85},
 {title:'ريما كرامي: الامتحانات ضرورة وخطة خاصة للجنوب',show:'وجهًا لوجه',dur:'35:50',kind:'حلقة كاملة',img:H[6],age:'منذ أسبوع',p:0},
 {title:'حلم الطفلة الذي صار مغارة',show:'وجوه وحكايا',dur:'02:40',kind:'أبرز اللقطات',img:H[5],age:'منذ 5 أيام',p:0},
 {title:'المسرح في الحرب والسلم',show:'وجوه وحكايا',dur:'06:59',kind:'حلقة كاملة',img:H[9],age:'منذ أسبوع',p:0},
 {title:'الحلقة المقبلة: ريما خشيش ضيفة وجوه وحكايا',show:'وجوه وحكايا',dur:'00:45',kind:'إعلان ترويجي',img:H[7],age:'اليوم',p:0},
 {title:'شو رأيك؟ سؤال الأسبوع عن الكهرباء',show:'شو رأيك؟',dur:'00:30',kind:'فاصل',img:H[0],age:'أمس',p:0}
];
const VIEWS=['12 ألف','8.4 ألف','21 ألف','15 ألف','6.2 ألف','9.8 ألف','4.1 ألف','11 ألف','3.3 ألف','5.6 ألف'];
const DATES=['30 أيلول 2026','2 تشرين الأول 2026','1 تشرين الأول 2026','28 أيلول 2026','1 تشرين الأول 2026','25 أيلول 2026','27 أيلول 2026','24 أيلول 2026','2 تشرين الأول 2026','1 تشرين الأول 2026'];
episodes.forEach((e,i)=>{e.views=VIEWS[i%10];e.date=DATES[i%10];e.ep=e.kind==='حلقة كاملة'?'الحلقة '+(64-i):'';e.meta=e.date+' · '+e.views+' مشاهدة'+(e.ep?' · '+e.ep:'');});
const shorts=[
 {title:'لبنان تحت الفصل السابع؟ ماذا يعني ذلك؟',dur:'02:32',img:V[0],views:'48 ألف'},
 {title:'د عزمي بشارة ومسألة الهوية',dur:'03:44',img:V[1],views:'31 ألف'},
 {title:'أين ستبدأ الحرب مع روسيا؟',dur:'07:57',img:V[2],views:'92 ألف'},
 {title:'ماذا يُحضّر للجنوب؟',dur:'01:42',img:V[3],views:'27 ألف'},
 {title:'كنت أرى وأستهدف الأطفال والعائلات',dur:'02:16',img:V[4],views:'110 ألف'},
 {title:'الأميرة التي ولدت في البحر وماتت غرقاً',dur:'03:22',img:V[5],views:'64 ألف'},
 {title:'ليبيا: أخطر ساحة مواجهة بين موسكو وكييف!',dur:'07:22',img:V[6],views:'19 ألف'},
 {title:'حين تكلّم الجنوب بالشِّعر',dur:'03:15',img:V[7],views:'22 ألف'}
];
shorts.forEach((s,i)=>{s.show=['من المدن','وجهًا لوجه','نشرة المدن','وجوه وحكايا'][i%4];s.meta=s.views+' مشاهدة · '+s.show;});
shows.forEach(x=>{x.badge='حلقة جديدة';x.badgeBg='#F7C600';x.badgeFg='#071C3D';x.epsLabel=x.eps+' حلقة';});
const soon=upcoming.map(u=>({...u,soon:true,eps:0,epsLabel:'قريباً',schedule:u.premiere,badge:'قريباً',badgeBg:'#3F97CF',badgeFg:'#fff'}));
shows.splice(3,0,soon[0]);shows.splice(6,0,soon[1]);
window.PLUS_DATA={H,V,shows,upcoming,episodes,shorts,
 nav:['الرئيسية','سياسة','اقتصاد','عرب و عالم','محطات','رأي','ثقافة','ميديا','فيديو','إنفوغراف'],
 logo:'https://www.almodon.com/assets/images/logo.svg',plusLogo:'assets/plus-logo.png'};
})();
