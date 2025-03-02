document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content-area');
    const chaptersContainer = document.getElementById('chapters-container');
    const breadcrumbs = document.getElementById('breadcrumbs');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    const chaptersData = [
        {
            name: 'Chapter 1: Heredity and Evolution',
            description: 'Understand the concepts of heredity, genetic inheritance, Mendel’s laws of inheritance, and the basics of evolution and natural selection.',
            book: 's2book.html',
            flashcards: [
                { front: "Who is the father of genetics?", back: "Gregor Johann Mendel." },
                { front: "What is heredity?", back: "The transfer of biological traits from parents to offspring via genes." },
                { front: "What is DNA?", back: "The genetic material that stores hereditary information in most living organisms." },
                { front: "What is transcription?", back: "The process of synthesizing mRNA from DNA in the nucleus." },
                { front: "What is RNA?", back: "A molecule that assists in protein synthesis by transferring genetic information from DNA." },
                { front: "What is translation?", back: "The process of decoding mRNA to produce proteins." },
                { front: "What is mutation?", back: "A sudden change in genetic material, causing variations." },
                { front: "What is evolution?", back: "A gradual change in organisms over generations, resulting in new species." },
                { front: "What is Darwin's theory of natural selection?", back: "Survival and reproduction of organisms best adapted to their environment." },
                { front: "What is Lamarckism?", back: "The theory that acquired traits are passed on to the next generation." },
                { front: "What are vestigial organs?", back: "Non-functional organs in one species that are functional in others." },
                { front: "What is a fossil?", back: "Preserved remains or traces of ancient organisms." },
                { front: "What is speciation?", back: "The formation of new species due to genetic or geographical isolation." },
                { front: "What is carbon dating?", back: "A method to determine the age of fossils using radioactive C-14 decay." },
                { front: "What are morphological evidences?", back: "Similar structures among species indicating common ancestry." },
                { front: "What are anatomical evidences?", back: "Bone structure similarities, like human hands and bat wings." },
                { front: "What is a connecting link?", back: "An organism with traits of two groups, e.g., Peripatus links annelids and arthropods." },
                { front: "What is the significance of triplet codons?", back: "Each triplet codon in mRNA codes for a specific amino acid." },
                { front: "What is human evolution?", back: "The development of modern humans from ape-like ancestors." },
                { front: "Who contributed to the discovery of triplet codons?",back: "Dr. Har Gobind Khorana." }
            ],
             games: 's2games/Word Scramble Game Heredity/index.html'
            
        },
        {
            name: 'Chapter 2 : Life Processes in Living Organisms Part 1',
            description: 'Explore Dobereiner\'s Triads and Mendeleev\'s Periodic Table.',
            book: 's2book.html',
            flashcards : [
                { front: "What are the main energy sources for the body?", back: "Carbohydrates, fats, and proteins." },
                { front: "What is cellular respiration?", back: "The process by which cells oxidize glucose to produce energy." },
                { front: "What is ATP?", back: "Adenosine triphosphate, the energy currency of the cell." },
                { front: "What is glycolysis?", back: "The breakdown of glucose into pyruvate in the cytoplasm, producing ATP." },
                { front: "Where does the Krebs cycle occur?", back: "In the mitochondria." },
                { front: "What is the electron transport chain?", back: "A series of reactions in mitochondria producing ATP and water." },
                { front: "What are aerobic and anaerobic respiration?", back: "Aerobic requires oxygen, while anaerobic does not." },
                { front: "What is fermentation?", back: "Anaerobic respiration that produces alcohol or lactic acid." },
                { front: "What are proteins?", back: "Macromolecules made of amino acids, providing energy and structure." },
                { front: "What are lipids?", back: "Fats providing energy and essential components like hormones." },
                { front: "What are vitamins?", back: "Essential organic compounds needed for body processes." },
                { front: "What are the two types of vitamins?", back: "Fat-soluble (A, D, E, K) and water-soluble (B, C)." },
                { front: "What is mitosis?", back: "Cell division resulting in two identical daughter cells." },
                { front: "What is meiosis?", back: "Cell division producing four genetically unique haploid cells." },
                { front: "What are somatic cells?", back: "Body cells that divide by mitosis." },
                { front: "What are germ cells?", back: "Reproductive cells that divide by meiosis." },
                { front: "What is karyokinesis?", back: "The division of a cell's nucleus during cell division." },
                { front: "What is cytokinesis?", back: "The division of a cell's cytoplasm during cell division." },
                { front: "What are chromosomes?", back: "Structures carrying genetic information in the form of DNA." },
                { front: "What is a diploid cell?", back: "A cell containing two sets of chromosomes (2n)." },
                { front: "What is a haploid cell?", back: "A cell containing one set of chromosomes (n)." },
                { front: "What is crossing over?", back: "Exchange of genetic material during meiosis, leading to variation." },
                { front: "What is genetic recombination?", back: "The formation of new combinations of genes during meiosis." },
                { front: "What is the significance of meiosis?", back: "It ensures genetic variation and reduces chromosome number by half." },
                { front: "What are stem cells?", back: "Undifferentiated cells capable of division and differentiation." },
                { front: "What is the importance of cell division?", back: "It helps in growth, repair, and reproduction." },
                { front: "What is a prophase?", back: "The first stage of mitosis where chromosomes condense." },
                { front: "What happens during metaphase?", back: "Chromosomes align at the cell's equatorial plane." },
                { front: "What happens during anaphase?", back: "Sister chromatids separate and move to opposite poles." },
                { front: "What is telophase?", back: "The final stage of mitosis where nuclei reform around chromosomes." }
            ],
            games: 's2games/Word Scramble Game Living Organisms Part 1/index.html'
            
               
        },
        {
            name: 'Chapter 3: Environmental Management',
            description: 'Understand Ohm\'s Law and the heating effects of electric current.',
            book: 's2book.html',
            flashcard: [
                { front: "What is reproduction?", back: "The biological process by which new organisms are produced from existing ones." },
                { front: "What are the two main types of reproduction?", back: "Asexual and sexual reproduction." },
                { front: "What is asexual reproduction?", back: "Reproduction without the involvement of gametes, producing genetically identical offspring." },
                { front: "What is sexual reproduction?", back: "Reproduction involving the fusion of male and female gametes, resulting in genetic variation." },
                { front: "What is binary fission?", back: "A type of asexual reproduction where a parent cell divides into two identical daughter cells." },
                { front: "What is budding?", back: "Asexual reproduction where a new organism grows as a bud on the parent and detaches later." },
                { front: "What is fragmentation?", back: "Reproduction where the body of an organism breaks into fragments, each growing into a new organism." },
                { front: "What is regeneration?", back: "The process where certain organisms regrow lost body parts or develop into a complete organism." },
                { front: "What is vegetative propagation?", back: "Asexual reproduction in plants through roots, stems, or leaves." },
                { front: "What is spore formation?", back: "Reproduction through the formation of spores that germinate into new organisms." },
                { front: "What are gametes?", back: "Haploid sex cells involved in sexual reproduction, such as sperm and ova." },
                { front: "What is fertilization?", back: "The fusion of male and female gametes to form a zygote." },
                { front: "What is the zygote?", back: "A fertilized egg cell that develops into an embryo." },
                { front: "What are the essential parts of a flower?", back: "Androecium (male) and gynoecium (female)." },
                { front: "What is pollination?", back: "The transfer of pollen from the male anther to the female stigma." },
                { front: "What are the types of pollination?", back: "Self-pollination and cross-pollination." },
                { front: "What is the significance of reproduction?", back: "Ensures the survival and continuity of a species." },
                { front: "What is reproductive health?", back: "A state of complete physical, mental, and social well-being in reproductive aspects." },
                { front: "What are contraceptive methods?", back: "Techniques used to prevent fertilization or pregnancy." },
                { front: "What is IVF?", back: "In-vitro fertilization, where fertilization occurs outside the body." },
                { front: "What is cloning?", back: "Producing genetically identical organisms from a single cell or organism." },
                { front: "What is population explosion?", back: "A rapid increase in population due to high birth rates and low mortality rates." },
                { front: "What are reproductive technologies?", back: "Techniques like IVF and artificial insemination to aid reproduction." },
                { front: "What are hermaphrodites?", back: "Organisms having both male and female reproductive organs." },
                { front: "What is external fertilization?", back: "Fertilization occurring outside the body, common in aquatic organisms." },
                { front: "What is internal fertilization?", back: "Fertilization occurring inside the body of the female." },
                { front: "What is gestation?", back: "The period of development of an embryo inside the mother’s body." },
                { front: "What is oviparous?", back: "Animals that lay eggs." },
                { front: "What is viviparous?", back: "Animals that give birth to live young." },
                { front: "What is the placenta?", back: "An organ that provides nutrients and oxygen to the developing embryo in viviparous organisms." }
            ],
            games: 's2games/Word Scramble Game Living Organisms Part 2/index.html'
              
        },
        {
            name: 'Chapter 4: Towards Green Energy',
            description: 'Discover the concepts of temperature, heat, and calorimetry.',
            book: 's2book.html',
            flashcards: [
                { front: "What is environmental management?", back: "The effective use and conservation of natural resources to ensure sustainability." },
                { front: "What is biodiversity?", back: "The variety of living organisms in an ecosystem." },
                { front: "What is sustainable development?", back: "Development that meets the needs of the present without compromising future generations." },
                { front: "What are natural resources?", back: "Materials or substances occurring in nature that can be used for economic gain." },
                { front: "What is deforestation?", back: "The large-scale clearing of forests for human activities." },
                { front: "What are the effects of deforestation?", back: "Loss of biodiversity, climate change, and soil erosion." },
                { front: "What is afforestation?", back: "Planting trees to create forests on barren land." },
                { front: "What is conservation?", back: "The protection and preservation of natural resources." },
                { front: "What are renewable resources?", back: "Resources that can replenish naturally over time, e.g., sunlight and wind." },
                { front: "What are non-renewable resources?", back: "Resources that cannot be replenished once used, e.g., fossil fuels." },
                { front: "What is pollution?", back: "The introduction of harmful substances into the environment." },
                { front: "What are the types of pollution?", back: "Air, water, soil, noise, and thermal pollution." },
                { front: "What is the role of an environmental guard?", back: "To conserve the environment and enforce laws protecting natural resources." },
                { front: "What is climate change?", back: "Long-term changes in temperature and weather patterns due to human activities." },
                { front: "What is disaster management?", back: "Planning and responding to natural or man-made disasters to minimize damage." },
                { front: "What is waste management?", back: "The collection, processing, and disposal of waste materials." },
                { front: "What is the role of NGOs in environmental management?", back: "Promoting awareness and implementing conservation programs." },
                { front: "What is the carbon footprint?", back: "The total greenhouse gas emissions caused by an individual, organization, or activity." },
                { front: "What are green energy sources?", back: "Renewable and eco-friendly energy sources like solar and wind energy." },
                { front: "What is eco-tourism?", back: "Tourism focused on conservation and sustainable interaction with nature." }
            ],
            games:'s2games/Word Scramble Game Environmental Management/index.html'
              
        },
        {
            name: 'Chapter 5: Animal Classification',
            description: 'Discover the concepts of temperature, heat, and calorimetry.',
            book: 's2book.html',
            flashcards: [
                { front: "What is green energy?", back: "Energy derived from natural, renewable, and environmentally friendly sources." },
                { front: "What are examples of green energy sources?", back: "Solar, wind, hydroelectric, geothermal, and biomass energy." },
                { front: "What is the energy crisis?", back: "A shortage of energy resources due to overconsumption and population growth." },
                { front: "What is solar energy?", back: "Energy harnessed from sunlight using solar panels." },
                { front: "What is wind energy?", back: "Energy generated using wind turbines to convert wind movement into electricity." },
                { front: "What is hydroelectric energy?", back: "Energy generated from the movement of water, usually using dams." },
                { front: "What is geothermal energy?", back: "Energy generated from the heat inside the Earth." },
                { front: "What is biomass energy?", back: "Energy produced by burning organic materials like wood and agricultural waste." },
                { front: "What is nuclear energy?", back: "Energy generated by splitting atoms in a process called nuclear fission." },
                { front: "What are the advantages of green energy?", back: "Renewable, eco-friendly, and reduces greenhouse gas emissions." },
                { front: "What are the disadvantages of green energy?", back: "High initial costs and dependency on natural conditions." },
                { front: "What is energy conservation?", back: "The practice of reducing energy use to preserve resources for the future." },
                { front: "What is the role of government in green energy?", back: "Implementing policies, funding research, and encouraging the use of renewable energy." },
                { front: "What is net metering?", back: "A system allowing consumers to sell excess electricity generated from renewable sources back to the grid." },
                { front: "What are biofuels?", back: "Fuels made from plant and animal products, e.g., ethanol and biodiesel." },
                { front: "What is the Kyoto Protocol?", back: "An international agreement to reduce greenhouse gas emissions." },
                { front: "What is the Paris Agreement?", back: "An international treaty to limit global warming to below 2°C." },
                { front: "What is the role of technology in green energy?", back: "Developing efficient renewable energy systems and improving energy storage." },
                { front: "What is energy efficiency?", back: "Using less energy to perform the same task, reducing waste." },
                { front: "What is a smart grid?", back: "An advanced electricity supply network that uses digital technology for efficient energy management." }
            ],
            games:'s2games/Word Scramble Game Animal Classification/index.html'              
        },
        {
            name: 'Chapter 6: Towards Green Energy',
            description: 'Discover the concepts of temperature, heat, and calorimetry.',
            book: 's2book.html',
            flashcards: [
                { front: "What is classification?", back: "The systematic arrangement of organisms into groups based on similarities and differences." },
                { front: "What is the basis of animal classification?", back: "Body structure, symmetry, levels of organization, and body cavity." },
                { front: "What is symmetry in animals?", back: "The arrangement of body parts around a central axis." },
                { front: "What are the types of symmetry?", back: "Asymmetry, radial symmetry, and bilateral symmetry." },
                { front: "What is the coelom?", back: "The body cavity in animals that houses internal organs." },
                { front: "What are coelomates?", back: "Animals with a true coelom lined by mesodermal tissue." },
                { front: "What are acoelomates?", back: "Animals without a body cavity, e.g., flatworms." },
                { front: "What are pseudocoelomates?", back: "Animals with a body cavity not entirely lined by mesoderm, e.g., roundworms." },
                { front: "What is segmentation in animals?", back: "The division of the body into repetitive segments." },
                { front: "What are the levels of organization in animals?", back: "Cellular, tissue, organ, and organ system levels." },
                { front: "What is the significance of animal classification?", back: "It helps in understanding relationships and evolutionary history." },
                { front: "What are invertebrates?", back: "Animals without a vertebral column, e.g., insects." },
                { front: "What are vertebrates?", back: "Animals with a vertebral column, e.g., mammals." },
                { front: "What is the phylum Porifera?", back: "A group of simple, porous animals like sponges." },
                { front: "What is the phylum Cnidaria?", back: "Animals with stinging cells, e.g., jellyfish and corals." },
                { front: "What is the phylum Arthropoda?", back: "The largest animal group, including insects, spiders, and crabs." },
                { front: "What is the phylum Mollusca?", back: "Soft-bodied animals with shells, e.g., snails and octopuses." },
                { front: "What is the phylum Chordata?", back: "Animals with a notochord, e.g., fish, birds, and mammals." },
                { front: "What are amphibians?", back: "Cold-blooded vertebrates that live in water and on land, e.g., frogs." },
                { front: "What are mammals?", back: "Warm-blooded vertebrates with hair and mammary glands, e.g., humans." }
            ],
            games:'s2games/Word Scramble Game Green Energy/index.html'

              
        },
        {
            name: 'Chapter 7: Introduction to Microbiology',
            description: 'Discover the concepts of temperature, heat, and calorimetry.',
            book: 's2book.html',
            flashcards: [
                { front: "What is microbiology?", back: "The study of microorganisms like bacteria, viruses, fungi, and protozoa." },
                { front: "Who is the father of microbiology?", back: "Antonie van Leeuwenhoek." },
                { front: "What are bacteria?", back: "Single-celled prokaryotic organisms found in diverse environments." },
                { front: "What are viruses?", back: "Non-living infectious agents that reproduce inside host cells." },
                { front: "What are fungi?", back: "Eukaryotic organisms that include molds, yeasts, and mushrooms." },
                { front: "What are protozoa?", back: "Single-celled eukaryotes, often parasitic, e.g., Plasmodium." },
                { front: "What is fermentation?", back: "The process of converting sugars into alcohol or acids by microorganisms." },
                { front: "What are antibiotics?", back: "Substances produced by microorganisms to kill or inhibit other microbes." },
                { front: "What is vaccination?", back: "A method to stimulate immunity using weakened or inactive pathogens." },
                { front: "What are the uses of microorganisms in agriculture?", back: "Nitrogen fixation, composting, and pest control." },
                { front: "How are microorganisms used in food production?", back: "In fermentation to make yogurt, cheese, and bread." },
                { front: "What are probiotics?", back: "Beneficial microorganisms that improve gut health." },
                { front: "What is genetic engineering?", back: "The manipulation of an organism's DNA using biotechnology." },
                { front: "What is bioremediation?", back: "The use of microorganisms to clean up pollutants and contaminants." },
                { front: "What are pathogens?", back: "Microorganisms that cause diseases in plants and animals." },
                { front: "What is the role of yeast in industries?", back: "Used in baking and alcohol production due to fermentation." },
                { front: "What is sterilization?", back: "The process of eliminating all forms of life, especially microbes." },
                { front: "What is pasteurization?", back: "The process of heating liquids to kill harmful microbes without changing taste." },
                { front: "What is the significance of microbiology?", back: "It helps in medicine, agriculture, food, and environmental sciences." },
                { front: "What are extremophiles?", back: "Microorganisms that thrive in extreme environments like hot springs or salty lakes." }
            ],
            games:'s2games/Word ScrambleGame Introduction to Microbiology/index.html'
        },
        {
            name: 'Chapter 8: Cell Biology and Biotechnology',
            description: 'Discover the concepts of temperature, heat, and calorimetry.',
            book: 's2book.html',
            flashcards: [
                { front: "What is cell biology?", back: "The study of cell structure, function, and processes." },
                { front: "What is a cell?", back: "The basic structural and functional unit of life." },
                { front: "Who discovered the cell?", back: "Robert Hooke in 1665." },
                { front: "What are prokaryotic cells?", back: "Cells without a nucleus, e.g., bacteria." },
                { front: "What are eukaryotic cells?", back: "Cells with a nucleus and membrane-bound organelles." },
                { front: "What is the cell membrane?", back: "A semi-permeable membrane controlling the entry and exit of substances." },
                { front: "What is the nucleus?", back: "The control center of the cell containing genetic material (DNA)." },
                { front: "What are ribosomes?", back: "Organelles responsible for protein synthesis." },
                { front: "What is the mitochondria?", back: "The powerhouse of the cell, producing ATP through respiration." },
                { front: "What is the endoplasmic reticulum?", back: "An organelle for protein and lipid synthesis, classified as rough or smooth." },
                { front: "What is the Golgi apparatus?", back: "An organelle involved in packaging and transporting cellular materials." },
                { front: "What are lysosomes?", back: "Organelles containing enzymes for digestion and waste removal." },
                { front: "What are chloroplasts?", back: "Organelles in plant cells responsible for photosynthesis." },
                { front: "What is biotechnology?", back: "The use of biological systems to develop products and technologies." },
                { front: "What is genetic engineering?", back: "The manipulation of DNA to create genetically modified organisms." },
                { front: "What is recombinant DNA technology?", back: "Combining DNA from different organisms to create new genetic combinations." },
                { front: "What are GMOs?", back: "Genetically Modified Organisms with altered DNA for specific traits." },
                { front: "What is tissue culture?", back: "The growth of cells or tissues in an artificial environment." },
                { front: "What is PCR?", back: "Polymerase Chain Reaction, a technique to amplify DNA." },
                { front: "What is DNA fingerprinting?", back: "A technique to identify individuals using unique DNA patterns." },
                { front: "What is cloning?", back: "Creating identical copies of organisms or cells." },
                { front: "What are stem cells?", back: "Undifferentiated cells capable of developing into various cell types." },
                { front: "What is gene therapy?", back: "A technique to treat diseases by modifying or replacing faulty genes." },
                { front: "What are bioinformatics?", back: "The use of computer technology to analyze biological data." },
                { front: "What are transgenic organisms?", back: "Organisms with genes from other species introduced into their genome." },
                { front: "What is biopharming?", back: "The production of pharmaceuticals using genetically modified organisms." },
                { front: "What is CRISPR?", back: "A genome-editing tool used for precise modifications of DNA." },
                { front: "What is bioethics?", back: "The study of ethical issues arising from advancements in biology and medicine." },
                { front: "What are the applications of biotechnology?", back: "Medicine, agriculture, environmental protection, and industrial processes." }
            ],
            games:'s2games/Cell Biology and Biotechnology/index.html'
        },
        {
            name: 'Chapter 9: Social Health',
            description: 'Discover the concepts of temperature, heat, and calorimetry.',
            book: 's2book.html',
            flshacards: [
                { front: "What is social health?", back: "The ability to form satisfying relationships and adapt to social environments." },
                { front: "What are the factors affecting social health?", back: "Family, friends, community, and social support systems." },
                { front: "What is adolescence?", back: "A transitional stage of physical and psychological development." },
                { front: "What is addiction?", back: "Dependence on substances or activities, often harmful to health." },
                { front: "What are common addictive substances?", back: "Alcohol, tobacco, and drugs like opioids and stimulants." },
                { front: "What are the effects of addiction?", back: "Physical, mental, and social harm, including health problems and isolation." },
                { front: "What is mental health?", back: "A state of well-being where an individual can cope with life’s challenges." },
                { front: "What are the causes of mental health issues?", back: "Stress, genetics, environment, and traumatic experiences." },
                { front: "What is stress?", back: "A state of mental or emotional strain caused by challenging situations." },
                { front: "What is peer pressure?", back: "Influence from peers to adopt certain behaviors, often negative." },
                { front: "What is cyberbullying?", back: "Bullying using digital platforms like social media or messaging." },
                { front: "What is reproductive health?", back: "A state of complete well-being in reproductive aspects of life." },
                { front: "What are STDs?", back: "Sexually Transmitted Diseases, such as HIV/AIDS and syphilis." },
                { front: "What is population explosion?", back: "A rapid increase in population causing strain on resources." },
                { front: "What are family planning methods?", back: "Contraceptive techniques to control reproduction." },
                { front: "What is gender equality?", back: "Equal rights and opportunities regardless of gender." },
                { front: "What are NGOs?", back: "Non-governmental organizations working on social health issues." },
                { front: "What is the role of education in social health?", back: "Spreading awareness and promoting healthier lifestyles." },
                { front: "What are the benefits of good social health?", back: "Improved mental well-being, better relationships, and community harmony." },
                { front: "What is the importance of social support?", back: "It provides emotional assistance and helps in stress management." }
            ],
            games:'s2games/Word Scramble Game Social Health/index.html'
        },
        {
            name: 'Chapter 10: Disaster Management',
            description: 'Discover the concepts of temperature, heat, and calorimetry.',
            book: 's2book.html',
            flashcards: [
                { front: "What is a disaster?", back: "A sudden event causing damage to life, property, or the environment." },
                { front: "What are the types of disasters?", back: "Natural (earthquakes, floods) and man-made (industrial accidents, wars)." },
                { front: "What is disaster management?", back: "Planning and responding to disasters to minimize damage and aid recovery." },
                { front: "What is mitigation?", back: "Efforts to reduce the impact of disasters before they occur." },
                { front: "What is preparedness?", back: "Planning and training for disaster response." },
                { front: "What is a hazard?", back: "A potential source of harm or danger." },
                { front: "What is risk assessment?", back: "The process of identifying and analyzing potential disaster risks." },
                { front: "What are emergency services?", back: "Services like police, fire, and medical aid responding during disasters." },
                { front: "What is the role of technology in disaster management?", back: "Improving forecasting, communication, and coordination during disasters." },
                { front: "What is a cyclone?", back: "A system of winds rotating inward to an area of low pressure, often causing damage." },
                { front: "What is an earthquake?", back: "The shaking of the Earth caused by tectonic movements." },
                { front: "What is a tsunami?", back: "A series of large ocean waves caused by underwater disturbances." },
                { front: "What are floods?", back: "Overflowing water submerging land, often due to heavy rain or dam failure." },
                { front: "What is drought?", back: "A prolonged period of abnormally low rainfall causing water shortages." },
                { front: "What is rehabilitation?", back: "Efforts to restore normalcy in affected areas after a disaster." },
                { front: "What is a fire safety plan?", back: "Guidelines to prevent and respond to fire emergencies." },
                { front: "What is the importance of community participation?", back: "Ensures faster response and better recovery during disasters." },
                { front: "What are early warning systems?", back: "Technologies to predict disasters and alert communities in advance." },
                { front: "What is the role of NGOs in disaster management?", back: "Providing relief, rehabilitation, and spreading awareness." },
                { front: "What is international disaster aid?", back: "Support from other countries during large-scale disasters." }
            ],
        
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
                        <a href="#" onclick="showVideoLecture(${index})">Video Lecture</a>
                        <a href="#" onclick="showTheory(${index})">Book</a>
                        <a href="#" onclick="showFlashcards(${index})">Flashcards</a>
                        <a href="#" onclick="showGames(${index})">Games</a>
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
        window.location.href = "/interface1.html";
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

