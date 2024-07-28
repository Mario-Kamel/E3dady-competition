const questions = [
  {
    questionText: 'من قاد الشعب للخروج من أرض مصر',
    answerOptions: [
      { answerText: 'موسى', isCorrect: true },
      { answerText: 'داود', isCorrect: false },
      { answerText: 'يشوع', isCorrect: false },
      { answerText: 'دانيال', isCorrect: false },
    ],
  },
  {
    questionText: 'من قاد الشعب للدخول لأرض الموعد ',
    answerOptions: [
      { answerText: 'موسى', isCorrect: false },
      { answerText: 'داود', isCorrect: false },
      { answerText: 'يشوع', isCorrect: true },
      { answerText: 'دانيال', isCorrect: false },
    ],
  },
  {
    questionText: 'لماذا وضعت أم موسى الطفل في النيل؟',
    answerOptions: [
      { answerText: 'الطوفان', isCorrect: false },
      { answerText: 'هيرودس يريد قتل الأطفال', isCorrect: false },
      { answerText: 'السبي', isCorrect: false },
      { answerText: 'فرعون يريد قتل الأطفال', isCorrect: true },
    ],
  },
    {
    questionText: 'كم ضربة كانت على شعب مصر قبل الخروج؟',
    answerOptions: [
      { answerText: '11', isCorrect: false },
      { answerText: '10', isCorrect: true },
      { answerText: '40', isCorrect: false },
      { answerText: '42', isCorrect: false },
    ],
  },
  {
    questionText: 'كانت الضربة الأخيرة على شعب مصر هي',
    answerOptions: [
      { answerText: 'الدمامل', isCorrect: false },
      { answerText: 'النيل يصبح دم', isCorrect: false },
      { answerText: 'الأبكار', isCorrect: true },
      { answerText: 'الضفادع', isCorrect: false },
    ],
  },
   {
    questionText: 'أنهي من الضربات دي محصلتش لشعب مصر؟',
    answerOptions: [
      { answerText: 'الظلام', isCorrect: false },
      { answerText: 'البَرَد', isCorrect: false },
      { answerText: 'الجراد', isCorrect: false },
      { answerText: 'حرمان من المؤتمر', isCorrect: true },
    ],
  },
  {
    questionText: 'تاه شعب بني إسرائيل في البرية لمدة',
    answerOptions: [
      { answerText: '10 سنين', isCorrect: false },
      { answerText: '12 سنة', isCorrect: false },
      { answerText: '39 سنة', isCorrect: false },
      { answerText: '40 سنة', isCorrect: true },
    ],
  },
  {
    questionText: 'أرسل الرب لشعب بني إسرائيل مَن و سلوى اللي هما',
    answerOptions: [
      { answerText: 'فاكهة و لحمة', isCorrect: false},
      { answerText: 'فول و عدس', isCorrect: false },
      { answerText: 'خبز و طيور', isCorrect: true },
      { answerText: 'الشاورما اللي أستاذ مينا وعدنا بيها', isCorrect: false },
    ],
  },
  {
    questionText: 'أمر الرب موسى أن يبني هيكل كبير ليضع فيه تابوت العهد ',
    answerOptions: [
      { answerText: 'صح', isCorrect: false },
      { answerText: 'غلط', isCorrect: true },
    ],
  },
  {
    questionText: 'دار يشوع و الشعب بالابواق حول مدينة',
    answerOptions: [
      { answerText: 'أريحا', isCorrect: true },
      { answerText: 'كفرناحوم', isCorrect: false},
      { answerText: 'جليلية', isCorrect: false },
      { answerText: 'أورشليم', isCorrect: false },
    ],
  },
  {
    questionText: 'زي ما موسى عبر البحر الأحمر, عبر يشوع ',
    answerOptions: [
      { answerText: 'البحر المتوسط', isCorrect: false },
      { answerText: 'البحر الأحمر', isCorrect: false },
      { answerText: 'نهر النيل', isCorrect: false },
      { answerText: 'نهر الأردن', isCorrect: true},
    ],
  },
  {
    questionText: ' من قادوا الشعب في العودة من السبي؟',
    answerOptions: [
      { answerText: 'حنانيا عزاريا ميصائيل', isCorrect: false },
      { answerText: 'زربابل عزرا نحميا', isCorrect: true },
      { answerText: 'عثنيئيل أهود شمجر', isCorrect: false },
      { answerText: 'إيليا إليشع جيحزي', isCorrect: false },
    ],
  },
  {
    questionText: 'زوجة يعقوب إسمها',
    answerOptions: [
      { answerText: 'حنة', isCorrect: false},
      { answerText: 'سارة', isCorrect: false },
      { answerText: 'ليئة و راحيل', isCorrect: true },
      { answerText: 'رفقة', isCorrect: false },
    ],
  },
  {
    questionText: 'رتب الأحداث: يوسف يصبح الرجل الثاني - نوح يرسل الغراب - خروج بني إسرائيل من أرض مصر',
    answerOptions: [
      { answerText: 'خروج بني إسرائيل من أرض مصر - يوسف يصبح الرجل الثاني - نوح يرسل الغراب', isCorrect: false},
      { answerText: 'يوسف يصبح الرجل الثاني - خروج بني إسرائيل من أرض مصر - نوح يرسل الغراب', isCorrect: false},
      { answerText: 'خروج بني إسرائيل من أرض مصر - نوح يرسل الغراب - يوسف يصبح الرجل الثاني', isCorrect: false},
      { answerText: ' نوح يرسل الغراب - يوسف يصبح الرجل الثاني - خروج بني إسرائيل من أرض مصر', isCorrect: true},
    ],
  },
  {
    questionText: 'رتب الشخصيات: يشوع - نوح - قايين - موسى',
    answerOptions: [
      { answerText: 'يشوع - موسى - قايين - نوح ', isCorrect: false},
      { answerText: 'نوح  - قايين - يشوع - موسى', isCorrect: false},
      { answerText: 'قايين - نوح  - يشوع - موسى', isCorrect: false},
      { answerText: 'قايين - نوح  - موسى - يشوع', isCorrect: true},
    ],
  },
]

export default questions