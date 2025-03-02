document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content-area');
    const chaptersContainer = document.getElementById('chapters-container');
    const breadcrumbs = document.getElementById('breadcrumbs');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    const chaptersData = [
        {
                name: 'Poem 1: उत्तमलक्षण',
                description: 'A Marathi poem that describes the characteristics of an ideal person, focusing on virtues and qualities that make an individual great.',
                book: 'poembook.html',
                flashcards: [
                    { front: "कवितेचे नाव काय आहे?", back: "उत्तमलक्षण." },
                    { front: "कवीचे नाव काय आहे?", back: "संत रामदास." },
                    { front: "कविता कोणत्या प्रकाराची आहे?", back: "ओवी." },
                    { front: "काव्यसंग्रह काय आहे?", back: "श्रीदासबोध." },
                    { front: "कवितेचा विषय काय आहे?", back: "उत्तम माणसाची किंवा आदर्श व्यक्तीची लक्षणे." },
                    { front: "कविंची लेखन वैशिष्ट्ये काय आहेत?", back: "ओवी प्रकार, समाजाचे व जनहिताचे अवलोकन, व्यासंग व चिंतन." },
                    { front: "कविता आवडलेली ओळी कोणती आहे?", back: "'प्रत्येक व्यक्तिने चांगले वागण्याचा प्रयत्न केला पाहिजे.'" },
                    { front: "कवितेचा संदेश काय आहे?", back: "प्रत्येकाने चांगले वागण्याचा प्रयत्न केला पाहिजे. आदर्श समाज घडवण्यासाठी प्रत्येक व्यक्तीने चांगला व्यक्ती बनण्याचा प्रयत्न केला पाहिजे." }
                ]
              
        },
        {
                name: 'Poem 2: आश्वासक चित्र',
                description: 'A Marathi poem that focuses on gender equality and the hopeful image of a balanced society where both men and women live in harmony.',
                book: 'poembook.html',
                flashcards: [
                    { front: "कवितेचे नाव काय आहे?", back: "आश्वासक चित्र." },
                    { front: "कवयित्रीचे नाव कोण आहे?", back: "नीरजा राजन धुळेकर." },
                    { front: "कविता कोणत्या प्रकाराची आहे?", back: "मुक्तछंद." },
                    { front: "काव्यसंग्रह काय आहे?", back: "नीरर्थकाचे पक्षी." },
                    { front: "कवितेचा विषय काय आहे?", back: "स्त्री-पुरुष समानतेचे आश्वासक चित्र, समाजातील समानतेचा विचार." },
                    { front: "कवयित्रीची लेखन वैशिष्ट्ये काय आहेत?", back: "साध्या विधानातून खोल विचार, आधुनिक स्त्री-पुरुष समानतेचा विचार सहजतेने व्यक्त करणे." },
                    { front: "कविता आवडलेली ओळी कोणती आहे?", back: "'मुलगा व मुलगी यांच्यात सामंजस्य निर्माण होईल.'" },
                    { front: "कवितेचा संदेश काय आहे?", back: "समाजाने लिंग समानतेला स्वीकारावे, आणि भविष्यकाळात दोन्ही लिंगांनी एकत्र आणि सामंजस्यपूर्ण जीवन जगावे." }
                ]
    
        },
        {
                name: 'Poem 3: वस्तू',
                description: 'A Marathi poem reflecting on the emotional value of inanimate objects and how they hold significance in our lives.',
                book: 'poembook.html',
                flashcards: [
                    { front: "कवितेचे नाव काय आहे?", back: "वस्तू." },
                    { front: "कवीचे नाव कोण आहे?", back: "द. भा. धामनस्कर." },
                    { front: "कविता कोणत्या प्रकाराची आहे?", back: "मुक्तछंद." },
                    { front: "काव्यसंग्रह काय आहे?", back: "भरून आलेले आकाश." },
                    { front: "कवितेचा विषय काय आहे?", back: "निर्जीव वस्तूंचा सजीवपणा, वस्तुंनाही भावना असतात." },
                    { front: "कविंची लेखन वैशिष्ट्ये काय आहेत?", back: "मुक्तछंद, दैनंदिन व्यवहारातील भाषा, हळुवार संवेदनशीलता." },
                    { front: "कविता आवडलेली ओळी कोणती आहे?", back: "'वस्तूंच्या स्वरूपावरून व्यक्तीचे व्यक्तिमत्व कळते.'" },
                    { front: "कवितेचा संदेश काय आहे?", back: "वस्तूंशी प्रेमाने वागले पाहिजे. वस्तूंना भावना असतात आणि त्या आपल्या अस्तित्वाचा भाग असतात. त्यांना टाकून देणे म्हणजे आपले अस्तित्व खंडित करणे." }
                ]
                     
        },
        {
            name: 'Poem 4: भरतवाक्प',
            description: 'A Marathi poem on the transformation through devotion to God and the power of divine knowledge.',
            book: 'poembook.html',
            flashcards: [
                { front: "कवितेचे नाव काय आहे?", back: "भरतवाक्प." },
                { front: "कवीचे नाव कोण आहे?", back: "मोरोपंत (मोरेश्वर रामजी पराडकर)." },
                { front: "कविता कोणत्या प्रकाराची आहे?", back: "आर्य/पंडितीकाव्य." },
                { front: "काव्यसंग्रह काय आहे?", back: "केकावली कावला." },
                { front: "कवितेचा विषय काय आहे?", back: "परमेश्वर भक्तीने परिवर्तन होते." },
                { front: "कविंची लेखन वैशिष्ट्ये काय आहेत?", back: "आर्य वृत्त, चालीमुळे कविता गुणगुणत राहते, संस्कृत शब्दांचा उपयोग." },
                { front: "कविता आवडलेली ओळी कोणती आहे?", back: "'कुणत्याही मोहात बळी न पडता, सत्य कर्म करणे.'" },
                { front: "कवितेचा संदेश काय आहे?", back: "माणसाने सदैव संतांच्या सहवासात राहून सत्य कर्म करावं. जीवनातील खोटा अभिमान आणि मोहाला दूर ठेवून परमेश्वराचे नामस्मरण करावं." }
            ]
        },
        {
            name: 'Poem 5: खोद आणखी थोडेसे',
            description: 'A Marathi poem that emphasizes on continuous effort and persistence, reflecting on the importance of perseverance in life.',
            book: 'poembook.html',
            flashcards: [
                { front: "कवितेचे नाव काय आहे?", back: "खोद आणखी थोडेसे." },
                { front: "कवयित्रीचे नाव कोण आहे?", back: "आसावरी काकडे." },
                { front: "कविता कोणत्या प्रकाराची आहे?", back: "अष्टाक्षरी ओवी." },
                { front: "काव्यसंग्रह काय आहे?", back: "ताहो." },
                { front: "कवितेचा विषय काय आहे?", back: "जीवन जगण्यास सत्य गोष्टींची गरज असते, प्रपत्र आणि सकारात्मकता यांचे महत्व." },
                { front: "कवयित्रीची लेखन वैशिष्ट्ये काय आहेत?", back: "ओघवत्या भाषेमुळे कवितेला सौंदर्य प्राप्त झाले आहे, जीवनाच्या आशावादाने भरलेली कविता." },
                { front: "कविता आवडलेली ओळी कोणती आहे?", back: "'प्रयत्न करा आणि कष्ट करणेच महत्त्वाचे आहे, हवे ते मिळवूच शकता.'" },
                { front: "कवितेचा संदेश काय आहे?", back: "जीवनात कष्ट करूनही यश मिळवता येत नाही, मात्र सतत प्रयत्न आणि विश्वास राखल्यास आशा पुर्ण होईल." }
            ]
        },
        {
            name: 'Poem 6: आकाशी झेप घेरे',
            description: 'A motivational Marathi poem about self-reliance and striving for one\'s goals through perseverance.',
            book: 'poembook.html',
            flashcards: [
                { front: "कवितेचे नाव काय आहे?", back: "आकाशी झेप घेरे." },
                { front: "कवीचे नाव कोण आहे?", back: "जगदीश खेबुडकर." },
                { front: "कविता कोणत्या प्रकाराची आहे?", back: "गीतरचना/संदेशप्रधान." },
                { front: "काव्यसंग्रह काय आहे?", back: "एक चित्रपट गीत (आराम हराम है)." },
                { front: "कवितेचा विषय काय आहे?", back: "स्वसामर्थ्य व स्वातंत्र्य, आणि ध्येय साकार करण्याची इच्छा." },
                { front: "कवीची लेखन वैशिष्ट्ये काय आहेत?", back: "गीताची सुटसुटीत रचना, रसाळ शब्दकळा, अनुप्रासाचा सुंदर वापर." },
                { front: "कविता आवडलेली ओळी कोणती आहे?", back: "'कष्ट केल्याशिवाय फळ मिळत नाही, तूझ कळते पण न वळले.'" },
                { front: "कवितेचा संदेश काय आहे?", back: "स्वसामर्थ्यांवर विश्वास ठेवा, त्यावरच जीवनाला दिशा मिळवून, इच्छित ध्येय प्राप्त करा." }
            ]
        },
        {
            name: 'Poem 7: तू झालास मुक समाजाचा नायक',
            description: 'A powerful Marathi poem that speaks about the struggle against injustice and the importance of fighting for the rights of marginalized people.',
            book: 'poembook.html',
            flashcards: [
                { front: "कवितेचे नाव काय आहे?", back: "तू झालास मुक समाजाचा नायक." },
                { front: "कवीचे नाव कोण आहे?", back: "ज. वि. पवार." },
                { front: "कविता कोणत्या प्रकाराची आहे?", back: "मुक्तछंद." },
                { front: "काव्यसंग्रह काय आहे?", back: "नाकेबंदी." },
                { front: "कवितेचा विषय काय आहे?", back: "अन्यायाविरोधी लढा, डॉ. आंबेडकरांचे महत्त्व, दलित समाजाच्या एकात्मतेची आवश्यकता." },
                { front: "कवयित्रीची लेखन वैशिष्ट्ये काय आहेत?", back: "मुक्तछंदात रचना, सामाजिक रुढी नाकारून नव्या समाजाच्या स्थापनाची प्रेरणा." },
                { front: "कविता आवडलेली ओळी कोणती आहे?", back: "'अज्ञान, दारिद्रय, जातीयता या भोवऱ्यात अडकून पडलेल्या समाजाला बाबासाहेबांनी बाहेर काढले.'" },
                { front: "कवितेचा संदेश काय आहे?", back: "बाबासाहेबांनी दलित समाजाला उठवले, त्यांना आत्मविश्वास व सन्मान दिला. परंतु आता त्यांचे तेज मावळले आहे आणि समाजाला पुन्हा लढण्याची आवश्यकता आहे." }
            ]
        },
        {
            name: "व्याकरण उजळणी",
            description: "This is a comprehensive guide to Marathi grammar, covering various important topics like types of words, sentence structure, tenses, pluralization, compound words, and more.",
            book: 'poembook.html',
            flashcards: [
                        { "front": "शब्दाचे प्रकार काय आहेत?", "back": "शब्दाचे मुख्य प्रकार: संज्ञा, सर्वनाम, क्रिया, विशेषण, क्रियाविशेषण, विभक्ति, समास, वचन." },
                        { "front": "संज्ञा म्हणजे काय?", "back": "संज्ञा म्हणजे व्यक्ती, वस्तू, स्थळ, प्राणी, कल्पना यांचे नाम." },
                        { "front": "सर्वनाम म्हणजे काय?", "back": "सर्वनाम म्हणजे संज्ञेसाठी वापरले जाणारे पर्यायी शब्द, जसे की 'तो', 'ती', 'ते', 'तुम्ही'." },
                        { "front": "क्रिया म्हणजे काय?", "back": "क्रिया म्हणजे क्रियापद, जे कृत्य दर्शवते. उदाहरण: खेळणे, शिकणे, चालणे." },
                        { "front": "विशेषण म्हणजे काय?", "back": "विशेषण म्हणजे संज्ञेचे स्वरूप, गुण, वर्तन दर्शवणारे शब्द. उदाहरण: सुंदर, मोठा, पिवळा." },
                        { "front": "क्रियाविशेषण म्हणजे काय?", "back": "क्रियाविशेषण म्हणजे क्रियेचे अधिक स्पष्ट स्वरूप, जसे की 'जलदपणे', 'चांगले', 'धीराने'." },
                        { "front": "विभक्ति काय आहे?", "back": "विभक्ति म्हणजे संज्ञेला जोडलेले त्याचे सम्बन्ध दर्शवणारे शब्द. उदाहरण: 'च्या', 'ला', 'साठी'." },
                        { "front": "समास म्हणजे काय?", "back": "समास म्हणजे दोन किंवा अधिक शब्दांच्या जोडणीने तयार झालेलं एक नवीन शब्द." },
                        { "front": "वचन म्हणजे काय?", "back": "वचन म्हणजे शब्दाचा एकवचन आणि बहुवचन रूप, उदाहरण: 'लहान' (एकवचन), 'लहानं' (बहुवचन)." },
                        { "front": "वाक्य म्हणजे काय?", "back": "वाक्य म्हणजे दोन किंवा दोन पेक्षा जास्त शब्दांचा समुह ज्यामुळे पूर्ण अर्थ व्यक्त होतो." },
                        { "front": "वाक्याचे मुख्य घटक काय आहेत?", "back": "वाक्याचे मुख्य घटक: कर्ता, क्रिया, कर्त्याचे कार्य, क्रियाविशेषण." },
                        { "front": "संपूर्ण वाक्याचे उद्दिष्ट काय असावे?", "back": "वाक्याचा उद्दिष्ट म्हणजे संप्रेषण करणे. हे समजून घेतल्यावर वाक्याची रचना ठरवता येते." },
                        { "front": "केंद्र वाक्य म्हणजे काय?", "back": "केंद्र वाक्य म्हणजे वाक्याचे प्रमुख विचार आणि विषय दर्शवणारे वाक्य." },
                        { "front": "पर्यायी वाक्य म्हणजे काय?", "back": "पर्यायी वाक्य म्हणजे दोन वाक्यांमध्ये एकाचा दुसऱ्यावर प्रभाव आहे. उदाहरण: 'जर तो आला तर मी जाऊ.'." },
                        { "front": "निमंत्रक वाक्य म्हणजे काय?", "back": "निमंत्रक वाक्य म्हणजे दुसऱ्याला सांगणे किंवा सांगवणे व त्याचे पर्याय किंवा आदेश दाखविणे." },
                         { "front": "काल काय आहे?", "back": "काल म्हणजे क्रियेच्या घडण्याचा काळ. मुख्य तीन काल: भूतकाल, वर्तमानकाल, भविष्यकाल." },
                        { "front": "भूतकाल काय आहे?", "back": "भूतकाल म्हणजे जे कार्य पूर्ण झाले ते दर्शवणारा काळ. उदाहरण: 'मी शाळेत गेलो.'." },
                        { "front": "वर्तमानकाल काय आहे?", "back": "वर्तमानकाल म्हणजे जे कार्य चालू आहे ते दर्शवणारा काळ. उदाहरण: 'मी शाळेत जात आहे.'." },
                        { "front": "भविष्यकाल काय आहे?", "back": "भविष्यकाल म्हणजे जे कार्य भविष्यात होणार आहे ते दर्शवणारा काळ. उदाहरण: 'मी शाळेत जाईन.'." },
                        { "front": "भूतकालाचा वापर कसा करावा?", "back": "भूतकालासाठी 'ला', 'ले', 'ला', 'आहे', 'होते' इत्यादी शब्दांचा वापर केला जातो." },
                        { "front": "वर्तमानकालाचा वापर कसा करावा?", "back": "वर्तमानकालासाठी 'जात आहे', 'करत आहे', 'वाचत आहे' इत्यादी शब्दांचा वापर केला जातो." },
                        { "front": "भविष्यकालाचा वापर कसा करावा?", "back": "भविष्यकालासाठी 'जाईन', 'करू', 'वाचणार' इत्यादी शब्दांचा वापर केला जातो." },
                        { "front": "वचन काय आहे?", "back": "वचन म्हणजे शब्दाचा एकवचन व बहुवचन रूप." },
                        { "front": "एकवचन काय आहे?", "back": "एकवचन म्हणजे एक व्यक्ती किंवा वस्तू दर्शवणारा शब्द. उदाहरण: 'पुस्तक'." },
                        { "front": "बहुवचन काय आहे?", "back": "बहुवचन म्हणजे एकापेक्षा जास्त व्यक्ती किंवा वस्तू दर्शवणारा शब्द. उदाहरण: 'पुस्तके'." },
                        { "front": "एकवचन व बहुवचन रूप कसे बदलतात?", "back": "अधिकतर नामांसाठी 'आ' किंवा 'े' जोडले जातात, उदाहरण: 'लहान' (एकवचन), 'लहानं' (बहुवचन)." },
                        { "front": "विशेषणाचे बहुवचन कसे बदलते?", "back": "विशेषणाच्या बहुवचनासाठी वचनानुसार रूप बदलते. उदाहरण: 'सुंदर' (एकवचन), 'सुंदरं' (बहुवचन)." },
                        { "front": "समास काय आहे?", "back": "समास म्हणजे दोन किंवा अधिक शब्दांपासून एक नवीन शब्द तयार करणे." },
                        { "front": "समासाचे प्रकार काय आहेत?", "back": "मुख्य समास प्रकार: द्वंद्व समास, तत्पुरुष समास, विश्लेषण समास, अव्ययीभाव समास, बहुव्रीहि समास." },
                        { "front": "द्वंद्व समास म्हणजे काय?", "back": "द्वंद्व समास म्हणजे दोन शब्दांचे समान महत्त्व असलेला समास. उदाहरण: 'पाण्याची डाकघर'." },
                        { "front": "तत्पुरुष समास म्हणजे काय?", "back": "तत्पुरुष समास म्हणजे दोन शब्दांमध्ये एक मुख्य शब्द असतो. उदाहरण: 'शाळाकर्मी'." },
                        { "front": "विश्लेषण समास म्हणजे काय?", "back": "विश्लेषण समास म्हणजे एक समास जो प्रत्यक्ष शब्दांमध्ये दोन शब्दांचे सुसंगत वर्णन करतो. उदाहरण: 'गहाणवस्तू'." },
                        { "front": "अव्ययीभाव समास म्हणजे काय?", "back": "अव्ययीभाव समास म्हणजे एक शब्द विशेषण आणि कार्यानुसार जोडला जातो. उदाहरण: 'बहुतेक'." },
                        { "front": "बहुव्रीहि समास म्हणजे काय?", "back": "बहुव्रीहि समास म्हणजे एक शब्द दुसऱ्या शब्दांपासून त्याच्या विशेषतेनुसार वेगळा होतो. उदाहरण: 'राक्षसी'." },
                        { "front": "समासाचे नियम काय आहेत?", "back": "समास बनवताना शब्दांचा अर्थ साधा आणि स्पष्ट असावा. शब्दांची लिंग आणि वचन पद्धत राखली पाहिजे." },
                        { "front": "समास बनवताना लिंगाचे रूप बदलते का?", "back": "हो, समास करतांना लिंगाचे रूप समासाच्या प्रकारानुसार बदलते." },
                        { "front": "समासाच्या प्रकारात वचनाचे रूप कसे बदलते?", "back": "समासाच्या प्रकारानुसार वचन (एकवचन व बहुवचन) बदलते, जसे 'मित्रां' चा समास 'मित्रांन' होईल." },
                        { "front": "कृत्य आणि कर्ता याचा संबंध काय आहे?", "back": "कृत्य आणि कर्ता यांचा संबंध म्हणजे क्रिया आणि त्या क्रियेला प्रभावित करणारे कर्ते एकसारख्या वचनात आणि लिंगात असावेत." },
                        { "front": "क्रियापद व कर्त्याच्या लिंगाचा संबंध काय आहे?", "back": "क्रियापदाच्या लिंगाचा योग्य वापर कर्त्याच्या लिंगानुसार केला जातो. उदाहरण: 'तो खेळतो' आणि 'ती खेळते'." },
                        { "front": "क्रियापद व कर्त्याच्या वचनाचा संबंध काय आहे?", "back": "क्रियापद व कर्त्याचा वचनाचा संबंध एकवचन किंवा बहुवचनानुसार बदलतो. उदाहरण: 'तो येतो' आणि 'ते येतात'." },
                        { "front": "वचनातील बदल कसा होतो?", "back": "वचनातील बदल म्हणजे एकवचन आणि बहुवचन यांचे रूप बदलणे. उदाहरण: 'राजा' (एकवचन), 'राजे' (बहुवचन)." },
                        { "front": "वचन बदलताना विशेषण बदलते का?", "back": "हो, वचन बदलताना विशेषणाचे रूप सुद्धा बदलते. उदाहरण: 'सुंदर मुलगा' (एकवचन), 'सुंदर मुलगे' (बहुवचन)." },
                        { "front": "वचनाचे परिवर्तन कशावर आधारित आहे?", "back": "वचनाचे परिवर्तन संज्ञेच्या लिंग, क्रियापदाच्या वचनाशी संबंधित असते." },
                         { "front": "विविध रूपे कशी तयार केली जातात?", "back": "विविध रूपे तयार करण्यासाठी शब्दांच्या लिंग, वचन, काल, समास व त्याचे प्रकार विचारले जातात." },
                        { "front": "संज्ञेचे रूप कसे बदलते?", "back": "संज्ञेचे रूप लिंगानुसार (पुरुष, स्त्री, नपुंसक) आणि वचनानुसार (एकवचन, बहुवचन) बदलते." },
                        { "front": "क्रियापदाचे रूप कसे बदलते?", "back": "क्रियापदाचे रूप कालानुसार (भूतकाल, वर्तमानकाल, भविष्यकाल) आणि वचनानुसार (एकवचन, बहुवचन) बदलते." },
                        { "front": "क्रियाविशेषणाचे रूप कसे बदलते?", "back": "क्रियाविशेषणाचे रूप क्रियापदाच्या रूपावर आधारित असते." },
                        { "front": "वाक्याचे प्रकार काय आहेत?", "back": "वाक्यांचे प्रकार: ज्ञान वाचक वाक्य, प्रश्नवाचक वाक्य, आज्ञावाचक वाक्य, विषादवाचक वाक्य." },
                        { "front": "ज्ञान वाचक वाक्य म्हणजे काय?", "back": "ज्ञान वाचक वाक्य म्हणजे ते वाक्य जे सत्य किंवा तथ्य दर्शवते. उदाहरण: 'सूर्य उगवला आहे.'" },
                        { "front": "प्रश्नवाचक वाक्य म्हणजे काय?", "back": "प्रश्नवाचक वाक्य म्हणजे ते वाक्य जे प्रश्न विचारते. उदाहरण: 'तुम्ही शाळेत गेला का?'" },
                        { "front": "आज्ञावाचक वाक्य म्हणजे काय?", "back": "आज्ञावाचक वाक्य म्हणजे ते वाक्य जे आज्ञा किंवा आदेश दर्शवते. उदाहरण: 'तुम्ही पुस्तक वाचा.'" },
                        { "front": "विषादवाचक वाक्य म्हणजे काय?", "back": "विषादवाचक वाक्य म्हणजे ते वाक्य जे दुःख, संताप, आश्चर्य दर्शवते. उदाहरण: 'काय झालं?'." },
                        { "front": "निर्देशवाचक वाक्य म्हणजे काय?", "back": "निर्देशवाचक वाक्य म्हणजे ते वाक्य जे एखाद्या क्रियेसाठी आदेश किंवा सूचन देणारे असते." },
                        { "front": "निर्देशवाचक वाक्याचे उदाहरण द्या.", "back": "उदाहरण: 'तुम्ही शांत बसा.' 'असाच करा.'" }
                    ]
                }                            
    ];

    function renderChapters() {
        chaptersContainer.innerHTML = '';
        chaptersData.forEach((chapter, index) => {
            const chapterElement = document.createElement('div');
            chapterElement.className = 'chapter';
            chapterElement.innerHTML = `
                <h3 onclick="toggleSubtopics(this)">${chapter.name} <span>&#9654;</span></h3>
                <div class="subtopics">
                    <p>${chapter.description}</p>
                    <div class="study-options">
                       
                 
                        <a href="#" onclick="showFlashcards(${index})">Flashcards</a>
                
                    </div>
                </div>
            `;
            chaptersContainer.appendChild(chapterElement);
        });
    }

    function toggleSubtopics(header) {
        const subtopics = header.nextElementSibling;
        const icon = header.querySelector('span');

        if (subtopics.style.display === "none" || subtopics.style.display === "") {
            subtopics.style.display = "block";
            icon.style.transform = "rotate(90deg)";
        } else {
            subtopics.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        }
    }

    function searchChapter() {
        const query = document.getElementById('search').value.toLowerCase();
        const chapters = document.querySelectorAll('.chapter');

        chapters.forEach((chapter) => {
            const chapterName = chapter.querySelector('h3').textContent.toLowerCase();
            if (chapterName.includes(query)) {
                chapter.style.display = 'block';
            } else {
                chapter.style.display = 'none';
            }
        });
    }

    function showFlashcards(chapterIndex) {
        const chapter = chaptersData[chapterIndex];
        if (!chapter.flashcards) {
            alert('Flashcards for this chapter are not available yet.');
            return;
        }

        let currentCard = 0;

        function updateFlashcard() {
            const flashcard = chapter.flashcards[currentCard];
            contentArea.innerHTML = `
                <h2>${chapter.name} - Flashcards</h2>
                <div class="flashcard-container">
                    <div class="flashcard">
                        <div class="flashcard-front">
                            <div class="flashcard-content">${flashcard.front}</div>
                        </div>
                        <div class="flashcard-back">
                            <div class="flashcard-content">${flashcard.back}</div>
                        </div>
                    </div>
                </div>
                <div class="flashcard-navigation">
                    <button class="flashcard-nav-button" onclick="prevCard()">Previous</button>
                    <button class="flashcard-nav-button" onclick="flipCard()">Flip</button>
                    <button class="flashcard-nav-button" onclick="nextCard()">Next</button>
                </div>
                <button class="flashcard-nav-button" onclick="renderChapters()">Back to Chapters</button>
            `;
        }

        updateFlashcard();

        window.flipCard = function() {
            const flashcard = document.querySelector('.flashcard');
            flashcard.classList.toggle('flipped');
        };

        window.prevCard = function() {
            currentCard = (currentCard - 1 + chapter.flashcards.length) % chapter.flashcards.length;
            updateFlashcard();
        };

        window.nextCard = function() {
            currentCard = (currentCard + 1) % chapter.flashcards.length;
            updateFlashcard();
        };
    }

    function showVideoLecture(chapterIndex) {
        window.location.href = "manual vedio/index.html"; // Redirects to manualv/index.html
    }
    
    

    function showTheory(chapterIndex) {
        window.location.href = chaptersData[chapterIndex].book;
    }

    function showGames(chapterIndex) {
        alert(`Games for ${chaptersData[chapterIndex].name} are not available yet.`);
    }

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Initial render
    renderChapters();

    // Make functions globally accessible
    window.toggleSubtopics = toggleSubtopics;
    window.searchChapter = searchChapter;
    window.showFlashcards = showFlashcards;
    window.showVideoLecture = showVideoLecture;
    window.showTheory = showTheory;
    window.showGames = showGames;
});

