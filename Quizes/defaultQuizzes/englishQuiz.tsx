import { QuizFile } from './types';
export const englishQuiz: QuizFile = {
  id: 'english-quiz-pro-1',
  isfree : true,
  categoryId : 1,
  fileName: 'english-quiz-pro.json',
  title: 'تحدي المعلومات الشامل - النسخة الانجليزية',
  titleEn: 'Comprehensive General Knowledge Challenge (English Version)',
  lang:'en',
  description: '300 diverse questions to test your general knowledge in multiple fields.',
  questions: [
    // --- History (40 questions) ---
    // Multiple Choice (24)
    {
      id: 'en-pro-q1',
      text: 'In what year did World War II end?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['1943', '1945', '1950', '1939'],
      correctAnswer: '1945',
      explanation: 'The war in Europe ended in **May 1945** (V-E Day), and the war in the Pacific ended in September 1945 (V-J Day).'
    },
    {
      id: 'en-pro-q2',
      text: 'Who was the first person to walk on the moon?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Buzz Aldrin', 'Yuri Gagarin', 'Michael Collins', 'Neil Armstrong'],
      correctAnswer: 'Neil Armstrong',
      explanation: 'On July 20, 1969, Neil Armstrong became the first human to step on the moon during the Apollo 11 mission.'
    },
    {
      id: 'en-pro-q3',
      text: 'What was the Renaissance a "rebirth" of?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Religion and faith', 'War and conquest', 'Art and learning', 'Farming and agriculture'],
      correctAnswer: 'Art and learning',
      explanation: 'The Renaissance was a period of intense artistic and intellectual activity, said to be a "rebirth" of Greco-Roman culture.'
    },
    {
      id: 'en-pro-q4',
      text: 'The ancient city of Rome was built on how many hills?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Three', 'Five', 'Seven', 'Nine'],
      correctAnswer: 'Seven',
      explanation: 'The "Seven Hills of Rome" are a group of hills on or about which the ancient city of Rome was built.'
    },
    {
      id: 'en-pro-q5',
      text: 'Who was the first Emperor of Rome?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Julius Caesar', 'Nero', 'Augustus Caesar', 'Caligula'],
      correctAnswer: 'Augustus Caesar',
      explanation: 'Augustus (Octavian) is considered the first Roman emperor, reigning from 27 BC to 14 AD.'
    },
    {
      id: 'en-pro-q6',
      text: 'In which year did the French Revolution begin?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['1776', '1789', '1804', '1815'],
      correctAnswer: '1789',
      explanation: 'The French Revolution began with the storming of the Bastille on July 14, 1789.'
    },
    {
      id: 'en-pro-q7',
      text: 'Which dynasty is credited with building the most well-known sections of the Great Wall of China?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Qin Dynasty', 'Han Dynasty', 'Ming Dynasty', 'Tang Dynasty'],
      correctAnswer: 'Ming Dynasty',
      explanation: 'Although construction began in the Qin Dynasty, most of the existing structure was built during the Ming Dynasty (1368–1644).'
    },
    {
      id: 'en-pro-q8',
      text: 'What battle was Napoleon Bonaparte\'s final defeat?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Battle of Austerlitz', 'Battle of Leipzig', 'Battle of Waterloo', 'Battle of Borodino'],
      correctAnswer: 'Battle of Waterloo',
      explanation: 'The Battle of Waterloo in 1815 led to Napoleon\'s exile to the island of Saint Helena.'
    },
    {
      id: 'en-pro-q9',
      text: 'Which of these cities was the capital of the Umayyad Caliphate?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Baghdad', 'Cairo', 'Damascus', 'Cordoba'],
      correctAnswer: 'Damascus',
      explanation: 'The Umayyads made Damascus their capital from 661 to 750 AD.'
    },
    {
      id: 'en-pro-q10',
      text: 'Which pharaoh built the Great Pyramid of Giza?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Ramesses II', 'Tutankhamun', 'Khufu', 'Akhenaten'],
      correctAnswer: 'Khufu',
      explanation: 'The Great Pyramid was built during the reign of Pharaoh Khufu of the Fourth Dynasty, around 2560 BC.'
    },
    {
      id: 'en-pro-q11',
      text: 'Which country was formerly known as Persia?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Iraq', 'Turkey', 'Iran', 'Afghanistan'],
      correctAnswer: 'Iran',
      explanation: 'In 1935, foreign nations were requested to refer to Persia by its native name, Iran.'
    },
    {
      id: 'en-pro-q12',
      text: 'What was the name of the series of conflicts between Rome and Carthage?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Peloponnesian Wars', 'Persian Wars', 'Punic Wars', 'Gallic Wars'],
      correctAnswer: 'Punic Wars',
      explanation: 'The Punic Wars were three major conflicts fought between the Roman Republic and the Carthaginian (Punic) Empire for control of the Mediterranean.'
    },
    {
      id: 'en-pro-q13',
      text: 'In which city was Archduke Franz Ferdinand assassinated, sparking World War I?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Vienna', 'Belgrade', 'Prague', 'Sarajevo'],
      correctAnswer: 'Sarajevo',
      explanation: 'The assassination of the Austrian Archduke in Sarajevo in 1914 was the immediate cause of World War I.'
    },
    {
      id: 'en-pro-q14',
      text: 'Who founded the Mongol Empire?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Kublai Khan', 'Ogedei Khan', 'Genghis Khan', 'Hulagu Khan'],
      correctAnswer: 'Genghis Khan',
      explanation: 'Genghis Khan united the Mongol tribes and founded the Mongol Empire in the early 13th century.'
    },
    {
      id: 'en-pro-q15',
      text: 'Which civilization is famous for building Machu Picchu?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Aztec', 'Maya', 'Inca', 'Olmec'],
      correctAnswer: 'Inca',
      explanation: 'Machu Picchu is an ancient city built by the Incas in the 15th century, located in the Andes Mountains of Peru.'
    },
    {
      id: 'en-pro-q16',
      text: 'What did the Vikings call North America?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Iceland', 'Greenland', 'Vinland', 'Northland'],
      correctAnswer: 'Vinland',
      explanation: 'Viking explorer Leif Erikson named the area he reached in North America "Vinland" around 1000 AD.'
    },
    {
      id: 'en-pro-q17',
      text: 'Who was the leader of the Civil Rights Movement in the United States in the 1960s?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Malcolm X', 'Martin Luther King Jr.', 'Rosa Parks', 'John F. Kennedy'],
      correctAnswer: 'Martin Luther King Jr.',
      explanation: 'Martin Luther King Jr. led the movement for racial equality and civil rights using nonviolent civil disobedience.'
    },
    {
      id: 'en-pro-q18',
      text: 'What was the "Silk Road"?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['An ancient trade route between Europe and Asia', 'A road for silk production in China', 'A religious pilgrimage route', 'The name of an ancient battle'],
      correctAnswer: 'An ancient trade route between Europe and Asia',
      explanation: 'The Silk Road was a network of trade routes that connected the East and West and was central to economic and cultural interaction.'
    },
    {
      id: 'en-pro-q19',
      text: 'In which year did the Berlin Wall fall?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['1985', '1987', '1989', '1991'],
      correctAnswer: '1989',
      explanation: 'The fall of the Berlin Wall on November 9, 1989, was a pivotal event that led to the reunification of Germany and the end of the Cold War.'
    },
    {
      id: 'en-pro-q20',
      text: 'Which queen ruled ancient Egypt and was the last pharaoh of the Ptolemaic dynasty?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Hatshepsut', 'Nefertiti', 'Cleopatra VII', 'Nefertari'],
      correctAnswer: 'Cleopatra VII',
      explanation: 'Cleopatra VII was famous for her alliances with Julius Caesar and Mark Antony and was the last ruler of Egypt before it became a Roman province.'
    },
    {
      id: 'en-pro-q21',
      text: 'What is the longest-reigning monarch in French history?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Napoleon Bonaparte', 'Louis XIV', 'Charlemagne', 'Louis XVI'],
      correctAnswer: 'Louis XIV',
      explanation: 'Louis XIV, known as the "Sun King," reigned for 72 years and 110 days, the longest of any sovereign monarch in European history.'
    },
    {
      id: 'en-pro-q22',
      text: 'Which country gifted the Statue of Liberty to the United States?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Britain', 'Spain', 'Germany', 'France'],
      correctAnswer: 'France',
      explanation: 'The Statue of Liberty was a gift of friendship from the people of France to the people of the United States and was officially dedicated in 1886.'
    },
    {
      id: 'en-pro-q23',
      text: 'Who was the leader of the Soviet Union during the Cuban Missile Crisis?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['Joseph Stalin', 'Leonid Brezhnev', 'Nikita Khrushchev', 'Mikhail Gorbachev'],
      correctAnswer: 'Nikita Khrushchev',
      explanation: 'Nikita Khrushchev was the Soviet leader who faced off against U.S. President John F. Kennedy during the Cuban Missile Crisis in 1962.'
    },
    {
      id: 'en-pro-q24',
      text: 'Which Industrial Revolution was characterized by the steam engine and factories?',
      type: 'multiple-choice',
      category: 'History',
      answers: ['The First', 'The Second', 'The Third', 'The Fourth'],
      correctAnswer: 'The First',
      explanation: 'The First Industrial Revolution began in Great Britain in the late 18th century, and the steam engine was one of its most important inventions.'
    },
    // True/False (12)
    {
      id: 'en-pro-q25',
      text: 'The Battle of Hastings was fought in 1066.',
      type: 'true-false',
      category: 'History',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The Battle of Hastings on October 14, 1066, was the decisive Norman victory in the Norman conquest of England.'
    },
    {
      id: 'en-pro-q26',
      text: 'Christopher Columbus was the first European to reach the Americas.',
      type: 'true-false',
      category: 'History',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The Vikings, led by Leif Erikson, reached North America (Vinland) about 500 years before Columbus.'
    },
    {
      id: 'en-pro-q27',
      text: 'The Code of Hammurabi is one of the oldest written laws in history.',
      type: 'true-false',
      category: 'History',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The Code of Hammurabi dates back to about 1754 BC in ancient Babylon.'
    },
    {
      id: 'en-pro-q28',
      text: 'World War II began with Germany\'s invasion of Poland.',
      type: 'true-false',
      category: 'History',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'On September 1, 1939, Germany invaded Poland, prompting Britain and France to declare war on Germany.'
    },
    {
      id: 'en-pro-q29',
      text: 'Alexander the Great was a student of the philosopher Plato.',
      type: 'true-false',
      category: 'History',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Alexander the Great was a student of Aristotle, not Plato.'
    },
    {
      id: 'en-pro-q30',
      text: 'The apartheid regime in South Africa ended in 1994.',
      type: 'true-false',
      category: 'History',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The apartheid system ended with the first multiracial democratic elections in 1994, which were won by Nelson Mandela.'
    },
    {
      id: 'en-pro-q31',
      text: 'Baghdad was the capital of the Abbasid Caliphate.',
      type: 'true-false',
      category: 'History',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The Abbasid Caliph al-Mansur founded Baghdad and made it the capital of the Abbasid Caliphate, turning it into a center of learning and culture.'
    },
    {
      id: 'en-pro-q32',
      text: 'Marco Polo was a Chinese explorer.',
      type: 'true-false',
      category: 'History',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Marco Polo was a merchant and explorer from Venice (Italy) who traveled through Asia on the Silk Road.'
    },
    {
      id: 'en-pro-q33',
      text: 'The Boston Tea Party led to an increase in British taxes on the American colonies.',
      type: 'true-false',
      category: 'History',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The Boston Tea Party was a protest against British taxes, which led Britain to impose even stricter laws, accelerating the American Revolution.'
    },
    {
      id: 'en-pro-q34',
      text: 'The reign of Empress Catherine the Great in Russia is known as the Golden Age.',
      type: 'true-false',
      category: 'History',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Catherine the Great\'s reign is considered the Golden Age of the Russian Empire due to its expansion and modernization.'
    },
    {
      id: 'en-pro-q35',
      text: 'The Taj Mahal in India was built as a palace for the king.',
      type: 'true-false',
      category: 'History',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The Taj Mahal is a white marble mausoleum built by the Mughal emperor Shah Jahan in memory of his wife, Mumtaz Mahal.'
    },
    {
      id: 'en-pro-q36',
      text: 'The Hundred Years\' War was between England and Spain.',
      type: 'true-false',
      category: 'History',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The Hundred Years\' War was a series of conflicts between the Kingdom of England and the Kingdom of France.'
    },
    // Fill in the Blank (4)
    {
      id: 'en-pro-q37',
      text: 'The ancient Egyptian writing system is called ___.',
      type: 'fill-in-the-blank',
      category: 'History',
      answers: [],
      correctAnswer: 'hieroglyphics',
      explanation: 'Hieroglyphics used a combination of logographic, syllabic, and alphabetic elements.'
    },
    {
      id: 'en-pro-q38',
      text: 'The discovery of hieroglyphics was made possible by finding the ___ Stone.',
      type: 'fill-in-the-blank',
      category: 'History',
      answers: [],
      correctAnswer: 'Rosetta',
      explanation: 'The Rosetta Stone, containing the same text in three languages, allowed Jean-François Champollion to decipher Egyptian hieroglyphics.'
    },
    {
      id: 'en-pro-q39',
      text: 'The European Age of Discovery was largely launched from Portugal and ___.',
      type: 'fill-in-the-blank',
      category: 'History',
      answers: [],
      correctAnswer: 'Spain',
      explanation: 'Portugal and Spain were the leading nations in exploring the New World during the 15th and 16th centuries.'
    },
    {
      id: 'en-pro-q40',
      text: 'The European Renaissance was a cultural movement that began in ___ during the late Middle Ages.',
      type: 'fill-in-the-blank',
      category: 'History',
      answers: [],
      correctAnswer: 'Italy',
      explanation: 'The Renaissance began in Italy, particularly in the city of Florence, before spreading to the rest of Europe.'
    },
    // --- Geography (40 questions) ---
    // Multiple Choice (24)
    {
      id: 'en-pro-q41',
      text: 'What is the longest river in the world?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
      correctAnswer: 'Nile River',
      explanation: 'The Nile is traditionally considered the longest river in the world, though there is debate on whether the Amazon is longer.'
    },
    {
      id: 'en-pro-q42',
      text: 'What is the highest mountain peak in the world?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Mount Kilimanjaro', 'Mount Everest', 'K2', 'Mont Blanc'],
      correctAnswer: 'Mount Everest',
      explanation: 'Mount Everest is located in the Himalayas and stands at about 8,848 meters above sea level.'
    },
    {
      id: 'en-pro-q43',
      text: 'What is the capital of Australia?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      correctAnswer: 'Canberra',
      explanation: 'Although Sydney is the most famous city, Canberra is the official capital of Australia.'
    },
    {
      id: 'en-pro-q44',
      text: 'What is the largest hot desert in the world?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Arabian Desert', 'Gobi Desert', 'Sahara Desert', 'Kalahari Desert'],
      correctAnswer: 'Sahara Desert',
      explanation: 'The Sahara Desert covers most of North Africa. The largest desert overall is the Antarctic Polar Desert.'
    },
    {
      id: 'en-pro-q45',
      text: 'Which ocean is the largest and deepest in the world?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
      correctAnswer: 'Pacific Ocean',
      explanation: 'The Pacific Ocean covers about one-third of the Earth\'s surface and contains the deepest point, the Mariana Trench.'
    },
    {
      id: 'en-pro-q46',
      text: 'What strait separates Asia and North America?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Strait of Gibraltar', 'Strait of Magellan', 'Bering Strait', 'Suez Canal'],
      correctAnswer: 'Bering Strait',
      explanation: 'The Bering Strait separates Russia (Asia) from Alaska (North America).'
    },
    {
      id: 'en-pro-q47',
      text: 'On which continent is the Atacama Desert, one of the driest places in the world?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Africa', 'Asia', 'South America', 'Australia'],
      correctAnswer: 'South America',
      explanation: 'The Atacama Desert is located in Chile and is a coastal desert considered one of the driest places on Earth.'
    },
    {
      id: 'en-pro-q48',
      text: 'Which country has the most islands in the world?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Indonesia', 'Philippines', 'Sweden', 'Canada'],
      correctAnswer: 'Sweden',
      explanation: 'Sweden has an estimated 267,570 islands, the most of any country in the world.'
    },
    {
      id: 'en-pro-q49',
      text: 'What is the largest island in the world?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Borneo', 'Greenland', 'New Guinea', 'Madagascar'],
      correctAnswer: 'Greenland',
      explanation: 'Greenland is the world\'s largest island, located between the Arctic and Atlantic oceans.'
    },
    {
      id: 'en-pro-q50',
      text: 'Which of these countries does not border the Mediterranean Sea?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Greece', 'Portugal', 'Croatia', 'Turkey'],
      correctAnswer: 'Portugal',
      explanation: 'Portugal is on the Atlantic Ocean, while the other countries border the Mediterranean.'
    },
    {
      id: 'en-pro-q51',
      text: 'Which country is known as the "Land of the Rising Sun"?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['China', 'South Korea', 'Japan', 'Vietnam'],
      correctAnswer: 'Japan',
      explanation: 'The name for Japan in Japanese, "Nihon" or "Nippon," means "sun origin".'
    },
    {
      id: 'en-pro-q52',
      text: 'Where is Victoria Falls located?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['On the border of Brazil and Argentina', 'In Venezuela', 'On the border of Zambia and Zimbabwe', 'In Canada'],
      correctAnswer: 'On the border of Zambia and Zimbabwe',
      explanation: 'Victoria Falls is located on the Zambezi River and is considered one of the largest waterfalls in the world.'
    },
    {
      id: 'en-pro-q53',
      text: 'What is the deepest lake in the world?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Lake Tanganyika', 'Caspian Sea', 'Lake Superior', 'Lake Baikal'],
      correctAnswer: 'Lake Baikal',
      explanation: 'Lake Baikal in Siberia, Russia, is the world\'s deepest and oldest freshwater lake.'
    },
    {
      id: 'en-pro-q54',
      text: 'What is the only country in the world that lies entirely above 2,000 meters in elevation?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Nepal', 'Bhutan', 'Lesotho', 'Bolivia'],
      correctAnswer: 'Lesotho',
      explanation: 'Lesotho, a landlocked country within South Africa, is known as the "Kingdom in the Sky" because its lowest point is the highest in the world (1,400 meters).'
    },
    {
      id: 'en-pro-q55',
      text: 'What is the imaginary line that divides the Earth into Northern and Southern Hemispheres?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Prime Meridian', 'Tropic of Cancer', 'Equator', 'Tropic of Capricorn'],
      correctAnswer: 'Equator',
      explanation: 'The Equator is the main line of latitude that divides the Earth into the Northern and Southern Hemispheres.'
    },
    {
      id: 'en-pro-q56',
      text: 'What is the largest country in the world by area?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Canada', 'China', 'United States', 'Russia'],
      correctAnswer: 'Russia',
      explanation: 'Russia covers more than one-eighth of the Earth\'s inhabited land area.'
    },
    {
      id: 'en-pro-q57',
      text: 'Which of these cities is known for being located on two continents?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Cairo', 'Istanbul', 'Moscow', 'Panama City'],
      correctAnswer: 'Istanbul',
      explanation: 'The Turkish city of Istanbul straddles the Bosphorus Strait, placing it on both the European and Asian continents.'
    },
    {
      id: 'en-pro-q58',
      text: 'What is the longest mountain range in the world?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Himalayas', 'Andes', 'Rockies', 'Alps'],
      correctAnswer: 'Andes',
      explanation: 'The Andes Mountains stretch along the western coast of South America for about 7,000 kilometers.'
    },
    {
      id: 'en-pro-q59',
      text: 'Where is the Great Barrier Reef located?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Off the coast of Brazil', 'In the Red Sea', 'Off the coast of Australia', 'In the Caribbean'],
      correctAnswer: 'Off the coast of Australia',
      explanation: 'The Great Barrier Reef is the world\'s largest coral reef system, located in the Coral Sea off the coast of Queensland, Australia.'
    },
    {
      id: 'en-pro-q60',
      text: 'What is the most populous country in the world?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['China', 'India', 'United States', 'Indonesia'],
      correctAnswer: 'India',
      explanation: 'As of 2023, India has surpassed China to become the world\'s most populous country.'
    },
    {
      id: 'en-pro-q61',
      text: 'What is the capital of Canada?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Toronto', 'Montreal', 'Vancouver', 'Ottawa'],
      correctAnswer: 'Ottawa',
      explanation: 'Although Toronto is the largest city, Ottawa is the political capital of Canada.'
    },
    {
      id: 'en-pro-q62',
      text: 'In which country is Mount Fuji located?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['China', 'South Korea', 'Japan', 'Nepal'],
      correctAnswer: 'Japan',
      explanation: 'Mount Fuji is an active volcano and the highest peak in Japan, considered an important cultural symbol of the country.'
    },
    {
      id: 'en-pro-q63',
      text: 'What canal connects the Mediterranean Sea to the Red Sea?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Panama Canal', 'Suez Canal', 'Kiel Canal', 'Corinth Canal'],
      correctAnswer: 'Suez Canal',
      explanation: 'The Suez Canal is an artificial waterway in Egypt that allows ships to travel between Europe and Asia without sailing around Africa.'
    },
    {
      id: 'en-pro-q64',
      text: 'What is the largest landlocked country in the world?',
      type: 'multiple-choice',
      category: 'Geography',
      answers: ['Mongolia', 'Bolivia', 'Kazakhstan', 'Chad'],
      correctAnswer: 'Kazakhstan',
      explanation: 'Kazakhstan is the largest country in the world that does not border an open ocean.'
    },
    // True/False (12)
    {
      id: 'en-pro-q65',
      text: 'Brazil is the only Portuguese-speaking country in South America.',
      type: 'true-false',
      category: 'Geography',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Most South American countries speak Spanish, but the official language of Brazil is Portuguese.'
    },
    {
      id: 'en-pro-q66',
      text: 'The Dead Sea is at the lowest point on the Earth\'s land surface.',
      type: 'true-false',
      category: 'Geography',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The shore of the Dead Sea is about 430.5 meters below sea level, making it the lowest point on Earth.'
    },
    {
      id: 'en-pro-q67',
      text: 'The Prime Meridian runs through London, UK.',
      type: 'true-false',
      category: 'Geography',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The main line of longitude (0 degrees longitude) is known as the Prime Meridian because it passes through the Royal Observatory in Greenwich, London.'
    },
    {
      id: 'en-pro-q68',
      text: 'Vatican City is the smallest country in the world.',
      type: 'true-false',
      category: 'Geography',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Vatican City is the smallest independent state in the world by both area and population.'
    },
    {
      id: 'en-pro-q69',
      text: 'Alaska is the largest state in the United States by area.',
      type: 'true-false',
      category: 'Geography',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Alaska is larger than Texas, California, and Montana combined.'
    },
    {
      id: 'en-pro-q70',
      text: 'The Jordan River flows into the Mediterranean Sea.',
      type: 'true-false',
      category: 'Geography',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The Jordan River flows into the Dead Sea.'
    },
    {
      id: 'en-pro-q71',
      text: 'Spain is the only European country with a land border with an African country.',
      type: 'true-false',
      category: 'Geography',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Spain has the autonomous cities of Ceuta and Melilla on the coast of North Africa, which have land borders with Morocco.'
    },
    {
      id: 'en-pro-q72',
      text: 'The Arctic Circle is located entirely within the Antarctic continent.',
      type: 'true-false',
      category: 'Geography',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The Arctic Circle defines the Arctic region, while the Antarctic Circle defines the Antarctic region (Antarctica).'
    },
    {
      id: 'en-pro-q73',
      text: 'The Netherlands is known as the "Land of a Thousand Lakes".',
      type: 'true-false',
      category: 'Geography',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Finland is known as the "Land of a Thousand Lakes" due to its abundance of lakes.'
    },
    {
      id: 'en-pro-q74',
      text: 'There are five officially recognized oceans in the world.',
      type: 'true-false',
      category: 'Geography',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The five oceans are the Atlantic, Pacific, Indian, Arctic, and the newly recognized Southern (Antarctic) Ocean.'
    },
    {
      id: 'en-pro-q75',
      text: 'China borders 14 countries, the most in the world.',
      type: 'true-false',
      category: 'Geography',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'China and Russia share this record, each bordering 14 countries.'
    },
    {
      id: 'en-pro-q76',
      text: 'All countries in Africa are south of the Equator.',
      type: 'true-false',
      category: 'Geography',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The Equator runs through the middle of Africa, meaning there are countries in both the Northern and Southern Hemispheres.'
    },
    // Fill in the Blank (4)
    {
      id: 'en-pro-q77',
      text: 'The Strait of ___ separates the Arabian Peninsula and Africa and connects the Red Sea to the Gulf of Aden.',
      type: 'fill-in-the-blank',
      category: 'Geography',
      answers: [],
      correctAnswer: 'Bab-el-Mandeb',
      explanation: 'The Bab-el-Mandeb Strait is a strategic waterway between Yemen in Asia and Djibouti and Eritrea in Africa.'
    },
    {
      id: 'en-pro-q78',
      text: 'The climatic phenomenon characterized by the warming of the surface of the equatorial Pacific Ocean is called ___ Niño.',
      type: 'fill-in-the-blank',
      category: 'Geography',
      answers: [],
      correctAnswer: 'El',
      explanation: 'The El Niño phenomenon significantly affects weather patterns worldwide.'
    },
    {
      id: 'en-pro-q79',
      text: 'The largest tropical rainforest in the world is the ___ rainforest.',
      type: 'fill-in-the-blank',
      category: 'Geography',
      answers: [],
      correctAnswer: 'Amazon',
      explanation: 'The Amazon rainforest is located in South America and is known for its immense biodiversity.'
    },
    {
      id: 'en-pro-q80',
      text: 'The official currency of Japan is the Japanese ___.',
      type: 'fill-in-the-blank',
      category: 'Geography',
      answers: [],
      correctAnswer: 'Yen',
      explanation: 'The Yen is the third most traded currency in the foreign exchange market after the US Dollar and the Euro.'
    },
    // --- Science (40 questions) ---
    // Multiple Choice (24)
    {
      id: 'en-pro-q81',
      text: 'What is the most abundant chemical element in the Earth\'s atmosphere?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
      correctAnswer: 'Nitrogen',
      explanation: 'Nitrogen makes up about 78% of the Earth\'s atmosphere, while oxygen makes up about 21%.'
    },
    {
      id: 'en-pro-q82',
      text: 'Which scientist is credited with the theory of relativity?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Nikola Tesla'],
      correctAnswer: 'Albert Einstein',
      explanation: 'Einstein published the theory of special relativity in 1905 and general relativity in 1915, revolutionizing physics.'
    },
    {
      id: 'en-pro-q83',
      text: 'What is the process by which plants convert sunlight into energy?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Respiration', 'Transpiration', 'Photosynthesis', 'Fermentation'],
      correctAnswer: 'Photosynthesis',
      explanation: 'Plants use photosynthesis to convert carbon dioxide and water into glucose (energy) and oxygen.'
    },
    {
      id: 'en-pro-q84',
      text: 'What is the chemical symbol for gold?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Ag', 'Go', 'Au', 'Gd'],
      correctAnswer: 'Au',
      explanation: 'The symbol "Au" comes from the Latin word for gold, "aurum".'
    },
    {
      id: 'en-pro-q85',
      text: 'What is the "powerhouse" of the cell?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi apparatus'],
      correctAnswer: 'Mitochondria',
      explanation: 'Mitochondria are the organelles responsible for generating most of the cell\'s supply of adenosine triphosphate (ATP), used as a source of chemical energy.'
    },
    {
      id: 'en-pro-q86',
      text: 'Which planet is known as the "Red Planet"?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
      explanation: 'Mars gets its reddish color from the iron oxide (rust) that is abundant on its surface.'
    },
    {
      id: 'en-pro-q87',
      text: 'What is the unit of measurement for force in the International System of Units (SI)?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Joule', 'Watt', 'Newton', 'Pascal'],
      correctAnswer: 'Newton',
      explanation: 'The Newton unit is named after Sir Isaac Newton, who formulated the laws of motion.'
    },
    {
      id: 'en-pro-q88',
      text: 'What is the hardest natural substance on Earth?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Quartz', 'Topaz', 'Diamond', 'Sapphire'],
      correctAnswer: 'Diamond',
      explanation: 'Diamond ranks 10 on the Mohs scale of mineral hardness, the highest possible rating.'
    },
    {
      id: 'en-pro-q89',
      text: 'What gas do humans breathe in and exhale as carbon dioxide?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Nitrogen', 'Hydrogen', 'Oxygen', 'Helium'],
      correctAnswer: 'Oxygen',
      explanation: 'Oxygen is essential for cellular respiration, which produces energy for the body.'
    },
    {
      id: 'en-pro-q90',
      text: 'How many chromosomes are in a typical human body cell?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['23', '46', '48', '64'],
      correctAnswer: '46',
      explanation: 'Humans have 23 pairs of chromosomes, for a total of 46 chromosomes.'
    },
    {
      id: 'en-pro-q91',
      text: 'What is the largest planet in our solar system?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
      correctAnswer: 'Jupiter',
      explanation: 'Jupiter is a gas giant and its mass is greater than the mass of all other planets in the solar system combined.'
    },
    {
      id: 'en-pro-q92',
      text: 'What does paleontology study?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Rocks and minerals', 'Fossil life', 'Volcanoes and earthquakes', 'Stars and galaxies'],
      correctAnswer: 'Fossil life',
      explanation: 'Paleontology studies the history of life on Earth based on fossils.'
    },
    {
      id: 'en-pro-q93',
      text: 'What is the speed of light in a vacuum?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['300,000 km/h', '300,000 km/min', '300,000 km/s', '30,000 km/s'],
      correctAnswer: '300,000 km/s',
      explanation: 'The speed of light in a vacuum is approximately 299,792 kilometers per second, the fastest possible speed in the universe.'
    },
    {
      id: 'en-pro-q94',
      text: 'What element makes up most of the Sun\'s mass?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Helium', 'Oxygen', 'Carbon', 'Hydrogen'],
      correctAnswer: 'Hydrogen',
      explanation: 'The Sun is primarily composed of hydrogen (about 74%) and helium (about 24%).'
    },
    {
      id: 'en-pro-q95',
      text: 'What is the scientific name for diabetes?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Hypertension', 'Arthritis', 'Diabetes Mellitus', 'Anemia'],
      correctAnswer: 'Diabetes Mellitus',
      explanation: 'Diabetes Mellitus is a group of metabolic disorders characterized by high blood sugar levels.'
    },
    {
      id: 'en-pro-q96',
      text: 'What substance gives plants their green color?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Carotene', 'Anthocyanin', 'Chlorophyll', 'Xanthophyll'],
      correctAnswer: 'Chlorophyll',
      explanation: 'Chlorophyll is the green pigment found in plants and is essential for photosynthesis.'
    },
    {
      id: 'en-pro-q97',
      text: 'What type of waves are used in microwave ovens?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Radio waves', 'Infrared rays', 'Microwaves', 'X-rays'],
      correctAnswer: 'Microwaves',
      explanation: 'Microwave ovens use microwaves to excite water molecules in food, which generates heat and cooks it.'
    },
    {
      id: 'en-pro-q98',
      text: 'Who discovered penicillin?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Marie Curie', 'Louis Pasteur', 'Alexander Fleming', 'Robert Koch'],
      correctAnswer: 'Alexander Fleming',
      explanation: 'In 1928, Alexander Fleming discovered that the Penicillium fungus produces a substance that kills bacteria, leading to the development of antibiotics.'
    },
    {
      id: 'en-pro-q99',
      text: 'What is the outermost layer of the Earth\'s atmosphere?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Stratosphere', 'Mesosphere', 'Thermosphere', 'Exosphere'],
      correctAnswer: 'Exosphere',
      explanation: 'The exosphere is the upper and least dense layer of the atmosphere, gradually fading into outer space.'
    },
    {
      id: 'en-pro-q100',
      text: 'What is the pH level of pure water?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['0', '7', '14', '10'],
      correctAnswer: '7',
      explanation: 'A pH of 7 is considered neutral. Below 7 is acidic, and above 7 is alkaline.'
    },
    {
      id: 'en-pro-q101',
      text: 'What is the largest organ in the human body?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Liver', 'Brain', 'Skin', 'Heart'],
      correctAnswer: 'Skin',
      explanation: 'The skin is the largest organ by area and weight and acts as a protective barrier for the body.'
    },
    {
      id: 'en-pro-q102',
      text: 'Which vitamin is known as the "sunshine vitamin"?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
      correctAnswer: 'Vitamin D',
      explanation: 'The body can produce vitamin D when the skin is exposed to ultraviolet sunlight.'
    },
    {
      id: 'en-pro-q103',
      text: 'What scientific discipline studies earthquakes?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Meteorology', 'Volcanology', 'Seismology', 'Geology'],
      correctAnswer: 'Seismology',
      explanation: 'Seismology is the scientific study of earthquakes and the propagation of seismic waves through the Earth.'
    },
    {
      id: 'en-pro-q104',
      text: 'What is the transformation of a substance from a solid directly to a gas called?',
      type: 'multiple-choice',
      category: 'Science',
      answers: ['Evaporation', 'Condensation', 'Melting', 'Sublimation'],
      correctAnswer: 'Sublimation',
      explanation: 'An example of sublimation is the transformation of dry ice (solid carbon dioxide) into gas without passing through a liquid state.'
    },
    // True/False (12)
    {
      id: 'en-pro-q105',
      text: 'Sound travels faster in air than in water.',
      type: 'true-false',
      category: 'Science',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Sound travels faster through denser materials, so it travels faster in water (about 4 times faster) than in air.'
    },
    {
      id: 'en-pro-q106',
      text: 'The periodic table contains over 150 elements.',
      type: 'true-false',
      category: 'Science',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The periodic table currently contains 118 confirmed elements.'
    },
    {
      id: 'en-pro-q107',
      text: 'The Sun is a star.',
      type: 'true-false',
      category: 'Science',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The Sun is a yellow dwarf star at the center of our solar system.'
    },
    {
      id: 'en-pro-q108',
      text: 'All living organisms are composed of one or more cells.',
      type: 'true-false',
      category: 'Science',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'This is one of the basic principles of cell theory in biology.'
    },
    {
      id: 'en-pro-q109',
      text: 'Gravity on the Moon is stronger than gravity on Earth.',
      type: 'true-false',
      category: 'Science',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The Moon\'s gravity is about one-sixth of Earth\'s gravity due to its much smaller mass.'
    },
    {
      id: 'en-pro-q110',
      text: 'Water boils at 100 degrees Fahrenheit.',
      type: 'true-false',
      category: 'Science',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Water boils at 100 degrees Celsius or 212 degrees Fahrenheit at sea level.'
    },
    {
      id: 'en-pro-q111',
      text: 'Water covers about 71% of the Earth\'s surface.',
      type: 'true-false',
      category: 'Science',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Oceans, seas, and other bodies of water cover most of our planet.'
    },
    {
      id: 'en-pro-q112',
      text: 'Viruses are considered living organisms.',
      type: 'true-false',
      category: 'Science',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'There is scientific debate, but most scientists do not consider viruses fully alive because they cannot reproduce independently and need a host cell.'
    },
    {
      id: 'en-pro-q113',
      text: 'DNA is found only in the nucleus of a cell.',
      type: 'true-false',
      category: 'Science',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Most DNA is in the nucleus, but a small amount is also found in the mitochondria.'
    },
    {
      id: 'en-pro-q114',
      text: 'It takes the Earth exactly 24 hours to rotate on its axis.',
      type: 'true-false',
      category: 'Science',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'It takes the Earth about 23 hours, 56 minutes, and 4 seconds to complete one rotation (a sidereal day). The solar day (24 hours) is slightly longer due to the Earth\'s orbit around the Sun.'
    },
    {
      id: 'en-pro-q115',
      text: 'Lightning is a massive discharge of static electricity.',
      type: 'true-false',
      category: 'Science',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Lightning occurs due to an imbalance of electrical charges within clouds or between clouds and the ground.'
    },
    {
      id: 'en-pro-q116',
      text: 'Water becomes denser when it freezes.',
      type: 'true-false',
      category: 'Science',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Water is one of the few substances that becomes less dense when it freezes, which is why ice floats.'
    },
    // Fill in the Blank (4)
    {
      id: 'en-pro-q117',
      text: 'The English scientist ___ is known as the father of modern physics for formulating the laws of motion and universal gravitation.',
      type: 'fill-in-the-blank',
      category: 'Science',
      answers: [],
      correctAnswer: 'Isaac Newton',
      explanation: 'Isaac Newton published his book "Philosophiæ Naturalis Principia Mathematica" in 1687, which laid the foundations of classical mechanics.'
    },
    {
      id: 'en-pro-q118',
      text: 'The chemical symbol for water is ___.',
      type: 'fill-in-the-blank',
      category: 'Science',
      answers: [],
      correctAnswer: 'H2O',
      explanation: 'A water molecule consists of two hydrogen (H) atoms and one oxygen (O) atom.'
    },
    {
      id: 'en-pro-q119',
      text: 'The force that attracts objects towards each other is called ___.',
      type: 'fill-in-the-blank',
      category: 'Science',
      answers: [],
      correctAnswer: 'gravity',
      explanation: 'Gravity is the fundamental force that governs the motion of planets, stars, and galaxies.'
    },
    {
      id: 'en-pro-q120',
      text: 'The genetic material of living organisms is primarily composed of deoxyribonucleic acid, abbreviated as ___ .',
      type: 'fill-in-the-blank',
      category: 'Science',
      answers: [],
      correctAnswer: 'DNA',
      explanation: 'DNA carries the genetic instructions for the growth, development, functioning, and reproduction of all known living organisms.'
    },
    // --- Islamic Culture (40 questions) ---
    // Multiple Choice (24)
    {
      id: 'en-pro-q121',
      text: 'How many pillars of Islam are there?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Three', 'Four', 'Five', 'Six'],
      correctAnswer: 'Five',
      explanation: 'The five pillars of Islam are: the Shahada, Salat, Zakat, Sawm, and Hajj.'
    },
    {
      id: 'en-pro-q122',
      text: 'What is the name of the cave where the Prophet Muhammad (PBUH) used to meditate before receiving revelation?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Cave of Thawr', 'Cave of Hira', 'Cave of Uhud', 'Cave of Badr'],
      correctAnswer: 'Cave of Hira',
      explanation: 'The Cave of Hira is located on the mountain of Jabal al-Nour, where the first revelation was sent to the Prophet Muhammad (PBUH).'
    },
    {
      id: 'en-pro-q123',
      text: 'Who was the first Muezzin in Islam?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Umar ibn al-Khattab', 'Ali ibn Abi Talib', 'Abu Bakr al-Siddiq', 'Bilal ibn Rabah'],
      correctAnswer: 'Bilal ibn Rabah',
      explanation: 'Bilal ibn Rabah was chosen to be the first Muezzin in Islam for his beautiful voice.'
    },
    {
      id: 'en-pro-q124',
      text: 'What is the longest chapter (Surah) in the Quran?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Surah Al-Imran', 'Surah Al-Baqarah', 'Surah An-Nisa', 'Surah Al-Maidah'],
      correctAnswer: 'Surah Al-Baqarah',
      explanation: 'Surah Al-Baqarah is the longest chapter in the Quran and consists of 286 verses.'
    },
    {
      id: 'en-pro-q125',
      text: 'In which Hijri month do Muslims fast?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Shawwal', 'Dhul-Hijjah', 'Ramadan', 'Rajab'],
      correctAnswer: 'Ramadan',
      explanation: 'Fasting in the month of Ramadan is the fourth pillar of Islam.'
    },
    {
      id: 'en-pro-q126',
      text: 'Which companion was given the title "The Sword of Allah"?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Ali ibn Abi Talib', 'Umar ibn al-Khattab', 'Hamza ibn Abd al-Muttalib', 'Khalid ibn al-Walid'],
      correctAnswer: 'Khalid ibn al-Walid',
      explanation: 'Prophet Muhammad (PBUH) gave Khalid ibn al-Walid this title for his courage and military prowess.'
    },
    {
      id: 'en-pro-q127',
      text: 'What was the first Qibla (direction of prayer) for Muslims?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['The Kaaba', 'Al-Aqsa Mosque', 'The Prophet\'s Mosque', 'Quba Mosque'],
      correctAnswer: 'Al-Aqsa Mosque',
      explanation: 'Al-Aqsa Mosque in Jerusalem was the first Qibla for Muslims before it was changed to the Kaaba in Mecca.'
    },
    {
      id: 'en-pro-q128',
      text: 'How many names of Allah (Asma ul-Husna) are there?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['50', '99', '100', '114'],
      correctAnswer: '99',
      explanation: 'It is mentioned in the Hadith that Allah has ninety-nine names.'
    },
    {
      id: 'en-pro-q129',
      text: 'Who are the four Rightly Guided Caliphs in order?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Abu Bakr, Umar, Ali, Uthman', 'Abu Bakr, Umar, Uthman, Ali', 'Abu Bakr, Ali, Umar, Uthman', 'Umar, Abu Bakr, Uthman, Ali'],
      correctAnswer: 'Abu Bakr, Umar, Uthman, Ali',
      explanation: 'The correct order of the Rightly Guided Caliphs is: Abu Bakr al-Siddiq, then Umar ibn al-Khattab, then Uthman ibn Affan, then Ali ibn Abi Talib.'
    },
    {
      id: 'en-pro-q130',
      text: 'In what year did the Prophet Muhammad (PBUH) migrate from Mecca to Medina?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Year of the Elephant', 'Year of Sorrow', 'Year of Delegations', 'Year of the Hijra (622 AD)'],
      correctAnswer: 'Year of the Hijra (622 AD)',
      explanation: 'The Hijra (migration) is a pivotal event in Islamic history and marks the beginning of the Islamic calendar.'
    },
    {
      id: 'en-pro-q131',
      text: 'Which prayer has no Ruku (bowing) or Sujud (prostration)?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Eid Prayer', 'Istisqa Prayer', 'Funeral Prayer (Janazah)', 'Kusuf Prayer'],
      correctAnswer: 'Funeral Prayer (Janazah)',
      explanation: 'The funeral prayer consists of four Takbirs and standing only, and does not include bowing or prostration.'
    },
    {
      id: 'en-pro-q132',
      text: 'What was the name of Pharaoh\'s wife who believed in God?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Hagar', 'Zubaidah', 'Asiya', 'Bilqis'],
      correctAnswer: 'Asiya',
      explanation: 'Asiya bint Muzahim, the wife of Pharaoh, is one of the women mentioned in the Quran as an example for believers.'
    },
    {
      id: 'en-pro-q133',
      text: 'Which prophet was swallowed by a whale?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Moses (Musa)', 'Joseph (Yusuf)', 'Jonah (Yunus)', 'Abraham (Ibrahim)'],
      correctAnswer: 'Jonah (Yunus)',
      explanation: 'The story of Prophet Yunus (PBUH) is mentioned in the Quran, where he called upon God from the belly of the whale, and his prayer was answered.'
    },
    {
      id: 'en-pro-q134',
      text: 'What is the night that is better than a thousand months?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['The Night of Isra and Miraj', 'Laylat al-Qadr (The Night of Decree)', 'The Night of Mid-Sha\'ban', 'The night of Eid al-Fitr'],
      correctAnswer: 'Laylat al-Qadr (The Night of Decree)',
      explanation: 'Laylat al-Qadr is a great night in the month of Ramadan, believed to be in the last ten days, and worship in it is better than worshiping for a thousand months.'
    },
    {
      id: 'en-pro-q135',
      text: 'Which companion compiled the Quran into a single book during the reign of Abu Bakr al-Siddiq?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Abdullah ibn Masud', 'Zayd ibn Thabit', 'Ubayy ibn Ka\'b', 'Muadh ibn Jabal'],
      correctAnswer: 'Zayd ibn Thabit',
      explanation: 'Caliph Abu Bakr al-Siddiq tasked the companion Zayd ibn Thabit with the mission of compiling the Quran after a large number of memorizers died in the Battle of Yamama.'
    },
    {
      id: 'en-pro-q136',
      text: 'In which battle was Hamza ibn Abd al-Muttalib, the uncle of the Prophet (PBUH), martyred?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Battle of Badr', 'Battle of Uhud', 'Battle of the Trench', 'Battle of Khaybar'],
      correctAnswer: 'Battle of Uhud',
      explanation: 'Hamza ibn Abd al-Muttalib was martyred in the Battle of Uhud, and the Prophet nicknamed him "The Master of Martyrs".'
    },
    {
      id: 'en-pro-q137',
      text: 'What was the name of the Prophet Muhammad\'s (PBUH) she-camel?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Al-Barq', 'Al-Sakbah', 'Al-Qaswa', 'Al-Ya\'fur'],
      correctAnswer: 'Al-Qaswa',
      explanation: 'Al-Qaswa was the she-camel on which the Prophet migrated from Mecca to Medina, and it was the one that knelt at the site where the Prophet\'s Mosque was built.'
    },
    {
      id: 'en-pro-q138',
      text: 'Which prophet was thrown into the fire, but God made it cool and safe for him?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Moses (Musa)', 'Jesus (Isa)', 'Abraham (Ibrahim)', 'Noah (Nuh)'],
      correctAnswer: 'Abraham (Ibrahim)',
      explanation: 'The people of Prophet Ibrahim (PBUH) threw him into the fire for breaking their idols, but God saved him by a miracle.'
    },
    {
      id: 'en-pro-q139',
      text: 'How many times is "Ramadan" mentioned in the Quran?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Once', 'Twice', 'Five times', 'Ten times'],
      correctAnswer: 'Once',
      explanation: 'The month of Ramadan is mentioned once in the Quran in Surah Al-Baqarah, verse 185.'
    },
    {
      id: 'en-pro-q140',
      text: 'Who is the only woman mentioned by name in the Quran?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Khadijah', 'Aisha', 'Fatimah', 'Mary (Maryam)'],
      correctAnswer: 'Mary (Maryam)',
      explanation: 'Maryam, daughter of Imran, mother of Jesus (PBUH), is the only woman mentioned by name in the Quran, and there is a whole chapter named after her.'
    },
    {
      id: 'en-pro-q141',
      text: 'What was the first mosque built in Islam?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['The Grand Mosque (Masjid al-Haram)', 'The Prophet\'s Mosque (Masjid an-Nabawi)', 'Quba Mosque', 'Al-Aqsa Mosque'],
      correctAnswer: 'Quba Mosque',
      explanation: 'Prophet Muhammad (PBUH) built the Quba Mosque upon his arrival on the outskirts of Medina during the Hijra.'
    },
    {
      id: 'en-pro-q142',
      text: 'Which prophet did God speak to directly without revelation?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Abraham (Ibrahim)', 'Moses (Musa)', 'Jesus (Isa)', 'Muhammad (PBUH)'],
      correctAnswer: 'Moses (Musa)',
      explanation: 'Prophet Musa (PBUH) was nicknamed "Kalimullah" (the one who spoke to God) because God spoke to him directly at Mount Tur.'
    },
    {
      id: 'en-pro-q143',
      text: 'What is the book that was revealed to David (Dawud)?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Torah', 'Gospel', 'Zabur (Psalms)', 'Scrolls'],
      correctAnswer: 'Zabur (Psalms)',
      explanation: 'God revealed the Zabur to Prophet Dawud (PBUH).'
    },
    {
      id: 'en-pro-q144',
      text: 'What are pilgrims who come from outside Mecca called?',
      type: 'multiple-choice',
      category: 'Islamic Culture',
      answers: ['Mutamatti\'un', 'Qarinun', 'Afaqiyun', 'Mufridun'],
      correctAnswer: 'Afaqiyun',
      explanation: 'The term "Afaqi" applies to those whose homes are outside the designated Miqat locations for Ihram.'
    },
    // True/False (12)
    {
      id: 'en-pro-q145',
      text: 'The Friday prayer is an individual obligation for every responsible Muslim.',
      type: 'true-false',
      category: 'Islamic Culture',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The Friday prayer is obligatory for adult resident men and is held in a congregation at the time of the Dhuhr prayer.'
    },
    {
      id: 'en-pro-q146',
      text: 'The event of Isra and Miraj took place in Mecca before the Hijra.',
      type: 'true-false',
      category: 'Islamic Culture',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The journey of Isra and Miraj took place in the late Meccan period, and it was during this journey that prayer was enjoined.'
    },
    {
      id: 'en-pro-q147',
      text: 'Zakat is the second pillar of Islam.',
      type: 'true-false',
      category: 'Islamic Culture',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The second pillar is performing the prayer (Salat), and the third pillar is giving Zakat.'
    },
    {
      id: 'en-pro-q148',
      text: 'Umar ibn al-Khattab was the first to be called "Commander of the Faithful".',
      type: 'true-false',
      category: 'Islamic Culture',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Umar ibn al-Khattab was the first caliph to be given the title "Amir al-Mu\'minin".'
    },
    {
      id: 'en-pro-q149',
      text: 'The Quran consists of 114 chapters (Surahs).',
      type: 'true-false',
      category: 'Islamic Culture',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The Quran begins with Surah Al-Fatiha and ends with Surah An-Nas.'
    },
    {
      id: 'en-pro-q150',
      text: 'The Battle of Badr was the first battle in Islam.',
      type: 'true-false',
      category: 'Islamic Culture',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The Battle of Badr took place in the second year of the Hijra and was a decisive victory for the Muslims.'
    },
    {
      id: 'en-pro-q151',
      text: 'Hajj is obligatory once in a lifetime for every capable Muslim.',
      type: 'true-false',
      category: 'Islamic Culture',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Hajj is the fifth pillar of Islam and is obligatory once for those who are able to perform it.'
    },
    {
      id: 'en-pro-q152',
      text: 'The wives of Prophet Muhammad (PBUH) are called "Mothers of the Believers".',
      type: 'true-false',
      category: 'Islamic Culture',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'This honor is mentioned in the Quran in Surah Al-Ahzab.'
    },
    {
      id: 'en-pro-q153',
      text: 'Prophet Joseph (Yusuf) is the son of Jacob (Yaqub).',
      type: 'true-false',
      category: 'Islamic Culture',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Jacob (also known as Israel) is the father of the twelve tribes, including Prophet Yusuf (PBUH).'
    },
    {
      id: 'en-pro-q154',
      text: 'The Witr prayer is a confirmed Sunnah and is prayed after the Isha prayer.',
      type: 'true-false',
      category: 'Islamic Culture',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The Witr prayer is the conclusion of the night prayer, and its minimum is one rak\'ah.'
    },
    {
      id: 'en-pro-q155',
      text: 'Abu Lahab was the uncle of Prophet Muhammad (PBUH) and believed in his message.',
      type: 'true-false',
      category: 'Islamic Culture',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Abu Lahab was one of the staunchest enemies of the Prophet and Islam, and Surah Al-Masad was revealed about him.'
    },
    {
      id: 'en-pro-q156',
      text: 'Eid al-Adha falls on the tenth day of the month of Dhul-Hijjah.',
      type: 'true-false',
      category: 'Islamic Culture',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Muslims celebrate Eid al-Adha in conjunction with the end of the stand on Arafat, the most important pillar of Hajj.'
    },
    // Fill in the Blank (4)
    {
      id: 'en-pro-q157',
      text: 'The companion Uthman ibn Affan was nicknamed Dhu al-___ for marrying two daughters of the Prophet (PBUH).',
      type: 'fill-in-the-blank',
      category: 'Islamic Culture',
      answers: [],
      correctAnswer: 'Nurayn',
      explanation: 'Uthman ibn Affan married Ruqayyah and then after her death, he married Umm Kulthum, the daughters of Prophet Muhammad (PBUH).'
    },
    {
      id: 'en-pro-q158',
      text: 'The first pillar of faith (Iman) is belief in ___.',
      type: 'fill-in-the-blank',
      category: 'Islamic Culture',
      answers: [],
      correctAnswer: 'Allah',
      explanation: 'The six pillars of faith are: belief in Allah, His angels, His books, His messengers, the Last Day, and in divine decree.'
    },
    {
      id: 'en-pro-q159',
      text: 'The name of the angel entrusted with revelation is ___ (Gabriel).',
      type: 'fill-in-the-blank',
      category: 'Islamic Culture',
      answers: [],
      correctAnswer: 'Jibril',
      explanation: 'Jibril (PBUH) was the angel who brought down revelation from God to the prophets and messengers.'
    },
    {
      id: 'en-pro-q160',
      text: 'The ___ Mosque is located in Medina and is the second holiest mosque in Islam.',
      type: 'fill-in-the-blank',
      category: 'Islamic Culture',
      answers: [],
      correctAnswer: 'Prophet\'s',
      explanation: 'It was built by the Prophet Muhammad (PBUH) after his migration to Medina, and it contains his tomb.'
    },
    // --- Technology (40 questions) ---
    // Multiple Choice (24)
    {
      id: 'en-pro-q161',
      text: 'What does "CPU" stand for in the world of computers?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Central Processing Unit', 'Power Control Unit', 'Visual Display Unit', 'Main Control Panel'],
      correctAnswer: 'Central Processing Unit',
      explanation: 'The CPU is the "brain" of the computer.'
    },
    {
      id: 'en-pro-q162',
      text: 'Who is the founder of Microsoft?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Steve Jobs', 'Bill Gates', 'Larry Page', 'Jeff Bezos'],
      correctAnswer: 'Bill Gates',
      explanation: 'Bill Gates and Paul Allen founded Microsoft in 1975.'
    },
    {
      id: 'en-pro-q163',
      text: 'What does the acronym "WWW" stand for?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['World Wide Web', 'World Web Wide', 'Web World Wide', 'Wide World Web'],
      correctAnswer: 'World Wide Web',
      explanation: 'The World Wide Web is a system of interconnected hypertext documents that operate over the Internet.'
    },
    {
      id: 'en-pro-q164',
      text: 'Which of these is not a programming language?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Python', 'Java', 'HTML', 'C++'],
      correctAnswer: 'HTML',
      explanation: 'HTML is a Markup Language used to structure the content of web pages, not a full-fledged programming language.'
    },
    {
      id: 'en-pro-q165',
      text: 'Which company initially developed the "Android" operating system?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Samsung', 'Google', 'Android Inc.', 'Nokia'],
      correctAnswer: 'Android Inc.',
      explanation: 'Android Inc. developed the operating system, and Google acquired it in 2005.'
    },
    {
      id: 'en-pro-q166',
      text: 'What is a "Byte" in computing?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['A unit of processor speed', 'A unit of storage consisting of 8 bits', 'The smallest unit of data', 'A unit of screen resolution'],
      correctAnswer: 'A unit of storage consisting of 8 bits',
      explanation: 'A byte is a fundamental unit of digital information in computing and telecommunications.'
    },
    {
      id: 'en-pro-q167',
      text: 'What was the code name for the first atomic bomb ever detonated?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Fat Man', 'Little Boy', 'Trinity', 'H-Bomb'],
      correctAnswer: 'Trinity',
      explanation: '"Trinity" was the code name for the first test of a nuclear weapon. "Little Boy" and "Fat Man" were the names of the bombs dropped on Japan.'
    },
    {
      id: 'en-pro-q168',
      text: 'Who is considered the "father of the computer"?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Alan Turing', 'John von Neumann', 'Charles Babbage', 'Blaise Pascal'],
      correctAnswer: 'Charles Babbage',
      explanation: 'Charles Babbage is considered the "father of the computer" for his design of the Analytical Engine, the first general-purpose mechanical computer.'
    },
    {
      id: 'en-pro-q169',
      text: 'What does "GPS" stand for?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Global Guiding System', 'Global Positioning System', 'Geographic Satellite System', 'Personal Guidance Satellite'],
      correctAnswer: 'Global Positioning System',
      explanation: 'GPS is an acronym for "Global Positioning System".'
    },
    {
      id: 'en-pro-q170',
      text: 'What technology is used in most modern smartphone screens?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['LCD', 'Plasma', 'OLED', 'CRT'],
      correctAnswer: 'OLED',
      explanation: 'OLED (Organic Light Emitting Diode) screens provide better colors, deeper blacks, and are more energy-efficient compared to LCD.'
    },
    {
      id: 'en-pro-q171',
      text: 'What protocol is used for sending emails?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['HTTP', 'FTP', 'SMTP', 'POP3'],
      correctAnswer: 'SMTP',
      explanation: 'SMTP (Simple Mail Transfer Protocol) is the standard protocol for sending email messages over the Internet.'
    },
    {
      id: 'en-pro-q172',
      text: 'What is "Big Data"?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['A very large database', 'Huge and complex datasets that exceed the capacity of traditional processing software', 'High-speed internet', 'A network of supercomputers'],
      correctAnswer: 'Huge and complex datasets that exceed the capacity of traditional processing software',
      explanation: 'Big Data is characterized by high volume, high velocity, and high variety.'
    },
    {
      id: 'en-pro-q173',
      text: 'What was the first popular web browser?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Internet Explorer', 'Mosaic', 'Netscape Navigator', 'Opera'],
      correctAnswer: 'Mosaic',
      explanation: 'NCSA Mosaic was the web browser that popularized the World Wide Web and played a major role in the growth of the Internet.'
    },
    {
      id: 'en-pro-q174',
      text: 'What does the term "Internet of Things" (IoT) mean?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['A social network for devices', 'A network of physical devices connected to the internet that collect and share data', 'Ultra-high-speed internet', 'A type of artificial intelligence'],
      correctAnswer: 'A network of physical devices connected to the internet that collect and share data',
      explanation: 'IoT includes everything from smart home devices to industrial sensors.'
    },
    {
      id: 'en-pro-q175',
      text: 'Which company is behind the "Google" search engine?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Microsoft', 'Apple', 'Alphabet', 'Amazon'],
      correctAnswer: 'Alphabet',
      explanation: 'In 2015, Google was restructured to become a subsidiary of a new holding company called Alphabet Inc.'
    },
    {
      id: 'en-pro-q176',
      text: 'What is "Blockchain" technology?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['A type of cryptocurrency', 'A distributed and secure database', 'A new network protocol', 'A data compression algorithm'],
      correctAnswer: 'A distributed and secure database',
      explanation: 'A blockchain is a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems, making it difficult to change.'
    },
    {
      id: 'en-pro-q177',
      text: 'Who is the inventor of the telephone?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Thomas Edison', 'Nikola Tesla', 'Alexander Graham Bell', 'Guglielmo Marconi'],
      correctAnswer: 'Alexander Graham Bell',
      explanation: 'Alexander Graham Bell is credited with inventing the first practical telephone and patented it in 1876.'
    },
    {
      id: 'en-pro-q178',
      text: 'What does "RAM" stand for in a computer?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Read-Access Memory', 'Random-Access Memory', 'Run-Access Memory', 'Real-time Access Memory'],
      correctAnswer: 'Random-Access Memory',
      explanation: 'Random-Access Memory (RAM) is volatile memory that computers use to store data that is being actively used.'
    },
    {
      id: 'en-pro-q179',
      text: 'In what year was the first iPhone launched?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['2005', '2007', '2008', '2010'],
      correctAnswer: '2007',
      explanation: 'Steve Jobs unveiled the first iPhone on January 9, 2007, revolutionizing the mobile phone industry.'
    },
    {
      id: 'en-pro-q180',
      text: 'What is an "algorithm"?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['A piece of computer hardware', 'A type of virus', 'A set of instructions to solve a problem or accomplish a task', 'A programming language'],
      correctAnswer: 'A set of instructions to solve a problem or accomplish a task',
      explanation: 'Algorithms are the basis of computer programs and are used in everything from Google searches to running GPS.'
    },
    {
      id: 'en-pro-q181',
      text: 'What platform did Mark Zuckerberg found?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Twitter', 'Instagram', 'Facebook', 'Snapchat'],
      correctAnswer: 'Facebook',
      explanation: 'Mark Zuckerberg launched Facebook from his Harvard dorm room in 2004.'
    },
    {
      id: 'en-pro-q182',
      text: 'What is software that is intended to damage a computer called?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Adware', 'Spyware', 'Malware', 'Freeware'],
      correctAnswer: 'Malware',
      explanation: 'Malware is an umbrella term that covers viruses, worms, Trojans, ransomware, and more.'
    },
    {
      id: 'en-pro-q183',
      text: 'What is "The Cloud" in computing terms?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['A global network of servers that work together as a single ecosystem', 'A type of external hard drive', 'A program to speed up the internet', 'A new operating system'],
      correctAnswer: 'A global network of servers that work together as a single ecosystem',
      explanation: 'Cloud computing allows you to store and access data over the internet instead of on your computer\'s hard drive.'
    },
    {
      id: 'en-pro-q184',
      text: 'Who was the first person to send an email?',
      type: 'multiple-choice',
      category: 'Technology',
      answers: ['Tim Berners-Lee', 'Vint Cerf', 'Ray Tomlinson', 'Steve Wozniak'],
      correctAnswer: 'Ray Tomlinson',
      explanation: 'In 1971, Ray Tomlinson sent the first email on the ARPANET network, and he also invented the use of the "@" symbol to separate the username from the host name.'
    },
    // True/False (12)
    {
      id: 'en-pro-q185',
      text: 'The Linux operating system is open-source software.',
      type: 'true-false',
      category: 'Technology',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Open source means the source code is freely available and can be modified and distributed by anyone.'
    },
    {
      id: 'en-pro-q186',
      text: 'The first general-purpose electronic computer was called ENIAC.',
      type: 'true-false',
      category: 'Technology',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'ENIAC (Electronic Numerical Integrator and Computer) was built in the 1940s and was the size of a large room.'
    },
    {
      id: 'en-pro-q187',
      text: 'The electric light bulb was invented by Nikola Tesla.',
      type: 'true-false',
      category: 'Technology',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'While Tesla made significant contributions to electricity, the invention of the commercially practical electric light bulb is attributed to Thomas Edison.'
    },
    {
      id: 'en-pro-q188',
      text: 'Wi-Fi is short for "Wireless Fidelity".',
      type: 'true-false',
      category: 'Technology',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Despite common belief, the term Wi-Fi is just a trademark and does not stand for anything. It was chosen for its ease of pronunciation.'
    },
    {
      id: 'en-pro-q189',
      text: 'Python is older than Java.',
      type: 'true-false',
      category: 'Technology',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Python was first released in 1991, while Java was released in 1995.'
    },
    {
      id: 'en-pro-q190',
      text: 'Bitcoin is the only cryptocurrency.',
      type: 'true-false',
      category: 'Technology',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'There are thousands of other cryptocurrencies, such as Ethereum and Ripple, collectively known as "altcoins".'
    },
    {
      id: 'en-pro-q191',
      text: 'The Hubble Space Telescope was launched in the 21st century.',
      type: 'true-false',
      category: 'Technology',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The Hubble Space Telescope was launched in 1990.'
    },
    {
      id: 'en-pro-q192',
      text: 'Artificial intelligence (AI) can now compose music and create works of art.',
      type: 'true-false',
      category: 'Technology',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Generative AI models have made significant progress in creating creative content that resembles human creations.'
    },
    {
      id: 'en-pro-q193',
      text: 'The first video uploaded to YouTube was titled "Me at the zoo".',
      type: 'true-false',
      category: 'Technology',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'The video was uploaded by YouTube co-founder Jawed Karim in 2005.'
    },
    {
      id: 'en-pro-q194',
      text: 'USB stands for "Universal Serial Bus".',
      type: 'true-false',
      category: 'Technology',
      answers: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'USB is an industry standard established to standardize the connection of computer peripherals.'
    },
    {
      id: 'en-pro-q195',
      text: 'A 3D printer can only print plastic.',
      type: 'true-false',
      category: 'Technology',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'Modern 3D printers can print with a variety of materials, including metals, resins, and even biological materials.'
    },
    {
      id: 'en-pro-q196',
      text: 'The computer mouse was invented by Apple.',
      type: 'true-false',
      category: 'Technology',
      answers: ['True', 'False'],
      correctAnswer: 'False',
      explanation: 'The computer mouse was invented by Douglas Engelbart at the Stanford Research Institute in the 1960s. Apple later popularized its use with the Macintosh computer.'
    },
    // Fill in the Blank (4)
    {
      id: 'en-pro-q197',
      text: '___ Berners-Lee is considered the primary inventor of the World Wide Web.',
      type: 'fill-in-the-blank',
      category: 'Technology',
      answers: [],
      correctAnswer: 'Tim',
      explanation: 'In 1989, English engineer Tim Berners-Lee proposed an information management system and created the first successful connection between an HTTP client and server over the Internet.'
    },
    {
      id: 'en-pro-q198',
      text: 'The acronym PDF stands for "Portable Document ___".',
      type: 'fill-in-the-blank',
      category: 'Technology',
      answers: [],
      correctAnswer: 'Format',
      explanation: 'The Portable Document Format (PDF) was developed by Adobe to preserve document formatting regardless of the software or operating system used to view them.'
    },
    {
      id: 'en-pro-q199',
      text: '___ Reality (VR) is a technology that creates a simulated environment that users can interact with.',
      type: 'fill-in-the-blank',
      category: 'Technology',
      answers: [],
      correctAnswer: 'Virtual',
      explanation: 'Virtual Reality uses headsets to immerse the user in a computer-generated world.'
    },
    {
      id: 'en-pro-q200',
      text: 'The first satellite launched into space was ___ 1 by the Soviet Union.',
      type: 'fill-in-the-blank',
      category: 'Technology',
      answers: [],
      correctAnswer: 'Sputnik',
      explanation: 'The launch of Sputnik 1 in 1957 initiated the Space Race between the United States and the Soviet Union.'
    },
      {
    id: 'en-pro-q201',
    text: 'Which country has won the most FIFA World Cup titles?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Germany', 'Italy', 'Argentina', 'Brazil'],
    correctAnswer: 'Brazil',
    explanation: 'Brazil has won the World Cup 5 times, which is a record.'
  },
  {
    id: 'en-pro-q202',
    text: 'How many players are in a standard basketball team?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['5 players', '6 players', '7 players', '11 players'],
    correctAnswer: '5 players',
    explanation: 'Each basketball team consists of 5 players on the court at the same time.'
  },
  {
    id: 'en-pro-q203',
    text: 'Who is the fastest runner in the world and holds the world record for the 100-meter race?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Carl Lewis', 'Tyson Gay', 'Usain Bolt', 'Justin Gatlin'],
    correctAnswer: 'Usain Bolt',
    explanation: 'Jamaican runner Usain Bolt holds the world record for the 100-meter race with a time of 9.58 seconds.'
  },
  {
    id: 'en-pro-q204',
    text: 'What is the duration of a half in soccer?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['40 minutes', '45 minutes', '50 minutes', '60 minutes'],
    correctAnswer: '45 minutes',
    explanation: 'A soccer match consists of two halves, each lasting 45 minutes.'
  },
  {
    id: 'en-pro-q205',
    text: 'In which sport is the term "Knockout" used?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Tennis', 'Baseball', 'Boxing', 'Golf'],
    correctAnswer: 'Boxing',
    explanation: 'Knockout (KO) is one of the ways to end a match in combat sports like boxing.'
  },
  {
    id: 'en-pro-q206',
    text: 'What is the official distance of a marathon race?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['20.5 kilometers', '30.1 kilometers', '42.195 kilometers', '50 kilometers'],
    correctAnswer: '42.195 kilometers',
    explanation: 'The official marathon distance was set at 42.195 km (26.2 miles) during the 1908 Olympics.'
  },
  {
    id: 'en-pro-q207',
    text: 'Which basketball player is known by the nickname "The King"?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Michael Jordan', 'Kobe Bryant', 'LeBron James', 'Shaquille O\'Neal'],
    correctAnswer: 'LeBron James',
    explanation: 'LeBron James is the famous basketball player who carries the nickname "King James".'
  },
  {
    id: 'en-pro-q208',
    text: 'In which sport is the "Black Belt" awarded as the highest rank?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Fencing', 'Taekwondo and Karate', 'Weightlifting', 'Gymnastics'],
    correctAnswer: 'Taekwondo and Karate',
    explanation: 'In many Japanese and Korean martial arts, the black belt represents an advanced level of expertise.'
  },
  {
    id: 'en-pro-q209',
    text: 'Which country hosted the 2022 FIFA World Cup?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Brazil', 'Russia', 'Qatar', 'France'],
    correctAnswer: 'Qatar',
    explanation: 'Qatar was the first Middle Eastern country to host the FIFA World Cup tournament.'
  },
  {
    id: 'en-pro-q210',
    text: 'How many points does a touchdown award in American football?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['3 points', '6 points', '7 points', '2 points'],
    correctAnswer: '6 points',
    explanation: 'A touchdown awards 6 points, with an opportunity for an extra point (kick) or two points (conversion attempt).'
  },
  {
    id: 'en-pro-q211',
    text: 'Which tennis player holds the record for the most Grand Slam titles in men\'s tennis?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Roger Federer', 'Rafael Nadal', 'Pete Sampras', 'Novak Djokovic'],
    correctAnswer: 'Novak Djokovic',
    explanation: 'As of 2024, Novak Djokovic has surpassed his rivals to become the most decorated player in men\'s tennis Grand Slam history.'
  },
  {
    id: 'en-pro-q212',
    text: 'Which sport does Lionel Messi play?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Basketball', 'Tennis', 'Soccer', 'Cricket'],
    correctAnswer: 'Soccer',
    explanation: 'Lionel Messi is an Argentine soccer player and is considered one of the greatest players in the history of the game.'
  },
  {
    id: 'en-pro-q213',
    text: 'Where were the first modern Olympic Games held?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Paris', 'London', 'Berlin', 'Athens'],
    correctAnswer: 'Athens',
    explanation: 'The first modern Olympic Games were held in Athens, Greece, in 1896.'
  },
  {
    id: 'en-pro-q214',
    text: 'What is the most watched sporting event in the world?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['FIFA World Cup Final', 'Super Bowl (American Football)', 'Summer Olympics Opening Ceremony', 'Formula 1 Racing'],
    correctAnswer: 'FIFA World Cup Final',
    explanation: 'The FIFA World Cup Final regularly attracts the largest number of viewers worldwide, surpassing other events.'
  },
  {
    id: 'en-pro-q215',
    text: 'In tennis, what does "Love" mean?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Winning point', 'Tie', 'Zero', 'End of set'],
    correctAnswer: 'Zero',
    explanation: 'In the tennis scoring system, "Love" means zero. (15-Love means 15-0).'
  },
  {
    id: 'en-pro-q216',
    text: 'Which boxer was famous for the phrase "Float like a butterfly, sting like a bee"?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Mike Tyson', 'Muhammad Ali', 'Joe Frazier', 'George Foreman'],
    correctAnswer: 'Muhammad Ali',
    explanation: 'This famous phrase described Muhammad Ali\'s unique boxing style.'
  },
  {
    id: 'en-pro-q217',
    text: 'How many holes are in a standard golf course?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['9', '12', '18', '24'],
    correctAnswer: '18',
    explanation: 'A standard round of golf consists of playing 18 holes.'
  },
  {
    id: 'en-pro-q218',
    text: 'Which sport is known as "the king of sports"?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Soccer', 'Basketball', 'Tennis', 'Boxing'],
    correctAnswer: 'Soccer',
    explanation: 'Soccer (Association football) is known by this title for being the most popular and widespread sport in the world.'
  },
  {
    id: 'en-pro-q219',
    text: 'Which country won the first FIFA World Cup in 1930?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Brazil', 'Italy', 'Uruguay', 'Germany'],
    correctAnswer: 'Uruguay',
    explanation: 'Uruguay hosted and won the first World Cup after defeating Argentina in the final.'
  },
  {
    id: 'en-pro-q220',
    text: 'What are the five colors of the Olympic rings?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Blue, yellow, black, green, red', 'Blue, orange, black, green, red', 'Blue, yellow, purple, green, red', 'White, yellow, black, green, red'],
    correctAnswer: 'Blue, yellow, black, green, red',
    explanation: 'The five rings represent the five continents, and the colors (including white for the background) were chosen because every national flag in the world contains at least one of them.'
  },
  {
    id: 'en-pro-q221',
    text: 'Who is Michael Jordan?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Legendary soccer player', 'Legendary basketball player', 'Olympic swimmer', 'World boxing champion'],
    correctAnswer: 'Legendary basketball player',
    explanation: 'Michael Jordan is widely considered the greatest basketball player in history, leading the Chicago Bulls to 6 NBA championships.'
  },
  {
    id: 'en-pro-q222',
    text: 'What is the name of the major tennis tournament held in London, England?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['US Open', 'French Open (Roland Garros)', 'Australian Open', 'Wimbledon'],
    correctAnswer: 'Wimbledon',
    explanation: 'Wimbledon is the oldest tennis tournament in the world and is famous for being the only one played on grass courts.'
  },
  {
    id: 'en-pro-q223',
    text: 'In which city is Real Madrid football club located?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Barcelona', 'Madrid', 'Seville', 'Valencia'],
    correctAnswer: 'Madrid',
    explanation: 'Real Madrid is a professional football club based in Madrid, Spain.'
  },
  {
    id: 'en-pro-q224',
    text: 'Which sport is Serena Williams famous for?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Athletics', 'Gymnastics', 'Swimming', 'Tennis'],
    correctAnswer: 'Tennis',
    explanation: 'Serena Williams is one of the greatest tennis players in history, having won numerous Grand Slam titles.'
  },
  {
    id: 'en-pro-q225',
    text: 'How many sets in a men\'s tennis match at Grand Slam tournaments?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Best of 2 sets', 'Best of 3 sets', 'Best of 5 sets', 'Best of 7 sets'],
    correctAnswer: 'Best of 5 sets',
    explanation: 'A player must win 3 out of 5 sets to win the match in men\'s Grand Slam tournaments.'
  },
  {
    id: 'en-pro-q226',
    text: 'What is the highest governing body of football in the world?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['UEFA', 'FIFA', 'IOC (International Olympic Committee)', 'NBA'],
    correctAnswer: 'FIFA',
    explanation: 'The International Federation of Association Football (FIFA) is the global governing body of football, responsible for organizing the World Cup.'
  },
  {
    id: 'en-pro-q227',
    text: 'Which sport involves "swimming", "cycling", and "running"?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['Modern Pentathlon', 'Triathlon', 'Marathon', 'Decathlon'],
    correctAnswer: 'Triathlon',
    explanation: 'A triathlon is a race consisting of three consecutive stages of swimming, cycling, and running.'
  },
  {
    id: 'en-pro-q228',
    text: 'What is the "Super Bowl"?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['World Baseball Championship', 'NFL Championship Final (American Football)', 'Famous car race', 'Heavyweight boxing championship'],
    correctAnswer: 'NFL Championship Final (American Football)',
    explanation: 'The Super Bowl is the final game of the National Football League (NFL) and is the most-watched sporting event in the United States.'
  },
  {
    id: 'en-pro-q229',
    text: 'How many gold medals did swimmer Michael Phelps win in the Olympics?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['12', '18', '23', '28'],
    correctAnswer: '23',
    explanation: 'Michael Phelps is the most decorated Olympian in history with a total of 28 medals, including 23 gold medals.'
  },
  {
    id: 'en-pro-q230',
    text: 'What is the nationality of Formula 1 driver Lewis Hamilton?',
    type: 'multiple-choice',
    category: 'Sports',
    answers: ['German', 'British', 'French', 'Brazilian'],
    correctAnswer: 'British',
    explanation: 'Lewis Hamilton is a British racing driver and is considered one of the most successful drivers in Formula 1 history.'
  },
  {
    id: 'en-pro-q231',
    text: 'Cricket is played with two teams of 11 players each.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Cricket is a bat-and-ball sport played between two teams of 11 players.'
  },
  {
    id: 'en-pro-q232',
    text: 'Mohamed Salah is an Egyptian football player who plays for Liverpool.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Mohamed Salah is one of the most prominent players in the world, playing as a forward for Liverpool and the Egyptian national team.'
  },
  {
    id: 'en-pro-q233',
    text: 'The Summer Olympics are held every 5 years.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'The Summer and Winter Olympics are held every 4 years.'
  },
  {
    id: 'en-pro-q234',
    text: 'In soccer, a red card means the player is ejected from the match.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'The red card is used to penalize serious offenses, and the player who receives it must leave the field immediately.'
  },
  {
    id: 'en-pro-q235',
    text: 'The sport of "Rugby" originated in the United States.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Rugby originated in England at Rugby School in the early 19th century.'
  },
  {
    id: 'en-pro-q236',
    text: 'Baseball player "Babe Ruth" was famous for playing for the New York Yankees.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Babe Ruth is considered one of the greatest baseball legends and played a major role in the success of the New York Yankees.'
  },
  {
    id: 'en-pro-q237',
    text: 'A soccer goalkeeper cannot touch the ball with their hands outside the penalty area.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'The goalkeeper is only allowed to use their hands within their own penalty area.'
  },
  {
    id: 'en-pro-q238',
    text: 'The "Indy 500" is a motorcycle race.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'The Indianapolis 500 (Indy 500) is a famous car race held in the United States.'
  },
  {
    id: 'en-pro-q239',
    text: 'Pelé is known as a Brazilian football legend.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Pelé is the only player to have won the World Cup three times (1958, 1962, 1970) and is widely considered one of the greatest players of all time.'
  },
  {
    id: 'en-pro-q240',
    text: 'The "Masters Tournament" is known as one of the four major tournaments in tennis.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'The Masters Tournament is one of the four major championships (Majors) in golf, not tennis.'
  },
  {
    id: 'en-pro-q241',
    text: 'Player "Kareem Abdul-Jabbar" is the all-time leading scorer in the NBA.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Kareem Abdul-Jabbar was the all-time leading scorer for decades, but LeBron James surpassed him in 2023 to become the new all-time leading scorer in the NBA.'
  },
  {
    id: 'en-pro-q242',
    text: 'FC Barcelona football club was founded in Spain.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'FC Barcelona was founded in 1899 and is located in Barcelona, Catalonia, Spain.'
  },
  {
    id: 'en-pro-q243',
    text: 'The objective in bowling is to knock down 12 pins.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'The objective is to knock down 10 pins using the ball.'
  },
  {
    id: 'en-pro-q244',
    text: 'An ice hockey match lasts 60 minutes of actual playing time.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'The game is divided into three periods, each lasting 20 minutes of actual playing time.'
  },
  {
    id: 'en-pro-q245',
    text: 'Spain has won the FIFA World Cup only once.',
    type: 'true-false',
    category: 'Sports',
    answers: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Spain achieved its only World Cup victory in the 2010 tournament held in South Africa.'
  },
  {
    id: 'en-pro-q246',
    text: 'The "Tour de France" is the most famous ___ race in the world.',
    type: 'fill-in-the-blank',
    category: 'Sports',
    answers: [],
    correctAnswer: 'cycling',
    explanation: 'The Tour de France is one of the three "Grand Tours" of cycling and is held annually in France.'
  },
  {
    id: 'en-pro-q247',
    text: 'In chess, the only piece that can jump over other pieces is the ___.',
    type: 'fill-in-the-blank',
    category: 'Sports',
    answers: [],
    correctAnswer: 'knight',
    explanation: 'The knight moves in an L-shape and is the only piece that is not obstructed by other pieces in its path.'
  },
  {
    id: 'en-pro-q248',
    text: 'The American professional basketball league is known as ___.',
    type: 'fill-in-the-blank',
    category: 'Sports',
    answers: [],
    correctAnswer: 'NBA',
    explanation: 'NBA stands for National Basketball Association and is the strongest and most famous basketball league in the world.'
  },
  {
    id: 'en-pro-q249',
    text: 'The player who scores goals in soccer is called a ___.',
    type: 'fill-in-the-blank',
    category: 'Sports',
    answers: [],
    correctAnswer: 'striker',
    explanation: 'The striker is the player whose position is closest to the opponent\'s goal and whose primary task is to score goals.'
  },
  {
    id: 'en-pro-q250',
    text: 'The winner in first place at the Olympics is awarded a ___ medal.',
    type: 'fill-in-the-blank',
    category: 'Sports',
    answers: [],
    correctAnswer: 'gold',
    explanation: 'The top three positions win medals: gold (first), silver (second), and bronze (third).'
  },
      {
      id: 'en-pro-q251',
      text: 'What has an eye, but cannot see? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A needle',
      explanation: 'A needle has an \'eye\' (the hole for the thread) but cannot see.'
    },
    {
      id: 'en-pro-q252',
      text: 'What gets wetter as it dries? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A towel',
      explanation: 'A towel absorbs water (gets wetter) while it is drying you.'
    },
    {
      id: 'en-pro-q253',
      text: 'What is full of holes but still holds water? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A sponge',
      explanation: 'A sponge is porous and full of holes, which is how it absorbs and holds water.'
    },
    {
      id: 'en-pro-q254',
      text: 'What has many keys but can\'t open a single lock? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A piano',
      explanation: 'A piano has keys that you play, but they don\'t open doors.'
    },
    {
      id: 'en-pro-q255',
      text: 'What has a neck without a head, and a body without legs? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A bottle',
      explanation: 'A bottle has a \'neck\' but no head, and a \'body\' but no legs.'
    },
    {
      id: 'en-pro-q257',
      text: 'What is always in front of you but can\'t be seen? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'The future',
      explanation: 'The future is always ahead of us, but we cannot see what it holds.'
    },
    {
      id: 'en-pro-q258',
      text: 'What has a thumb and four fingers, but is not a hand? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A glove',
      explanation: 'A glove is shaped to fit a hand, but it is not a hand itself.'
    },
    {
      id: 'en-pro-q259',
      text: 'What goes up but never comes down? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'Your age',
      explanation: 'Your age constantly increases (goes up) and never decreases.'
    },
    {
      id: 'en-pro-q260',
      text: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'An echo',
      explanation: 'An echo \'speaks\' by repeating sounds and \'hears\' the sound to repeat it, but it\'s just sound waves.'
    },
    {
      id: 'en-pro-q261',
      text: 'What has to be broken before it can be used? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'An egg',
      explanation: 'You must break an egg\'s shell to use the inside.'
    },
    {
      id: 'en-pro-q262',
      text: 'What has many teeth but cannot bite? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A comb',
      explanation: 'A comb has teeth used for styling hair, but it doesn\'t bite.'
    },
    {
      id: 'en-pro-q263',
      text: 'What is black when you buy it, red when you use it, and gray when you throw it away? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'Charcoal',
      explanation: 'Charcoal is black, glows red when hot, and turns to gray ash.'
    },
    {
      id: 'en-pro-q264',
      text: 'What has cities, but no houses; forests, but no trees; and water, but no fish? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A map',
      explanation: 'A map is a representation of these places, not the places themselves.'
    },
    {
      id: 'en-pro-q265',
      text: 'What can you catch, but not throw? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A cold',
      explanation: 'This is a play on words. You \'catch a cold\' (get sick), but you can\'t throw it.'
    },
    {
      id: 'en-pro-q267',
      text: 'What is so fragile that saying its name breaks it? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'Silence',
      explanation: 'The act of speaking (saying \'silence\' or anything else) breaks the silence.'
    },
    {
      id: 'en-pro-q268',
      text: 'What building has the most stories? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A library',
      explanation: 'This is a pun. A library is a building that contains thousands of \'stories\' (books).'
    },
    {
      id: 'en-pro-q269',
      text: 'I am an odd number. Take away a letter, and I become even. What number am I? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'Seven',
      explanation: 'Take the \'S\' away from \'Seven\' and it becomes \'Even\'.'
    },
    {
      id: 'en-pro-q270',
      text: 'What begins with T, ends with T, and has T in it? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A teapot',
      explanation: 'A \'teapot\' starts with T, ends with T, and is filled with \'tea\' (T).'
    },
    {
      id: 'en-pro-q271',
      text: 'What has one head, one foot, and four legs? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A bed',
      explanation: 'A bed has a \'head\' (headboard), a \'foot\' (footboard), and four legs.'
    },
    {
      id: 'en-pro-q272',
      text: 'What can travel all around the world while staying in a corner? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A stamp',
      explanation: 'A postage stamp stays in the corner of an envelope but travels with it anywhere in the world.'
    },
    {
      id: 'en-pro-q275',
      text: 'I have a heart that doesn\'t beat. What am I? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'An artichoke',
      explanation: 'The center of an artichoke is called the \'heart\'.'
    },
    {
      id: 'en-pro-q276',
      text: 'What has many words but never speaks? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A book',
      explanation: 'A book is filled with words, but it cannot speak them aloud.'
    },
    {
      id: 'en-pro-q278',
      text: 'What is always coming but never arrives? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'Tomorrow',
      explanation: 'When tomorrow comes, it becomes \'today,\' so \'tomorrow\' itself never truly arrives.'
    },
    {
      id: 'en-pro-q279',
      text: 'What can fill a room but takes up no space? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'Light',
      explanation: 'Light (and also sound or air) fills a room without taking up physical volume.'
    },
    {
      id: 'en-pro-q280',
      text: 'I am light as a feather, yet the strongest person can\'t hold me for more than 5 minutes. What am I? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'Breath',
      explanation: 'You cannot \'hold\' your breath for very long.'
    },
    {
      id: 'en-pro-q281',
      text: 'If you drop me, I\'m sure to crack. Give me a smile, and I\'ll always smile back. What am I? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A mirror',
      explanation: 'A mirror will crack if dropped, and it reflects your expression.'
    },
    {
      id: 'en-pro-q282',
      text: 'What goes up and down but doesn\'t move? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A staircase',
      explanation: 'A staircase (or stairs) is stationary, but you use it to go up and down.'
    },
    {
      id: 'en-pro-q283',
      text: 'What belongs to you, but other people use it more than you do? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'Your name',
      explanation: 'Other people use your name to call you, refer to you, and talk to you, far more often than you use it yourself.'
    },
    {
      id: 'en-pro-q284',
      text: 'What runs but never walks, has a mouth but never talks? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A river',
      explanation: 'A river \'runs\' its course and has a \'mouth\' where it meets the sea, but it cannot walk or talk.'
    },
    {
      id: 'en-pro-q285',
      text: 'What has 13 hearts, but no other organs? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A deck of cards',
      explanation: 'A standard deck of playing cards has four suits, and one of them is \'Hearts,\' with 13 cards (A, 2-10, J, Q, K).'
    },
    {
      id: 'en-pro-q286',
      text: 'What occurs once in a minute, twice in a moment, but never in a thousand years? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'The letter M',
      explanation: 'This is a word puzzle. The letter \'M\' appears once in \'minute,\' twice in \'moment,\' and not at all in \'a thousand years.\''
    },
    {
      id: 'en-pro-q287',
      text: 'What is the end of everything? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'The letter G',
      explanation: 'While correct, clarity can be improved. "The letter g is the last letter in the word everything .'
    },
    {
      id: 'en-pro-q288',
      text: 'I am tall when I am young, and short when I am old. What am I? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A candle',
      explanation: 'A candle is tall when new and gets shorter as it burns down (gets old).'
    },
    {
      id: 'en-pro-q291',
      text: 'What has a face and two hands but no arms or legs? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A clock',
      explanation: 'A clock has a \'face\' where the numbers are and \'hands\' to point to the time.'
    },
    {
      id: 'en-pro-q293',
      text: 'I have keys but open no locks. I have space but no room. You can enter, but you can\'t go outside. What am I? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A keyboard',
      explanation: 'It has \'keys\' (like \'Space\' bar) but no \'room\' (physical space). You \'enter\' data, but you can\'t \'go outside\' (a pun on the Enter key).'
    },
    {
      id: 'en-pro-q295',
      text: 'If you have me, you want to share me. If you share me, you haven\'t kept me. What am I? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'A secret',
      explanation: 'The nature of a secret is that once you share it, it is no longer kept.'
    },
    {
      id: 'en-pro-q296',
      text: 'What can be measured but has no length, width, or height? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'Temperature',
      explanation: 'Temperature (and also time) is a measurement that does not have physical dimensions.'
    },
    {
      id: 'en-pro-q299',
      text: 'I am a word of five letters. People eat me. If you remove the first letter, I become a form of energy. What am I? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'Wheat',
      explanation: 'People eat WHEAT. Remove the \'W\', and you are left with HEAT.'
    },
    {
      id: 'en-pro-q300',
      text: 'What follows you all the time and copies your every move, but you can\'t touch it or catch it? ___',
      type: 'fill-in-the-blank',
      category: 'Riddles',
      answers: [],
      correctAnswer: 'Your shadow',
      explanation: 'Your shadow mimics your movements but is intangible.'
    },
	// --- 50 New Mixed Questions ---

    // Literature & Arts (10)
    {
      id: 'en-pro-q301',
      text: 'Who wrote the play "Romeo and Juliet"?',
      type: 'multiple-choice',
      category: 'Literature & Arts',
      answers: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
      correctAnswer: 'William Shakespeare',
      explanation: 'William Shakespeare is the famous English playwright who wrote "Romeo and Juliet" in the late 16th century.'
    },
    {
      id: 'en-pro-q302',
      text: 'Who painted the "Mona Lisa"?',
      type: 'multiple-choice',
      category: 'Literature & Arts',
      answers: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
      correctAnswer: 'Leonardo da Vinci',
      explanation: 'Leonardo da Vinci painted the Mona Lisa in the early 16th century; it is now housed in the Louvre Museum.'
    },
    {
      id: 'en-pro-q303',
      text: 'Which novel features a character named Captain Ahab hunting a white whale?',
      type: 'multiple-choice',
      category: 'Literature & Arts',
      answers: ['Moby Dick', 'Treasure Island', '20,000 Leagues Under the Sea', 'Robinson Crusoe'],
      correctAnswer: 'Moby Dick',
      explanation: 'Herman Melville\'s novel "Moby Dick" tells the story of Captain Ahab\'s obsessive quest to kill the white whale.'
    },
    {
      id: 'en-pro-q304',
      text: 'The style of painting known as "Impressionism" originated in which country?',
      type: 'multiple-choice',
      category: 'Literature & Arts',
      answers: ['Italy', 'Spain', 'France', 'Netherlands'],
      correctAnswer: 'France',
      explanation: 'Impressionism emerged in France in the 19th century, characterized by small, thin brushstrokes and emphasis on light.'
    },
    {
      id: 'en-pro-q306',
      text: 'The famous sculpture "The Thinker" was created by ___.',
      type: 'fill-in-the-blank',
      category: 'Literature & Arts',
      answers: [],
      correctAnswer: 'Rodin',
      explanation: 'Auguste Rodin created "The Thinker," a bronze sculpture of a nude male figure sitting on a rock.'
    },
    {
      id: 'en-pro-q307',
      text: 'Author J.K. Rowling is best known for the ___ series of books.',
      type: 'fill-in-the-blank',
      category: 'Literature & Arts',
      answers: [],
      correctAnswer: 'Harry Potter',
      explanation: 'The Harry Potter fantasy series has become one of the best-selling book series in history.'
    },
    {
      id: 'en-pro-q308',
      text: 'Haiku is a form of poetry that originated in ___.',
      type: 'fill-in-the-blank',
      category: 'Literature & Arts',
      answers: [],
      correctAnswer: 'Japan',
      explanation: 'Haiku is a traditional Japanese poetic form consisting of three phrases with a 5, 7, 5 syllable structure.'
    },
    {
      id: 'en-pro-q309',
      text: 'Vincent van Gogh is famous for cutting off his own ___.',
      type: 'fill-in-the-blank',
      category: 'Literature & Arts',
      answers: [],
      correctAnswer: 'ear',
      explanation: 'Van Gogh severed part of his left ear during a period of mental distress.'
    },
    {
      id: 'en-pro-q310',
      text: 'The "Odyssey" is an epic poem attributed to the ancient Greek poet ___.',
      type: 'fill-in-the-blank',
      category: 'Literature & Arts',
      answers: [],
      correctAnswer: 'Homer',
      explanation: 'Homer is the legendary author of the Iliad and the Odyssey, two epic poems that are the foundational works of ancient Greek literature.'
    },

    // Space (10)
    {
      id: 'en-pro-q311',
      text: 'Which planet is closest to the Sun?',
      type: 'multiple-choice',
      category: 'Space',
      answers: ['Venus', 'Mars', 'Mercury', 'Earth'],
      correctAnswer: 'Mercury',
      explanation: 'Mercury is the smallest and innermost planet in the Solar System.'
    },
    {
      id: 'en-pro-q312',
      text: 'What galaxy is our Solar System part of?',
      type: 'multiple-choice',
      category: 'Space',
      answers: ['Andromeda Galaxy', 'Milky Way Galaxy', 'Triangulum Galaxy', 'Whirlpool Galaxy'],
      correctAnswer: 'Milky Way Galaxy',
      explanation: 'The Milky Way is the galaxy that contains our Solar System.'
    },
    {
      id: 'en-pro-q313',
      text: 'Which planet is known for its prominent ring system?',
      type: 'multiple-choice',
      category: 'Space',
      answers: ['Jupiter', 'Uranus', 'Saturn', 'Neptune'],
      correctAnswer: 'Saturn',
      explanation: 'Saturn is famous for its extensive ring system, composed mostly of ice particles with a smaller amount of rocky debris and dust.'
    },
    {
      id: 'en-pro-q314',
      text: 'What is the hottest planet in our Solar System?',
      type: 'multiple-choice',
      category: 'Space',
      answers: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
      correctAnswer: 'Venus',
      explanation: 'Although Mercury is closer to the Sun, Venus has a thick atmosphere that traps heat, making it the hottest planet.'
    },
    {
      id: 'en-pro-q315',
      text: 'The Great Red Spot is a giant storm on which planet?',
      type: 'multiple-choice',
      category: 'Space',
      answers: ['Mars', 'Jupiter', 'Saturn', 'Neptune'],
      correctAnswer: 'Jupiter',
      explanation: 'The Great Red Spot is a persistent high-pressure region in the atmosphere of Jupiter, producing an anticyclonic storm.'
    },
    {
      id: 'en-pro-q316',
      text: 'The first human to travel into space was Yuri ___.',
      type: 'fill-in-the-blank',
      category: 'Space',
      answers: [],
      correctAnswer: 'Gagarin',
      explanation: 'Yuri Gagarin was a Soviet pilot and cosmonaut who became the first human to journey into outer space in 1961.'
    },
    {
      id: 'en-pro-q317',
      text: 'A celestial body that survives its passage through the Earth\'s atmosphere and lands on the ground is called a ___.',
      type: 'fill-in-the-blank',
      category: 'Space',
      answers: [],
      correctAnswer: 'meteorite',
      explanation: 'A meteoroid that enters the atmosphere is a meteor; if it reaches the ground, it is a meteorite.'
    },
    {
      id: 'en-pro-q318',
      text: 'The force that holds the planets in orbit around the Sun is ___.',
      type: 'fill-in-the-blank',
      category: 'Space',
      answers: [],
      correctAnswer: 'gravity',
      explanation: 'Gravity is the force of attraction between all masses in the universe.'
    },
    {
      id: 'en-pro-q319',
      text: 'Pluto is currently classified as a ___ planet.',
      type: 'fill-in-the-blank',
      category: 'Space',
      answers: [],
      correctAnswer: 'dwarf',
      explanation: 'In 2006, the International Astronomical Union reclassified Pluto from a major planet to a dwarf planet.'
    },
    {
      id: 'en-pro-q320',
      text: 'Halley\'s ___ is visible from Earth approximately every 75-76 years.',
      type: 'fill-in-the-blank',
      category: 'Space',
      answers: [],
      correctAnswer: 'Comet',
      explanation: 'Halley\'s Comet is the only known short-period comet that is regularly visible to the naked eye from Earth.'
    },

    // Human Body (10)
    {
      id: 'en-pro-q321',
      text: 'How many bones are in the adult human body?',
      type: 'multiple-choice',
      category: 'Human Body',
      answers: ['206', '250', '180', '300'],
      correctAnswer: '206',
      explanation: 'An adult human skeleton consists of 206 bones.'
    },
    {
      id: 'en-pro-q322',
      text: 'Which organ is responsible for pumping blood throughout the body?',
      type: 'multiple-choice',
      category: 'Human Body',
      answers: ['Lungs', 'Brain', 'Heart', 'Liver'],
      correctAnswer: 'Heart',
      explanation: 'The heart is a muscular organ that pumps blood through the blood vessels of the circulatory system.'
    },
    {
      id: 'en-pro-q323',
      text: 'What is the main function of red blood cells?',
      type: 'multiple-choice',
      category: 'Human Body',
      answers: ['Fighting infection', 'Carrying oxygen', 'Clotting blood', 'Digesting food'],
      correctAnswer: 'Carrying oxygen',
      explanation: 'Red blood cells contain hemoglobin, which transports oxygen from the lungs to the rest of the body.'
    },
    {
      id: 'en-pro-q324',
      text: 'Which is the smallest bone in the human body?',
      type: 'multiple-choice',
      category: 'Human Body',
      answers: ['Stapes (in the ear)', 'Femur (in the thigh)', 'Phalanges (in the fingers)', 'Tibia (in the shin)'],
      correctAnswer: 'Stapes (in the ear)',
      explanation: 'The stapes, located in the middle ear, is the smallest and lightest bone in the human body.'
    },
    {
      id: 'en-pro-q325',
      text: 'What is the largest internal organ in the human body?',
      type: 'multiple-choice',
      category: 'Human Body',
      answers: ['Heart', 'Stomach', 'Liver', 'Lungs'],
      correctAnswer: 'Liver',
      explanation: 'The liver is the largest internal organ (and the largest gland) in the human body.'
    },
    {
      id: 'en-pro-q326',
      text: 'The colored part of the human eye is called the ___.',
      type: 'fill-in-the-blank',
      category: 'Human Body',
      answers: [],
      correctAnswer: 'iris',
      explanation: 'The iris controls the size of the pupil and thus the amount of light reaching the retina.'
    },
    {
      id: 'en-pro-q327',
      text: 'Humans have ___ pairs of ribs.',
      type: 'fill-in-the-blank',
      category: 'Human Body',
      answers: [],
      correctAnswer: '12',
      explanation: 'Most humans have 24 ribs in total, arranged in 12 pairs.'
    },
    {
      id: 'en-pro-q328',
      text: 'The largest muscle in the human body is the gluteus ___.',
      type: 'fill-in-the-blank',
      category: 'Human Body',
      answers: [],
      correctAnswer: 'maximus',
      explanation: 'The gluteus maximus is located in the buttocks and is responsible for keeping the trunk of the body in an erect posture.'
    },
    {
      id: 'en-pro-q329',
      text: 'Enamel is the hardest substance in the human body and is found on the ___.',
      type: 'fill-in-the-blank',
      category: 'Human Body',
      answers: [],
      correctAnswer: 'teeth',
      explanation: 'Tooth enamel is the highly mineralized outer covering of the tooth.'
    },
    {
      id: 'en-pro-q330',
      text: 'The human brain is divided into two halves called ___.',
      type: 'fill-in-the-blank',
      category: 'Human Body',
      answers: [],
      correctAnswer: 'hemispheres',
      explanation: 'The brain is divided into the left and right hemispheres.'
    },

    // General Knowledge (10)
    {
      id: 'en-pro-q331',
      text: 'What is the currency of the United Kingdom?',
      type: 'multiple-choice',
      category: 'General Knowledge',
      answers: ['Euro', 'Dollar', 'Pound Sterling', 'Yen'],
      correctAnswer: 'Pound Sterling',
      explanation: 'The Pound Sterling is the official currency of the United Kingdom.'
    },
    {
      id: 'en-pro-q332',
      text: 'Which element has the chemical symbol "Fe"?',
      type: 'multiple-choice',
      category: 'General Knowledge',
      answers: ['Lead', 'Iron', 'Gold', 'Silver'],
      correctAnswer: 'Iron',
      explanation: 'The symbol "Fe" comes from the Latin word for iron, "ferrum".'
    },
    {
      id: 'en-pro-q333',
      text: 'How many sides does a hexagon have?',
      type: 'multiple-choice',
      category: 'General Knowledge',
      answers: ['5', '6', '8', '10'],
      correctAnswer: '6',
      explanation: 'A hexagon is a six-sided polygon.'
    },
    {
      id: 'en-pro-q334',
      text: 'What is the main ingredient in guacamole?',
      type: 'multiple-choice',
      category: 'General Knowledge',
      answers: ['Tomato', 'Onion', 'Avocado', 'Pepper'],
      correctAnswer: 'Avocado',
      explanation: 'Guacamole is a dip made primarily from mashed avocados.'
    },
    {
      id: 'en-pro-q335',
      text: 'Which continent is the Sahara Desert located on?',
      type: 'multiple-choice',
      category: 'General Knowledge',
      answers: ['Asia', 'South America', 'Africa', 'Australia'],
      correctAnswer: 'Africa',
      explanation: 'The Sahara is the largest hot desert in the world, located in North Africa.'
    },
    {
      id: 'en-pro-q336',
      text: 'A group of lions is called a ___.',
      type: 'fill-in-the-blank',
      category: 'General Knowledge',
      answers: [],
      correctAnswer: 'pride',
      explanation: 'Lions are social cats and live in groups called prides.'
    },
    {
      id: 'en-pro-q337',
      text: 'The largest ocean on Earth is the ___ Ocean.',
      type: 'fill-in-the-blank',
      category: 'General Knowledge',
      answers: [],
      correctAnswer: 'Pacific',
      explanation: 'The Pacific Ocean is the largest and deepest of Earth\'s oceanic divisions.'
    },
    {
      id: 'en-pro-q338',
      text: 'The fictional detective Sherlock Holmes lived at 221B ___ Street.',
      type: 'fill-in-the-blank',
      category: 'General Knowledge',
      answers: [],
      correctAnswer: 'Baker',
      explanation: '221B Baker Street is the fictional London address of Sherlock Holmes.'
    },
    {
      id: 'en-pro-q339',
      text: 'The primary colors are Red, Blue, and ___.',
      type: 'fill-in-the-blank',
      category: 'General Knowledge',
      answers: [],
      correctAnswer: 'Yellow',
      explanation: 'In traditional color theory, red, yellow, and blue are the primary colors from which other colors can be mixed.'
    },
    {
      id: 'en-pro-q340',
      text: 'The Eiffel Tower is located in the city of ___.',
      type: 'fill-in-the-blank',
      category: 'General Knowledge',
      answers: [],
      correctAnswer: 'Paris',
      explanation: 'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.'
    },

    // Animals (10)
    {
      id: 'en-pro-q341',
      text: 'What is the fastest land animal?',
      type: 'multiple-choice',
      category: 'Animals',
      answers: ['Lion', 'Cheetah', 'Horse', 'Leopard'],
      correctAnswer: 'Cheetah',
      explanation: 'The cheetah can reach speeds of up to 112-120 km/h (70-75 mph) in short bursts.'
    },
    {
      id: 'en-pro-q342',
      text: 'Which animal is known as the "Ship of the Desert"?',
      type: 'multiple-choice',
      category: 'Animals',
      answers: ['Camel', 'Horse', 'Elephant', 'Donkey'],
      correctAnswer: 'Camel',
      explanation: 'Camels are called "ships of the desert" because of their ability to carry heavy loads across hot, sandy deserts.'
    },
    {
      id: 'en-pro-q343',
      text: 'What is the largest living bird?',
      type: 'multiple-choice',
      category: 'Animals',
      answers: ['Eagle', 'Albatross', 'Ostrich', 'Penguin'],
      correctAnswer: 'Ostrich',
      explanation: 'The ostrich is the largest and heaviest living bird and lays the largest eggs.'
    },
    {
      id: 'en-pro-q344',
      text: 'Which mammal is capable of true flight?',
      type: 'multiple-choice',
      category: 'Animals',
      answers: ['Flying Squirrel', 'Bat', 'Sugar Glider', 'Lemur'],
      correctAnswer: 'Bat',
      explanation: 'Bats are the only mammals capable of sustained flight.'
    },
    {
      id: 'en-pro-q345',
      text: 'How many hearts does an octopus have?',
      type: 'multiple-choice',
      category: 'Animals',
      answers: ['1', '2', '3', '4'],
      correctAnswer: '3',
      explanation: 'An octopus has three hearts: two pump blood to the gills, and one pumps blood to the rest of the body.'
    },
    {
      id: 'en-pro-q346',
      text: 'The giant panda\'s diet consists almost entirely of ___.',
      type: 'fill-in-the-blank',
      category: 'Animals',
      answers: [],
      correctAnswer: 'bamboo',
      explanation: '99% of a Giant Panda\'s diet is bamboo.'
    },
    {
      id: 'en-pro-q347',
      text: 'A baby kangaroo is called a ___.',
      type: 'fill-in-the-blank',
      category: 'Animals',
      answers: [],
      correctAnswer: 'joey',
      explanation: 'Young kangaroos are carried in their mother\'s pouch and are called joeys.'
    },
    {
      id: 'en-pro-q348',
      text: 'Sharks do not have bones; their skeletons are made of ___.',
      type: 'fill-in-the-blank',
      category: 'Animals',
      answers: [],
      correctAnswer: 'cartilage',
      explanation: 'Cartilage is lighter and more flexible than bone, allowing sharks to be efficient swimmers.'
    },
    {
      id: 'en-pro-q349',
      text: 'The only continent where giraffes live in the wild is ___.',
      type: 'fill-in-the-blank',
      category: 'Animals',
      answers: [],
      correctAnswer: 'Africa',
      explanation: 'Giraffes are native to the scattered savannahs and woodlands of Africa.'
    },
    {
      id: 'en-pro-q350',
      text: 'Bees collect nectar from flowers to make ___.',
      type: 'fill-in-the-blank',
      category: 'Animals',
      answers: [],
      correctAnswer: 'honey',
      explanation: 'Bees convert nectar into honey through a process of regurgitation and evaporation.'
    }
  ],
};