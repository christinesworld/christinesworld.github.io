$(function() {

//GLOBAL VARIABLES
var playlistCounter = 1;
var onPage = 0;
const navLabels = ['.head', '.body', '.armLeft', '.armRight', '.footer'];

setTimeout( function() {
  var vid = $('.imgBg').find('.nav');
  vid [0].play();
}, 0001);



//STORING THE INDEX ENTRIES
class entry {
  constructor(number, name, desc){
    this.number = number;
    this.name = name;
    this.desc = desc;
    this.mention = [];
  }
}

const entries = []; //stores all the index entries

const entryName = [ //array of ALL NAMES
  "96Neko",
  "ACG (Anime, Comics, and Games)",
  "After the Rain",
  String.fromCharCode(9835) + " Alien Alien",
  "Anime",
  "Anime Figurines",
  String.fromCharCode(9835) + " Ayano’s Theory of Happiness",
  "Ayase",
  "Brave Frontier",
  String.fromCharCode(9835) + " Connecting",
  "Cosplay",
  "Crypton Future Media Inc.",
  "Danganronpa",
  "Danmaku (scrolling comments)",
  "DECO*27",
  String.fromCharCode(9835) + " E? Aa, Sou.",
  "Eve",
  String.fromCharCode(9835) + " Ghost Rule",
  "Giga",
  "Google Chrome: Hatsune Miku",
  "Google+",
  "GUMI",
  "hachi",
  "Hatsune Miku",
  "Hatsune Mikuo",
  String.fromCharCode(9835) + " High Pitch Addicts Vocal Range Test",
  "Holograms",
  "Hypnosis Mic",
  String.fromCharCode(9835) + " I Wanna Be a Girl",
  "IA",
  "Ib",
  String.fromCharCode(9835) + " Jama",
  "Jin",
  "JimmyThumbP",
  "Jujutsu Kaisen",
  "Kagamine Len",
  "Kagamine Rin",
  "Kagerou Project",
  "Kaito",
  "Kasane Teto",
  "Kikuo",
  "kz-livetune",
  "Last Note",
  String.fromCharCode(9835) + " Lost One’s Weeping",
  "Mafumafu",
  "Magical Mirai",
  "Manga",
  "Megurine Luka",
  "Meiko",
  String.fromCharCode(9835) + " Melt",
  "Miku Expo",
  "Miku Miku Dance (MMD)",
  "Mitchie M",
  "Moe",
  String.fromCharCode(9835) + " Mukuro Attack",
  "Neru (Vocaloid)",
  "Neru (producer)",
  "Niconico",
  String.fromCharCode(9835) + " Odds and Ends",
  "Orangestar",
  "Otaku",
  "Pinocchio-P",
  "pixiv",
  String.fromCharCode(9835) + " PoPiPo",
  "Porter Robinson",
  "Project Sekai",
  "r-906",
  String.fromCharCode(9835) + " Reboot",
  String.fromCharCode(9835) + "Rolling Girl",
  "ryo (supercell)",
  "Ryouseirui",
  "saskure.UK",
  String.fromCharCode(9835) + " Sekiranun Graffiti",
  String.fromCharCode(9835) + " Self-Harm Colorless",
  "Senbonzakura",
  String.fromCharCode(9835) + " Seyana",
  "Shidu",
  "Shounen Jump",
  String.fromCharCode(9835) + " Slow Motion",
  String.fromCharCode(9835) + " The Snow White Princess Is",
  "Splatoon",
  "Suzumu",
  "syudou",
  String.fromCharCode(9835) + " Tawagoto Speaker",
  String.fromCharCode(9835) + " The Disappearance of Hatsune Miku -DEAD END-",
  String.fromCharCode(9835) + " THE END",
  String.fromCharCode(9835) + " The Straight-Faced Science Girl",
  String.fromCharCode(9835) + " Tokyo Teddy Bear",
  String.fromCharCode(9835) + " Triple Baka",
  String.fromCharCode(9835) + " Two-Faced Lovers",
  "Utaite",
  "Utattemita",
  "UTAU",
  "Versions of Miku",
  "Vocaloid",
  "Vocaloid Hall of Legend",
  "Vocaloid-P",
  "VTuber",
  String.fromCharCode(9835) + " World is Mine",
  "Wowaka",
  String.fromCharCode(9835) + " Y-to-Y",
  "YouTube Annotations",
  "Project Voltage"
];

const entryDesc = [ //array of ALL DESCRIPTIONS
  "An old-school female utaite well-known for her husky lower range vocals. She is also able to sing with a higher pitched voice that earns her the label of ryouseirui. She is currently a VTuber and often streams video games.",
  "A blanket term broadly encompassing anime, comics (manga), and game subcultures. The term is more commonly used in East Asia and usually refers to Japanese anime, comics, and games.",
  "A two-unit pop-rock group, consisting of popular utaite Soraru and Mafumafu.",
  "One of NayutalieN’s most popular songs. Released in 2016 by NayutalieN feat. Hatsune Miku and in the Vocaloid Hall of Legend (exceeding 1 million views on NND). Listen at youtube.com/watch?v=2t1NMRse6aI.",
  "A broad category of Japanese animated media, namely TV series and movies.",
  "Small scale statues of anime characters in dynamic poses and costumes that are often collected.",
  "One of the most popular songs in Kagerou Project. The character song for Ayano, a kind and selfless older sister to her younger foster siblings. Released in 2014 by Jin feat. IA and in the Vocaloid Hall of Legend (exceeding 1 million views on NND). Listen at youtube.com/watch?v=pLYKKC-EpjA.",
  "One half of the popular pop music group Yoasobi. Ayase writes the music for Yoasobi and originally started with Vocaloid. Notable songs include Yoru ni Kakeru and HERO.",
  "A former Japanese mobile role-playing gacha game.",
  "An uplifting song featuring a chorus of Vocaloid. Another official version of the song features a collection of popular utaite at the time. Released in 2014 by halyosy feat. Hatsune Miku, Kagamine Rin, Kagamine Len, Megurine Luka, MEIKO, and KAITO. Listen at youtube.com/watch?v=v9sR1Tm1diQ.",
  "A portmanteau of “costume play,” in which participants dress up in costumes of fictional characters. Cosplay is especially popular in anime, manga, and games subcultures.",
  "A music technology company based in Sapporo, Japan, and the official licenser of Hatsune Miku. They were the distributors of Vocaloid, the software of which is produced by Yamaha, until 2019, when Crypton stopped releasing voicebanks to Yamaha’s Vocaloid engine-editor and developed their own software called Piapro NT. As a result, new versions of Hatsune Miku and others were rebranded as “virtual singers” rather than Vocaloid because of their split from Yamaha’s Vocaloid software. (It’s honestly a bit confusing. People still refer to Hatsune Miku as a Vocaloid, though her newer versions are technically no longer affiliated with the name.)",
  "A popular Japanese video game franchise and anime series. It surrounds various groups of high-school students who are forced into murdering each other by a robotic teddy bear named Monokuma. It was known for its colorful cast of characters.",
  "A system of comments that appear on-screen throughout a video and scroll from left to right. They can be styled in color, size, and location.",
  "A Vocaloid producer known for his energetic pop and rock songs. Notable songs include Ghost Rule, Ai Kotoba, and Monitoring",
  "A sentimental song famous for utilizing Miku’s lower octave vocals and portraying Miku as a somewhat older, reckless and nymphomaniac “Carnivorous Girl” who exploits masculine lust to her own advantage. Released in 2010 by Chouchou-P feat. Hatsune Miku and in the Vocaloid Hall of Legend (exceeding 1 million views on NND). Listen at youtube.com/watch?v=MGt25mv4-2Q.",
  "An utaite-turned-producer popular for his song Kaikai Kitan, the first opening to Jujutsu Kaisen Season 1. He is also known for the elaborately animated PVs that accompany his original songs. Notable songs include Dramaturgy and Nonsense Bungaku.",
  "One of DECO*27’s most popular songs. Released in 2016 by DECO*27 feat. Hatsune Miku and in the Vocaloid Hall of Myths (exceeding 10 million views on NND). Listen at youtube.com/watch?v=KushW6zvazM.",
  "A Vocaloid producer known for his high-energy pop and electronic music using Rin and Len. Notably, he has been producing hit songs since at least 2012 and is still a major Notable songs include Childish War, Gigantic O.T.N. and Hibikase.",
  "A 2011 ad for Google Chrome that spotlights Hatsune Miku’s fan creator community. Watch at youtube.com/watch?v=MGt25mv4-2Q.",
  "A now-defunct social media platform similar to Facebook. It had a large anime and related subcultures communities.",
  "A green-haired Vocaloid character representing the Vocaloid Megpoid. The two are often conflated as “Megpoid GUMI.” GUMI can be described as having a softer voice than Hatsune Miku. She is also popular for her English voicebank.",
  "A Vocaloid producer and musician also known as the artist Kenshi Yonezu. He was a successful Vocaloid producer before becoming a hugely popular pop artist and singer. Notable songs include Donut Hole, Matryoshka, and Sand Planet.",
  "The most popular Vocaloid character. She is marketed as a 16-year-old virtual idol and is often known for her iconic long blue twintails. She is also known by her code-name “CV01.”",
  "The fan-made male counterpart to Hatsune Miku. His voicebank is the same as Miku’s but with an adjusted “gender factor” to imitate a masculine timbre.",
  "A humorous song that challenges the singer to sing extremely high notes. Release in 2013 by KimurawaiP feat. Hatsune Miku and in the Vocaloid Hall of Legend (exceeding 1 million views on NND). Listen at youtube.com/watch?v=f91sM4rI76w.",
  "Technology used in Vocaloid concerts in which an image is projected onto an invisible glass screen.",
  "A Japanese multimedia project that releases music centered on rap battles. An overarching plotline drives the universe, which has expanded into anime, rhythm games, live stage plays, and more.",
  "An original song by Mafumafu, a male utaite who is known for his high-pitched voice and cutesy persona. Mafumafu (from what I understand) still publicly identifies as male. Released in 2019. Listen at youtube.com/watch?v=ucbx9we6EHk.",
  "A Vocaloid character whose voicebank is provided by famous pop singer Lia.",
  "A Japanese role-playing horror game about the titular character trapped in an eldritch art museum. Ib was made using RPG Maker, a game program that came to define an era of Japanese role-playing games.",
  "A rock song released in 2018 by syudou feat. Hatsune Miku and in the Vocaloid Hall of Legend (exceeding 1 million views on NND). Listen at youtube.com/watch?v=GTgMgxtl0Eg.",
  "A Vocaloid producer most well known for writing and producing Kagerou Project. notable songsinclude Kagerou Daze, Children Record and Lost Time Memory.",
  "A Vocaloid producer most famous for his song Reboot. The voicebank for Samune Zimi, which is featured in Reboot, was provided by JimmyThumb-P himself.",
  "A popular supernatural shounen series written by Gege Akutami. The manga was serialized in Shounen Jump in 2018, and the anime aired in 2020.",
  "A blond, 14-year-old Vocaloid male character that is often depicted with his female counterpart Kagamine Rin. The two are often depicted as twins or “mirror images” of each other, though the true nature of their relationship is left purposefully unspecified. Their voicebanks derive from the same voice actress Shimoda Asami. Rin and Len are collectively code-named “CV02.”",
  "A blonde, 14-year-old female Vocaloid character that is often depicted with her male counterpart Kagamine Len. The two are often depicted as twins or “mirror images” of each other, though the true nature of their relationship is left purposefully unspecified. Their voicebanks derive from the same voice actress Shimoda Asami. Rin and Len are collectively code-named “CV02.”",
  "A multimedia story project by Jin centered around a group of characters with supernatural abilities due to their shared death experience. Kagerou Project started as a collection of Vocaloid songs and later expanded into a light novel, manga, and anime series Mekakucity Actors.",
  "A tall, blue-haired male Vocaloid character with a deep, nasally voice. He was one of the first Vocaloid voicebanks to be released, along with Meiko and several others.",
  "A popular red-haired UTAUloid originally created by TWINDRILL as a joke. Her voice bank is provided by Mayo Oyamano. She is currently the most popular UTAU.",
  "A Vocaloid producer famous for his dark, atmospheric songs and disturbing lyrics. He is also known for his techno influences and DJ events. Notable songs include Aishite Aishite Aishite, Gomenne Gomenne and Hole-Dwelling.",
  "A Vocaloid producer (kz) part of a music group (livetune) known for their upbeat electronic pop tunes. Notable songs include Tell Your World, Hand in Hand, Yellow and Weekender Girl.",
  "A two-person music unit consisting of LasNo and T. They are known for their high-spirited, intense songs, characterized by their classic rock tunes. T left the group in 2015, with a new composer Nif taking his place.",
  "An iconic Vocaloid song about the emotional and psychological burdens of school environments. This song resonated with many, especially students in Asian school systems, who felt similar pressures. Released in 2013 by Neru feat. Kagamine Rin and in the Vocaloid Hall of Myths (exceeding 10 million views on NND). Listen at youtube.com/watch?v=8oBV3jPTW4s.",
  "A popular utaite and music producer known for his cute, high-pitched voice and upbeat pop songs. He is part of the music duo After the Rain with Soraru. Popular original songs include Reincarnation, Berserk, Merry Bad End and Hello Dystopia.",
  "A highly-anticipated annual live Vocaloid concert in Japan where various Vocaloid are projected as holograms and perform songs on stage.",
  "A broad term for Japanese comics.",
  "A pink-haired Vocaloid character with a softer, slightly more mature voice.",
  "A brunette female Vocaloid character with a more mature voice. She was one of the first Vocaloid voicebanks to be released, along with Kaito and several others. ",
  "One of the most popular Vocaloid songs of all time and hugely influential in popularizing Vocaloid at the time as a legitimate tool for music production. Released in December 2007 by ryo (supercell) feat. Hatsune Miku. Listen at youtube.com/watch?v=5rFBkHb8CL8.",
  "A series of international live Vocaloid concerts aimed toward audiences beyond Japan.",
  "A free animation program that lets users animate and create computer-animated films, originally produced for Hatsune Miku. MMD is also synonymous with a type of music video in which 3D models of Vocaloid characters dance while singing.",
  "A Vocaloid producer known for his natural-sounding tuning of Miku and bright, upbeat songs.",
  "A term that refers to feelings of strong affection toward fictional characters. Characters that evoke these intense affective experiences can be described as moeru.",
  "A dark song about exacting revenge in graphic ways. Released in 2009 by Utsu-P feat. Hatsune Miku. Listen at youtube.com/watch?v=Fr3HuXB0Crw.",
  "A fan-made Vocaloid based off of Hatsune Miku. She has one side ponytail and blonde hair.",
  "A Vocaloid producer known for his rock songs and strong narrative threads throughout this music, often containing darker or more serious themes. Notable songs include Lost Ones Weeping, Tokyo Teddy Bear, Law-Evading Rock, and Abstract Nonsense.",
  "A Japanese platform similar to YouTube where Vocaloid culture thrived for many years. It has seen a steady decline in traffic in recent years due to the popularity of YouTube but still maintains a strong core user base.",
  "A song assumed to be about wowaka’s own journey as a Vocaloid producer. Released in 2011 by wowaka feat. Hatsune Miku. Listen at youtube.com/watch?v=HUzLUGKwQJc. (Note: all official uploads of this song were removed without notice sometime in 2024).",
  "A Vocaloid producer known for his bright and emotional songs. Notable songs include Night Sky Patrol of Tomorrow, Daybreak Frontline, and Henceforth.",
  "A Japanese term for people with consuming interests, typically in the spheres of anime, comics, and games, and often to the detriment of their social skills. ",
  "A Vocaloid producer known for his fast-paced songs and unique lyrics. Notable songs include God-ish, Common World Domination, and Slow Motion.",
  "An artwork sharing platform popular in Asia for illustration.",
  "An upbeat and humorous “denpa” song about drinking vegetable juice. Released in 2008 by Lamaze-P and and in the Vocaloid Hall of Legend (exceeding 1 million views on NND). Listen at youtube.com/watch?v=HQgaCVT9Bw8.",
  "An American DJ and electronic music producer known to use vocal synthesizers in some of his music.",
  "A mobile rhythm game released in 2020 that features Vocaloid songs. The game includes Vocaloid characters Hatsune Miku, Kagamine Rin, Kagamine Len, Megurine Luka, KAITO, and MEIKO. It also includes a variety of new human characters.",
  "A Vocaloid producer known for his drum-and-bass songs. Notable songs include Voidroid, At the Mercy and Psi.",
  "An emotional song about the friendship between three young girls when one of them is killed in a car accident. It features a fully-animated narrative music video that illustrates a classic coming-of-age story in the face of grief and girlhood. The voicebank for Samune Zimi was provided by JimmyThumb-P himself. Released in 2012 by JimmyThumb-P feat. Hatsune Miku, Megurine Luka and Samune Zimi. Listen at youtube.com/watch?v=3BFvN-idN1s.",
  "One of the most popular Vocaloid songs of all time. The song centers feeelings of falling behind and “rolling” away from goals. The song also inspired a popular fan animation meme of Miku rolling down a hill that spawned many subsequent spinoffs replacing Miku with other characters. Released in 2010 by wowaka feat. Hatsune Miku and in the Vocaloid Hall of Myths (songs exceeding 10 million view on NND). Listen at youtube.com/watch?v=NIqm73xsias.",
  "One of the most successful and well-known Vocaloid producers of all time. He is a member of the band supercell and was one half of the Japanese pop duo EGOIST. Notable songs include Melt, World is Mine, and Black★Rock Shooter.",
  "A term for utaite whose voices can take on both masculine and feminine qualities. The term also applies to utaite whose voices take on qualities that do not align with their gender presentation.",
  "A Vocaloid producer known for his instrumental works. Notable songs include *Hello Planet, Unthinkable Wonders and 39.",
  "A dark song released in 2011 by ryo(supercell) feat. Hatsune Miku. Listen at youtube.com/watch?v=FEmfBKZGTbY.",
  "A dark song about wanting to disappear. Released in 2013 by nekobolo feat. Hatsune Miku. Listen at youtube.com/watch?v=89hparQWqYQ.",
  "One of the most popular Vocaloid songs of all time. This song is about the Meiji Restoration and features Hatsune Miku as a revolutionary soldier. Released in 2011 by Kurousa-P feat. Hatsune Miku and in the Vocaloid Hall of Myths (exceeding 10 million views on NND). Listen at youtube.com/watch?v=shs0rAiwsGQ.",
  "A humorous song about a character who will agree with everything you say. The original Japanese title translates to “Akane-chan Will Listen to Whatever You Have to Say.” Released in 2017 by GYARI feat. Yuzuki Yukari, Kotonoha Akane, Tsurumaki Maki and Kotonoha Aoi. Listen at youtube.com/watch?v=MC8Nv6RG5dA.",
  "A popular illustrator and filmmaker known for her PVs and illustrations. She often creates PVs for Neru and is known for her work on Kagerou Project with Jin.",
  "A weekly shounen manga anthology published in Japan. It is the most popular manga serializer in Japan. Shounen is a genre of manga and anime broadly aimed at an audience of adolescent boys, though its reach is often much larger.",
  "A song reflecting on a life of regret while staying optimistic. Released in 2014 by Pinnocchio-P feat. Hatsune Miku and in the Vocaloid Hall of Legend (exceeding 1 million views on NND). Listen at youtube.com/watch?v=ARt2fVT33Lw.",
  "A song based on the story of Snow White. Released in 2010 by Noboru-P feat. Hatsune Miku and in the Vocaloid Hall of Legend (exceeding 1 million views on NND). Listen at youtube.com/watch?v=nCaqf9WhqOY.",
  "A third-person shooter video game franchise known for its squid-based universe, spunky characters, and colorful hip-hop aesthetic.",
  "An utaite known for his collaborations with kemu and his plagiarism scandal with Mafumafu, in which he admitted to claiming work ghost-written by Mafumafu as his own and profiting from it.",
  "A Vocaloid producer and singer known for his songs Bitter Choco Decoration and Call Boy. He also performs many self covers.",
  "A dark song about emotional anguish and spite. Released in 2011 by nekobolo feat. Hatsune Miku and in the Vocaloid Hall of Legend (songs exceeding 1 million views on NND). Listen at youtube.com/watch?v=m0D-hgRD58o.",
  "One of cosMo@Bousou-P’s most famous songs. A song about Hatsune Miku’s software being deleted and forgotten. The song is notable for its incredibly fast vocals that show off Hatsune Miku’s digital capabilities. Released in 2008 by cosMo@Bousou-P feat. Hatsune Miku and in the Vocaloid Hall of Myths (songs exceeding 10 million view on NND). Listen at youtube.com/watch?v=VWVtIg5cdDU.",
  "A theatrical opera production sang by Hatsune Miku. The production used no human singers or orchestra players, and asked questions such as “Is Miku alive? “Can an imaginary character die?” It was first shown in Japan in 2013 and later in Paris in 2015. It was written by Keiichiro Shibuya in collaboration with producer/playwright Toshiki Okada and filmmaker YKBX. Listen at youtube.com/watch?v=Ey8oj8S-j3U.",
  "A cute song about a boy falling in love with a stoic science girl. Released in 2014 by Ningen Dokku feat. Kagamine Rin and Len. Listen at youtube.com/watch?v=wbfBGnULUJ4.",
  "One of Neru’s most famous songs. A dark song about a boy in emotional anguish. Released in 2011 by Neru feat. Kagamine Rin and in the Vocaloid Hall of Legend (exceeding 1 million views on NND). Listen at youtube.com/watch?v=eSI7RsjZy1E.",
  "An iconic and lighthearted early-Vocaloid “denpa” song that spawned many derivative works replacing the vocalists with various characters. Released in 2008 by Lamaze-P feat. Hatsune Miku, Neru, and Kasane Teto and in the Vocaloid Hall of Legend (exceeding 1 million views on NND). Listen at youtube.com/watch?v=duPJqfKiA78.",
  "A song about troubled love that suggests themes of abortion. Released in 2009 by wowaka feat. Hatsune Miku and in the Vocaloid Hall of Myths (exceeding 10 million views on NND). Listen at youtube.com/watch?v=b_cuMcDWwsI.",
  "People who create human covers of Vocaloid songs. The subculture itself is called utattemita, which roughly translates to “I tried to sing.”",
  "Translates roughly to “I tried to sing” and denotes a subculture of human covers of Vocaloid songs. The people who cover these songs are called utaite.",
  "A Japanese voice synthesizer application similar to Vocaloid, with its primary difference being that UTAU is free. UTAU is also synonymous with the characters that represent UTAU voicebanks, or UTAUloids.",
  "New releases of Miku’s voicebank labeled V2 through V4. Starting from V3, Miku’s voicebank also came in different styles called Append designed to give Miku an “expression of colour.” These styles include “Dark,” “Soft,” “Sweet” and “Solid.”",
  "A singing voice synthesizer software product developed by Yamaha and licensed by Crypton Future Media. It was initially released in 2004 with four available voicebanks. The software enables users to use a voicebank to create an artificial singing voice by typing in lyrics and melody. Each voicebank is represented by an avatar, also referred to as a Vocaloid. In 2019, Crypton split with Yamaha to create their own voice synthesizing engine called Piapro NT as opposed to Yamaha’s Vocaloid software. As a result, future voicebank releases from Crypton are no longer called “Vocaloid” due to Yamaha’s ownership over the name, leading to a rebranding of the Hatsune Miku voicebank character (which Crypton owns) and other characters as “virtual singers” instead.",
  "A special category of Vocaloid songs that have exceeded 1,000,000 views on Niconico (NND). Similar categories exist for other tiers of viewer counts. The highest category is the Vocaloid Hall of Myths for songs exceeding 10,000,000 views. As of 2024, only 24 songs are in the Hall of Myths.",
  "A producer of Vocaloid music. Many producers add “-P” to the end of their aliases to denote this.",
  "A “virtual YouTuber” represented by a digital avatar that animates in real time using motion-tracking software. They exploded in popularity around 2020. They often livestream video games and other activities.",
  "An iconic Vocaloid song about a spoiled princess who sees herself as the center of the world. Released in 2008 by ryo(supercell) and in the Vocaloid Hall of Myths (songs exceeding 10 million on NND). Listen at youtube.com/watch?v=EuJ6UR_pD5s.",
  "A pivotal Vocaloid producer and musician who considered to be a pioneer in the industry. He passed away from heart failure in 2019. Notable songs include Rolling Girl, World’s End Dancehall and Two-Faced Lovers.",
  "A song about breaking up with an ex. Released in 2009 by JimmyThumb-P feat. Hatsune Miku and Megurine Luka. Listen at youtube.com/watch?v=9pQR4a5sisE.",
  "A now-defunct system of on-screen YouTube notes and comments that appear throughout the duration of a YouTube video.",
  "An official collaboration between Pokémon and Hatsune Miku involving music and artwork. Popular Vocaloid-P such as Giga, DECO*27, and Jin were commissioned to create eighteen Pokémon-themed songs with Hatsune Miku. Illustrators were also commissioned to create designs imagining Hatsune Miku as each Pokémon type trainer (e.g. water type, ghost type, etc.).",
];

//assigns names + descs into 'entries' array
for (let i = 0; i < entryName.length; i++){
  entries[i] = new entry(i+1, entryName[i], entryDesc[i]);
}



var entryCounter = 0;
const sidebarEntries = []; //entries added to the sidebar

//GETTING INDEX ENTRIES ONTO THE SIDEBAR FROM THE MAIN TEXT
$('.term').click(function(){
  if (sidebarEntries.length == 0) {
    console.log('true');
    $('.sidebarHead').css({'border-bottom': 'solid', 'border-width': '1.5px'});
  }

  var classList = $(this).attr('class').split(/\s+/);
  var glossNum = classList[1];
  var posInArray = classList[1] - 1;

  var textNum = classList[2];

  //prints into sidebar
  $('.sidebarEntries').append(
    '<div class="sidebarEntry">'+
      '<div class="entryNum">'+ textNum +'</div>'+
      '<div class="entryName">'+ entries[posInArray].name +'</div>'+
      '<div class="entryX">'+ String.fromCharCode(215) +'</div>'+
      '<div class="entryDesc">'+ entries[posInArray].desc +'</div>'+
    '</div>'
  );

  if ($('.sidebarLeft').hasClass('hideDisplay')) {
    $('.sidebarLeft').removeClass('hideDisplay');
    $('.hidePlaylist').text('hide playlist');
    $('.pageContent').removeClass('smallPadding').addClass('smallPadding');
    playlistCounter = 0;
  }

  //adds entry to sidebar entry array
  sidebarEntries[entryCounter] = new entry(entries[posInArray].number, entries[posInArray].name, entries[posInArray].desc);
  entryCounter++;
  console.log(sidebarEntries);

  $('.sidebarEntries').scrollTop(function() { return this.scrollHeight; });

});



// push text# to .mention in array - for glossary
$('.term').each(function(){
  var classList = $(this).attr('class').split(/\s+/);

  var glossNum = classList[1];
  var posInArray = classList[1] - 1;

  var textNum = classList[2];

  entries[posInArray].mention.push(textNum);
  // console.log(entries[posInArray]);
  //somehow this worked....
});



//populate glossary with entries
for (let i = 0; i<entries.length; i++){

  $('<div></div>').appendTo($('.footerContent')).addClass('footerEntry');

  $('<div></div>').appendTo( $('.footerContent').children('.footerEntry').last() ).addClass('footerName');
  $('.footerContent').children('.footerEntry').last().children('.footerName').append(entries[i].name);

  $('<div></div>').appendTo( $('.footerContent').children('.footerEntry').last() ).addClass('footerDesc');
  $('.footerContent').children('.footerEntry').last().children('.footerDesc').append(
    entries[i].desc +
    "<br><br>" +
    "Appears at:" + '&nbsp;' + '&nbsp;'
  )

  for (let m = 0; m<entries[i].mention.length; m++) {
    $('.footerContent').children('.footerEntry').last().children('.footerDesc').append(
      '<span class="textNumMention">'+ entries[i].mention[m] + '&nbsp;' + '&nbsp;' + '</span>'
    );
  }
  //somehow this worked x2
}


//expand + delete sidebar entries
$('.sidebarLeft').on('click', '.sidebarEntry', function(){
  $(this).find('.entryDesc').slideToggle();
});

$('.sidebarLeft').on('click', '.sidebarEntry .entryX', function(){
  $(this).parent().remove();
});




//////////////////////////////// LANDING NAV ////////////////////////////////

// .position().top --> distance of element from top of page (static num)
// .scrollTop() --> pos of top of element from viewport (increases as u scroll)


// $('.landingContent').scrollTop() --> essentially the doc scrollY within the landing, which is an overflow parent element that is itself fixed on the page


function recenter () {

  centerNav();
  citPos();
  sublabelPos();
  imgOverlay();
}


var meng = 0;
//nav section appearing
function navAppear (){
  var vh = window.innerHeight;

  if ( ( $('.landingContent').scrollTop() ) > ( $('.landingText').height() + 0.4*vh ) ){
    $('.landingNav').removeClass('hideDisplay');
  } else {
    $('.landingNav').addClass('hideDisplay');
  }

  if (meng == 0 && ( $('.landingContent').scrollTop() ) > ( $('.landingText').height() + 0.4*vh )) {
    meng ++;
    $('.sidebarLeft').removeClass('hideDisplay');
    $('.hidePlaylist').text('hide playlist');
    $('.pageContent').removeClass('smallPadding').addClass('smallPadding');
    playlistCounter = 0;
    recenter();
    setTimeout( function() {
      $('.sidebarEntry').find('.entryDesc').slideToggle();
    }, 1000);
  }
}
setInterval(navAppear, 1);


//center hover boxes on video
function centerNav () {
  $('.navBoxes').css({left:
    ($('.imgBg > .nav').position().left )
    + "px"});
};
centerNav(); //run once on intial page load
$(window).resize(centerNav); //run when window resizes


//nav labels appearing with boxes on hover
for (let i = 0; i < navLabels.length; i++){

  $(navLabels[i]).hover(function(){
    var hama = '.hoverZone' + navLabels[i];
    var hama2 = '.nav' + navLabels[i];

    $(hama).toggleClass('unhideOpacity');
    $(hama2).toggleClass('unhideOpacity');
    $(hama2).toggleClass('highlightedText');
  });
};

//sublabel pos on the left
function sublabelPos () {
  if ($('.sidebarLeft').is(':hidden')){
    $('.sublabel').css('left', ( 50 + (0.05 * window.innerWidth)));
  } else {
    $('.sublabel').css('left', ( $('.sidebarLeft').width() + (0.05 * window.innerWidth)));
  }
};
sublabelPos();
$(window).resize(sublabelPos); //same as above


//click nav label --> ....
for (let i = 0; i < navLabels.length; i++){
  $(navLabels[i]).click(function(){
    if (onPage == 0) { //to prevent retriggering when on the page
      onPage = 1;

      $('.landing').addClass('hideDisplay');

      var vid = $('.imgBg').find(navLabels[i]);
      vid [0].play();

      $('.imgBg > .nav').addClass('hideDisplay');
      $('.imgBg').find(navLabels[i]).removeClass('hideDisplay');

      //load page after video plays a bit
      setTimeout(function() {
        $('.pages').removeClass('hideDisplay');
        $('.pages').find(navLabels[i]).removeClass('hideDisplay');
        citPos();
        $('.page').scrollTop(0, 0);
      }, 2200);

      //disable home button until page loads
      $('.home').css("pointer-events","none");
      setTimeout(function() {
        $(".home").css("pointer-events","auto");
      }, 2200);

      //reset nav vid
      var vidNav = $('.imgBg > .nav');
      vidNav [0].currentTime = 0.001; // somehow i need this

    }; //if statement
  }); //click
} //for loop



//////////////////////////////// PAGES ////////////////////////////////


function scrollOpacity() {
  if ($('.pages').hasClass('hideDisplay')) {
    $('.imgBg').removeClass('fadeOut');
    $('.imgBg').removeClass('hideOpacity');

  }
  else {
    setTimeout(function() {
      $('.imgBg').addClass('fadeOut');
      $('.imgBg').addClass('hideOpacity');
    }, 3000);
  }
}

setInterval (scrollOpacity, 1);

function scrollbarPos (){
  $('.page').each(function() {
    var scrollBodyY = $(this).scrollTop();
    // console.log("scrollBodyY: " + scrollBodyY);

    //scroll bar
    var bodyHeight = $(this) [0].scrollHeight;
    var imgScrollPos = scrollBodyY * window.innerHeight / bodyHeight;
    var scrollPercent = scrollBodyY / (bodyHeight - window.innerHeight);

    $(this).children('.pageNav').children('.scroll').css({top: 15 + (scrollBodyY * window.innerHeight / (bodyHeight - window.innerHeight)) - (scrollPercent * 80) + 'px'});
  });

};

setInterval (scrollbarPos, 1);


function scrollText() {
  $('.page:not(.hideDisplay)').find('h2, h1').each(function() {
    var scrollBodyY = $(this).parents('.pageText').offset().top * -1;

    // $(this).parents('.pageText').css('background-color', 'red');

    var thisH2 = $(this);
    var nextH2 = $(this).nextAll('h2:first');


    // console.log('THIS = ' + thisH2.text());
    // console.log($(this).position().top);
    // console.log('NEXT = ' + nextH2.text());
    //
    //
    // console.log('scrollBodyY = ' + scrollBodyY);
    // console.log("------");

    if ( scrollBodyY > (thisH2.position().top - window.innerHeight/2)
      &&  scrollBodyY < (nextH2.position().top - window.innerHeight/2)
      ){
      $(this).parents('.page').find('.scrollText').text(thisH2.text());
      $(this).parents('.page').find('.scrollText').css({top: "-" + ($(this).parents('.page').find('.scrollText').height() / 2) + "px"});
    } else {
      // $(this).parents('.page').find('.scrollText').text(nextH2.text());
    }
    //console.log($('.scrollText').height());
  });

}

// scrollText();
setInterval (scrollText, 1);




//citation alignment with place in text
function citPos () {
  $('.pageCit').find('.cit').each(function(){
    var classList = $(this).attr('class').split(/\s+/);
    var citClass = classList[1];
    var hama = '.cit.' + citClass;

    var hama2 = $(this).parent('.pageCit').siblings('.pageContent').children('.pageText').find(hama).position().top;
    // console.log(hama2);
    $(this).css('top', hama2 + 'px');
  });
}
citPos();
$(window).resize(citPos);


//////////////////////////////// IMG OVERLAY ////////////////////////////////

function imgOverlay () {

  //img appearing
  $('.imgContainer').each(function(){
    //img positioning
    $(this).children('img, video').css({top: (window.innerHeight / 2 -  $(this).children('img, video').height() / 2) + "px"});

    $(this).children('img, video').css({left: ($('.main').width() / 2 -  $(this).children('img, video').width() / 2) + $('.sidebarLeft').width() + "px"});

    if ($('.sidebarLeft').hasClass('hideDisplay')) {
      $(this).children('img, video').css({left: ($('.main').width() / 2 -  $(this).children('img, video').width() / 2) + 0 + "px"});
    }

    //img appearing
    if (
      ( $(this).offset().top - 200) > $(window).scrollTop()
      && $(window).scrollTop() > ( $(this).offset().top - window.innerHeight - 0 )
      ){

      $(this).children('img, .imgCaption, video').css({display: 'inline-block'});
      $(this).children('video').trigger('play');

    } else {
      $(this).children('img, .imgCaption, video').css({display: 'none'});
      $(this).children('video').trigger('pause');
    }
  });

}
setInterval(imgOverlay, 1);




//////////////////////////////// BUTTONS ////////////////////////////////


$('.mute').click(function(){
  if( $('video').prop('muted') ) {
    $("video").prop('muted', false);
    $('.mute').text('mute all');
  } else {
    $("video").prop('muted', true);
    $('.mute').text('unmute all');
  }
});

$('.restart').click(function(){
  var video = $(this).parent().siblings('video');

  video [0].currentTime = 0;
});


$('.home').click(function(){
  onPage = 0;

  var vid = $('.imgBg > .nav');
  vid [0].play();

  $('.pages').addClass('hideDisplay');
  $('.pages').children().addClass('hideDisplay');

  $('.imgBg').find('.nav').removeClass('hideDisplay');
  $('.imgBg').find('.page').addClass('hideDisplay');


  setTimeout(
    function() {
      $('.landing').removeClass('hideDisplay');
      centerNav();
    }, 2200
  );

  var vidTwo = $('.imgBg > .page');
  for (let i = 0; i < vidTwo.length; i++){
    vidTwo [i].currentTime = 0;
  }
});


$('.play').click(function(){
  $('.entryDesc').slideDown();
});

$('.stop').click(function(){
  $('.entryDesc').slideUp();
});

$('.clear').click(function() {
  sidebarEntries.length = 0;
  $('.sidebarEntries').empty();
  $('.sidebarHead').css('border-bottom', 'none');
});


// GLOBAL: var playlistCounter = 0;
$('.hidePlaylist').click(function () {
  $('.sidebarLeft').toggleClass('hideDisplay');

  if (playlistCounter == 0) {
    //playlist is hidden
    $('.hidePlaylist').text('show playlist');
    $('.pageContent').removeClass('smallPadding');
    playlistCounter = 1;

  }
  else {
    //playlist is showing
    $('.hidePlaylist').text('hide playlist');
    $('.pageContent').removeClass('smallPadding').addClass('smallPadding');
    playlistCounter = 0;

  }

  recenter();
});


$('.glossary').click(function(){
  onPage = 1;


  ///////RESET EVERYTHING///////

  //hide all other pages
  for (let i = 0; i < navLabels.length; i++){
    $('.pages').find(navLabels[i]).removeClass('hideDisplay').addClass('hideDisplay');
  }

  //hide nav page video
  $('.imgBg > .nav').addClass('hideDisplay');

  //reset all other pages videos
  var vid = $('.imgBg > .page');
  for (let i = 0; i < vid.length; i++){
    $('.imgBg').find(navLabels[i]).removeClass('hideDisplay').addClass('hideDisplay');
    vid [i].currentTime = 0;
  }

  //reset nav vid
  var vidNav = $('.imgBg > .nav');
  vidNav [0].currentTime = 0.001; // somehow i need this


  ////////TRIGGER FOOTER///////
  $('.landing').removeClass('hideDisplay').addClass('hideDisplay');
  $('.pages').removeClass('hideDisplay');

  // var vidTwo = $('.imgBg').find('.footer');
  // vidTwo [0].play();

  //show footer page
  // $('.imgBg').find('.footer').removeClass('hideDisplay');

  $('.pages').find('.footer').removeClass('hideDisplay');
  citPos();
  $('.page').scrollTop(0, 0);
});


$('.save').click(function(){

  var HAMAWAM = "From the multimedia degree project BECOMING HATSUNE MIKU. Access at christinesworld.github.io/degreeproject." + "\n" + "\n" + "Hatsune Miku" + "\n" + "The most popular Vocaloid character. She is marketed as a 16-year-old virtual idol and is often known for her iconic long blue twintails. She is also known by her code-name “CV01.”" + "\n" + "\n";
  for (let i=0; i < sidebarEntries.length; i++){
    HAMAWAM +=
    "\n" +
    sidebarEntries[i].name + "\n" +
    sidebarEntries[i].desc + "\n" + "\n";
  }
  console.log(HAMAWAM);

  $(location).attr('href', 'mailto:?subject='
    + encodeURIComponent("My Miku Glossary")
    + "&body="
    + encodeURIComponent(HAMAWAM)
  );

});

}); //end of everything
